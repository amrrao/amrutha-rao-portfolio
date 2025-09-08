"use client";

import { Code, Database, Smartphone, Globe } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    { 
      icon: <Code className="text-4xl text-primary" />, 
      title: "Languages", 
      skills: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "Golang", "Swift", "MATLAB"] 
    },
    { 
      icon: <Database className="text-4xl text-primary" />, 
      title: "AI/ML", 
      skills: ["PyTorch", "scikit-learn", "LlamaIndex", "Pandas", "NumPy", "Matplotlib", "XGBoost", "Random Forest"] 
    },
    { 
      icon: <Smartphone className="text-4xl text-primary" />, 
      title: "Frameworks", 
      skills: ["React.js", "Next.js", "Node.js", "FastAPI", "Tailwind CSS", "Supabase", "Vercel"] 
    },
    { 
      icon: <Globe className="text-4xl text-primary" />, 
      title: "Tools", 
      skills: ["Git", "Docker", "AWS", "VS Code", "Edge Functions"] 
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="text-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold text-foreground mt-4">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
