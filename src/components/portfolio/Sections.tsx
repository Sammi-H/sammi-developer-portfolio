import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { skills, identity, journey, heroDescription } from "./data";
import { SectionHeader } from "./ui";

export function Hero() {
  return (
    <section id="top" className="border-b border-border">
      <div className="container-page pb-8 pt-10 md:pb-8 md:pt-12 lg:pt-20">
        <p className="mb-6 flex items-center gap-3 text-sm font-semibold text-primary"><span className="h-px w-8 bg-primary" />{identity.name}</p>
        <h1 className="max-w-5xl text-[2.75rem] font-semibold leading-[1.12] sm:text-5xl lg:text-7xl">Frontend &amp;<br /><span className="text-primary">Full-Stack</span> Developer</h1>
        <div className="mt-7 grid gap-7 lg:grid-cols-[1.5fr_1fr] lg:items-end lg:gap-16">
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">{heroDescription}</p>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Button asChild size="lg" className="h-12 px-5"><a href="#projects">Explore My Projects <ArrowDown /></a></Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-5"><a href="#contact">Get in Touch <ArrowUpRight /></a></Button>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6 text-sm">
          <p className="text-muted-foreground">Business perspective. Product-minded development.</p>
          <p className="font-medium">React <span className="mx-2 text-border">/</span> Next.js <span className="mx-2 text-border">/</span> TypeScript</p>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="py-10 md:py-20">
      <div className="container-page">
        <div className="grid gap-6 md:grid-cols-[1fr_1.1fr] md:items-end">
          <SectionHeader eyebrow="01 / About" title="A considered path into development." />
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">I’m {identity.name} — a frontend and full-stack developer bringing a substantial business background and a deliberate commitment to modern web development.</p>
        </div>
        <div className="mt-12 grid gap-9 md:grid-cols-3 md:gap-8">
          {journey.map((step, i) => (
            <div key={step.label} className="border-t border-border pt-5">
              <p className="flex items-center justify-between text-xs font-semibold text-primary">{step.label}<span className="font-mono text-muted-foreground">0{i + 1}</span></p>
              <h3 className="mt-5 max-w-xs text-xl font-semibold leading-snug">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="border-y border-border bg-card py-14 md:py-20">
      <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_2fr] lg:gap-16">
        <SectionHeader eyebrow="02 / Skills" title="My toolkit." />
        <div className="grid gap-8 sm:grid-cols-3">
          {skills.map((group) => (
            <div key={group.group}>
              <h3 className="border-b border-border pb-4 text-sm font-semibold">{group.group}</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">{group.items.map((skill) => <li key={skill}>{skill}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-surface py-16 md:py-24">
      <div className="container-page grid gap-9 lg:grid-cols-[1.4fr_1fr] lg:items-end">
        <div>
          <p className="eyebrow">04 / Contact</p>
          <h2 className="mt-4 text-4xl font-semibold md:text-6xl">Let’s Connect</h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">I’m always interested in connecting with people working on interesting products and exploring new opportunities in frontend and full-stack development.</p>
        </div>
        <div className="space-y-5 lg:justify-self-end">
          <a href={`mailto:${identity.email}`} className="block text-xl font-medium decoration-primary underline-offset-4 hover:underline">{identity.email}</a>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="h-12 px-5"><a href={`mailto:${identity.email}`}><Mail /> Email Me</a></Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-5"><a href={identity.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight /></a></Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container-page flex flex-col justify-between gap-6 text-sm md:flex-row md:items-center">
        <div><p className="font-semibold">{identity.name}</p><p className="mt-1 text-muted-foreground">{identity.role}</p></div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-muted-foreground">
          <a href={`mailto:${identity.email}`} className="hover:text-primary">Email</a>
          <a href={identity.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary">LinkedIn</a>
          <span>© {new Date().getFullYear()} {identity.name}</span>
        </div>
      </div>
    </footer>
  );
}
