import { useId, useState } from "react";
import { newsletter as t } from "@/content/site";
import { submitNewsletter } from "@/lib/submit";

export function Newsletter() {
  const uid = useId();
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const email = String(fd.get("email") ?? "").trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      setError(t.error);
      return;
    }
    if (!fd.get("consent")) {
      setError(t.consent);
      return;
    }
    setError(null);
    setState("sending");
    const res = await submitNewsletter({ email, consent: true });
    setState(res.ok ? "sent" : "error");
  }

  return (
    <div className="grid gap-10 md:grid-cols-2 md:gap-16">
      <div>
        <p className="eyebrow text-gold">{t.eyebrow}</p>
        <h2 className="display-md mt-5">{t.headline}</h2>
        <p className="measure mt-4 text-cream/70">{t.body}</p>
      </div>

      <div className="self-center">
        {state === "sent" ? (
          <p role="status" className="text-lg text-gold">
            {t.success}
          </p>
        ) : (
          <form noValidate onSubmit={onSubmit} className="space-y-5">
            <label htmlFor={`${uid}-email`} className="sr-only">
              {t.label}
            </label>
            <div className="flex items-end gap-4">
              <input
                id={`${uid}-email`}
                name="email"
                type="email"
                autoComplete="email"
                placeholder={t.placeholder}
                className="w-full border-b border-cream/40 bg-transparent pb-2 text-lg text-cream outline-none transition-colors placeholder:text-cream/40 focus:border-gold"
              />
              <button
                type="submit"
                disabled={state === "sending"}
                className="eyebrow min-h-11 shrink-0 border border-cream/60 px-6 py-3 text-cream transition-colors hover:bg-cream hover:text-ink disabled:opacity-60"
              >
                {t.submit}
              </button>
            </div>
            <div className="flex items-start gap-3">
              <input
                id={`${uid}-consent`}
                name="consent"
                type="checkbox"
                className="mt-1.5 size-4 shrink-0 accent-[var(--gold)]"
              />
              <label
                htmlFor={`${uid}-consent`}
                className="text-sm text-cream/60"
              >
                {t.consent}
              </label>
            </div>
            {error && (
              <p role="alert" className="text-sm text-destructive">
                {error}
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
