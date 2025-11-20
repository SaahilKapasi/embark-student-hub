'use client';

import { ArrowLeft, Users, Home, BookOpen, UserCheck, FlaskConical, MessageSquare, Award } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { UniversityData, universities } from "@/data/universities";
import { useParams, useRouter } from "next/navigation";

export function UniversityExplorer() {
  const router = useRouter();
  const { university: universityId } = useParams();
  const university = universities.find(u => u.id === universityId)!;

  return (
    <div className="min-h-screen bg-background">
      {/* University Header */}
      <div className="bg-linear-to-br from-primary/5 to-accent/30 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <Button 
              variant="outline" 
              onClick={() => router.push('/')} 
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Universities
            </Button>
            
            <Button 
              onClick={() => router.push('/social')}
              className="flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              View Social Feed
            </Button>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-4">
                <h1 className="text-3xl lg:text-4xl font-bold">
                  {university.name}
                </h1>
                <Badge className="bg-primary text-primary-foreground">
                  #{university.ranking} Ranked
                </Badge>
              </div>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {university.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {university.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-white/50 rounded-lg">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold">{university.studentCount.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">Students</div>
                </div>
                <div className="text-center p-4 bg-white/50 rounded-lg">
                  <BookOpen className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold">{university.courseCount}+</div>
                  <div className="text-sm text-muted-foreground">Courses</div>
                </div>
                <div className="text-center p-4 bg-white/50 rounded-lg">
                  <FlaskConical className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold">{university.researchCount}+</div>
                  <div className="text-sm text-muted-foreground">Research Labs</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={university.image} 
                  alt={`${university.name} campus`}
                  className="w-full h-64 lg:h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section - but university-specific */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Explore {university.name}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover everything {university.name} has to offer. From student organizations to academic programs and research opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              onClick={() => router.push(`/universities/${university.id}/clubs`)}
              className="cursor-pointer"
            >
              <CategoryCard
                title="Student Clubs"
                description={`Join from ${university.clubCount}+ active student organizations at ${university.name}.`}
                icon={Users}
                count={university.clubCount}
                countLabel="Active Clubs"
              />
            </div>

            <div
              onClick={() => router.push(`/universities/${university.id}/residences`)}
              className="cursor-pointer"
            >
              <CategoryCard
                title="Residences"
                description={`Explore ${university.residenceCount} residence halls and housing options.`}
                icon={Home}
                count={university.residenceCount}
                countLabel="Residence Halls"
              />
            </div>

            <CategoryCard
              title="Courses"
              description={`Browse ${university.courseCount}+ courses across all departments and programs.`}
              icon={BookOpen}
              count={university.courseCount}
              countLabel="Available Courses"
            />
            <CategoryCard
              title="Professors"
              description="Learn about faculty members, their research, and office hours."
              icon={UserCheck}
              count={Math.floor(university.studentCount / 20)}
              countLabel="Faculty Members"
            />
            <CategoryCard
              title="Research Opportunities"
              description={`Explore ${university.researchCount}+ research labs and undergraduate opportunities.`}
              icon={FlaskConical}
              count={university.researchCount}
              countLabel="Research Labs"
            />

            {/* Scholarships instead of Events & Activities */}
            <CategoryCard
              title="Scholarships"
              description="Discover hundreds of scholarships in our partenered scholarship finder!"
              icon={Award}
              count={150}
              countLabel="Scholarship Programs"
            />
          </div>
        </div>
      </section>

      {/* University-specific Featured Content */}
      <UniversityFeaturedSection university={university} />
    </div>
  );
}

// Mini category card component for university explorer
function CategoryCard({ title, description, icon: Icon, count, countLabel }: {
  title: string;
  description: string;
  icon: any;
  count: number;
  countLabel: string;
}) {
  return (
    <div className="group hover:shadow-lg transition-all duration-300 cursor-pointer p-6 bg-card rounded-lg border">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div>
          <div className="text-2xl font-bold">{count}+</div>
          <div className="text-sm text-muted-foreground">{countLabel}</div>
        </div>
      </div>
      
      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground mb-4">
        {description}
      </p>
      <Button variant="outline" className="w-full">
        Explore {title}
      </Button>
    </div>
  );
}

// University-specific featured section
function UniversityFeaturedSection({ university }: { university: UniversityData }) {
  // This would normally fetch university-specific data
  // For now, we'll customize based on university
  
  const getUniversitySpecificContent = () => {
    switch (university.id) {
      case "stanford":
        return {
          featuredClub: "Stanford Entrepreneurship Club",
          topCourse: "CS 106A: Programming Methodology",
          speciality: "Innovation & Technology"
        };
      case "harvard":
        return {
          featuredClub: "Harvard Business Review",
          topCourse: "Government 1540: International Relations",
          speciality: "Liberal Arts & Leadership"
        };
      case "mit":
        return {
          featuredClub: "MIT Robotics Team",
          topCourse: "6.001: Introduction to EECS",
          speciality: "Engineering & Technology"
        };
      default:
        return {
          featuredClub: "Student Government",
          topCourse: "Introduction to Psychology",
          speciality: "Academic Excellence"
        };
    }
  };

  const content = getUniversitySpecificContent();

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Featured at {university.name}
          </h2>
          <p className="text-muted-foreground">
            Popular offerings and opportunities currently trending at {university.name}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="font-semibold mb-2">Featured Club</h3>
            <p className="text-lg font-medium text-primary mb-2">{content.featuredClub}</p>
            <p className="text-sm text-muted-foreground mb-4">
              Join the most active club in {content.speciality}
            </p>
            <Button size="sm">Learn More</Button>
          </div>

          <div className="bg-card p-6 rounded-lg border">
            <h3 className="font-semibold mb-2">Top Course</h3>
            <p className="text-lg font-medium text-primary mb-2">{content.topCourse}</p>
            <p className="text-sm text-muted-foreground mb-4">
              Highest rated course this semester
            </p>
            <Button size="sm">View Course</Button>
          </div>

          <div className="bg-card p-6 rounded-lg border">
            <h3 className="font-semibold mb-2">Research Focus</h3>
            <p className="text-lg font-medium text-primary mb-2">{content.speciality}</p>
            <p className="text-sm text-muted-foreground mb-4">
              Leading research area at {university.name}
            </p>
            <Button size="sm">Explore Research</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

