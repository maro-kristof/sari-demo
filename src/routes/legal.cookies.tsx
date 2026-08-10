import { createFileRoute } from "@tanstack/react-router";
import { legal } from "@/content/site";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/legal/cookies")({
  head: () => ({
    meta: [
      { title: "Cookie policy — Sari" },
      {
        name: "description",
        content: "Which cookies the Sari website uses and how to manage them.",
      },
      { property: "og:title", content: "Cookie policy — Sari" },
      {
        property: "og:description",
        content: "Which cookies the Sari website uses.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/legal/cookies" },
    ],
    links: [{ rel: "canonical", href: "/legal/cookies" }],
  }),
  component: () => <LegalPage doc={legal.cookies} />,
});
