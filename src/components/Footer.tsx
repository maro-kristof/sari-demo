import { Link } from "@tanstack/react-router";
import { brand, footer, nav, images } from "@/content/site";
import { Container } from "./Section";
import { HandwrittenText } from "./HandwrittenText";
import { Newsletter } from "./Newsletter";

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <Container size="wide" className="py-20 md:py-28">
        <Newsletter />

        <div className="mt-20 grid gap-12 border-t border-cream/15 pt-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <img
              src={images.wordmark}
              alt={brand.wordmarkAlt}
              className="h-10 w-auto"
            />
            <HandwrittenText as="p" className="mt-6 block text-2xl text-gold">
              {footer.tagline}
            </HandwrittenText>
            <p className="mt-4 text-sm text-cream/60">{brand.lockup}</p>
          </div>

          <div>
            <p className="eyebrow text-gold">{footer.columnsLabel.explore}</p>
            <ul className="mt-5 space-y-2">
              {nav.links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-cream/80 transition-colors hover:text-cream"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-gold">{footer.columnsLabel.contact}</p>
            <ul className="mt-5 space-y-2 text-cream/80">
              <li>
                <a
                  href={`mailto:${brand.email}`}
                  className="transition-colors hover:text-cream"
                >
                  {brand.email}
                </a>
              </li>
              <li>
                <a
                  href={brand.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-cream"
                >
                  {brand.instagramHandle}
                </a>
              </li>
              <li className="pt-2 text-sm text-cream/60">{brand.address}</li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-gold">{footer.columnsLabel.legal}</p>
            <ul className="mt-5 space-y-2">
              {footer.legalLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-cream/80 transition-colors hover:text-cream"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-14 text-sm text-cream/50">
          © {new Date().getFullYear()} {brand.legalName}. {footer.rights}
        </p>
      </Container>
    </footer>
  );
}
