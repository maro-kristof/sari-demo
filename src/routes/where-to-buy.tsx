import { createFileRoute, Link } from "@tanstack/react-router";
import { whereToBuy, brand } from "@/content/site";
import { stockists } from "@/data/stockists";
import { Container, SectionCream, SectionBlack, Eyebrow } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { HandwrittenText } from "@/components/HandwrittenText";

export const Route = createFileRoute("/where-to-buy")({
  head: () => ({
    meta: [
      { title: whereToBuy.metaTitle },
      { name: "description", content: whereToBuy.metaDescription },
      { property: "og:title", content: whereToBuy.metaTitle },
      { property: "og:description", content: whereToBuy.metaDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/where-to-buy" },
    ],
    links: [{ rel: "canonical", href: "/where-to-buy" }],
  }),
  component: WhereToBuyPage,
});

function WhereToBuyPage() {
  return (
    <>
      <SectionCream className="pt-32 md:pt-40">
        <Container size="wide">
          <Reveal>
            <Eyebrow>{whereToBuy.eyebrow}</Eyebrow>
            <h1 className="display-xl mt-6 text-balance">{whereToBuy.title}</h1>
            <p className="measure mt-8 text-xl text-muted-foreground">
              {whereToBuy.intro}
            </p>
          </Reveal>

          <ul className="mt-16 border-t">
            {stockists.map((s, i) => (
              <Reveal
                as="li"
                key={`${s.name}-${s.city}`}
                delay={i * 50}
                className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 border-b py-6 sm:grid-cols-[1.4fr_1fr_auto]"
              >
                <span className="text-xl">
                  {s.url ? (
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      className="border-b border-gold pb-0.5"
                    >
                      {s.name}
                    </a>
                  ) : (
                    s.name
                  )}
                </span>
                <span className="text-muted-foreground">
                  {s.city}{s.country ? `, ${s.country}` : ""}
                </span>
                <span className="eyebrow shrink-0 text-gold">{s.type}</span>
              </Reveal>
            ))}
          </ul>
        </Container>
      </SectionCream>

      <SectionBlack>
        <Container size="narrow" className="text-center">
          <Reveal>
            <HandwrittenText as="h2" className="block text-4xl md:text-5xl">
              {whereToBuy.fallbackTitle}
            </HandwrittenText>
            <p className="mx-auto mt-6 max-w-[40ch] text-cream/70">
              {whereToBuy.fallbackBody}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
              <Link
                to="/contact"
                className="eyebrow inline-flex min-h-11 items-center border border-cream/60 px-8 py-3 text-cream transition-colors hover:bg-cream hover:text-ink"
              >
                {whereToBuy.fallbackCta}
              </Link>
              <a
                href={`mailto:${brand.email}`}
                className="text-cream/70 transition-colors hover:text-cream"
              >
                {brand.email}
              </a>
            </div>
          </Reveal>
        </Container>
      </SectionBlack>
    </>
  );
}
