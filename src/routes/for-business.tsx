import { createFileRoute } from "@tanstack/react-router";
import { forBusiness, images } from "@/content/site";
import { products } from "@/data/products";
import { Container, SectionBlack, SectionCream, Eyebrow } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { SpecTable } from "@/components/SpecTable";
import { InquiryForm } from "@/components/InquiryForm";

export const Route = createFileRoute("/for-business")({
  head: () => ({
    meta: [
      { title: forBusiness.metaTitle },
      { name: "description", content: forBusiness.metaDescription },
      { property: "og:title", content: forBusiness.metaTitle },
      { property: "og:description", content: forBusiness.metaDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/for-business" },
    ],
    links: [{ rel: "canonical", href: "/for-business" }],
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
                alt="Cases of Sari stacked at the winery"
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
                      href={`/sheets/sari-${p.slug}.pdf`}
                      download
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
