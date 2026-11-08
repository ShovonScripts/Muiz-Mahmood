// order = keycap layout, 6 per row
export enum SkillNames {
  AFTER_EFFECTS = "aftereffects",
  PREMIERE = "premiere",
  PHOTOSHOP = "photoshop",
  ILLUSTRATOR = "illustrator",
  BLENDER = "blender",
  UNREAL = "unreal",
  CLO = "clo",
  SKETCHUP = "sketchup",
  LUMION = "lumion",
  MOCHA = "mocha",
  SILHOUETTE = "silhouette",
  ELEMENT_3D = "element3d",
  GEOTRACKER = "geotracker",
  RED_GIANT = "redgiant",
  HDR_LIGHT_STUDIO = "hdrlightstudio",
  COMPOSITING = "compositing",
  ROTOSCOPING = "rotoscoping",
  RENDERING = "rendering",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
  /** Optional local artwork for the 3D key; falls back to icon. */
  keyboardIcon?: string;
  /** Plastic color of the 3D keycap; independent of the HTML brand accent. */
  keyboardColor?: string;
  /** Browser KeyboardEvent.code, e.g. KeyJ. Defaults to the displayed key order. */
  shortcut?: string;
};

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.AFTER_EFFECTS]: {
    id: 1,
    name: "aftereffects",
    label: "After Effects",
    shortDescription: "Compositing & motion design",
    color: "#9999ff",
    icon: "/assets/logos/aftereffects.svg",
    keyboardIcon: "/assets/keyboard/logos/aftereffects.svg",
    keyboardColor: "#8f7bff",
  },
  [SkillNames.PREMIERE]: {
    id: 2,
    name: "premiere",
    label: "Premiere Pro",
    shortDescription: "Editorial & video delivery",
    color: "#ea77ff",
    icon: "/assets/logos/premiere.svg",
    keyboardIcon: "/assets/keyboard/logos/premiere.svg",
    keyboardColor: "#c77dff",
  },
  [SkillNames.PHOTOSHOP]: {
    id: 3,
    name: "photoshop",
    label: "Photoshop",
    shortDescription: "Retouching & matte paint",
    color: "#31a8ff",
    icon: "/assets/logos/photoshop.svg",
    keyboardIcon: "/assets/keyboard/logos/photoshop.svg",
    keyboardColor: "#31a8ff",
  },
  [SkillNames.ILLUSTRATOR]: {
    id: 4,
    name: "illustrator",
    label: "Illustrator",
    shortDescription: "Vector & graphic design",
    color: "#ff9a00",
    icon: "/assets/logos/illustrator.svg",
    keyboardIcon: "/assets/keyboard/logos/illustrator.svg",
    keyboardColor: "#ff9a00",
  },
  [SkillNames.BLENDER]: {
    id: 5,
    name: "blender",
    label: "Blender",
    shortDescription: "3D modeling & animation",
    color: "#e87d0d",
    icon: "/assets/logos/blender.svg",
    keyboardIcon: "/assets/keyboard/logos/blender.svg",
    keyboardColor: "#f5792a",
  },
  [SkillNames.UNREAL]: {
    id: 6,
    name: "unreal",
    label: "Unreal Engine 5",
    shortDescription: "Real-time visualization",
    color: "#0e1128",
    icon: "/assets/logos/unreal.svg",
    keyboardIcon: "/assets/keyboard/logos/unreal.svg",
    keyboardColor: "#2b3a67",
  },
  [SkillNames.CLO]: {
    id: 7,
    name: "clo",
    label: "CLO 3D",
    shortDescription: "3D garment & product design",
    color: "#00a0e9",
    icon: "/assets/logos/clo.svg",
    keyboardIcon: "/assets/keyboard/logos/clo.svg",
    keyboardColor: "#00a0e9",
  },
  [SkillNames.SKETCHUP]: {
    id: 8,
    name: "sketchup",
    label: "SketchUp",
    shortDescription: "Set & environment modeling",
    color: "#005f9e",
    icon: "/assets/logos/sketchup.svg",
    keyboardIcon: "/assets/keyboard/logos/sketchup.svg",
    keyboardColor: "#0e86c8",
  },
  [SkillNames.LUMION]: {
    id: 9,
    name: "lumion",
    label: "Lumion",
    shortDescription: "Architectural visualization",
    color: "#f5a623",
    icon: "/assets/logos/lumion.svg",
    keyboardIcon: "/assets/keyboard/logos/lumion.svg",
    keyboardColor: "#f5a623",
  },
  [SkillNames.MOCHA]: {
    id: 10,
    name: "mocha",
    label: "Mocha Pro",
    shortDescription: "Planar tracking & roto",
    color: "#00aeef",
    icon: "/assets/logos/mocha.svg",
    keyboardIcon: "/assets/keyboard/logos/mocha.svg",
    keyboardColor: "#00aeef",
  },
  [SkillNames.SILHOUETTE]: {
    id: 11,
    name: "silhouette",
    label: "SilhouetteFX",
    shortDescription: "Roto, paint & compositing",
    color: "#f15a24",
    icon: "/assets/logos/silhouette.svg",
    keyboardIcon: "/assets/keyboard/logos/silhouette.svg",
    keyboardColor: "#f15a24",
  },
  [SkillNames.ELEMENT_3D]: {
    id: 12,
    name: "element3d",
    label: "Element 3D",
    shortDescription: "3D integration in After Effects",
    color: "#ff6b00",
    icon: "/assets/logos/element3d.svg",
    keyboardIcon: "/assets/keyboard/logos/element3d.svg",
    keyboardColor: "#ff6b00",
  },
  [SkillNames.GEOTRACKER]: {
    id: 13,
    name: "geotracker",
    label: "GeoTracker",
    shortDescription: "3D camera tracking",
    color: "#4caf50",
    icon: "/assets/logos/geotracker.svg",
    keyboardIcon: "/assets/keyboard/logos/geotracker.svg",
    keyboardColor: "#4caf50",
  },
  [SkillNames.RED_GIANT]: {
    id: 14,
    name: "redgiant",
    label: "Red Giant",
    shortDescription: "Look dev & VFX plugins",
    color: "#e2202c",
    icon: "/assets/logos/redgiant.svg",
    keyboardIcon: "/assets/keyboard/logos/redgiant.svg",
    keyboardColor: "#e2202c",
  },
  [SkillNames.HDR_LIGHT_STUDIO]: {
    id: 15,
    name: "hdrlightstudio",
    label: "HDR Light Studio",
    shortDescription: "Studio lighting & HDRI",
    color: "#ffb300",
    icon: "/assets/logos/hdrlightstudio.svg",
    keyboardIcon: "/assets/keyboard/logos/hdrlightstudio.svg",
    keyboardColor: "#ffb300",
  },
  [SkillNames.COMPOSITING]: {
    id: 16,
    name: "compositing",
    label: "Compositing",
    shortDescription: "Layered VFX finishing",
    color: "#8b5cf6",
    icon: "/assets/logos/compositing.svg",
    keyboardIcon: "/assets/keyboard/logos/compositing.svg",
    keyboardColor: "#8b5cf6",
  },
  [SkillNames.ROTOSCOPING]: {
    id: 17,
    name: "rotoscoping",
    label: "Rotoscoping",
    shortDescription: "Frame-accurate isolation",
    color: "#06b6d4",
    icon: "/assets/logos/rotoscoping.svg",
    keyboardIcon: "/assets/keyboard/logos/rotoscoping.svg",
    keyboardColor: "#06b6d4",
  },
  [SkillNames.RENDERING]: {
    id: 18,
    name: "rendering",
    label: "3D Rendering",
    shortDescription: "Photoreal product renders",
    color: "#10b981",
    icon: "/assets/logos/rendering.svg",
    keyboardIcon: "/assets/keyboard/logos/rendering.svg",
    keyboardColor: "#10b981",
  },
};

