import { skills, GITHUB_URL, EMAIL_PLACEHOLDER, LINKEDIN_PLACEHOLDER } from "./data";
import { btnPrimary, btnSecondary, Arrow, SectionHeader } from "./ui";

function HeroVisual() {
  return (
    <div aria-hidden className="relative mx-auto aspect-[5/4] w-full max-w-md lg:max-w-none">
      <div className="absolute inset-0 rounded-3xl dot-grid opacity-70" />
      {/* back window: data table */}
      <div className="absolute left-[4%] top-[6%] w-[62%] rounded-xl border border-border bg-card shadow-soft">
        <div className="flex gap-1.5 border-b border-border px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-border" /><span className="h-2 w-2 rounded-full bg-border" /><span className="h-2 w-2 rounded-full bg-border" />
        </div>
        <div className="space-y-2.5 p-4">
          {[80, 64, 72, 52].map((w, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="h-6 w-6 shrink-0 rounded-md bg-surface" />
              <span className="h-2 rounded bg-surface" style={{ width: `${w}%` }} />
            </div>
          ))}
        </div>
      </div>
      {/* front window: interface */}
      <div className="absolute bottom-[8%] right-[2%] w-[66%] rounded-xl border border-border bg-card shadow-lift">
        <div className="flex items-center justify-between border-b border-border px-3 py-2">
          <div className="flex gap-1.5"><span className="h-2 w-2 rounded-full bg-border" /><span className="h-2 w-2 rounded-full bg-border" /><span className="h-2 w-2 rounded-full bg-border" /></div>
          <span className="h-2 w-16 rounded bg-surface" />
        </div>
        <div className="p-4">
          <div className="flex gap-2">
            <span className="h-8 flex-1 rounded-lg border border-border" />
            <span className="h-8 w-16 rounded-lg bg-primary" />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-lg border border-border p-2">
                <span className={`block h-10 rounded ${i === 1 ? "bg-primary-soft" : "bg-surface"}`} />
                <span className="mt-2 block h-1.5 w-3/4 rounded bg-surface" />
                <span className="mt-1 block h-1.5 w-1/2 rounded bg-surface" />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* small code chip */}
      <div className="absolute left-[10%] bottom-[14%] rounded-lg border border-border bg-card px-3 py-2 font-mono text-[11px] text-muted-foreground shadow-soft">
        <span className="text-primary">GET</span> /api/search <span className="text-success">200</span>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="container-page grid items-center gap-14 py-16 md:py-24 lg:grid-cols-[1.1fr_1fr] lg:gap-10 lg:py-28">
        <div className="animate-rise">
          <p className="eyebrow">Sammi — Portfolio</p>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.5rem]">
            Frontend &amp; <span className="text-primary">Full-Stack</span> Developer
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            I build modern web applications with a focus on clean interfaces, thoughtful user experiences and practical
            solutions. From frontend development to APIs and database integration, I enjoy turning ideas into functional products.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className={`group ${btnPrimary}`}>View My Projects <Arrow /></a>
            <a href="#contact" className={btnSecondary}>Get in Touch</a>
          </div>
          <p className="mt-10 text-sm text-muted-foreground">React · Next.js · TypeScript · Node.js · Supabase</p>
        </div>
        <div className="animate-rise [animation-delay:150ms]"><HeroVisual /></div>
      </div>
    </section>
  );
}

export function About() {
  const facts = [
    { k: "Focus", v: "Frontend & full-stack web applications" },
    { k: "Favourite stack", v: "React & Next.js" },
    { k: "Background", v: "Building and working with complex business systems" },
  ];
  return (
    <section id="about" className="border-y border-border bg-surface py-20 md:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
        <div>
          <SectionHeader eyebrow="About" title="About Me" />
          <div className="mt-6 max-w-2xl space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              I’m a frontend and full-stack developer with a background in building and working with complex business
              systems. I enjoy creating intuitive interfaces and turning complex requirements into clear, functional applications.
            </p>
            <p>
              My experience combines frontend development, backend integration and practical problem-solving. I
              particularly enjoy working with React and Next.js to build applications that are both useful and enjoyable to use.
            </p>
          </div>
        </div>
        <dl className="self-end rounded-2xl border border-border bg-card p-2 shadow-soft">
          {facts.map((f, i) => (
            <div key={f.k} className={`px-5 py-5 ${i ? "border-t border-border" : ""}`}>
              <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">{f.k}</dt>
              <dd className="mt-1.5 font-semibold">{f.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader eyebrow="Skills" title="Technical Skills" />
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {skills.map((g, i) => (
            <div key={g.group} className="bg-card p-7">
              <p className="font-mono text-xs text-primary">0{i + 1}</p>
              <h3 className="mt-2 text-lg font-bold">{g.group}</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li key={s} className="rounded-md bg-surface px-2.5 py-1 text-sm font-medium">{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const items = [
    { label: "Email", value: EMAIL_PLACEHOLDER, href: `mailto:${EMAIL_PLACEHOLDER}`, note: "Placeholder — add your email" },
    { label: "LinkedIn", value: "linkedin.com/in/your-profile", href: LINKEDIN_PLACEHOLDER, note: "Placeholder — add your profile" },
    { label: "GitHub", value: "github.com/Sammi-H", href: GITHUB_URL },
  ];
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container-page">
        <div className="rounded-3xl bg-ink px-6 py-14 text-ink-foreground md:px-14 md:py-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-end">
            <div>
              <p className="eyebrow">Contact</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">Let’s Connect</h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed opacity-75">
                Interested in working together or discussing an opportunity? Feel free to get in touch.
              </p>
            </div>
            <ul className="space-y-3">
              {items.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target={c.label === "Email" ? undefined : "_blank"}
                    rel="noreferrer"
                    className="group flex items-center justify-between gap-4 rounded-xl border border-ink-foreground/15 px-5 py-4 transition hover:border-primary hover:bg-ink-foreground/5"
                  >
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold uppercase tracking-[0.12em] opacity-60">{c.label}</span>
                      <span className="block truncate font-semibold">{c.value}</span>
                      {c.note && <span className="block text-xs opacity-50">{c.note}</span>}
                    </span>
                    <span aria-hidden className="shrink-0 transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container-page flex flex-col gap-6 text-sm md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-extrabold">Sammi<span className="text-primary">.</span></p>
          <p className="text-muted-foreground">Frontend &amp; Full-Stack Developer</p>
        </div>
        <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="hover:text-primary">GitHub</a>
          <a href={LINKEDIN_PLACEHOLDER} target="_blank" rel="noreferrer" className="hover:text-primary" title="Placeholder link">LinkedIn</a>
          <span>© {new Date().getFullYear()} Sammi</span>
        </div>
      </div>
    </footer>
  );
}
