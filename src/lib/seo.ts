/** Canonical site origin — what crawlers redirect to and what sitemap.xml advertises. */
export const SITE_URL = "https://sarisparkling.com";

/** Turn a site-relative path or asset URL into an absolute URL for canonical / og tags. */
export function absoluteUrl(path: string): string {
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/** BreadcrumbList JSON-LD from an ordered list of crumbs. */
export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** ImageObject JSON-LD for a known asset (with real dimensions when available). */
export function imageObjectLd(
  src: string,
  caption?: string,
  dimensions?: { w: number; h: number },
  description?: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: absoluteUrl(src),
    url: absoluteUrl(src),
    ...(dimensions ? { width: dimensions.w, height: dimensions.h } : {}),
    ...(caption ? { caption, name: caption } : {}),
    ...(description ? { description } : {}),
  };
}

/** WebPage JSON-LD with primaryImageOfPage. */
export function webPageLd(opts: {
  path: string;
  name: string;
  description: string;
  image?: string;
  imageCaption?: string;
  imageDescription?: string;
  imageDimensions?: { w: number; h: number } | undefined;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": absoluteUrl(opts.path),
    url: absoluteUrl(opts.path),
    name: opts.name,
    description: opts.description,
    ...(opts.image
      ? {
          primaryImageOfPage: imageObjectLd(
            opts.image,
            opts.imageCaption ?? opts.name,
            opts.imageDimensions,
            opts.imageDescription,
          ),
        }
      : {}),
  };
}
