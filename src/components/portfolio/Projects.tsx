import { useState } from "react";
import { nexaShots, naturlyShots, chefShots, type Shot } from "./data";
import { Lightbox } from "./Lightbox";
import { btnPrimary, btnSecondary, Arrow, SectionHeader, Tag, Screenshot, FeatureList, InfoBlock } from "./ui";

function useLightbox() {
  const [index, setIndex] = useState<number | null>(null);
  return { index, setIndex };
}

function Stack({ items }: { items: string[] }) {
  return <ul className="flex flex-wrap gap-2">{items.map((t) => <Tag key={t}>{t}</Tag>)}</ul>;
}

function ProjectHead({ num, label, title, subtitle, desc }: { num: string; label: string; title: string; subtitle: string; desc: string }) {
  return (
    <div>
      <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em]">
        <span className="font-mono text-primary">{num}</span>
        <span className="h-px w-8 bg-border" />
        <span className="text-muted-foreground">{label}</span>
      </div>
      <h3 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">{title}</h3>
      <p className="mt-1.5 text-lg font-medium text-primary">{subtitle}</p>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">{desc}</p>
    </div>
  );
}

function Nexa() {
  const lb = useLightbox();
  const [main, ...rest] = nexaShots as [Shot, ...Shot[]];
  return (
    <article className="rounded-3xl border border-border bg-card p-5 shadow-soft md:p-10 lg:p-12">
      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
        <ProjectHead
          num="01"
          label="Featured project"
          title="Nexa IQ"
          subtitle="B2B Lead Generation Platform"
          desc="An independently developed SaaS platform that helps businesses discover relevant companies worldwide through category-based and geographic searches."
        />
        <div className="lg:text-right">
          <p className="text-xl font-semibold italic text-foreground">“Stop searching. Start discovering.”</p>
          <a href="https://nexa-iq-seven.vercel.app/" target="_blank" rel="noreferrer" className={`group mt-5 ${btnPrimary}`}>
            View Live Project <Arrow />
          </a>
        </div>
      </div>

      <div className="mt-10 rounded-2xl bg-surface p-3 md:p-6">
        <Screenshot shot={main} onOpen={() => lb.setIndex(0)} priority />
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {rest.map((s, i) => <Screenshot key={s.title} shot={s} onOpen={() => lb.setIndex(i + 1)} chrome={false} />)}
        </div>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <div className="space-y-10">
          <InfoBlock label="Overview">
            <div className="space-y-3 leading-relaxed text-muted-foreground">
              <p>Nexa IQ is a B2B lead-generation platform designed to make business discovery simpler and more focused.</p>
              <p>Users can search for businesses based on industry categories and geographic locations, explore structured results and export leads. The goal is a streamlined alternative to more complex lead-generation platforms.</p>
            </div>
          </InfoBlock>
          <InfoBlock label="Key features">
            <FeatureList items={["Search for businesses by category and location", "Global business discovery", "Category autocomplete", "Location autocomplete", "Relevance filtering to improve search results", "Structured lead results", "CSV export", "User authentication and accounts"]} />
          </InfoBlock>
        </div>
        <div className="space-y-10">
          <InfoBlock label="Technical implementation">
            <p className="leading-relaxed text-muted-foreground">
              Combines external business data with custom search and relevance logic, using geographic and category datasets to power autocomplete and more accurate search input. Covers frontend, server-side functionality, API integration, database and authentication, search logic and deployment.
            </p>
          </InfoBlock>
          <InfoBlock label="My role">
            <p className="leading-relaxed text-muted-foreground">
              Independently developed from concept to implementation — product planning, UI, frontend, backend functionality, API and database integration, search and relevance filtering, autocomplete and deployment.
            </p>
          </InfoBlock>
          <InfoBlock label="Technology">
            <Stack items={["Next.js", "React", "JavaScript", "Supabase", "Google Places API", "GeoNames", "Vercel"]} />
          </InfoBlock>
        </div>
      </div>
      <Lightbox shots={nexaShots} index={lb.index} onChange={lb.setIndex} />
    </article>
  );
}

