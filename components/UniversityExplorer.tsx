'use client';

import { ArrowLeft, Users, Home, BookOpen, UserCheck, FlaskConical, Calendar, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { UniversityData } from "./UniversityCard";
import { usePathname, useRouter } from "next/navigation";

export function UniversityExplorer() {
  const router = useRouter();
  const universityId = usePathname().split("/").filter(Boolean).pop();
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
            <CategoryCard
              title="Student Clubs"
              description={`Join from ${university.clubCount}+ active student organizations at ${university.name}.`}
              icon={Users}
              count={university.clubCount}
              countLabel="Active Clubs"
            />
            <CategoryCard
              title="Residences"
              description={`Explore ${university.residenceCount} residence halls and housing options.`}
              icon={Home}
              count={university.residenceCount}
              countLabel="Residence Halls"
            />
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
            <CategoryCard
              title="Events & Activities"
              description="Stay updated with campus events, workshops, and social activities."
              icon={Calendar}
              count={150}
              countLabel="Monthly Events"
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