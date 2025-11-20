export interface UniversityData {
  id: string;
  name: string;
  location: string;
  image: string;
  ranking: number;
  studentCount: number;
  clubCount: number;
  courseCount: number;
  residenceCount: number;
  researchCount: number;
  rating: number;
  description: string;
  tags: string[];
}

export const universities: UniversityData[] = [
  {
    id: "uoft",
    name: "University of Toronto",
    location: "Toronto, Ontario",
    image: "https://images.unsplash.com/photo-1602173979902-52fe25a8057e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFuZm9yZCUyMHVuaXZlcnNpdHklMjBjYW1wdXN8ZW58MXx8fHwxNzU4NzQ5NDE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ranking: 1,
    studentCount: 97066,
    clubCount: 1000,
    courseCount: 700,
    residenceCount: 11,
    researchCount: 250,
    rating: 4.7,
    description: "Canada’s leading research university, known for academic excellence, global diversity, and innovation across all disciplines.",
    tags: ["Research", "Engineering", "Computer Science", "Diversity"]
  },
  {
    id: "waterloo",
    name: "University of Waterloo",
    location: "Waterloo, Ontario",
    image: "https://images.unsplash.com/photo-1745274139396-3632313587fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFuZm9yZCUyMHVuaXZlcnNpdHklMjBjYW1wdXN8ZW58MXx8fHwxNzU4NzQ5NDE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ranking: 2,
    studentCount: 42356,
    clubCount: 300,
    courseCount: 550,
    residenceCount: 10,
    researchCount: 190,
    rating: 4.6,
    description: "Known for its world-class engineering, co-op programs, and entrepreneurship ecosystem shaping the tech leaders of tomorrow.",
    tags: ["Engineering", "Co-op", "Innovation", "Computer Science"]
  },
  {
    id: "ubc",
    name: "University of British Columbia",
    location: "Vancouver, British Columbia",
    image: "https://images.unsplash.com/photo-1603857365671-93cd96dc1df8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFuZm9yZCUyMHVuaXZlcnNpdHklMjBjYW1wdXN8ZW58MXx8fHwxNzU4NzQ5NDE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ranking: 3,
    studentCount: 72000,
    clubCount: 350,
    courseCount: 600,
    residenceCount: 14,
    researchCount: 210,
    rating: 4.7,
    description: "A top global institution centered on sustainability, research, and a vibrant student experience along the Pacific coast.",
    tags: ["Sustainability", "Research", "Science", "Global Impact"]
  } 
];