function Naturly() {
  const lb = useLightbox();
  return (
    <article className="grid gap-10 lg:grid-cols-[1fr_1.35fr] lg:gap-14">
      <div className="space-y-8 lg:sticky lg:top-24 lg:self-start">
        <ProjectHead
          num="02"
          label="Full-stack school project"
          title="Naturly"
          subtitle="Accommodation & Experience Booking Platform"
          desc="An Airbnb-inspired full-stack booking application where users can discover accommodation and experiences, manage reservations and explore destinations."
        />
        <p className="leading-relaxed text-muted-foreground">
          An individual project from my frontend development education, covering destinations like Åre, Sälen, Vemdalen, Hemavan and Idre.{" "}
          <span className="font-semibold text-foreground">Graded Väl godkänt.</span>
        </p>
        <InfoBlock label="Key features">
          <FeatureList items={["Destination search and suggestions", "Accommodation listings and detail pages", "Guest selection incl. adults, children and pets", "Pet-friendly indicators", "Favorites for stays and experiences", "Booking flow with dates and guests", "Booking summary with price calculations", "Registration, login and protected booking", "My Bookings page", "Experience discovery and detail pages"]} />
        </InfoBlock>
        <InfoBlock label="Technology">
          <Stack items={["Next.js", "React", "JavaScript", "TypeScript", "HTML5", "CSS", "MongoDB", "React Context API", "Next.js API routes"]} />
        </InfoBlock>
        <a href="https://github.com/Sammi-H/Naturly-Airbnb" target="_blank" rel="noreferrer" className={`group ${btnSecondary}`}>
          View on GitHub <Arrow />
        </a>
      </div>

      <div className="space-y-8">
        <ol className="grid grid-cols-2 gap-2 text-xs font-medium text-muted-foreground sm:grid-cols-4">
          {naturlyShots.map((s, i) => (
            <li key={s.title} className="rounded-lg border border-border bg-card px-3 py-2">
              <span className="font-mono text-primary">{i + 1}.</span> {s.title}
            </li>
          ))}
        </ol>
        {naturlyShots.map((s, i) => <Screenshot key={s.title} shot={s} onOpen={() => lb.setIndex(i)} />)}
        <div className="grid gap-6 rounded-2xl border border-border bg-surface p-6 md:grid-cols-2">
          <InfoBlock label="Booking functionality">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Choose dates and guests, review details and complete a simulated booking. The summary shows price per night, number of nights and total. Payment methods are shown in the interface, but payment is simulated — no real payment processing.
            </p>
          </InfoBlock>
          <InfoBlock label="My role">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Built independently from planning, UI/UX and Figma wireframes to frontend, backend, database, authentication (bcrypt hashing, session-based route protection) and booking. Informal user feedback shaped clearer navigation and the paw icon for pet-friendly stays.
            </p>
          </InfoBlock>
        </div>
      </div>
      <Lightbox shots={naturlyShots} index={lb.index} onChange={lb.setIndex} />
    </article>
  );
}

function Chef() {
  const lb = useLightbox();
  return (
    <article className="rounded-3xl border border-border bg-surface p-5 md:p-10">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-14">
        <div className="space-y-7">
          <ProjectHead
            num="03"
            label="Personal project"
            title="Virtual Chef"
            subtitle="Recipe Discovery Application"
            desc="A JavaScript application that helps users discover recipes based on ingredients they already have."
          />
          <p className="leading-relaxed text-muted-foreground">
            Built independently to explore JavaScript, API integration and dynamic interfaces. Enter ingredients — like fish and potatoes — and get relevant recipes. I handled API integration, input handling, dynamic rendering and responsive styling.
          </p>
          <InfoBlock label="Key features">
            <FeatureList items={["Ingredient-based recipe search", "Dynamic search results", "Recipe images and summaries", "Recipe detail pages", "Full cooking instructions", "Responsive interface"]} />
          </InfoBlock>
          <InfoBlock label="Technology">
            <Stack items={["HTML5", "CSS3", "JavaScript", "Spoonacular API", "REST API integration", "DOM manipulation", "Async data handling", "Event handling"]} />
          </InfoBlock>
          <a href="https://github.com/Sammi-H/Virtual-Chef" target="_blank" rel="noreferrer" className={`group ${btnSecondary}`}>
            View on GitHub <Arrow />
          </a>
        </div>
        <div className="space-y-6">
          {chefShots.map((s, i) => <Screenshot key={s.title} shot={s} onOpen={() => lb.setIndex(i)} />)}
        </div>
      </div>
      <Lightbox shots={chefShots} index={lb.index} onChange={lb.setIndex} />
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Projects"
          title="Selected Projects"
          intro="A selection of applications I’ve designed and developed, exploring different aspects of frontend and full-stack development."
        />
        <div className="mt-14 space-y-20 md:space-y-28">
          <Nexa />
          <Naturly />
          <Chef />
        </div>
      </div>
    </section>
  );
}
