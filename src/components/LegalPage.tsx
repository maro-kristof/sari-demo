import { Container, SectionCream, Eyebrow } from "./Section";
import { Reveal } from "./Reveal";

export type LegalDoc = {
  title: string;
  updated: string;
  sections: { heading: string; body: string }[];
};

export function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <SectionCream className="pt-32 md:pt-40">
      <Container size="narrow">
        <Reveal>
          <Eyebrow>{doc.updated}</Eyebrow>
          <h1 className="display-lg mt-6">{doc.title}</h1>
        </Reveal>
        <div className="mt-14 space-y-12">
          {doc.sections.map((s) => (
            <Reveal key={s.heading} className="border-t pt-6">
              <h2 className="text-xl">{s.heading}</h2>
              <p className="mt-3 text-muted-foreground">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </SectionCream>
  );
}
