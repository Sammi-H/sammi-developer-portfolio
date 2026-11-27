import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/portfolio/Header";
import { Hero, About, Skills, Contact, Footer } from "@/components/portfolio/Sections";
import { Projects } from "@/components/portfolio/Projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sammi Habib — Frontend & Full-Stack Developer" },
      { name: "description", content: "Sammi Habib builds modern web applications with React and Next.js. See Nexa IQ, Naturly and Virtual Chef." },
      { property: "og:title", content: "Sammi Habib — Frontend & Full-Stack Developer" },
      { property: "og:description", content: "Portfolio featuring Nexa IQ, Naturly and Virtual Chef — clean interfaces and complete web applications." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-md focus:bg-card focus:px-4 focus:py-2">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
