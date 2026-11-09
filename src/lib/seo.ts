import { config } from "@/data/config";
import { EXPERIENCE, SKILLS } from "@/data/constants";
import { EDUCATION } from "@/data/education";
import projects from "@/data/projects";

/** Canonical absolute base, without a trailing slash. */
export const SITE = config.site.replace(/\/+$/, "");

const PERSON_ID = `${SITE}/#person`;
const WEBSITE_ID = `${SITE}/#website`;
const WEBPAGE_ID = `${SITE}/#webpage`;

const currentEmployers = EXPERIENCE.filter((exp) =>
  exp.periods.some((period) => period.end === "Present")
).map((exp) => ({
  "@type": "Organization",
  name: exp.company,
  ...(exp.url ? { url: exp.url } : {}),
}));

const alumni = EDUCATION.map((item) => ({
  "@type": "CollegeOrUniversity",
  name: item.institution,
  address: item.location,
}));

export const personSchema = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: config.author,
  givenName: "Muiz",
  familyName: "Mahmood",
  url: `${SITE}/`,
  image: {
    "@type": "ImageObject",
    url: `${SITE}/assets/muiz.png`,
    caption: `${config.author} — VFX Artist & 3D Product Visualizer`,
  },
  email: `mailto:${config.email}`,
  jobTitle: "VFX Artist & 3D Product Visualizer",
  description: config.description.long,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressCountry: "BD",
  },
  knowsAbout: config.keywords,
  knowsLanguage: ["English", "Bengali"],
  sameAs: [config.social.linkedin],
  worksFor: currentEmployers,
  alumniOf: alumni,
  hasOccupation: {
    "@type": "Occupation",
    name: "VFX Artist & 3D Product Visualizer",
    occupationalCategory: "27-1014.00",
    skills: Object.values(SKILLS).map((skill) => skill.label),
  },
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: `${SITE}/`,
  name: `${config.author} — Portfolio`,
  description: config.description.short,
  inLanguage: "en",
  publisher: { "@id": PERSON_ID },
};

const webpageSchema = {
  "@type": "ProfilePage",
  "@id": WEBPAGE_ID,
  url: `${SITE}/`,
  name: config.title,
  description: config.description.long,
  isPartOf: { "@id": WEBSITE_ID },
  about: { "@id": PERSON_ID },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: config.ogImg,
    width: 1200,
    height: 630,
  },
  inLanguage: "en",
};

export const projectsSchema = {
  "@type": "ItemList",
  "@id": `${SITE}/#projects`,
  name: "Selected Work — VFX, Motion Graphics & 3D Product Visualization",
  itemListElement: projects.map((project, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "CreativeWork",
      name: project.title,
      description: `${project.category}. Deliverables: ${project.deliverables.join(
        ", "
      )}.`,
      image: `${SITE}${project.src}`,
      ...(project.live && project.live !== "#" ? { url: project.live } : {}),
      creator: { "@id": PERSON_ID },
      keywords: [project.category, ...project.deliverables].join(", "),
      inLanguage: "en",
    },
  })),
};

/** Combined structured data for the home page. */
export const homeGraph = {
  "@context": "https://schema.org",
  "@graph": [personSchema, websiteSchema, webpageSchema, projectsSchema],
};

/** Structured data for the resume page. */
export const resumeGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE}/resume#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${SITE}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Résumé",
          item: `${SITE}/resume`,
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${SITE}/resume#webpage`,
      url: `${SITE}/resume`,
      name: `Résumé — ${config.author}`,
      description: `Résumé of ${config.author} — VFX Artist & 3D Product Visualization Specialist. View online or download the PDF.`,
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": PERSON_ID },
      breadcrumb: { "@id": `${SITE}/resume#breadcrumb` },
      inLanguage: "en",
    },
    {
      "@type": "DigitalDocument",
      "@id": `${SITE}/resume#document`,
      name: `${config.author} — Résumé`,
      description: `Résumé of ${config.author}, VFX Artist & 3D Product Visualization Specialist.`,
      encodingFormat: "application/pdf",
      contentUrl: `${SITE}/Muiz_Mahmood_Resume.pdf`,
      about: { "@id": PERSON_ID },
    },
  ],
};
