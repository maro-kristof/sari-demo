import { HandwrittenText } from "./HandwrittenText";
import { Reveal } from "./Reveal";

export function PullQuote({ children }: { children: string }) {
  return (
    <Reveal className="mx-auto max-w-[20ch] text-center">
      <blockquote>
        <HandwrittenText
          as="p"
          className="text-4xl leading-tight md:text-6xl"
        >
          {children}
        </HandwrittenText>
      </blockquote>
    </Reveal>
  );
}
