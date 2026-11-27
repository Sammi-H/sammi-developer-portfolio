import { describe, expect, it } from "vitest";
import { identity, projectLinks, nexaShots, naturlyShots, chefShots } from "@/components/portfolio/data";

describe("Portfolio contact and project rules", () => {
  it("uses the supplied email address", () => {
    expect(identity.email).toBe("sammi83@live.se");
  });
  it("uses the supplied LinkedIn profile", () => {
    expect(identity.linkedin).toBe("https://www.linkedin.com/in/sammi-habib-912b713a/");
  });
  it("keeps Nexa exploration inside the portfolio", () => {
    expect(projectLinks.nexa).toBe("#nexa-case-study");
    expect(Object.values(projectLinks).some(url => url.includes("nexa-iq-seven.vercel.app"))).toBe(false);
  });
  it("retains the provided project repositories", () => {
    expect(projectLinks.naturly).toBe("https://github.com/Sammi-H/Naturly-Airbnb");
    expect(projectLinks.chef).toBe("https://github.com/Sammi-H/Virtual-Chef");
  });
  it("keeps the authentic screenshot groups complete", () => {
    expect(nexaShots).toHaveLength(4);
    expect(naturlyShots).toHaveLength(4);
    expect(chefShots).toHaveLength(2);
    expect(nexaShots[3]?.src).toContain("pricing");
  });
});
