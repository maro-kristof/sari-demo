import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const pad = "py-20 md:py-28 lg:py-36";

export function SectionBlack({
  children,
  className,
  id,
  flush = false,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  flush?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn("bg-ink text-cream", !flush && pad, className)}
    >
      {children}
    </section>
  );
}

export function SectionCream({
  children,
  className,
  id,
  paper = false,
  flush = false,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  paper?: boolean;
  flush?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        paper ? "bg-paper" : "bg-cream",
        "text-ink",
        !flush && pad,
        className,
      )}
    >
      {children}
    </section>
  );
}

export function Container({
  children,
  className,
  size = "default",
}: {
  children: ReactNode;
  className?: string;
  size?: "default" | "wide" | "narrow";
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 md:px-10",
        size === "wide" && "max-w-[1440px]",
        size === "default" && "max-w-[1200px]",
        size === "narrow" && "max-w-[760px]",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Eyebrow({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <p style={style} className={cn("eyebrow text-gold", className)}>
      {children}
    </p>
  );
}
