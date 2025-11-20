'use client';

import { ArrowLeft, Home, DollarSign, Calendar, Utensils, Users, DoorOpen } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { universities } from "@/data/universities";
import { useRouter, useParams } from "next/navigation";

export function ResidencesExplorer() {
  const router = useRouter();
  const { university: universityId } = useParams();
  const university = universities.find(u => u.id === universityId)!;

  const residences = [
    {
      name: "Campus One Residence",
      price: "$30,380 per school year",
      lease_term: "September–May",
      meal_plan: "Included",
      type: "Apartment",
      gender_policy: "Co-ed",
      description: "Modern student residence with amenities, study spaces, close to campus.",
      image: "https://k-cap.com/wp-content/uploads/2018/09/CampusOne-Exterior-Cut2.jpg",
      link: "https://live-campusone.ca/"
    },
    {
      name: "St. Michael’s College Residence",
      price: "$18,500 – $21,800 per academic year",
      lease_term: "September–April",
      meal_plan: "Optional",
      type: "Dormitory",
      gender_policy: "Single gender",
      description: "Traditional residence, strong academic support, historic campus location.",
      image: "https://stmikes.utoronto.ca/wp-content/uploads/2025/02/brennan-hall-summer-door-open-IMG_3213-1.png",
      link: "https://stmikes.utoronto.ca/community/st-michaels-college-residence/residence-buildings"
    },
    {
      name: "Trinity College Residence",
      price: "$19,150 per year",
      lease_term: "September–April",
      meal_plan: "Optional",
      type: "Dormitory",
      gender_policy: "Co-ed",
      description: "Residential college offering vibrant community environment with modern facilities.",
      image: "https://www.trinity.utoronto.ca/wp-content/uploads/2019/01/trinity-home-wide-01.jpg",
      link: "https://www.trinity.utoronto.ca/engage/residence/"
    },
    {
      name: "Victoria College Residence",
      price: "$16,510 per year",
      lease_term: "September–April",
      meal_plan: "Optional",
      type: "Dormitory",
      gender_policy: "Co-ed",
      description: "Historic college with community house atmosphere and updated amenities.",
      image: "https://vic.utoronto.ca/assets/Images/Vic-Registrar/photo-slider-3.jpg",
      link: "https://www.vic.utoronto.ca/current-students/campus-life/residence-life"
    },
    {
      name: "New College Residence",
      price: "$21,330 per year",
      lease_term: "September–April",
      meal_plan: "Required",
      type: "Dormitory",
      gender_policy: "Co-ed",
      description: "Large residence hall connected to athletic and dining centre, lively environment.",
      image: "https://torontosocietyofarchitects.ca/wp-content/uploads/2022/08/wetmore-wilson-hall-university-toronto-01-toronto-society-architects-scott-norsworthy.jpg",
      link: "https://www.newcollege.utoronto.ca/student-experience/living-in-residence/"
    }
  ];
  

  return (
    <div className="min-h-screen bg-background">

      {/* Header / Hero */}
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

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <h1 className="text-3xl font-bold mb-3">Residences</h1>

        <p className="text-muted-foreground mb-10">
          Compare student housing options including pricing, room types, policies, and amenities.
        </p>

        {/* Residence Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {residences.map((res, index) => (
            <div
              key={index}
              className="border rounded-xl hover:shadow-lg transition cursor-pointer overflow-hidden group bg-card"
            >
              {/* Image */}
              <div className="relative h-40 w-full overflow-hidden bg-muted">
                {res.image ? (
                  <img
                    src={res.image}
                    alt={res.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                ) : (
                  <Home className="w-10 h-10 text-muted-foreground mx-auto mt-12" />
                )}
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{res.name}</h2>
                <Badge>{res.type}</Badge>

                <p className="text-muted-foreground text-sm mt-4 mb-4">
                  {res.description}
                </p>

                {/* Info Row */}
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    <span>{res.price}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Lease: {res.lease_term}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Utensils className="w-4 h-4" />
                    <span>Meal Plan: {res.meal_plan}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>Gender: {res.gender_policy}</span>
                  </div>
                </div>

                {/* Action Button */}
                <Button
                  variant="ghost"
                  className="w-full mt-5 justify-between"
                  disabled={!res.link}
                  onClick={() => res.link && window.open(res.link, "_blank", "noopener,noreferrer")}
                >
                  {res.link ? "Visit Website" : "No Website Available"}
                  <DoorOpen className="w-4 h-4 opacity-70" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
