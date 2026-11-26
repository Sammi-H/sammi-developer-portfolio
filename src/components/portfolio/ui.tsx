import type { ReactNode } from "react";
import type { Shot } from "./data";

export const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:-translate-y-px hover:bg-primary/90 active:translate-y-0";
export const btnSecondary =
  "inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition hover:-translate-y-px hover:border-primary/40 hover:text-primary active:translate-y-0";

export function Arrow() {
  return <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>;
}

export function SectionHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{intro}</p>}
    </div>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <li className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-foreground">{children}</li>
  );
}

export function Screenshot({ shot, onOpen, priority, chrome = true }: { shot: Shot; onOpen: () => void; priority?: boolean; chrome?: boolean }) {
  return (
    <figure className="group">
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Enlarge screenshot: ${shot.title}`}
        className="block w-full overflow-hidden rounded-xl border border-border bg-card text-left shadow-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-lift"
      >
        {chrome && (
          <div className="flex items-center gap-1.5 border-b border-border bg-surface px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-border" />
            <span className="h-2 w-2 rounded-full bg-border" />
            <span className="h-2 w-2 rounded-full bg-border" />
          </div>
        )}
        <img
          src={shot.src}
          alt={`${shot.title} — ${shot.caption}`}
          width={shot.w}
          height={shot.h}
          loading={priority ? "eager" : "lazy"}
          className="block h-auto w-full"
        />
      </button>
      <figcaption className="mt-3 text-sm">
        <span className="font-semibold text-foreground">{shot.title}</span>
        <span className="text-muted-foreground"> — {shot.caption}</span>
      </figcaption>
    </figure>
  );
}

export function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-2.5 sm:grid-cols-2">
      {items.map((f) => (
        <li key={f} className="flex gap-2.5 text-sm leading-relaxed text-foreground">
          <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
          {f}
        </li>
      ))}
    </ul>
  );
}

export function InfoBlock({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">{label}</h4>
      <div className="mt-3">{children}</div>
    </div>
  );
}
