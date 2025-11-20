'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, MessageSquare, Home } from "lucide-react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export function Header() {
  const router = useRouter();
  const isHome = usePathname() === "/";
  const isSocial = usePathname() === "/social";

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="shrink-0 cursor-pointer" onClick={() => router.push("/")}>
              <h1 className="text-2xl font-bold text-primary">Embark's</h1>
              <p className="text-xs text-muted-foreground">Student Hub</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="hidden sm:flex items-center space-x-1 mx-8">
            <Button 
              variant={isHome ? 'default' : 'ghost'} 
              size="sm" 
              onClick={() => router.push("/")}
              className="flex items-center gap-2"
            >
              <Home className="w-4 h-4" />
              Universities
            </Button>
            <Button 
              variant={isSocial ? 'default' : 'ghost'} 
              size="sm" 
              onClick={() => router.push("/social")}
              className="flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              Social Feed
            </Button>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:block flex-1 max-w-lg">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Search universities, posts, topics..." 
                className="pl-10 bg-input-background"
              />
            </div>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              Sign In
            </Button>
            <Button size="sm">
              Join Embark
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile navigation and search */}
        <div className="sm:hidden pb-4 space-y-3">
          {/* Mobile navigation */}
          <div className="flex space-x-2">
            <Button 
              variant={isHome ? 'default' : 'ghost'} 
              size="sm" 
              onClick={() => router.push("/")}
              className="flex items-center gap-2 flex-1"
            >
              <Home className="w-4 h-4" />
              Universities
            </Button>
            <Button 
              variant={isSocial ? 'default' : 'ghost'} 
              size="sm" 
              onClick={() => router.push("/social")}
              className="flex items-center gap-2 flex-1"
            >
              <MessageSquare className="w-4 h-4" />
              Social Feed
            </Button>
          </div>
          
          {/* Mobile search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input 
              placeholder="Search universities, posts, topics..." 
              className="pl-10 bg-input-background"
            />
          </div>
        </div>
      </div>
    </header>
  );
}