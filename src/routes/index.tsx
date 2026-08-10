import { createFileRoute, Link } from "@tanstack/react-router";
import { home, images, brand } from "@/content/site";
import { products } from "@/data/products";
import { Container, SectionBlack, SectionCream, Eyebrow } from "@/components/Section";
import { HandwrittenText } from "@/components/HandwrittenText";
import { Reveal } from "@/components/Reveal";
import { ProductCard } from "@/components/ProductCard";
import { BenefitIcon } from "@/components/BenefitIcon";
import { PullQuote } from "@/components/PullQuote";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sari — wine culture without the alcohol" },
      {
        name: "description",
        content:
          "Sari is a premium non alcoholic sparkling alternative to wine, made by winemakers from botanicals, fruit and verjuice. White, Rosé and Red.",
      },
      { property: "og:title", content: "Sari — wine culture without the alcohol" },
      {
        property: "og:description",
        content:
          "A premium non alcoholic sparkling alternative to wine, made by winemakers in Slovakia.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-dvh min-h-[600px] w-full bg-ink">
        <img
          src={images.hero}
          alt={home.hero.imageAlt}
          className="absolute inset-0 size-full object-cover opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/20 to-ink/70" />
        <div className="relative flex h-full items-end pb-20 md:pb-28">
          <Container size="wide">
            <HandwrittenText
              as="h1"
              className="block max-w-[14ch] text-5xl text-cream md:text-7xl lg:text-8xl"
            >
              {home.hero.tagline}
            </HandwrittenText>
            <div className="mt-10 flex items-center gap-8">
              <Link
                to="/products"
                className="eyebrow inline-flex min-h-11 items-center border border-cream/70 px-8 py-3 text-cream transition-colors hover:bg-cream hover:text-ink"
              >
                {home.hero.cta}
              </Link>
              <span className="eyebrow hidden text-cream/50 sm:inline">
                {home.hero.scrollCue}
              </span>
            </div>
          </Container>
        </div>
      </section>

      {/* Intro */}
      <SectionCream>
        <Container size="narrow">
          <Reveal>
            <p className="display-lg text-balance text-center">{home.intro}</p>
          </Reveal>
        </Container>
      </SectionCream>

      {/* Products */}
      <SectionCream paper>
        <Container size="wide">
          <Reveal>
            <Eyebrow>{home.productsSection.eyebrow}</Eyebrow>
          </Reveal>
          <div className="mt-12 grid gap-12 md:grid-cols-3 md:gap-8">
            {products.map((p, i) => (
              <ProductCard key={p.slug} product={p} delay={i * 80} />
            ))}
          </div>
        </Container>
      </SectionCream>

      {/* The shift */}
      <SectionBlack>
        <Container size="wide">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <Eyebrow>{home.shift.eyebrow}</Eyebrow>
              <h2 className="display-lg mt-6 text-balance">
                {home.shift.headline}
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <img
                src={images.tableDinner}
                alt={home.shift.imageAlt}
                loading="lazy"
                className="aspect-4/3 w-full object-cover"
              />
            </Reveal>
          </div>
          <div className="mt-16 grid gap-10 border-t border-cream/15 pt-12 md:grid-cols-3">
            {home.shift.blocks.map((b, i) => (
              <Reveal key={b.title} delay={i * 80}>
                <h3 className="text-xl">{b.title}</h3>
                <p className="mt-3 text-cream/70">{b.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </SectionBlack>

      {/* New generation */}
      <SectionCream>
        <Container size="wide">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <img
                src={images.portraitGlasses}
                alt={home.generation.imageAlt}
                loading="lazy"
                className="aspect-3/4 w-full object-cover"
              />
            </Reveal>
            <Reveal delay={100}>
              <Eyebrow>{home.generation.eyebrow}</Eyebrow>
              <HandwrittenText as="h2" className="mt-6 block text-4xl md:text-5xl">
                {home.generation.headline}
              </HandwrittenText>
              <div className="measure mt-8 space-y-5 text-muted-foreground">
                {home.generation.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </SectionCream>

      {/* Benefits */}
      <SectionBlack>
        <Container size="wide">
          <Reveal>
            <Eyebrow className="text-center">{home.benefits.eyebrow}</Eyebrow>
          </Reveal>
          <ul className="mt-14 grid grid-cols-2 gap-x-6 gap-y-14 md:grid-cols-3 lg:grid-cols-6">
            {home.benefits.items.map((label, i) => (
              <li key={label}>
                <BenefitIcon label={label} delay={i * 60} />
              </li>
            ))}
          </ul>
        </Container>
      </SectionBlack>

      {/* Ritual */}
      <SectionCream paper>
        <Container size="wide">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <Reveal>
              <Eyebrow>{home.ritual.eyebrow}</Eyebrow>
              <h2 className="display-lg mt-6 text-balance">
                {home.ritual.headline}
              </h2>
              <p className="measure mt-6 text-muted-foreground">
                {home.ritual.body}
              </p>
              <ul className="mt-10 border-t">
                {home.ritual.items.map((item) => (
                  <li key={item} className="border-b py-4 text-lg">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={100}>
              <img
                src={images.pourRed}
                alt={home.ritual.imageAlt}
                loading="lazy"
                className="aspect-3/4 w-full object-cover"
              />
            </Reveal>
          </div>
        </Container>
      </SectionCream>

      {/* Audience */}
      <SectionCream>
        <Container size="wide">
          <Reveal>
            <Eyebrow>{home.audience.eyebrow}</Eyebrow>
          </Reveal>
          <div className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {home.audience.columns.map((c, i) => (
              <Reveal key={c.title} delay={i * 70} className="border-t pt-6">
                <h3 className="text-xl">{c.title}</h3>
                <p className="mt-3 text-muted-foreground">{c.body}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-20">
            <PullQuote>{home.audience.closing}</PullQuote>
          </div>
        </Container>
      </SectionCream>

      {/* B2B strip */}
      <SectionBlack>
        <Container size="wide">
          <Reveal className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <div>
              <h2 className="display-lg text-balance">
                {home.b2bStrip.headline}
              </h2>
              <p className="measure mt-5 text-cream/70">{home.b2bStrip.body}</p>
            </div>
            <div className="lg:text-right">
              <Link
                to="/for-business"
                className="eyebrow inline-flex min-h-11 items-center border border-cream/60 px-8 py-3 text-cream transition-colors hover:bg-cream hover:text-ink"
              >
                {home.b2bStrip.cta}
              </Link>
              <p className="mt-5 text-sm text-cream/50">{brand.lockup}</p>
            </div>
          </Reveal>
        </Container>
      </SectionBlack>
    </>
  );
}
