import { useEffect, useState } from "react";
import { btnPrimary } from "./ui";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Header() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) obs.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      obs.disconnect();
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? "border-border bg-background/85 backdrop-blur-md" : "border-transparent bg-background"
      }`}
    >
      <nav aria-label="Main" className="container-page flex h-16 items-center justify-between">
        <a href="#top" className="text-lg font-extrabold tracking-tight">
          Sammi<span className="text-primary">.</span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              aria-current={active === l.id ? "true" : undefined}
              className={`rounded-full px-3.5 py-2 text-sm font-medium transition ${
                active === l.id ? "bg-primary-soft text-accent-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className={`${btnPrimary} ml-3 !py-2`}>Get in Touch</a>
        </div>
        <button
          className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="relative block h-3 w-4">
            <span className={`absolute left-0 h-0.5 w-4 rounded bg-foreground transition ${open ? "top-1.5 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-1.5 h-0.5 w-4 rounded bg-foreground transition ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 h-0.5 w-4 rounded bg-foreground transition ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
          </span>
        </button>
      </nav>
      {open && (
        <div id="mobile-nav" className="border-t border-border bg-background md:hidden animate-in slide-in-from-top-2 fade-in duration-200">
          <div className="container-page flex flex-col py-3">
            {links.map((l) => (
              <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)} className="rounded-lg px-2 py-3 font-medium hover:bg-surface">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
