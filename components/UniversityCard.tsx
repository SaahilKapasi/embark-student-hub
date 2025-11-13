'use client';

import { MapPin, Users, Star, ChevronRight } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

interface UniversityData {
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

interface UniversityCardProps {
  university: UniversityData;
}

export function UniversityCard({ university }: UniversityCardProps) {
  const router = useRouter();

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden transform hover:-translate-y-1" onClick={() => router.push(`/universities/${university.id}`)}>
      <div className="relative h-48 overflow-hidden rounded-t-xl">
        <img 
          src={university.image} 
          alt={`${university.name} campus`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />

        
        {/* Ranking badge */}
        <Badge className="absolute top-4 left-4 bg-white/90 text-primary border-0">
          #{university.ranking} Ranked
        </Badge>
        
        {/* Rating */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-lg px-2 py-1 flex items-center gap-1">
          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium text-primary">{university.rating}</span>
        </div>

        {/* Student count overlay */}
        <div className="absolute bottom-4 left-4 text-white">
          <div className="flex items-center gap-1 text-sm">
            <Users className="w-4 h-4" />
            <span>{university.studentCount.toLocaleString()} students</span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
              {university.name}
            </h3>
            <div className="flex items-center text-muted-foreground text-sm">
              <MapPin className="w-3 h-3 mr-1" />
              {university.location}
            </div>
          </div>
        </div>

        <p className="text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
          {university.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {university.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
          {university.tags.length > 2 && (
            <Badge variant="outline" className="text-xs">
              +{university.tags.length - 2} more
            </Badge>
          )}
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Clubs</span>
            <span className="font-medium">{university.clubCount}+</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Courses</span>
            <span className="font-medium">{university.courseCount}+</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Residences</span>
            <span className="font-medium">{university.residenceCount}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Research</span>
            <span className="font-medium">{university.researchCount}+</span>
          </div>
        </div>

        <Button 
          variant="ghost" 
          className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground transition-all"
        >
          Explore {university.name}
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </Card>
  );
}

export type { UniversityData };