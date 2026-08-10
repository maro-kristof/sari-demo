import { createFileRoute } from "@tanstack/react-router";
import { contact, brand } from "@/content/site";
import { Container, SectionCream, Eyebrow } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { InquiryForm } from "@/components/InquiryForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: contact.metaTitle },
      { name: "description", content: contact.metaDescription },
      { property: "og:title", content: contact.metaTitle },
      { property: "og:description", content: contact.metaDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SectionCream className="pt-32 md:pt-40">
      <Container size="wide">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
          <Reveal>
            <Eyebrow>{contact.eyebrow}</Eyebrow>
            <h1 className="display-xl mt-6 text-balance">{contact.title}</h1>
            <p className="measure mt-8 text-xl text-muted-foreground">
              {contact.lead}
            </p>

            <div className="mt-14 border-t pt-6">
              <Eyebrow>{contact.detailsLabel}</Eyebrow>
              <address className="mt-6 space-y-3 not-italic text-lg">
                <p>{brand.legalName}</p>
                <p className="text-muted-foreground">{brand.address}</p>
                <p>
                  <a
                    href={`mailto:${brand.email}`}
                    className="border-b border-gold pb-0.5"
                  >
                    {brand.email}
                  </a>
                </p>
                <p>
                  <a
                    href={brand.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="border-b border-gold pb-0.5"
                  >
                    {brand.instagramHandle}
                  </a>
                </p>
              </address>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <InquiryForm variant="full" source="contact" />
          </Reveal>
        </div>
      </Container>
    </SectionCream>
  );
}
