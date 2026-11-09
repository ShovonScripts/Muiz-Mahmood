import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, Play } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
const BASE_PATH = "/assets/projects-screenshots";

// Renders a brand SVG from /public as a monochrome glyph that inherits the
// surrounding text color (the skill dock styles every icon via currentColor),
// so each tool mark stays consistent across themes.
const MaskIcon = ({ src, title }: { src: string; title?: string }) => (
  <span
    role="img"
    aria-label={title}
    className="block bg-current"
    style={{
      width: "1em",
      height: "1em",
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
    }}
  />
);

const ProjectsLinks = ({ live, video }: { live?: string; video?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {video && video !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={video}
        >
          <Button variant={"default"} size={"sm"}>
            Watch Reel
            <Play className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
// White keycap glyphs double as monochrome tool marks in the project dock.
const brand = (title: string, file: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <MaskIcon src={`/assets/keyboard/logos/${file}.svg`} title={title} />,
});
const PROJECT_SKILLS = {
  aftereffects: brand("After Effects", "aftereffects"),
  premiere: brand("Premiere Pro", "premiere"),
  photoshop: brand("Photoshop", "photoshop"),
  illustrator: brand("Illustrator", "illustrator"),
  blender: brand("Blender", "blender"),
  unreal: brand("Unreal Engine 5", "unreal"),
  clo: brand("CLO 3D", "clo"),
  sketchup: brand("SketchUp", "sketchup"),
  lumion: brand("Lumion", "lumion"),
  mocha: brand("Mocha Pro", "mocha"),
  silhouette: brand("SilhouetteFX", "silhouette"),
  element3d: brand("Element 3D", "element3d"),
  geotracker: brand("GeoTracker", "geotracker"),
  redgiant: brand("Red Giant", "redgiant"),
  hdr: brand("HDR Light Studio", "hdrlightstudio"),
  compositing: brand("Compositing", "compositing"),
  rotoscoping: brand("Rotoscoping", "rotoscoping"),
  rendering: brand("3D Rendering", "rendering"),
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  tools: Skill[];
  deliverables: string[];
  content: React.ReactNode | any;
  live?: string;
  video?: string;
  note?: string;
};

const projects: Project[] = [
  {
    id: "beautyboss",
    category: "3D Product Visualization",
    title: "BeautyBoss",
    src: `${BASE_PATH}/beautyboss/cover.png`,
    screenshots: [
      `${BASE_PATH}/beautyboss/01.png`,
      `${BASE_PATH}/beautyboss/02.png`,
    ],
    tools: [
      PROJECT_SKILLS.blender,
      PROJECT_SKILLS.clo,
      PROJECT_SKILLS.hdr,
      PROJECT_SKILLS.photoshop,
      PROJECT_SKILLS.rendering,
    ],
    deliverables: [
      "Cosmetic product models",
      "Branded storefront renders",
      "E-commerce visuals",
    ],
    live: "https://www.beautyboss.com",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Photoreal 3D product renders for cosmetic brands.
          </TypographyP>
          <TypographyP className="font-mono">
            As a 3D Product Visualizer at BeautyBoss, I model cosmetic products
            and produce high-quality renders with merchant-specific branding for
            their storefronts. Each asset is built to read clearly at thumbnail
            size while holding up as a full-resolution product image.
          </TypographyP>
          <ProjectsLinks live={this.live} />

          <TypographyH3 className="my-4 mt-8">
            Modeling &amp; materials
          </TypographyH3>
          <p className="font-mono mb-2">
            Product geometry is modeled in Blender and CLO 3D, with materials
            tuned for glass, plastic, and coated cosmetic packaging. Branding is
            applied per merchant so the same product family can ship in
            different storefront identities without re-modeling.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/beautyboss/01.png`,
              `${BASE_PATH}/beautyboss/02.png`,
            ]}
            alt={[
              `${this.title} — cosmetic product modeling and rendering`,
              `${this.title} — branded storefront visual`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Lighting &amp; delivery</TypographyH3>
          <p className="font-mono mb-2">
            Studio lighting is built in HDR Light Studio and rendered for
            e-commerce use, with retouching and final cleanup in Photoshop.
            Renders are delivered as clean, launch-ready assets for product
            pages and campaign creative.
          </p>
          <p className="mt-6 text-xs italic text-muted-foreground">
            Placeholder imagery — replace with real BeautyBoss renders.
          </p>
        </div>
      );
    },
  },
  {
    id: "shineon",
    category: "UGC Product Mockups",
    title: "ShineOn",
    src: `${BASE_PATH}/shineon/cover.png`,
    screenshots: [
      `${BASE_PATH}/shineon/01.png`,
      `${BASE_PATH}/shineon/02.png`,
    ],
    tools: [
      PROJECT_SKILLS.aftereffects,
      PROJECT_SKILLS.premiere,
      PROJECT_SKILLS.element3d,
      PROJECT_SKILLS.mocha,
      PROJECT_SKILLS.blender,
    ],
    deliverables: [
      "3D product videos",
      "Customer design mockups",
      "Full video delivery workflow",
    ],
    live: "https://www.shineon.com",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            3D product mockups for a UGC video store.
          </TypographyP>
          <TypographyP className="font-mono">
            At ShineOn, I create 3D product visualizations and VFX-based video
            mockups for the company&apos;s UGC video store. The work covers the
            full path from applying a customer&apos;s design to a product model
            through rendering and video delivery.
          </TypographyP>
          <ProjectsLinks live={this.live} />

          <TypographyH3 className="my-4 mt-8">
            Design application &amp; rendering
          </TypographyH3>
          <p className="font-mono mb-2">
            Customer artwork is mapped onto product models, lit, and rendered as
            clean mockup frames. Element 3D and Blender cover the 3D work, while
            Mocha handles tracking where footage needs to be matched.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/shineon/01.png`,
              `${BASE_PATH}/shineon/02.png`,
            ]}
            alt={[
              `${this.title} — customer design applied to product mockup`,
              `${this.title} — video mockup frame`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Video delivery</TypographyH3>
          <p className="font-mono mb-2">
            Final assets are assembled and delivered in After Effects and
            Premiere Pro, with the delivery workflow managed end to end. I also
            support the team with additional motion graphics tasks when needed.
          </p>
          <p className="mt-6 text-xs italic text-muted-foreground">
            Placeholder imagery — replace with real ShineOn mockups.
          </p>
        </div>
      );
    },
  },
  {
    id: "designmusketeer",
    category: "Commercial 3D & Motion",
    title: "Design Musketeer",
    src: `${BASE_PATH}/designmusketeer/cover.png`,
    screenshots: [
      `${BASE_PATH}/designmusketeer/01.png`,
      `${BASE_PATH}/designmusketeer/02.png`,
    ],
    tools: [
      PROJECT_SKILLS.aftereffects,
      PROJECT_SKILLS.blender,
      PROJECT_SKILLS.sketchup,
      PROJECT_SKILLS.lumion,
      PROJECT_SKILLS.unreal,
    ],
    deliverables: [
      "Commercial visualization",
      "3D environments",
      "Motion graphics",
    ],
    live: "https://www.designmusketeer.com",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Supervising commercial visualization and motion production.
          </TypographyP>
          <TypographyP className="font-mono">
            At Design Musketeer I lead design projects for commercial and
            product visualization, managing 3D visualization and motion graphics
            production across a range of client briefs while supervising the
            team.
          </TypographyP>
          <ProjectsLinks live={this.live} />

          <TypographyH3 className="my-4 mt-8">
            Visualization pipeline
          </TypographyH3>
          <p className="font-mono mb-2">
            Projects move from SketchUp and Blender modeling into Lumion and
            Unreal Engine 5 for environment and real-time visualization work.
            After Effects is used for motion graphics and final finishing.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/designmusketeer/01.png`,
              `${BASE_PATH}/designmusketeer/02.png`,
            ]}
            alt={[
              `${this.title} — 3D environment in Lumion`,
              `${this.title} — Unreal Engine real-time visualization`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">
            Supervision &amp; delivery
          </TypographyH3>
          <p className="font-mono mb-2">
            As supervisor I keep production aligned with the client brief,
            review work in progress, and coordinate delivery across concurrent
            commercial projects.
          </p>
          <p className="mt-6 text-xs italic text-muted-foreground">
            Placeholder imagery — replace with real commercial visualization
            work.
          </p>
        </div>
      );
    },
  },
  {
    id: "film-vfx",
    category: "Compositing & Roto",
    title: "Film & OTT VFX",
    src: `${BASE_PATH}/film-vfx/cover.png`,
    screenshots: [
      `${BASE_PATH}/film-vfx/01.png`,
      `${BASE_PATH}/film-vfx/02.png`,
    ],
    tools: [
      PROJECT_SKILLS.aftereffects,
      PROJECT_SKILLS.silhouette,
      PROJECT_SKILLS.mocha,
      PROJECT_SKILLS.photoshop,
      PROJECT_SKILLS.rotoscoping,
    ],
    deliverables: ["Rotoscoping", "Chroma keying", "Clean plating"],
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Production VFX prep for film and streaming projects.
          </TypographyP>
          <TypographyP className="font-mono">
            At MVRK Studios and Studio Tik Tok I worked as a VFX artist on film
            and OTT projects, producing rotoscoping, clean plating, keying, and
            compositing support for senior compositors.
          </TypographyP>
          <ProjectsLinks video={this.video} />

          <TypographyH3 className="my-4 mt-8">Roto &amp; clean plating</TypographyH3>
          <p className="font-mono mb-2">
            Frame-accurate rotoscoping and clean plating in SilhouetteFX, with
            planar tracking in Mocha Pro and paint work in Photoshop. The goal is
            clean, predictable plates that senior compositors can build on.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/film-vfx/01.png`,
              `${BASE_PATH}/film-vfx/02.png`,
            ]}
            alt={[
              `${this.title} — SilhouetteFX rotoscoping work`,
              `${this.title} — Mocha Pro planar tracking`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Keying &amp; compositing</TypographyH3>
          <p className="font-mono mb-2">
            Chroma keying and compositing were handled in After Effects for
            shots delivered to streaming productions, including work contributed
            to Apple TV and Amazon Prime projects.
          </p>
          <p className="mt-6 text-xs italic text-muted-foreground">
            Selected work — titles are under NDA. Placeholder imagery shown;
            replace with approved frames.
          </p>
        </div>
      );
    },
  },
  {
    id: "broadcast-motion",
    category: "Broadcast & Social Motion",
    title: "Broadcast & Social",
    src: `${BASE_PATH}/broadcast-motion/cover.png`,
    screenshots: [
      `${BASE_PATH}/broadcast-motion/01.png`,
      `${BASE_PATH}/broadcast-motion/02.png`,
    ],
    tools: [
      PROJECT_SKILLS.aftereffects,
      PROJECT_SKILLS.premiere,
      PROJECT_SKILLS.photoshop,
      PROJECT_SKILLS.illustrator,
      PROJECT_SKILLS.redgiant,
    ],
    deliverables: [
      "Social media campaigns",
      "Newscast graphics",
      "Editing & color correction",
    ],
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Motion graphics for brands, broadcasts, and social campaigns.
          </TypographyP>
          <TypographyP className="font-mono">
            Across Chilli Communications and Tomato Web I produced social media
            branding content, newscast visuals, and 3D event exhibition stalls
            for multiple client companies.
          </TypographyP>

          <TypographyH3 className="my-4 mt-8">Social &amp; brand content</TypographyH3>
          <p className="font-mono mb-2">
            Social campaigns were designed and animated in After Effects and
            Illustrator, with Red Giant used for finishing and look development.
            Designs were adapted across formats for each client.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/broadcast-motion/01.png`,
              `${BASE_PATH}/broadcast-motion/02.png`,
            ]}
            alt={[
              `${this.title} — After Effects social campaign`,
              `${this.title} — newscast graphics frame`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Editing &amp; color</TypographyH3>
          <p className="font-mono mb-2">
            Footage for newscast and social videos was edited, color corrected,
            and finished in Premiere Pro and After Effects, with supporting
            retouching in Photoshop.
          </p>
          <p className="mt-6 text-xs italic text-muted-foreground">
            Placeholder imagery — replace with real campaign stills.
          </p>
        </div>
      );
    },
  },
  {
    id: "showreel",
    category: "Showreel",
    title: "Selected Work",
    src: `${BASE_PATH}/showreel/cover.png`,
    screenshots: [`${BASE_PATH}/showreel/01.png`],
    tools: [
      PROJECT_SKILLS.aftereffects,
      PROJECT_SKILLS.blender,
      PROJECT_SKILLS.unreal,
      PROJECT_SKILLS.element3d,
    ],
    deliverables: ["VFX reel", "3D product work", "Motion graphics"],
    video: "",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A single reel of selected VFX, motion, and 3D product work.
          </TypographyP>
          <TypographyP className="font-mono">
            This card is ready for a showreel embed. Add a YouTube or Vimeo
            link in <code>src/data/projects.tsx</code> to replace this
            placeholder with the real reel.
          </TypographyP>
          <ProjectsLinks video={this.video} />
          <SlideShow
            images={[`${BASE_PATH}/showreel/01.png`]}
            alt={`${this.title} — VFX and motion showreel frame`}
          />
          <p className="mt-6 text-xs italic text-muted-foreground">
            Showreel link and final frames still to be supplied.
          </p>
        </div>
      );
    },
  },
];
export default projects;
