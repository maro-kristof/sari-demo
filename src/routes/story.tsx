import { createFileRoute } from "@tanstack/react-router";
import { story, images } from "@/content/site";
import { Container, SectionBlack, SectionCream, Eyebrow } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { PullQuote } from "@/components/PullQuote";

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [
      { title: story.metaTitle },
      { name: "description", content: story.metaDescription },
      { property: "og:title", content: story.metaTitle },
      { property: "og:description", content: story.metaDescription },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/story" },
    ],
    links: [{ rel: "canonical", href: "/story" }],
  }),
  component: StoryPage,
});

function StoryPage() {
  return (
    <>
      <SectionCream className="pt-32 md:pt-40">
        <Container size="wide">
          <Reveal>
            <Eyebrow>{story.eyebrow}</Eyebrow>
            <h1 className="display-xl mt-6 max-w-[16ch] text-balance">
              {story.title}
            </h1>
            <p className="measure mt-8 text-xl text-muted-foreground">
              {story.lead}
            </p>
          </Reveal>
        </Container>
      </SectionCream>

      <SectionCream flush>
        <Container size="wide">
          <Reveal>
            <img
              src={images.vineyardGlass}
              alt={story.imageAlt}
              className="aspect-video w-full object-cover"
            />
          </Reveal>
        </Container>
      </SectionCream>

      <SectionCream>
        <Container size="wide">
          <div className="space-y-20">
            {story.sections.map((s) => (
              <Reveal key={s.title} className="grid gap-8 lg:grid-cols-[1fr_1.6fr]">
                <h2 className="display-md text-balance">{s.title}</h2>
                <div className="measure space-y-5 text-muted-foreground">
                  {s.body.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </SectionCream>

      <SectionBlack>
        <Container size="wide">
          <PullQuote>{story.quote}</PullQuote>
          <Reveal delay={100}>
            <img
              src={images.cases}
              alt={story.secondaryImageAlt}
              loading="lazy"
              className="mt-20 aspect-video w-full object-cover"
            />
          </Reveal>
        </Container>
      </SectionBlack>
    </>
  );
}
