"use client";

import { Button } from "@/components/ui/button";
import { ExternalLink, Mail, ChevronDown, Linkedin } from "lucide-react";
import { HyperText } from "@/components/magicui/hyper-text";
import { Highlighter } from "@/components/magicui/highlighter";


interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-2 animate-fade-in">
            <HyperText>
              Hi, I&apos;m Amrutha Rao
            </HyperText>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in-delay">
            Builder and Software/AI Engineer
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in-delay-2">
            <Highlighter action="highlight" color="#FFD700">
              Columbia University student
            </Highlighter>{" "}
            driven to build{" "}
            <Highlighter action="underline" color="#87CEEB">
              innovative solutions
            </Highlighter>{" "}
            and make a{" "}
            <Highlighter action="highlight" color="#98FB98">
              positive impact
            </Highlighter>{" "}
            through technology and entrepreneurship.
          </p>

        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center animate-fade-in-delay-3">
          <Button 
            size="sm" 
            className="text-sm px-5 py-2"
            onClick={() => scrollToSection("projects")}
          >
            My Work
            <ExternalLink className="ml-2" size={16} />
          </Button>
          <Button 
            variant="secondary" 
            size="sm" 
            className="text-sm px-5 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800"
            onClick={() => window.open("https://www.linkedin.com/in/amrutha-rao-ab9360239/", "_blank")}
          >
            LinkedIn
            <Linkedin className="ml-2" size={16} />
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="text-sm px-5 py-2"
            onClick={() => scrollToSection("contact")}
          >
            Contact
            <Mail className="ml-2" size={16} />
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
