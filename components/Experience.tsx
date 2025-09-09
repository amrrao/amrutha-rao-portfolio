"use client";

import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";

export default function Experience() {
  const experiences = [
    {
      company: "PointOne",
      role: "Software Engineering Intern",
      duration: "June 2025 - August 2025",
      location: "New York, NY",
      achievements: [
        "Developed components of scalable AI models and backend data pipelines for real-time video, image, and text processing",
        "Designed and extended AI systems, benchmarked AI models, analyzing latency, cost, and accuracy trade-offs",
      ],
    },
    {
      company: "Omen",
      role: "Software Engineering Intern",
      duration: "February 2025 - May 2025",
      location: "New York, NY",
      achievements: [
        "Implemented backend pipelines to analyze financial data, including rolling correlations and handling corporate actions",
        "Built AI-powered investing mobile app backend with financial chatbot integration and real-time search",
      ],
    },
    {
      company: "Credytu",
      role: "Software Engineering Intern",
      duration: "October 2024 - December 2024",
      location: "New York, NY",
      achievements: [
        "Developed machine learning models (Random Forest, XGBoost, and ensembles) to evaluate loan applications",
        "Built framework to compare model performance, enabling iterative improvements and automated optimization",
      ],
    },
    {
      company: "SafeBeat Rx",
      role: "Research Intern",
      duration: "June 2023 - August 2023",
      location: "San Francisco, CA",
      achievements: [
        "Analyzed ECG data and contributed ideas to research meetings and projects at a Y-combinator-backed AI/health startup",
        "Researched and conducted outreach to pharmaceutical companies to form partnerships",
      ],
    },
    {
      company: "Selling Energy",
      role: "Research Intern",
      duration: "June 2022 - December 2022",
      location: "Reno, NV",
      achievements: [
        "Conducted market research on electric vehicle charging stations to lay the groundwork for a EV charging stations course",
        "Created mathematical models for EV Charging businesses",
      ],
    },
  ];

  const shapes = [
    "clip-path-[polygon(8%_0,15%_8%,35%_0,62%_10%,86%_2%,100%_20%,94%_38%,100%_62%,90%_86%,68%_100%,38%_92%,18%_100%,0_80%,6%_58%,0_36%)]",
    "clip-path-[polygon(0_10%,8%_6%,16%_12%,24%_8%,32%_12%,40%_8%,48%_12%,56%_8%,64%_12%,100%_10%,100%_92%,92%_94%,82%_90%,72%_94%,62%_90%,52%_94%,0_90%)]",
    "clip-path-[polygon(6%_4%,90%_0,100%_26%,96%_68%,86%_100%,12%_96%,0_70%,4%_38%)]",
    "clip-path-[polygon(0_8%,12%_0,28%_8%,42%_2%,56%_12%,70%_4%,84%_12%,94%_6%,100%_18%,100%_90%,84%_100%,66%_92%,52%_100%,36%_94%,22%_100%,10%_92%,2%_96%,0_86%)]",
    "clip-path-[polygon(6%_0,42%_0,50%_6%,72%_0,96%_12%,100%_42%,92%_58%,100%_78%,86%_100%,58%_92%,34%_100%,12%_86%,0_60%,6%_36%)]",
  ];

  const fromColors = ["#FFD700", "#87CEEB", "#98FB98", "#FFA500", "#4682B4"];
  const toColors = ["#FFA500", "#4682B4", "#90EE90", "#FF7F50", "#1E90FF"];

  return (
    <section
      id="experience"
      className="relative py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </div>

        <div className="space-y-16">
          {experiences.map((job, i) => (
            <article
              key={i}
              className={`
                relative group
                bg-card/90 backdrop-blur supports-[backdrop-filter]:backdrop-blur
                p-6 md:p-8
                shadow-xl
                transition-transform duration-300 ease-out
                hover:-translate-y-1 hover:shadow-2xl
                ${shapes[i % shapes.length]}
              `}
              style={{
                rotate: i % 2 === 0 ? "-1.5deg" : "1.5deg",
                filter: "drop-shadow(0 12px 24px rgba(0,0,0,0.20))",
              }}
            >
              {/* sticker tape strips */}
              <span className="pointer-events-none absolute -top-2 left-8 h-4 w-16 rotate-[-8deg] rounded-[3px] bg-yellow-300/60 shadow" />
              <span className="pointer-events-none absolute -bottom-2 right-6 h-3 w-12 rotate-[6deg] rounded-[3px] bg-blue-300/50 shadow" />

              <AnimatedGradientText
                speed={0.5}
                colorFrom={fromColors[i % fromColors.length]}
                colorTo={toColors[i % toColors.length]}
                className="text-lg md:text-xl font-semibold leading-tight"
              >
                {job.company}
              </AnimatedGradientText>

              <div className="mt-1 flex flex-wrap items-center gap-2 text-xs md:text-sm text-muted-foreground">
                <span className="font-medium text-foreground">{job.role}</span>
                <span className="opacity-50">•</span>
                <span>{job.location}</span>
              </div>

              <div className="mt-2 inline-flex items-center gap-2 text-[11px] md:text-xs tracking-wide">
                <span className="rounded-full bg-primary/15 text-primary px-2 py-0.5">{job.duration}</span>
              </div>

              <ul className="mt-3 space-y-1.5 text-[12px] md:text-sm text-muted-foreground">
                {job.achievements.map((a, j) => (
                  <li key={j} className="relative pl-5">
                    <span className="absolute left-0 top-2 h-2 w-2 rotate-45 bg-primary" />
                    {a}
                  </li>
                ))}
              </ul>

              {/* subtle noise */}
              <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_1px)] [background-size:18px_18px]" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
