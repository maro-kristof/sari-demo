import { createFileRoute } from "@tanstack/react-router";
import { productsIndex } from "@/content/site";
import { products } from "@/data/products";
import { Container, SectionCream, Eyebrow } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { ProductCard } from "@/components/ProductCard";
import { absoluteUrl, breadcrumbLd } from "@/lib/seo";

const ogImage = absoluteUrl(products[0]?.sceneImage ?? "/favicon.png");

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: productsIndex.metaTitle },
      { name: "description", content: productsIndex.metaDescription },
      { property: "og:title", content: productsIndex.metaTitle },
      { property: "og:description", content: productsIndex.metaDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/products") },
      { property: "og:image", content: ogImage },
      { name: "twitter:image", content: ogImage },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/products") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
          ]),
        ),
      },
    ],
  }),
  component: ProductsIndex,
});

function ProductsIndex() {
  return (
    <SectionCream className="pt-32 md:pt-40">
      <Container size="wide">
        <Reveal>
          <Eyebrow>{productsIndex.eyebrow}</Eyebrow>
          <h1 className="display-xl mt-6 max-w-[16ch] text-balance">
            {productsIndex.title}
          </h1>
          <p className="measure mt-8 text-muted-foreground">
            {productsIndex.intro}
          </p>
        </Reveal>

        <div className="mt-20 grid gap-14 md:grid-cols-3 md:gap-8">
          {products.map((p, i) => (
            <ProductCard key={p.slug} product={p} delay={i * 80} />
          ))}
        </div>
      </Container>
    </SectionCream>
  );
}
