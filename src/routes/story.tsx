import { createFileRoute } from "@tanstack/react-router";
import { story, images } from "@/content/site";
import { Container, SectionBlack, SectionCream, Eyebrow } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { PullQuote } from "@/components/PullQuote";
import lifeBoxes from "@/assets/sari-life-76.jpg.asset.json";
import lifeToast from "@/assets/sari-life-83.jpg.asset.json";
import lifeTwoGlasses from "@/assets/sari-life-95.jpg.asset.json";
import lifeSip from "@/assets/sari-life-98.jpg.asset.json";
import anettaRasto from "@/assets/anetta-rasto.jpg.asset.json";

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

const peopleImages = [images.portraitGlasses, anettaRasto.url];

const galleryImages = [
  { src: lifeBoxes.url, alt: "Woman carrying a stack of green Sari gift boxes in the winery warehouse" },
  { src: lifeToast.url, alt: "Man raising a glass of Sari beside stacked Sari boxes in the warehouse" },
  { src: lifeTwoGlasses.url, alt: "Woman drinking Sari while balancing a second glass above her head" },
  { src: lifeSip.url, alt: "Man tasting a glass of Sari against a white brick wall" },
];


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
          <Reveal className="mx-auto max-w-[60ch] text-center">
            <p className="display-md text-balance">
              “{story.personalQuote}”
            </p>
            <p className="measure mx-auto mt-6 text-lg text-muted-foreground">
              {story.personalQuoteBody}
            </p>
            <p className="eyebrow mt-8 text-gold">
              {story.personalQuoteAttribution}
            </p>
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

      <SectionCream>
        <Container size="wide">
          <Reveal>
            <Eyebrow>{story.peopleEyebrow}</Eyebrow>
          </Reveal>
          <ul className="mt-12 grid gap-12 md:grid-cols-3">
            {story.people.map((p, i) => (
              <Reveal as="li" key={p.name} delay={i * 100}>
                <img
                  src={peopleImages[i]}
                  alt={p.imageAlt}
                  loading="lazy"
                  className={`aspect-[4/5] w-full object-cover ${
                    i === 1 ? "object-[75%_center]" : ""
                  }`}
                />
                <h3 className="mt-6 text-xl">{p.name}</h3>
                <p className="eyebrow mt-2 text-gold">{p.role}</p>
                <p className="mt-4 text-muted-foreground">{p.body}</p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </SectionCream>


      <SectionCream>
        <Container size="wide">
          <Reveal>
            <Eyebrow>Behind the scenes</Eyebrow>
          </Reveal>
          <ul className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {galleryImages.map((img, i) => (
              <Reveal as="li" key={img.src} delay={i * 80} className="overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </Reveal>
            ))}
          </ul>
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
