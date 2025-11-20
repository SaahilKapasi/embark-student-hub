'use client';

import { useState, useMemo } from "react";
import { Search, TrendingUp, User } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { SocialFeedPost, SocialPost } from "./SocialFeedPost";

// Mock data for social media posts
const mockPosts: SocialPost[] = [
  {
    id: "1",
    platform: "reddit",
    author: {
      name: "StanfordStudent2024",
      username: "StanfordStudent2024",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150"
    },
    content: {
      text: "Just got accepted to Stanford's CS program! The campus visit was incredible. The innovation labs are mind-blowing and the professors are so approachable. Anyone else starting fall 2024? Looking for study groups and dormmate recommendations! 🎉",
      images: ["https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600"]
    },
    engagement: { likes: 342, comments: 45, shares: 23 },
    timestamp: "2h ago",
    university: "Stanford University",
    subreddit: "stanford",
    hashtags: ["Stanford", "CS", "Fall2024"]
  },
  {
    id: "2",
    platform: "twitter",
    author: {
      name: "Harvard Admissions",
      username: "Harvard",
      verified: true,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
    },
    content: {
      text: "📚 Harvard's new interdisciplinary program in AI Ethics launches this fall! We're looking for curious minds who want to shape the future of artificial intelligence responsibly.\n\nApplications open March 1st. This is your chance to be part of something groundbreaking. #HarvardAI #Ethics"
    },
    engagement: { likes: 1240, comments: 156, shares: 89 },
    timestamp: "4h ago",
    university: "Harvard University",
    hashtags: ["HarvardAI", "Ethics", "Innovation"]
  },
  {
    id: "3",
    platform: "instagram",
    author: {
      name: "MIT Student Life",
      username: "mitstudentlife",
      verified: true,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150"
    },
    content: {
      text: "Weekend at MIT: Robotics competition, late night problem sets, and the best pizza in Cambridge 🍕🤖\n\n#MITLife #Robotics #StudentLife",
      images: [
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400",
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400"
      ]
    },
    engagement: { likes: 892, comments: 67, shares: 34 },
    timestamp: "6h ago",
    university: "MIT",
    hashtags: ["MITLife", "Robotics", "StudentLife"]
  },
  {
    id: "4",
    platform: "reddit",
    author: {
      name: "YaleProspective",
      username: "YaleProspective",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150"
    },
    content: {
      text: "Honest review of Yale after my first semester:\n\nPros:\n- Amazing professors who actually care about teaching\n- Incredible library system (Sterling is a masterpiece)\n- Residential college system creates real community\n- New Haven has great food (seriously!)\n\nCons:\n- Winters are brutal\n- Some students can be pretentious\n- Expensive even with aid\n\nOverall: 9/10 would choose again. The education quality is unmatched.",
      images: ["https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600"]
    },
    engagement: { likes: 156, comments: 23, shares: 12 },
    timestamp: "8h ago",
    university: "Yale University",
    subreddit: "yale",
    hashtags: ["Yale", "Review", "FirstYear"]
  },
  {
    id: "5",
    platform: "linkedin",
    author: {
      name: "Berkeley Engineering",
      username: "berkeleyengineering",
      verified: true,
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150"
    },
    content: {
      text: "UC Berkeley Engineering students just won first place at the International Solar Car Challenge! 🏆☀️\n\nOur team spent 18 months designing and building 'Golden Bear,' which achieved record efficiency levels. This victory showcases the innovation and dedication of our students.\n\nProud to be part of a university that pushes boundaries in sustainable technology. Congratulations to the entire team! #Berkeley #Engineering #Sustainability #Innovation"
    },
    engagement: { likes: 567, comments: 89, shares: 145 },
    timestamp: "12h ago",
    university: "UC Berkeley",
    hashtags: ["Berkeley", "Engineering", "Sustainability", "Innovation"]
  },
  {
    id: "6",
    platform: "twitter",
    author: {
      name: "Princeton Foodie",
      username: "PrincetonFoodie",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150"
    },
    content: {
      text: "Princeton dining hall rankings (no cap):\n\n1. Forbes (that salmon tho 👌)\n2. Whitman (consistency king)\n3. CJL (late night savior)\n4. Rocky/Mathey (classic vibes)\n5. Butler (we don't talk about Butler)\n\nFight me in the comments 😂 #Princeton #DiningHall #StudentLife"
    },
    engagement: { likes: 234, comments: 78, shares: 23 },
    timestamp: "1d ago",
    university: "Princeton University",
    hashtags: ["Princeton", "DiningHall", "StudentLife"]
  },
  {
    id: "7",
    platform: "reddit",
    author: {
      name: "BerkeleyTransfer",
      username: "BerkeleyTransfer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
    },
    content: {
      text: "Transfer student tips for UC Berkeley (from a successful transfer):\n\n📚 Academic prep:\n- Community college courses that articulate well\n- Strong GPA (3.7+ for competitive majors)\n- IGETC completion\n\n🌟 Personal statement:\n- Tell YOUR story, don't try to be someone else\n- Show passion for your major\n- Explain any obstacles you've overcome\n\n💡 Pro tips:\n- Apply to multiple UCs as backup\n- TAG program is your friend\n- Start early on applications\n\nYou got this! Berkeley is amazing and worth the effort. The diversity of thought here is incredible.",
      images: ["https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600"]
    },
    engagement: { likes: 445, comments: 67, shares: 89 },
    timestamp: "1d ago",
    university: "UC Berkeley",
    subreddit: "berkeley",
    hashtags: ["Berkeley", "Transfer", "CollegeAdmissions"]
  },
  {
    id: "8",
    platform: "instagram",
    author: {
      name: "Stanford Daily",
      username: "stanforddaily",
      verified: true,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150"
    },
    content: {
      text: "BREAKING: Stanford announces new $2B initiative for climate research 🌍\n\nThe Stanford Doerr School of Sustainability will lead groundbreaking research in:\n🔹 Renewable energy systems\n🔹 Carbon capture technology\n🔹 Sustainable agriculture\n🔹 Climate policy\n\nThis is why we're proud to be Cardinal! #Stanford #Climate #Sustainability #Research",
      images: [
        "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=400",
        "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400"
      ]
    },
    engagement: { likes: 1567, comments: 234, shares: 432 },
    timestamp: "2d ago",
    university: "Stanford University",
    hashtags: ["Stanford", "Climate", "Sustainability", "Research"]
  },
  {
    id: "9",
    platform: "tiktok",
    author: {
      name: "MITHacks",
      username: "mithacks",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150"
    },
    content: {
      text: "POV: You're pulling an all-nighter at MIT and suddenly realize you've invented a new algorithm for quantum computing 🤯\n\n#MIT #AllNighter #QuantumComputing #StudentLife #Innovation #TechTok"
    },
    engagement: { likes: 12400, comments: 567, shares: 890 },
    timestamp: "2d ago",
    university: "MIT",
    hashtags: ["MIT", "AllNighter", "QuantumComputing", "StudentLife", "Innovation", "TechTok"]
  },
  {
    id: "10",
    platform: "linkedin",
    author: {
      name: "Harvard Business School",
      username: "harvardbusiness",
      verified: true,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
    },
    content: {
      text: "Congratulations to our MBA Class of 2024 for achieving a 98% job placement rate within 3 months of graduation! 🎉\n\nTop industries:\n• Consulting (32%)\n• Technology (28%)\n• Finance (22%)\n• Healthcare (10%)\n• Other (8%)\n\nAverage starting salary: $175,000\n\nProud of our graduates who are making impact across industries worldwide. The future is bright! #HBS #MBA #CareerSuccess #Leadership"
    },
    engagement: { likes: 2340, comments: 156, shares: 678 },
    timestamp: "3d ago",
    university: "Harvard University",
    hashtags: ["HBS", "MBA", "CareerSuccess", "Leadership"]
  }
];

