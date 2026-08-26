import variants from "@/lib/image-variants.json";

type Variant = { url: string; w: number; h: number };
type Entry = { w: number; h: number; variants: Variant[] };

const manifest = variants as Record<string, Entry>;

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  /** Render eagerly with high fetch priority (above-the-fold hero images). */
  priority?: boolean;
  /** sizes attribute for responsive selection, e.g. "(min-width: 1024px) 50vw, 100vw" */
  sizes?: string;
}

/**
 * Renders a <picture> with responsive WebP variants (640/1280/1920w) when the
 * src matches a known CDN asset, with the original image as the fallback.
 * Falls back to a plain <img> for unknown sources.
 */
export function OptimizedImage({ src, alt, priority, sizes, className, ...rest }: OptimizedImageProps) {
  const entry = manifest[src];

  if (!entry) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        {...rest}
      />
    );
  }

  const srcSet = entry.variants.map((v) => `${v.url} ${v.w}w`).join(", ");
  const largest = entry.variants[entry.variants.length - 1];

  return (
    <picture>
      <source type="image/webp" srcSet={srcSet} sizes={sizes ?? "100vw"} />
      <img
        src={src}
        alt={alt}
        width={entry.w}
        height={entry.h}
        className={className}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        {...rest}
      />
    </picture>
  );
}

/** Absolute image dimensions + variants for a known asset URL (for structured data). */
export function imageEntry(src: string): Entry | undefined {
  return manifest[src];
}
