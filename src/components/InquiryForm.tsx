import { useId, useState } from "react";
import { form as t, brand } from "@/content/site";
import { submitInquiry } from "@/lib/submit";
import { cn } from "@/lib/utils";

type FieldKey =
  | "name"
  | "company"
  | "email"
  | "message"
  | "consent";

type Errors = { [K in FieldKey]?: string | undefined };

const fieldClass =
  "mt-2 w-full border-b bg-transparent pb-2 text-[17px] outline-none transition-colors focus:border-gold";

function Field({
  id,
  label,
  children,
  error,
  optional,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
  error?: string | undefined;
  optional?: boolean | undefined;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm tracking-wide text-muted-foreground">
        {label}
        {optional && <span className="ml-1 opacity-60">({t.optional})</span>}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-2 text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

export function InquiryForm({
  variant = "full",
  source = "for-business",
}: {
  variant?: "full" | "short";
  source?: "for-business" | "contact";
}) {
  const uid = useId();
  const [errors, setErrors] = useState<Errors>({});
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  if (state === "sent") {
    return (
      <div
        role="status"
        className="border border-gold/60 bg-paper p-8"
      >
        <p className="display-md">{t.successTitle}</p>
        <p className="mt-3 measure text-muted-foreground">{t.successBody}</p>
      </div>
    );
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => String(fd.get(k) ?? "").trim();

    const next: Errors = {};
    if (!get("name")) next.name = t.required;
    if (!get("email")) next.email = t.required;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(get("email")))
      next.email = t.invalidEmail;
    if (!get("message")) next.message = t.required;
    if (!fd.get("consent")) next.consent = t.consentRequired;
    if (variant === "full" && !get("company")) next.company = t.required;

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setState("sending");
    const res = await submitInquiry({
      name: get("name"),
      company: get("company"),
      role: get("role"),
      email: get("email"),
      phone: get("phone"),
      country: get("country"),
      businessType: get("businessType"),
      message: get("message"),
      consent: true,
      source,
    });
    setState(res.ok ? "sent" : "error");
  }

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <Field id={`${uid}-name`} label={t.fields.name} error={errors.name}>
          <input
            id={`${uid}-name`}
            name="name"
            autoComplete="name"
            className={fieldClass}
          />
        </Field>
        <Field
          id={`${uid}-email`}
          label={t.fields.email}
          error={errors.email}
        >
          <input
            id={`${uid}-email`}
            name="email"
            type="email"
            autoComplete="email"
            className={fieldClass}
          />
        </Field>

        {variant === "full" && (
          <>
            <Field
              id={`${uid}-company`}
              label={t.fields.company}
              error={errors.company}
            >
              <input
                id={`${uid}-company`}
                name="company"
                autoComplete="organization"
                className={fieldClass}
              />
            </Field>
            <Field id={`${uid}-role`} label={t.fields.role} optional>
              <input
                id={`${uid}-role`}
                name="role"
                autoComplete="organization-title"
                className={fieldClass}
              />
            </Field>
            <Field id={`${uid}-phone`} label={t.fields.phone} optional>
              <input
                id={`${uid}-phone`}
                name="phone"
                type="tel"
                autoComplete="tel"
                className={fieldClass}
              />
            </Field>
            <Field id={`${uid}-country`} label={t.fields.country} optional>
              <input
                id={`${uid}-country`}
                name="country"
                autoComplete="country-name"
                className={fieldClass}
              />
            </Field>
            <Field
              id={`${uid}-businessType`}
              label={t.fields.businessType}
              optional
            >
              <select
                id={`${uid}-businessType`}
                name="businessType"
                defaultValue=""
                className={cn(fieldClass, "appearance-none")}
              >
                <option value="">—</option>
                {t.businessTypes.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </Field>
          </>
        )}
      </div>

      <Field
        id={`${uid}-message`}
        label={t.fields.message}
        error={errors.message}
      >
        <textarea
          id={`${uid}-message`}
          name="message"
          rows={4}
          className={cn(fieldClass, "resize-y")}
        />
      </Field>

      <div>
        <div className="flex items-start gap-3">
          <input
            id={`${uid}-consent`}
            name="consent"
            type="checkbox"
            className="mt-1.5 size-4 shrink-0 accent-[var(--gold)]"
          />
          <label
            htmlFor={`${uid}-consent`}
            className="text-sm text-muted-foreground"
          >
            {t.consent}
          </label>
        </div>
        {errors.consent && (
          <p role="alert" className="mt-2 text-sm text-destructive">
            {errors.consent}
          </p>
        )}
      </div>

      {state === "error" && (
        <p role="alert" className="text-sm text-destructive">
          {t.errorTitle} {t.errorBody}{" "}
          <a className="border-b" href={`mailto:${brand.email}`}>
            {brand.email}
          </a>
        </p>
      )}

      <button
        type="submit"
        disabled={state === "sending"}
        className="eyebrow min-h-11 border border-ink px-8 py-3 text-ink transition-colors hover:bg-ink hover:text-cream disabled:opacity-60"
      >
        {state === "sending" ? t.submitting : t.submit}
      </button>
    </form>
  );
}
