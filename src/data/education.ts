export type Education = {
  id: number;
  qualification: string;
  institution: string;
  location: string;
  group?: string;
  note?: string;
};

export type Course = {
  id: number;
  title: string;
  provider: string;
  year: string;
  topics?: string;
};

export const EDUCATION: Education[] = [
  {
    id: 1,
    qualification: "HND in Marine Nautical Science",
    institution: "South Tyneside College",
    location: "Tyne & Wear, United Kingdom",
    note: "Completion year not listed on the CV.",
  },
  {
    id: 2,
    qualification: "HSC",
    institution: "Green Field College",
    location: "Mirpur, Dhaka",
    group: "Science",
  },
  {
    id: 3,
    qualification: "SSC",
    institution: "Dr. Shohidullah School & College",
    location: "Mirpur, Dhaka",
    group: "Science",
  },
];

export const COURSES: Course[] = [
  {
    id: 1,
    title: "Rotoscoping, Compositing & VFX",
    provider: "MVK Lair",
    year: "2018",
  },
  {
    id: 2,
    title: "3D Animation & Filmmaking",
    provider: "Bangladesh Hi-Tech Park Authority",
    year: "2016",
  },
  {
    id: 3,
    title: "Web Design & Development",
    provider: "Genuity Learning Systems",
    year: "2012",
    topics: "UI/UX, HTML, CSS, JavaScript, jQuery",
  },
];
