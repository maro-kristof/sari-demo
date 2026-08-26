import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import {
  getProduct,
  getProductNeighbours,
  products,
  PASTEURISED_NOTE,
} from "@/data/products";
import { productPage } from "@/content/site";
import { absoluteUrl, breadcrumbLd, imageObjectLd } from "@/lib/seo";
import { OptimizedImage, imageEntry } from "@/components/OptimizedImage";
import { Container, Eyebrow } from "@/components/Section";
import { HandwrittenText } from "@/components/HandwrittenText";
import { SpecTable } from "@/components/SpecTable";
import { Reveal } from "@/components/Reveal";
import { BenefitIcon } from "@/components/BenefitIcon";
import sheetWhite from "@/assets/tasting-White.pdf.asset.json";
import sheetRose from "@/assets/tasting-Rose.pdf.asset.json";
import sheetRed from "@/assets/tasting-Red.pdf.asset.json";

const sheetUrls: Record<string, string> = {
  white: sheetWhite.url,
  rose: sheetRose.url,
  red: sheetRed.url,
};

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Unavailable — Sari" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const p = loaderData.product;
    const title = `${p.name} — non alcoholic sparkling | Sari`;
    const url = absoluteUrl(`/products/${params.slug}`);
    const image = absoluteUrl(p.sceneImage);
    return {
      meta: [
        { title },
        { name: "description", content: p.metaDescription },
        { property: "og:title", content: title },
        { property: "og:description", content: p.metaDescription },
        { property: "og:type", content: "product" },
        { property: "og:url", content: url },
        { property: "og:image", content: image },
        { name: "twitter:image", content: image },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: p.name,
            description: p.metaDescription,
            url,
            image: [
              imageObjectLd(p.bottleImage, p.bottleAlt, imageEntry(p.bottleImage), p.bottleDesc),
              imageObjectLd(p.sceneImage, p.sceneAlt, imageEntry(p.sceneImage), p.sceneDesc),
              ...p.gallery.map((g) =>
                imageObjectLd(g.src, g.alt, imageEntry(g.src), g.desc),
              ),
            ],
            sku: `sari-${p.slug}`,
            brand: { "@type": "Brand", name: "Sari" },
            manufacturer: {
              "@type": "Organization",
              name: "Tajna Vineyards & Winery",
            },
            category: "Non alcoholic sparkling drink",
            additionalProperty: p.spec.map((row) => ({
              "@type": "PropertyValue",
              name: row.label,
              value: row.value,
            })),
            offers: {
              "@type": "Offer",
              url: productPage.buyUrl,
              availability: "https://schema.org/InStock",
              priceCurrency: "EUR",
              seller: { "@type": "Organization", name: "Vino Tajna" },
            },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbLd([
              { name: "Home", path: "/" },
              { name: "Products", path: "/products" },
              { name: p.name, path: `/products/${params.slug}` },
            ]),
          ),
        },
      ],
    };
  },
  component: ProductPage,
});

function Block({
  label,
  children,
  accent,
}: {
  label: string;
  children: React.ReactNode;
  accent: string;
}) {
  return (
    <Reveal className="border-t pt-8">
      <Eyebrow className="mb-4" style={{ color: accent }}>
        {label}
      </Eyebrow>
      {children}
    </Reveal>
  );
}

