
export const identity = {
  name: "Sammi Habib",
  email: "sammi83@live.se",
  linkedin: "https://www.linkedin.com/in/sammi-habib-912b713a/",
  role: "Frontend & Full-Stack Developer",
};

export const projectLinks = {
  nexa: "#nexa-case-study",
  naturly: "https://github.com/Sammi-H/Naturly-Airbnb",
  chef: "https://github.com/Sammi-H/Virtual-Chef",
};

export const heroDescription =
  "I build modern web applications with a focus on clean interfaces, thoughtful user experiences and practical solutions. Combining my background in complex business environments with modern web development, I enjoy turning ideas into functional digital products.";

export const journey = [
  {
    label: "Professional foundation",
    title: "Business experience. Technical perspective.",
    description:
      "Approximately 13 years in banking and finance, working with complex business systems, technical support, implementation and process-driven environments. This experience shaped my approach to structure, reliability and understanding the needs behind a product.",
  },
  {
    label: "A deliberate new direction",
    title: "From automation to web development.",
    description:
      "As a Robotics Process Automation Analyst & Developer, I explored automation and business processes. I consciously chose to leave that career path and focus on the software I wanted to build: modern web applications, intuitive interfaces and complete digital products.",
  },
  {
    label: "My focus today",
    title: "Building products. Continuing to grow.",
    description:
      "I completed my Frontend Developer education at KYH, gaining practical experience through education, an internship and independent projects with React, Next.js and JavaScript. Today, I’m focused on intuitive, well-structured applications and growing as a frontend and full-stack developer.",
  },
];

export type Shot = {
  src: string;
  title: string;
  caption: string;
  w: number;
  h: number;
};

export const nexaShots: Shot[] = [
  {
    src: "/NexaIQ_MainPage.png",
    title: "Main Page",
    caption: "The landing page introducing the platform.",
    w: 1920,
    h: 936,
  },
  {
    src: "/NexaIQ_LeadSearch.png",
    title: "Lead Search",
    caption: "Product-value page explaining the platform's approach and benefits.",
    w: 1920,
    h: 833,
  },
  {
    src: "/NexaIQ_LeadList.png",
    title: "Lead List",
    caption: "Search results interface showing businesses returned from a search.",
    w: 1920,
    h: 938,
  },
  {
    src: "/NexaIQ_Pricing.png",
    title: "Pricing & Plans",
    caption: "Three packages: Starter, Growth and Professional.",
    w: 1920,
    h: 931,
  },
];

export const naturlyShots: Shot[] = [
  {
    src: "/Naturly_Homepage.png",
    title: "Homepage",
    caption: "Landing page with destination search.",
    w: 1920,
    h: 887,
  },
  {
    src: "/Naturly_Listings.png",
    title: "Listings",
    caption: "Browsing accommodation.",
    w: 1920,
    h: 865,
  },
  {
    src: "/Naturly_PetFriendly.png",
    title: "Hundvänliga boenden",
    caption: "Pet-friendly accommodation marked with paw indicators.",
    w: 1920,
    h: 992,
  },
  {
    src: "/Naturly_BookingsOverview.png",
    title: "Bookings Overview",
    caption: "Booking summary right before completing a booking.",
    w: 1920,
    h: 896,
  },
];

export const chefShots: Shot[] = [
  {
    src: "/VirtualChef_SearchResults.png",
    title: "Search Item",
    caption: "Recipe suggestions with images after entering ingredients.",
    w: 1920,
    h: 1013,
  },
  {
    src: "/VirtualChef_RecipeDetails.png",
    title: "Search Detail",
    caption: "Individual recipe with information and cooking instructions.",
    w: 1920,
    h: 943,
  },
];

export const skills = [
  {
    group: "Frontend",
    items: ["JavaScript", "React", "Next.js", "TypeScript", "HTML5", "CSS3"],
  },
  {
    group: "Backend & Data",
    items: ["Node.js", "Express", "Python", "Django", "Supabase", "MongoDB"],
  },
  {
    group: "Tools & Development",
    items: ["Git", "GitHub", "REST APIs", "React Query", "Figma", "Vercel"],
  },
];
