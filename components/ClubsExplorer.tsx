'use client';

import { ArrowLeft, Users, Trophy, Lightbulb, Code, Music, Gamepad } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { universities } from "@/data/universities";
import { useRouter, useParams } from "next/navigation";

export function ClubsExplorer() {
  const router = useRouter();
  const { university: universityId } = useParams();
  const university = universities.find(u => u.id === universityId)!;

  const clubs = [
    {
      name: "UofT Robotics",
      slug: "uoft-robotics",
      category: "STEM",
      members: 140,
      icon: Lightbulb,
      image: "https://cdn.i-scmp.com/sites/default/files/d8/images/canvas/2025/11/19/c69ff2d1-90b7-47c1-bd6e-52742575c5d2_9ffbd4c0.jpg",
      link: "https://robotics.utoronto.ca/"
    },
    {
      name: "DECA U Toronto",
      slug: "deca-u-toronto",
      category: "Business",
      members: 420,
      icon: Trophy,
      image: "https://cdn.prod.website-files.com/600faaecb03ce57f6fa98050/66bcb8146c596c000d246f4c_DECA%20is%20for%20All_Spotlight.webp",
      link: "https://sop.utoronto.ca/group/ace-utsg/"
    },
    {
      name: "Skule Engineering Society",
      slug: "skule-engineering",
      category: "Engineering",
      members: 1200,
      icon: Code,
      image: "https://stores.skule.ca/cdn/shop/products/IMG_1869.png?v=1633120145&width=1920",
      link: "https://skule.ca/"
    },
    {
      name: "UofT Choir",
      slug: "uoft-choir",
      category: "Arts",
      members: 180,
      icon: Music,
      image: "https://www.washingtonperformingarts.org/wp-content/uploads/2023/12/about-the-choir-RS89401_2023LivingTheDream_FEB5_00758-lpr.webp",
      link: "https://hhsingers.sa.utoronto.ca/"
    },
    {
      name: "Blue Devils Gaming",
      slug: "blue-devils-gaming",
      category: "Esports",
      members: 600,
      icon: Gamepad,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIe9oqSqALyMSr3kMBA4lJJlnOz4wJBpnKNw&s",
      link: "https://uoftesports.ca/"
    },
  ];

  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <div className="relative w-full h-56 sm:h-64 lg:h-80 overflow-hidden border-b mb-10">
        <img
          src={university.image}
          alt={university.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-transparent" />

        <div className="absolute top-6 left-6 flex items-center gap-3">
          <Button
            variant="outline"
            onClick={() => router.push(`/universities/${university.id}`)}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>

          <Badge className="bg-primary text-primary-foreground">
            {university.name}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <h1 className="text-3xl font-bold mb-3">Student Clubs</h1>
        <p className="text-muted-foreground mb-10">
          With over {university.clubCount}+ clubs, explore communities ranging from robotics and gaming to arts, cultural organizations, and entrepreneurship.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clubs.map((club, idx) => (
            <div
              key={idx}
              className="border rounded-xl hover:shadow-lg transition cursor-pointer overflow-hidden group"
            >
              {/* Card Image */}
              <div className="relative h-40 w-full bg-muted flex items-center justify-center overflow-hidden">
                {club.image ? (
                  <img
                    src={club.image}
                    alt={club.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                ) : (
                  <club.icon className="w-14 h-14 text-muted-foreground" />
                )}
              </div>

              {/* Card Body */}
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-1">{club.name}</h2>
                <Badge variant="secondary">{club.category}</Badge>

                <p className="text-muted-foreground text-sm mt-4">
                  {club.members.toLocaleString()} members participating in events, competitions, and leadership activities.
                </p>

                <Button
                  variant="ghost"
                  className="w-full mt-4 justify-between"
                  disabled={!club.link}
                  onClick={() => club.link && window.open(club.link, "_blank", "noopener,noreferrer")}
                >
                  {club.link ? "Visit Website" : "No Website Available"}
                  <Users className="w-4 h-4 opacity-70" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
