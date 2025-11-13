import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8 mb-8">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Embark</h3>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              Empowering students to discover, connect, and thrive in their university journey. Your gateway to campus life and academic success.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Student Clubs</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Courses</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Residences</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Professors</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Research</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Events</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Student Guide</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Stay Updated</h4>
            <p className="text-primary-foreground/80 mb-4">
              Get the latest campus news and opportunities delivered to your inbox.
            </p>
            <div className="flex gap-2 mb-4">
              <Input 
                placeholder="Enter your email" 
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button variant="secondary">Subscribe</Button>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>hello@embark.university</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Student Center, Room 201</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-primary-foreground/80">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 Embark Student Hub. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="hover:text-primary-foreground transition-colors">Accessibility</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Sitemap</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}