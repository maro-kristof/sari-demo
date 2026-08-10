import type { ReactNode } from "react";
import { HandwrittenText } from "./HandwrittenText";
import { Reveal } from "./Reveal";

/** Thin line icons drawn inline so they stay hairline-weight on the black band. */
const icons: Record<string, ReactNode> = {

  "0% alcohol": (
    <>
      <circle cx="24" cy="24" r="17" />
      <line x1="13" y1="35" x2="35" y2="13" />
    </>
  ),
  "Low calorie": (
    <>
      <path d="M24 8c6 7 11 11 11 19a11 11 0 0 1-22 0c0-8 5-12 11-19Z" />
    </>
  ),
  "Gastronomic profile": (
    <>
      <path d="M16 9v14a5 5 0 0 0 10 0V9" />
      <line x1="21" y1="9" x2="21" y2="23" />
      <line x1="21" y1="28" x2="21" y2="40" />
      <path d="M34 9c-3 4-4 8-4 12h8c0-4-1-8-4-12Z" />
      <line x1="34" y1="21" x2="34" y2="40" />
    </>
  ),
  "No added sugar or preservatives": (
    <>
      <rect x="12" y="16" width="24" height="16" />
      <line x1="12" y1="32" x2="36" y2="16" />
    </>
  ),
  "Premium image": (
    <>
      <path d="M24 9l4.6 9.6 10.4 1.5-7.5 7.4 1.8 10.5L24 33l-9.3 5 1.8-10.5-7.5-7.4 10.4-1.5Z" />
    </>
  ),
  "Made by winemakers": (
    <>
      <path d="M14 10h20l-2 10a8 8 0 0 1-16 0Z" />
      <line x1="24" y1="28" x2="24" y2="38" />
      <line x1="17" y1="39" x2="31" y2="39" />
    </>
  ),
};

export function BenefitIcon({ label, delay = 0 }: { label: string; delay?: number }) {
  return (
    <Reveal delay={delay} className="flex flex-col items-center text-center">
      <svg
        viewBox="0 0 48 48"
        aria-hidden="true"
        className="h-12 w-12 stroke-current opacity-80"
        fill="none"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {icons[label]}
      </svg>
      <HandwrittenText className="mt-4 block max-w-[14ch] text-2xl md:text-[28px]">
        {label}
      </HandwrittenText>
    </Reveal>
  );
}
