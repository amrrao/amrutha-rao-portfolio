"use client";

import { Button } from "@/components/ui/button";
import { Database, Mail, Globe, Smartphone, Code, ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Semantic Scout",
      description: "AI-powered platform using semantic search and real-time research analysis to connect startups with funding and market trends. Scrapes ArXiv for emerging CS technologies and startup databases to build searchable vector spaces.",
      technologies: ["AI/ML", "Semantic Search", "Vector Databases", "Python", "Web Scraping", "Startup Tech"],
      demoLink: "http://localhost:3000/",
      githubLink: null,
      icon: <Database className="text-6xl text-primary/60" />
    },
    {
      title: "LabMatch",
      description: "Platform that automatically generates personalized cold email research requests to professors based on uploaded resumes. Built during Hack Shack, a three-day hacker retreat with 16 of Columbia's most promising founders.",
      technologies: ["AI/ML", "NLP", "Email Generation", "Resume Parsing", "Academic Networking"],
      demoLink: "https://www.labmatch.co",
      githubLink: null,
      icon: <Mail className="text-6xl text-primary/60" />
    },
    {
      title: "ShadowU",
      description: "Platform enabling high schoolers to shadow university students through matching and booking. Built end-to-end with modern web technologies.",
      technologies: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
      demoLink: "https://shadowu.org",
      githubLink: null,
      icon: <Globe className="text-6xl text-primary/60" />
    },
    {
      title: "EnviroScore",
      description: "Award-winning iOS app that gamifies and incentivizes the fight against climate change. Won Congressional App Challenge 2nd place and international hackathon awards.",
      technologies: ["Swift", "iOS", "Climate Tech", "Gamification"],
      demoLink: "https://docs.google.com/presentation/d/1_YaYjLg_3WKynUZLBLD4KJoUTPUad_GldCy3VU6gFfA/edit?slide=id.p#slide=id.p",
      githubLink: null,
      icon: <Smartphone className="text-6xl text-primary/60" />
    },
    {
      title: "GreenSwing",
      description: "Patent-pending device that generates electricity from kinetic energy of door swings. Co-founded startup that raised $10k and shipped units to Malawi health clinic.",
      technologies: ["Hardware", "Sustainability", "Energy", "Innovation"],
      demoLink: "https://greenswingenergy.com/",
      githubLink: null,
      icon: <Code className="text-6xl text-primary/60" />
    },
    {
      title: "Social Distance Wristbands",
      description: "Hardware project creating wristbands that beep when within 6 feet of each other, promoting social distancing awareness through wearable technology.",
      technologies: ["Hardware", "IoT", "Arduino", "Sensors", "Social Tech"],
      demoLink: null,
      githubLink: null,
      icon: <Smartphone className="text-6xl text-primary/60" />
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-muted/40 flex items-center justify-center">
                {project.icon}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  {project.demoLink && (
                    <Button size="sm" variant="outline" className="flex-1" onClick={() => window.open(project.demoLink, '_blank')}>
                      <ExternalLink size={16} className="mr-2" />
                      Link
                    </Button>
                  )}
                  {project.githubLink && (
                    <Button size="sm" variant="outline" className="flex-1" onClick={() => window.open(project.githubLink!, '_blank')}>
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
