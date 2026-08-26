import { createFileRoute, Link } from "@tanstack/react-router";
import { forBusiness, images } from "@/content/site";
import { products } from "@/data/products";
import { Container, SectionBlack, SectionCream, Eyebrow } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { SpecTable } from "@/components/SpecTable";
import { InquiryForm } from "@/components/InquiryForm";
import sheetWhite from "@/assets/tasting-White.pdf.asset.json";
import sheetRose from "@/assets/tasting-Rose.pdf.asset.json";
import sheetRed from "@/assets/tasting-Red.pdf.asset.json";
import { absoluteUrl, breadcrumbLd } from "@/lib/seo";

const sheetUrls: Record<string, string> = {
  white: sheetWhite.url,
  rose: sheetRose.url,
  red: sheetRed.url,
};

export const Route = createFileRoute("/for-business")({
  head: () => ({
    meta: [
      { title: forBusiness.metaTitle },
      { name: "description", content: forBusiness.metaDescription },
      { property: "og:title", content: forBusiness.metaTitle },
      { property: "og:description", content: forBusiness.metaDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/for-business") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/for-business") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "For business", path: "/for-business" },
          ]),
        ),
      },
    ],
  }),
  component: ForBusinessPage,
});

function ForBusinessPage() {
  return (
    <>
      <SectionBlack className="pt-32 md:pt-40">
        <Container size="wide">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <Eyebrow>{forBusiness.eyebrow}</Eyebrow>
              <h1 className="display-xl mt-6 text-balance">
                {forBusiness.title}
              </h1>
              <p className="measure mt-8 text-xl text-cream/70">
                {forBusiness.lead}
              </p>
            </Reveal>
            <Reveal delay={100}>
              <img
                src={images.cases}
                alt="Three bottles of Sari on a sunlit table with glasses and fresh vegetables"
                className="aspect-4/3 w-full object-cover"
              />
            </Reveal>
          </div>
        </Container>
      </SectionBlack>

      <SectionCream>
        <Container size="wide">
          <Reveal>
            <Eyebrow>{forBusiness.reasonsLabel}</Eyebrow>
          </Reveal>
          <ol className="mt-12 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {forBusiness.reasons.map((r, i) => (
              <Reveal as="li" key={r.title} delay={i * 70} className="border-t pt-6">
                <span className="eyebrow text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-4 text-xl">{r.title}</h2>
                <p className="mt-3 text-muted-foreground">{r.body}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </SectionCream>

      <SectionCream paper>
        <Container size="wide">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <Eyebrow>{forBusiness.logisticsLabel}</Eyebrow>
              <div className="mt-8">
                <SpecTable rows={forBusiness.logistics} />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <Eyebrow>{forBusiness.sheetsLabel}</Eyebrow>
              <p className="measure mt-6 text-muted-foreground">
                {forBusiness.sheetsBody}
              </p>
              <ul className="mt-8 border-t">
                {products.map((p) => (
                  <li
                    key={p.slug}
                    className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b py-4"
                  >
                    <span className="truncate text-lg">{p.name}</span>
                    <a
                      href={sheetUrls[p.slug]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="eyebrow shrink-0 border-b border-gold pb-1 text-gold"
                    >
                      {forBusiness.sheetCta}
                    </a>
                  </li>
                ))}
              </ul>

            </Reveal>
          </div>
        </Container>
      </SectionCream>

      <SectionCream id="inquiry">
        <Container size="narrow">
          <Reveal>
            <Eyebrow>{forBusiness.formLabel}</Eyebrow>
            <p className="display-md mt-5 text-balance">
              {forBusiness.formIntro}
            </p>
          </Reveal>
          <div className="mt-12">
            <InquiryForm variant="full" source="for-business" />
          </div>
        </Container>
      </SectionCream>
    </>
  );
}
