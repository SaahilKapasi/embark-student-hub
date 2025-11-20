'use client';

import { ArrowRight, GraduationCap, Globe, Users, Search } from "lucide-react";
import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <div className="bg-linear-to-br from-primary/5 to-accent/30 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              Discover Your Perfect University Match
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Explore top universities and everything they offer. Compare clubs, courses, research opportunities, housing, and campus life across leading institutions to find your ideal academic home.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="flex items-center gap-2" onClick={() => document.getElementById("universityGrid")?.scrollIntoView({behavior: "smooth"})}>
                Browse Universities
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => window.open("https://www.embark.ca/")}>
                How Embark Works
              </Button>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-8 border-t">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-3">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm text-muted-foreground">Universities</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-3">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold">10k+</div>
                <div className="text-sm text-muted-foreground">Student Clubs</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-3">
                  <Search className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold">25k+</div>
                <div className="text-sm text-muted-foreground">Courses</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-3">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold">500k+</div>
                <div className="text-sm text-muted-foreground">Students Helped</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1693011142814-aa33d7d1535c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzU4NzQ1OTc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Students on campus"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 border max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="font-medium">Live Activity</span>
              </div>
              <p className="text-sm text-muted-foreground">
                347 students exploring universities right now
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}