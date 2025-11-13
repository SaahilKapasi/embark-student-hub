import { ArrowRight, Sparkles, Users, Target } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export function CTASection() {
  return (
    <section className="py-16 bg-linear-to-br from-primary/5 to-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Join the Embark Community?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take your university experience to the next level. Connect with students, discover opportunities, and make the most of your time on campus.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card className="p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Discover</h3>
            <p className="text-sm text-muted-foreground">
              Explore universities and find programs, clubs, and opportunities that match your interests.
            </p>
          </Card>

          <Card className="p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Compare</h3>
            <p className="text-sm text-muted-foreground">
              Compare universities side-by-side to make informed decisions about your future.
            </p>
          </Card>

          <Card className="p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Connect</h3>
            <p className="text-sm text-muted-foreground">
              Connect with current students, alumni, and professors at your target universities.
            </p>
          </Card>
        </div>

        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Join Thousands of Students Already Using Embark
            </h3>
            <p className="text-muted-foreground mb-6">
              Get personalized university recommendations, compare programs, and connect with students across top institutions to make informed decisions about your future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button size="lg" className="flex items-center gap-2">
                Create Your Account
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More About Embark
              </Button>
            </div>

            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Free to join</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Instant access</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>No commitments</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}