export type Experience = {
  id: number;
  // multiple periods = returning stint, avoids a duplicate card
  periods: { start: string; end: string }[];
  title: string;
  company: string;
  location?: string;
  type?: string;
  url?: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    periods: [{ start: "Jan 2025", end: "Present" }],
    title: "3D Product Visualizer",
    company: "BeautyBoss",
    location: "Saint Petersburg, FL, United States",
    type: "Remote",
    url: "https://www.beautyboss.com",
    description: [
      "Create 3D product models and high-quality renders for cosmetic items.",
      "Model and render products with merchant-specific branding for storefronts.",
      "Prepare clean, photoreal assets for e-commerce launches.",
    ],
    skills: [
      SkillNames.BLENDER,
      SkillNames.CLO,
      SkillNames.HDR_LIGHT_STUDIO,
      SkillNames.PHOTOSHOP,
      SkillNames.RENDERING,
    ],
  },
  {
    id: 2,
    periods: [{ start: "Jan 2022", end: "Present" }],
    title: "Motion Graphic Designer",
    company: "ShineOn",
    location: "Saint Petersburg, FL, United States",
    type: "Remote",
    url: "https://www.shineon.com",
    description: [
      "Create 3D product visualizations and VFX-based video mockups for the UGC video store.",
      "Apply customer designs to products, render final assets, and manage the full video delivery workflow.",
      "Support the team with additional motion graphics tasks when needed.",
    ],
    skills: [
      SkillNames.AFTER_EFFECTS,
      SkillNames.PREMIERE,
      SkillNames.ELEMENT_3D,
      SkillNames.MOCHA,
      SkillNames.BLENDER,
    ],
  },
  {
    id: 3,
    periods: [{ start: "Jan 2022", end: "Present" }],
    title: "Supervisor, Motion Graphic Designer",
    company: "Design Musketeer",
    location: "Jashore, Bangladesh",
    type: "Hybrid",
    url: "https://www.designmusketeer.com",
    description: [
      "Lead design projects for commercial and product visualization.",
      "Manage 3D visualization and motion graphics production for various commercial projects.",
      "Supervise the team and keep delivery aligned with client briefs.",
    ],
    skills: [
      SkillNames.AFTER_EFFECTS,
      SkillNames.BLENDER,
      SkillNames.SKETCHUP,
      SkillNames.LUMION,
      SkillNames.UNREAL,
    ],
  },
  {
    id: 4,
    periods: [{ start: "2021", end: "2021" }],
    title: "Motion Graphic Designer",
    company: "Chilli Communications",
    location: "Dhaka, Bangladesh",
    type: "On-site",
    description: [
      "Produced social media branding content for multiple client companies.",
      "Designed 3D event exhibition stalls and related visual assets.",
    ],
    skills: [
      SkillNames.AFTER_EFFECTS,
      SkillNames.ILLUSTRATOR,
      SkillNames.SKETCHUP,
    ],
  },
  {
    id: 5,
    periods: [{ start: "Jan 2021", end: "Aug 2021" }],
    title: "Motion Graphic Designer",
    company: "Tomato Web",
    location: "Dhaka, Bangladesh",
    type: "On-site",
    description: [
      "Produced social media videos and newscast visuals.",
      "Edited footage, color corrected, and added motion graphics.",
    ],
    skills: [
      SkillNames.PREMIERE,
      SkillNames.AFTER_EFFECTS,
      SkillNames.PHOTOSHOP,
    ],
  },
  {
    id: 6,
    periods: [{ start: "Feb 2020", end: "Dec 2020" }],
    title: "VFX Artist",
    company: "Studio Tik Tok",
    location: "Dhaka, Bangladesh",
    type: "On-site",
    url: "https://www.tiktok.studio",
    description: [
      "Rotoscoping, chroma keying, and compositing for film and OTT projects.",
    ],
    skills: [
      SkillNames.SILHOUETTE,
      SkillNames.MOCHA,
      SkillNames.AFTER_EFFECTS,
      SkillNames.PHOTOSHOP,
    ],
  },
  {
    id: 7,
    periods: [{ start: "Jan 2019", end: "Feb 2020" }],
    title: "VFX Artist",
    company: "MVRK Studios",
    location: "Dhaka, Bangladesh",
    type: "On-site",
    url: "https://www.mvrk.tv/vfx",
    description: [
      "Rotoscoping, clean plating, and keying for senior compositors.",
      "Contributed to shots for Apple TV and Amazon Prime productions.",
    ],
    skills: [
      SkillNames.SILHOUETTE,
      SkillNames.MOCHA,
      SkillNames.PHOTOSHOP,
      SkillNames.AFTER_EFFECTS,
    ],
  },
  {
    id: 8,
    periods: [{ start: "Jun 2018", end: "Sep 2018" }],
    title: "UI/UX Trainer",
    company: "Star Computer Systems",
    location: "Dhaka, Bangladesh",
    type: "On-site",
    url: "https://www.stargroup-bd.com",
    description: [
      "Conducted UI/UX design training and supervised student projects.",
    ],
    skills: [SkillNames.ILLUSTRATOR, SkillNames.PHOTOSHOP],
  },
  {
    id: 9,
    periods: [{ start: "Mar 2015", end: "Dec 2015" }],
    title: "Software Consultant",
    company: "JABA IT Ltd.",
    location: "Dhaka, Bangladesh",
    type: "On-site",
    url: "https://www.jabait.com",
    description: [
      "Managed software proposal documentation and client review reports.",
    ],
    skills: [],
  },
];

