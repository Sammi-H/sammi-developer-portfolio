import { useEffect, useRef } from "react";
import type { Shot } from "./data";

type Props = { shots: Shot[]; index: number | null; onChange: (i: number | null) => void };

export function Lightbox({ shots, index, onChange }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const open = index !== null;

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
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
    "grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-foreground transition hover:border-primary hover:text-primary";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={shot.title}
      className="fixed inset-0 z-[60] flex flex-col bg-foreground/80 p-4 backdrop-blur-sm animate-in fade-in duration-200 md:p-8"
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
              <button className={btn} aria-label="Previous screenshot" onClick={() => onChange((index - 1 + shots.length) % shots.length)}>‹</button>
              <button className={btn} aria-label="Next screenshot" onClick={() => onChange((index + 1) % shots.length)}>›</button>
            </>
          )}
          <button ref={closeRef} className={btn} aria-label="Close" onClick={() => onChange(null)}>✕</button>
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