function ProductPage() {
  const { product } = Route.useLoaderData();
  const { prev, next } = getProductNeighbours(product.slug);
  const accent = product.accentVar;

  return (
    <div className="bg-cream">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col lg:flex-row">
        {/* Bottle */}
        <div className="bg-ink lg:sticky lg:top-0 lg:h-dvh lg:w-1/2">
          <div className="flex h-[60vh] items-center justify-center px-8 pt-24 pb-10 lg:h-full lg:pt-28">
            <OptimizedImage
              src={product.bottleImage}
              alt={product.bottleAlt}
              priority
              sizes="(min-width: 1024px) 30vw, 80vw"
              className="h-full w-auto max-w-full object-contain"
            />
          </div>
        </div>

        {/* Content */}
        <div className="w-full px-6 py-16 md:px-12 lg:w-1/2 lg:py-28">
          <div className="max-w-[34em]">
            <HandwrittenText as="h1" className="text-5xl md:text-7xl">
              {product.name}
            </HandwrittenText>
            <p className="mt-6 text-lg text-muted-foreground">
              {product.tagline}
            </p>

            <ul className="mt-8 flex flex-wrap gap-2">
              {product.descriptors.map((d: string) => (
                <li
                  key={d}
                  className="rounded-full border px-4 py-1 text-sm tracking-wide"
                  style={{ borderColor: accent }}
                >
                  {d}
                </li>
              ))}
            </ul>

            <Reveal className="mt-10">
              <a
                href={productPage.buyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-ink px-8 py-3.5 text-sm font-medium tracking-wide text-cream transition-colors hover:bg-ink/85 focus-visible:outline-offset-4"
              >
                {productPage.buyCta}
              </a>
            </Reveal>

            {product.gallery.length > 0 && (
              <Reveal className="mt-12 grid grid-cols-2 gap-3">
                {product.gallery.map((img) => (
                  <figure key={img.src} className="overflow-hidden">
                    <OptimizedImage
                      src={img.src}
                      alt={img.alt}
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="aspect-[3/4] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                    />
                  </figure>
                ))}
              </Reveal>
            )}

            <div className="mt-16 space-y-14">
              <Block label={productPage.tastingLabel} accent={accent}>
                <p>{product.tastingNote}</p>
              </Block>

              <Block label={productPage.specLabel} accent={accent}>
                <SpecTable rows={product.spec} accent={accent} />
              </Block>

              <Block label={productPage.ingredientsLabel} accent={accent}>
                <p>{product.ingredients}</p>
                <p className="mt-3 text-sm text-muted-foreground">
                  {PASTEURISED_NOTE}
                </p>
              </Block>

              <Block label={productPage.pairingLabel} accent={accent}>
                <p className="text-lg">{product.pairing.join(" · ")}</p>
              </Block>

              <Block label={productPage.occasionLabel} accent={accent}>
                <p className="text-lg">{product.occasion.join(" · ")}</p>
              </Block>

              <Block label={productPage.servingLabel} accent={accent}>
                <p>{product.serving}</p>
                <p className="mt-3 text-muted-foreground">{product.storage}</p>
              </Block>

              <Reveal>
                <div className="border p-6" style={{ borderColor: accent }}>
                  <Eyebrow className="mb-6" style={{ color: accent }}>
                    {productPage.benefitsLabel}
                  </Eyebrow>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3">
                    {productPage.benefits.map((label, i) => (
                      <li key={label}>
                        <BenefitIcon label={label} delay={i * 60} />
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Block label={productPage.sheetLabel} accent={accent}>
                <p>{productPage.sheetBody}</p>
                <a
                  href={sheetUrls[product.slug]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="eyebrow mt-5 inline-block border-b pb-1"
                  style={{ borderColor: accent, color: accent }}
                >
                  {productPage.sheetCta}
                </a>
              </Block>
            </div>

            <nav
              aria-label="Product navigation"
              className="mt-20 grid grid-cols-2 gap-6 border-t pt-8"
            >
              {prev && (
                <Link
                  to="/products/$slug"
                  params={{ slug: prev.slug }}
                  className="group"
                >
                  <span className="eyebrow text-gold">{productPage.prev}</span>
                  <HandwrittenText className="mt-2 block text-3xl">
                    {prev.name}
                  </HandwrittenText>
                </Link>
              )}
              {next && (
                <Link
                  to="/products/$slug"
                  params={{ slug: next.slug }}
                  className="group text-right"
                >
                  <span className="eyebrow text-gold">{productPage.next}</span>
                  <HandwrittenText className="mt-2 block text-3xl">
                    {next.name}
                  </HandwrittenText>
                </Link>
              )}
            </nav>

            <p className="mt-10 text-sm text-muted-foreground">
              <Link to="/products" className="border-b border-gold pb-0.5">
                All {products.length} expressions
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
