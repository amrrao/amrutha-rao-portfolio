"use client";

import { Button } from "@/components/ui/button";
import { Code, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-full flex items-center justify-center mb-8">
              <div className="w-72 h-72 bg-gradient-to-br from-primary/30 to-blue-600/30 rounded-full flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-primary/40 to-blue-600/40 rounded-full flex items-center justify-center">
                  <Code className="text-6xl text-primary" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a Computer Science student at Columbia University with a passion for AI/ML engineering, startups, and sustainable technology. I have founded and lead multiple projects, some of which have raised funding, won international awards, are patent-pending, andbeen featured by global organizations.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I've interned at companies like PointOne, Omen, and Credytu, where I've developed AI models and 
              built backend systems. These experiences have sharpened my skills in creating scalable, real-world solutions while collaborating with fast-moving teams.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="outline" className="flex items-center gap-2" onClick={() => window.open('https://linkedin.com/in/amrutha-rao-ab9360239/', '_blank')}>
                <Linkedin size={20} />
                LinkedIn
              </Button>
              <Button variant="outline" className="flex items-center gap-2" onClick={() => window.open('mailto:arr2249@columbia.edu')}>
                <Mail size={20} />
                Email
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
