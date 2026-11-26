import nexaMain from "@/assets/projects/nexaiq-mainpage.png.asset.json";
import nexaSearch from "@/assets/projects/nexaiq-leadsearch.png.asset.json";
import nexaList from "@/assets/projects/nexaiq-leadlist.png.asset.json";
import nexaPricing from "@/assets/projects/nexaiq-pricing.png.asset.json";
import natHome from "@/assets/projects/naturly-homepage.png.asset.json";
import natListings from "@/assets/projects/naturly-listings.png.asset.json";
import natPets from "@/assets/projects/naturly-petfriendly.png.asset.json";
import natBooking from "@/assets/projects/naturly-bookingsoverview.png.asset.json";
import vcResults from "@/assets/projects/virtualchef-searchresults.png.asset.json";
import vcDetail from "@/assets/projects/virtualchef-recipedetails.webp.asset.json";

export const GITHUB_URL = "https://github.com/Sammi-H";
// Placeholders — replace with real contact details.
export const EMAIL_PLACEHOLDER = "your.email@example.com";
export const LINKEDIN_PLACEHOLDER = "https://www.linkedin.com/in/your-profile";

export type Shot = { src: string; title: string; caption: string; w: number; h: number };

export const nexaShots: Shot[] = [
  { src: nexaMain.url, title: "Main Page", caption: "The landing page introducing the platform.", w: 1920, h: 936 },
  { src: nexaSearch.url, title: "Lead Search", caption: "Product-value page explaining the platform's approach and benefits.", w: 1920, h: 833 },
  { src: nexaList.url, title: "Lead List", caption: "Search results interface showing businesses returned from a search.", w: 1920, h: 938 },
  { src: nexaPricing.url, title: "Pricing & Plans", caption: "Three packages: Starter, Growth and Professional.", w: 1920, h: 931 },
];

export const naturlyShots: Shot[] = [
  { src: natHome.url, title: "Homepage", caption: "Landing page with destination search.", w: 1920, h: 887 },
  { src: natListings.url, title: "Listings", caption: "Browsing accommodation.", w: 1920, h: 865 },
  { src: natPets.url, title: "Hundvänliga boenden", caption: "Pet-friendly accommodation marked with paw indicators.", w: 1920, h: 992 },
  { src: natBooking.url, title: "Bookings Overview", caption: "Booking summary right before completing a booking.", w: 1920, h: 896 },
];

export const chefShots: Shot[] = [
  { src: vcResults.url, title: "Search Results", caption: "Recipe suggestions with images after entering ingredients.", w: 1920, h: 1013 },
  { src: vcDetail.url, title: "Recipe Details", caption: "Individual recipe with information and cooking instructions.", w: 1920, h: 943 },
];

export const skills = [
  { group: "Frontend", items: ["JavaScript", "React", "Next.js", "TypeScript", "HTML5", "CSS3"] },
  { group: "Backend & Data", items: ["Node.js", "Express", "Python", "Django", "Supabase", "MongoDB"] },
  { group: "Tools & Development", items: ["Git", "GitHub", "REST APIs", "React Query", "Figma", "Vercel"] },
];
