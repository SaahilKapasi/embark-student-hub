import { UniversityCard, UniversityData } from "./UniversityCard";

const universities: UniversityData[] = [
  {
    id: "stanford",
    name: "Stanford University",
    location: "Stanford, California",
    image: "https://images.unsplash.com/photo-1676354555185-df7a1eb39608?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFuZm9yZCUyMHVuaXZlcnNpdHklMjBjYW1wdXN8ZW58MXx8fHwxNzU4NzQ5NDE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ranking: 3,
    studentCount: 17249,
    clubCount: 200,
    courseCount: 650,
    residenceCount: 30,
    researchCount: 75,
    rating: 4.8,
    description: "A leading research university known for innovation in technology, entrepreneurship, and academic excellence.",
    tags: ["Technology", "Innovation", "Research", "Entrepreneurship"]
  },
  {
    id: "harvard",
    name: "Harvard University",
    location: "Cambridge, Massachusetts",
    image: "https://images.unsplash.com/photo-1542843895-1b55d9f8ece8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXJ2YXJkJTIwdW5pdmVyc2l0eSUyMGNhbXB1c3xlbnwxfHx8fDE3NTg2OTM2NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ranking: 1,
    studentCount: 23731,
    clubCount: 180,
    courseCount: 700,
    residenceCount: 28,
    researchCount: 85,
    rating: 4.9,
    description: "America's oldest university, renowned for its liberal arts education and influential alumni network.",
    tags: ["Liberal Arts", "Medicine", "Law", "Business"]
  },
  {
    id: "mit",
    name: "MIT",
    location: "Cambridge, Massachusetts", 
    image: "https://images.unsplash.com/photo-1643689011041-f6b131e8bb95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXQlMjB1bml2ZXJzaXR5JTIwY2FtcHVzfGVufDF8fHx8MTc1ODc0OTQyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ranking: 2,
    studentCount: 11858,
    clubCount: 150,
    courseCount: 450,
    residenceCount: 18,
    researchCount: 90,
    rating: 4.7,
    description: "World-renowned for engineering, technology, and scientific research with a hands-on learning approach.",
    tags: ["Engineering", "Technology", "Science", "Innovation"]
  },
  {
    id: "yale",
    name: "Yale University",
    location: "New Haven, Connecticut",
    image: "https://images.unsplash.com/photo-1723720398978-2087a8337509?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YWxlJTIwdW5pdmVyc2l0eSUyMGNhbXB1c3xlbnwxfHx8fDE3NTg3NDk0MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ranking: 5,
    studentCount: 13433,
    clubCount: 170,
    courseCount: 550,
    residenceCount: 26,
    researchCount: 65,
    rating: 4.6,
    description: "Historic Ivy League institution known for its undergraduate liberal arts program and strong traditions.",
    tags: ["Liberal Arts", "History", "Drama", "Politics"]
  },
  {
    id: "berkeley",
    name: "UC Berkeley",
    location: "Berkeley, California",
    image: "https://images.unsplash.com/photo-1711615397077-78ad339130ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FsaWZvcm5pYSUyMGJlcmtlbGV5JTIwY2FtcHVzfGVufDF8fHx8MTc1ODc0OTQyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ranking: 4,
    studentCount: 45036,
    clubCount: 300,
    courseCount: 800,
    residenceCount: 35,
    researchCount: 100,
    rating: 4.5,
    description: "Top public research university known for academic excellence, diversity, and social activism.",
    tags: ["Public Research", "Diversity", "Engineering", "Business"]
  },
  {
    id: "princeton",
    name: "Princeton University",
    location: "Princeton, New Jersey",
    image: "https://images.unsplash.com/photo-1623631633177-7fbb2d3ae94d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmluY2V0b24lMjB1bml2ZXJzaXR5JTIwY2FtcHVzfGVufDF8fHx8MTc1ODc0OTQyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ranking: 6,
    studentCount: 5321,
    clubCount: 120,
    courseCount: 400,
    residenceCount: 22,
    researchCount: 45,
    rating: 4.8,
    description: "Elite undergraduate-focused university with beautiful Gothic campus and strong academic traditions.",
    tags: ["Undergraduate Focus", "Liberal Arts", "Finance", "Physics"]
  }
];

export function UniversityGrid() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Choose Your University
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore top universities and discover everything they have to offer - from student clubs and courses to research opportunities and campus life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {universities.map((university) => (
            <UniversityCard
              key={university.id}
              university={university}
            />
          ))}
        </div>
      </div>
    </section>
  );
}