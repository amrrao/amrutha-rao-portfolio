"use client";

import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";

export default function Skills() {
  // brand accents
  const ACCENT_YELLOW = "#F7D44C"; // highlighter yellow
  const ACCENT_MINT = "#A6F3A1";   // mint green
  const ACCENT_CYAN = "#7FD7FF";   // cyan

  const skillCategories = [
    {
      title: "Languages",
      accent: ACCENT_YELLOW,
      skills: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "Golang", "Swift", "MATLAB"],
    },
    {
      title: "AI/ML",
      accent: ACCENT_MINT,
      skills: ["PyTorch", "scikit-learn", "LlamaIndex", "XGBoost", "Random Forest"],
    },
    {
      title: "Frameworks",
      accent: ACCENT_CYAN,
      skills: ["React.js", "Next.js", "Node.js", "FastAPI", "Tailwind CSS"],
    },
    {
      title: "Tools",
      accent: ACCENT_YELLOW,
      skills: [
        "Git",
        "Docker",
        "AWS",
        "VS Code",
        "Edge Functions",
        "Supabase",
        "Vercel",
        "Pandas",
        "NumPy",
        "Matplotlib",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background"
    >
      {/* subtle grid */}
      <InteractiveGridPattern
        className="absolute inset-0 z-0 [mask-image:radial-gradient(900px_circle_at_center,white,transparent)]"
        width={36}
        height={36}
        squares={[72, 72]}
        squaresClassName="stroke-border/35 hover:fill-[#98FB98]"
      />

      <div className="relative z-10">
        {/* header (kept as you wanted) */}
        <div className="text-center mb-16 max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((cat, i) => (
            <div
              key={i}
              className="group relative transition-colors"
            >
              {/* category header with cyan underline */}
              <div className="mb-5">
                <h3 className="text-lg font-semibold tracking-tight relative inline-block">
                  {cat.title}
                  <span
                    aria-hidden
                    className="absolute left-0 right-0 -bottom-1 h-[3px]"
                    style={{ backgroundColor: ACCENT_CYAN }}
                  />
                </h3>
              </div>

              {/* skill chips with accent bar */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s, idx) => {
                  const accent =
                    idx % 3 === 0 ? ACCENT_YELLOW : idx % 3 === 1 ? ACCENT_MINT : ACCENT_CYAN;
                  return (
                    <span
                      key={s}
                      className="text-sm text-foreground/90 border border-border rounded-sm px-2.5 py-1 leading-none tracking-tight relative"
                      style={{
                        boxShadow: `inset 3px 0 0 0 ${accent}`,
                      }}
                    >
                      {s}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
