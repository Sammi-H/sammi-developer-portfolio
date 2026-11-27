import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import type { Shot } from "./data";

type Props = { shots: Shot[]; index: number | null; onChange: (i: number | null) => void };

export function Lightbox({ shots, index, onChange }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const open = index !== null;

  useEffect(() => {
    if (!open) return;
    const previousFocus = document.activeElement;
    closeRef.current?.focus();
    return () => {
      if (previousFocus instanceof HTMLElement) previousFocus.focus({ preventScroll: true });
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        const controls = closeRef.current?.parentElement?.querySelectorAll("button");
        const first = controls?.[0];
        const last = controls?.[controls.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last?.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus(); }
      }
      if (e.key === "Escape") onChange(null);
      if (e.key === "ArrowRight") onChange(((index ?? 0) + 1) % shots.length);
      if (e.key === "ArrowLeft") onChange(((index ?? 0) - 1 + shots.length) % shots.length);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, index, shots.length, onChange]);

  if (index === null) return null;
  const shot = shots[index];
  if (!shot) return null;
  const btn =
    "grid h-10 w-10 place-items-center rounded-md border border-border bg-card text-foreground transition hover:border-primary hover:text-primary";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={shot.title}
      className="fixed inset-0 z-[60] flex flex-col bg-foreground/80 p-4 md:p-8"
      onClick={() => onChange(null)}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 pb-4" onClick={(e) => e.stopPropagation()}>
        <div className="min-w-0 text-ink-foreground">
          <p className="truncate font-semibold">{shot.title}</p>
          <p className="truncate text-sm opacity-75">{shot.caption}</p>
        </div>
        <div className="flex shrink-0 gap-2">
          {shots.length > 1 && (
            <>
              <Button variant="outline" size="icon" className={btn} aria-label="Previous screenshot" onClick={() => onChange((index - 1 + shots.length) % shots.length)}>‹</Button>
              <Button variant="outline" size="icon" className={btn} aria-label="Next screenshot" onClick={() => onChange((index + 1) % shots.length)}>›</Button>
            </>
          )}
          <Button variant="outline" size="icon" ref={closeRef} className={btn} aria-label="Close" onClick={() => onChange(null)}>✕</Button>
        </div>
      </div>
      <div className="flex min-h-0 flex-1 items-center justify-center">
        <img
          src={shot.src}
          alt={shot.title}
          width={shot.w}
          height={shot.h}
          onClick={(e) => e.stopPropagation()}
          className="max-h-full max-w-full rounded-lg object-contain shadow-lift"
        />
      </div>
    </div>
  );
}