const trendingTopics = [
  { name: "Fall 2024 Admissions", count: "2.3k posts" },
  { name: "Campus Tours", count: "1.8k posts" },
  { name: "Research Opportunities", count: "1.2k posts" },
  { name: "Student Housing", count: "987 posts" },
  { name: "Study Abroad", count: "743 posts" }
];

export function SocialFeed() {
  const [searchQuery, setSearchQuery] = useState("");
  const [platformFilter, setPlatformFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("recent");

  const filteredPosts = useMemo(() => {
    let filtered = mockPosts;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(post =>
        post.content.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.university?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.hashtags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Filter by platform
    if (platformFilter !== "all") {
      filtered = filtered.filter(post => post.platform === platformFilter);
    }

    // Sort posts
    if (sortBy === "popular") {
      filtered = [...filtered].sort((a, b) => 
        (b.engagement.likes + b.engagement.comments + b.engagement.shares) - 
        (a.engagement.likes + a.engagement.comments + a.engagement.shares)
      );
    }

    return filtered;
  }, [searchQuery, platformFilter, sortBy]);

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            University Social Feed
          </h1>
          <p className="text-lg text-muted-foreground">
            Real conversations and content from students, alumni, and universities across social media platforms.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Search and Filters */}
            <Card className="p-4">
              <div className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search posts..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Platform</label>
                  <Select value={platformFilter} onValueChange={setPlatformFilter}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Platforms</SelectItem>
                      <SelectItem value="reddit">Reddit</SelectItem>
                      <SelectItem value="twitter">Twitter</SelectItem>
                      <SelectItem value="instagram">Instagram</SelectItem>
                      <SelectItem value="linkedin">LinkedIn</SelectItem>
                      <SelectItem value="tiktok">TikTok</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Sort By</label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="recent">Most Recent</SelectItem>
                      <SelectItem value="popular">Most Popular</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </Card>

            {/* Trending Topics */}
            <Card className="p-4">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">Trending Topics</h3>
              </div>
              <div className="space-y-3">
                {trendingTopics.map((topic) => (
                  <div key={topic.name} className="cursor-pointer hover:bg-muted/50 p-2 rounded-lg transition-colors">
                    <div className="font-medium text-sm">{topic.name}</div>
                    <div className="text-xs text-muted-foreground">{topic.count}</div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Platform Stats */}
            <Card className="p-4">
              <h3 className="font-semibold mb-4">Platform Activity</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm flex items-center gap-2">
                    🔴 Reddit
                  </span>
                  <Badge variant="secondary" className="text-xs">
                    {mockPosts.filter(p => p.platform === 'reddit').length}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm flex items-center gap-2">
                    🐦 Twitter
                  </span>
                  <Badge variant="secondary" className="text-xs">
                    {mockPosts.filter(p => p.platform === 'twitter').length}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm flex items-center gap-2">
                    📷 Instagram
                  </span>
                  <Badge variant="secondary" className="text-xs">
                    {mockPosts.filter(p => p.platform === 'instagram').length}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm flex items-center gap-2">
                    💼 LinkedIn
                  </span>
                  <Badge variant="secondary" className="text-xs">
                    {mockPosts.filter(p => p.platform === 'linkedin').length}
                  </Badge>
                </div>
              </div>
            </Card>
          </div>

          {/* Main Feed */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <SocialFeedPost key={post.id} post={post} />
                ))
              ) : (
                <Card className="p-12 text-center">
                  <div className="text-muted-foreground">
                    <User className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <h3 className="font-medium mb-2">No posts found</h3>
                    <p className="text-sm">
                      Try adjusting your search terms or filters to see more content.
                    </p>
                  </div>
                </Card>
              )}
            </div>

            {/* Load More */}
            {filteredPosts.length > 0 && (
              <div className="text-center mt-8">
                <Button variant="outline" size="lg">
                  Load More Posts
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}