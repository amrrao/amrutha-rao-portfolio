"use client";

import { Button } from "@/components/ui/button";
import { ExternalLink, Mail, ChevronDown } from "lucide-react";

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Amrutha Rao
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-delay">
            Builder and Software/AI Engineer
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in-delay-2">
  Columbia University student driven to build innovative solutions and make a positive impact through technology and entrepreneurship.
</p>

        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-3">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6"
            onClick={() => scrollToSection("projects")}
          >
            View My Work
            <ExternalLink className="ml-2" size={20} />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-8 py-6"
            onClick={() => scrollToSection("contact")}
          >
            Get In Touch
            <Mail className="ml-2" size={20} />
          </Button>
          <Button 
            variant="secondary" 
            size="lg" 
            className="text-lg px-8 py-6"
            onClick={() => window.open('/resume.pdf', '_blank')}
          >
            Download Resume
            <ExternalLink className="ml-2" size={20} />
          </Button>
        </div>

        <div className="mt-16 animate-fade-in-delay-4">
          <ChevronDown 
            className="mx-auto text-muted-foreground animate-bounce cursor-pointer" 
            size={32}
            onClick={() => scrollToSection("about")}
          />
        </div>
      </div>
    </section>
  );
}
