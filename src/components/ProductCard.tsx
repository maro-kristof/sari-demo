import { Link } from "@tanstack/react-router";
import { HandwrittenText } from "./HandwrittenText";
import { Reveal } from "./Reveal";
import type { Product } from "@/data/products";
import { productsIndex } from "@/content/site";
import { OptimizedImage } from "./OptimizedImage";

export function ProductCard({
  product,
  delay = 0,
}: {
  product: Product;
  delay?: number;
}) {
  return (
    <Reveal as="article" delay={delay} className="group">
      <Link
        to="/products/$slug"
        params={{ slug: product.slug }}
        className="block"
        aria-label={`${product.name} — ${product.descriptorLine}`}
      >
        <div className="overflow-hidden bg-ink/40">
          <OptimizedImage
            src={product.sceneImage}
            alt={product.sceneAlt}
            sizes="(min-width: 768px) 33vw, 100vw"
            className="aspect-3/4 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-103"
          />
        </div>
        <div className="mt-6">
          <HandwrittenText as="h3" className="text-3xl md:text-4xl">
            {product.name}
          </HandwrittenText>
          <p className="mt-2 text-sm tracking-wide opacity-70">
            {product.descriptorLine}
          </p>
          <span
            className="eyebrow mt-5 inline-block border-b pb-1 text-gold transition-colors"
            style={{ borderColor: product.accentVar }}
          >
            {productsIndex.eyebrow ? "View product" : "View"}
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
