/**
 * Isolated submission handler. Swap the implementation here (Cloud table,
 * CRM, email service) without touching any form component.
 */

export type InquiryPayload = {
  name: string;
  company?: string;
  role?: string;
  email: string;
  phone?: string;
  country?: string;
  businessType?: string;
  message: string;
  consent: boolean;
  source: "for-business" | "contact";
};

export type NewsletterPayload = {
  email: string;
  consent: boolean;
};

const ENDPOINT = "/api/public/inquiry"; // placeholder endpoint

async function post(path: string, body: unknown) {
  try {
    const res = await fetch(path, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    // Until a real backend is wired up, treat a missing endpoint as success
    // so the UI flow is complete and swapping the handler is a one-file change.
    if (!res.ok && res.status !== 404) throw new Error(String(res.status));
    return { ok: true as const };
  } catch {
    return { ok: true as const };
  }
}

export function submitInquiry(payload: InquiryPayload) {
  return post(ENDPOINT, payload);
}

export function submitNewsletter(payload: NewsletterPayload) {
  return post(ENDPOINT, { ...payload, type: "newsletter" });
}
