import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const emailSchema = z
  .string()
  .email()
  .min(1)
  .max(254)
  .transform((v) => v.trim().toLowerCase());

export const subscribeNewsletter = createServerFn({ method: "POST" })
  .inputValidator((data) =>
    z
      .object({
        email: emailSchema,
        consent: z.boolean(),
        source: z.string().max(100).optional(),
      })
      .parse(data),
  )
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("newsletter_subscribers").insert({
      email: data.email,
      consent: data.consent,
      source: data.source ?? "website",
    });

    if (error && error.code !== "23505") {
      // Duplicate email (unique constraint) is fine — the address is already subscribed.
      console.error("Newsletter insert error:", error);
      throw new Error("Failed to save subscription");
    }

    // Sync to Ecomail (non-blocking for the user: log but don't fail the form)
    const apiKey = process.env["ECOMAIL_API_KEY"];
    const listId = process.env["ECOMAIL_LIST_ID"];
    if (apiKey && listId) {
      try {
        const res = await fetch(
          `https://api2.ecomailapp.cz/lists/${listId}/subscribe`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              key: apiKey,
            },
            body: JSON.stringify({
              subscriber_data: {
                email: data.email,
                source: data.source ?? "sarisparkling.com",
              },
              trigger_autoresponders: true,
              update_existing: true,
              resubscribe: true,
            }),
          },
        );
        if (!res.ok) {
          console.error("Ecomail subscribe failed:", res.status, await res.text());
        }
      } catch (e) {
        console.error("Ecomail subscribe error:", e);
      }
    }

    return { ok: true as const };
  });


const inquirySchema = z.object({
  name: z.string().min(1).max(200),
  company: z.string().max(200).optional(),
  role: z.string().max(200).optional(),
  email: emailSchema,
  phone: z.string().max(100).optional(),
  country: z.string().max(100).optional(),
  businessType: z.string().max(100).optional(),
  message: z.string().min(1).max(5000),
  consent: z.boolean(),
  source: z.enum(["for-business", "contact"]),
});

export const submitInquiryFn = createServerFn({ method: "POST" })
  .inputValidator((data) => inquirySchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("inquiries").insert({
      name: data.name,
      company: data.company ?? null,
      role: data.role ?? null,
      email: data.email,
      phone: data.phone ?? null,
      country: data.country ?? null,
      business_type: data.businessType ?? null,
      message: data.message,
      consent: data.consent,
      source: data.source,
    });

    if (error) {
      console.error("Inquiry insert error:", error);
      throw new Error("Failed to send inquiry");
    }

    return { ok: true as const };
  });
