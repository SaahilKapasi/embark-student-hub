import { UniversityCard } from "./UniversityCard";
import { universities } from "@/data/universities";

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