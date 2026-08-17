import { HandwrittenText } from "./HandwrittenText";
import { Reveal } from "./Reveal";

export function PullQuote({
  children,
  attribution,
}: {
  children: string;
  attribution?: string;
}) {
  return (
    <Reveal className="mx-auto max-w-[44ch] text-center md:max-w-[64ch]">
      <blockquote>
        <HandwrittenText
          as="p"
          className="whitespace-pre-line text-4xl leading-tight md:text-6xl"
        >
          {children}
        </HandwrittenText>
        {attribution && (
          <p className="mt-6 text-sm tracking-wide text-muted-foreground">
            {attribution}
          </p>
        )}
      </blockquote>
    </Reveal>
  );
}
