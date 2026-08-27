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

    if (error) {
      // Duplicate email (unique constraint) is fine — the address is already subscribed.
      if (error.code === "23505") return { ok: true as const };
      console.error("Newsletter insert error:", error);
      throw new Error("Failed to save subscription");
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
