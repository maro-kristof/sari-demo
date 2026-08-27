import {
  subscribeNewsletter,
  submitInquiryFn,
} from "./submit.functions";

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

export function submitInquiry(payload: InquiryPayload) {
  return submitInquiryFn({ data: payload });
}

export function submitNewsletter(payload: NewsletterPayload) {
  return subscribeNewsletter({
    data: { ...payload, source: "newsletter-footer" },
  });
}
