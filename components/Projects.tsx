"use client";

import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { ShineBorder } from "@/components/magicui/shine-border";
import { cn } from "@/lib/utils"; // replace cn(...) with template strings if you don't have this helper

export default function Projects() {
  const projects = [
    {
      title: "Semantic Scout",
      description:
        "AI-powered platform using semantic search and real-time research analysis to connect startups with funding and market trends. Scrapes ArXiv for emerging CS technologies and startup databases to build searchable vector spaces.",
      technologies: ["AI/ML", "Semantic Search", "Vector Databases", "Python", "Web Scraping", "Startup Tech"],
      demoLink: "https://youtu.be/P6S_UuwMNFw",
      githubLink: null,
    },
    {
      title: "LabMatch",
      description:
        "Platform that automatically generates personalized cold email research requests to professors based on uploaded resumes. Built during Hack Shack, a three-day hacker retreat with 16 of Columbia's most promising founders.",
      technologies: ["AI/ML", "NLP", "Email Generation", "Resume Parsing", "Academic Networking"],
      demoLink: "https://www.labmatch.co",
      githubLink: null,
    },
    {
      title: "ShadowU",
      description:
        "Platform enabling high schoolers to shadow university students through matching and booking. Built end-to-end with modern web technologies.",
      technologies: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
      demoLink: "https://shadowu.org",
      githubLink: null,
    },
    {
      title: "EnviroScore",
      description:
        "Award-winning iOS app that gamifies and incentivizes the fight against climate change. Won Congressional App Challenge 2nd place and international hackathon awards.",
      technologies: ["Swift", "iOS", "Climate Tech", "Gamification"],
      demoLink:
        "https://docs.google.com/presentation/d/1_YaYjLg_3WKynUZLBLD4KJoUTPUad_GldCy3VU6gFfA/edit?slide=id.p#slide=id.p",
      githubLink: null,
    },
    {
      title: "GreenSwing",
      description:
        "Patent-pending device that generates electricity from kinetic energy of door swings. Co-founded startup that raised $10k and shipped units to Malawi health clinic.",
      technologies: ["Hardware", "Sustainability", "Energy", "Innovation"],
      demoLink: "https://greenswingenergy.com/",
      githubLink: null,
    },
    {
      title: "Social Distance Wristbands",
      description:
        "Hardware project creating wristbands that beep when within 6 feet of each other, promoting social distancing awareness through wearable technology.",
      technologies: ["Hardware", "IoT", "Arduino", "Sensors", "Social Tech"],
      demoLink: null,
      githubLink: null,
    },
  ];

  // Funky, jagged, non-rectangular shapes using arbitrary clip-paths
  const shapeClasses = [
    // jagged badge
    "clip-path-[polygon(8%_0,15%_8%,35%_0,60%_10%,85%_0,100%_20%,92%_38%,100%_60%,88%_82%,70%_100%,40%_92%,18%_100%,0_78%,6%_58%,0_36%)] rotate-[-1.5deg]",
    // zig-zag ticket
    "clip-path-[polygon(0_10%,6%_6%,12%_10%,18%_6%,24%_10%,30%_6%,36%_10%,42%_6%,48%_10%,100%_10%,100%_90%,94%_94%,88%_90%,82%_94%,76%_90%,70%_94%,64%_90%,0_90%)] rotate-[1.25deg]",
    // irregular hex w/ nicks
    "clip-path-[polygon(8%_4%,90%_0,100%_28%,96%_70%,86%_100%,6%_96%,0_70%,4%_40%)] rotate-[-2deg]",
    // torn paper
    "clip-path-[polygon(0_6%,12%_0,26%_8%,38%_2%,52%_10%,66%_4%,80%_12%,92%_6%,100%_16%,100%_88%,88%_96%,72%_90%,58%_98%,44%_92%,30%_98%,18%_92%,6%_96%,0_86%)] rotate-[2deg]",
    // sticker with dog-ear and notch
    "clip-path-[polygon(0_0,86%_0,100%_14%,100%_78%,88%_100%,22%_100%,10%_84%,0_70%)] rotate-[-1.25deg]",
    // jagged polygon card
    "clip-path-[polygon(6%_0,40%_0,48%_6%,70%_0,96%_10%,100%_40%,90%_56%,100%_76%,84%_100%,52%_92%,30%_100%,10%_86%,0_60%,6%_36%)] rotate-[1.75deg]",
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => {
            const color =
              index === 0
                ? "#FFD700"
                : index === 1
                ? "#87CEEB"
                : index === 2
                ? "#98FB98"
                : index === 3
                ? "#87CEEB"
                : index === 4
                ? "#98FB98"
                : "#FFD700";

            return (
              <div key={index} className="relative group">
                {/* ambient glow */}
                <div
                  className={cn(
                    "absolute -inset-2 blur-2xl opacity-30 transition duration-500",
                    "bg-gradient-to-tr from-primary/40 via-transparent to-transparent",
                    "group-hover:opacity-60"
                  )}
                  aria-hidden
                />
                {/* funky-shaped container */}
                <div
                  className={cn(
                    "relative bg-card/80 backdrop-blur supports-[backdrop-filter]:backdrop-blur",
                    "border border-border shadow-sm",
                    "p-6 sm:p-7",
                    "transition-all duration-300 ease-out",
                    "hover:-translate-y-1 hover:shadow-xl",
                    shapeClasses[index % shapeClasses.length]
                  )}
                >
                  {/* animated border stays */}
                  <ShineBorder shineColor={color} />

                  {/* header */}
                  <div className="mb-4 -mt-2">
                    <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                  </div>

                  <p className="text-muted-foreground mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    {project.demoLink && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1"
                        onClick={() => window.open(project.demoLink, "_blank")}
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Link
                      </Button>
                    )}
                    {project.githubLink && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1"
                        onClick={() => window.open(project.githubLink!, "_blank")}
                      >
                        <Github size={16} className="mr-2" />
                        Code
                      </Button>
                    )}
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
