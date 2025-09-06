"use client";

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
        
      ]
    },
    {
      company: "Omen",
      role: "Software Engineering Intern",
      duration: "February 2025 - May 2025",
      location: "New York, NY",
      achievements: [
        "Implemented backend pipelines to analyze financial data, including rolling correlations and handling corporate actions",
        "Built AI-powered investing mobile app backend with financial chatbot integration and real-time search",
      ]
    },
    {
      company: "Credytu",
      role: "Software Engineering Intern",
      duration: "October 2024 - December 2024",
      location: "New York, NY",
      achievements: [
        "Developed machine learning models (Random Forest, XGBoost, and ensembles) to evaluate loan applications",
        "Built framework to compare model performance, enabling iterative improvements and automated optimization"
      ]
    },
    {
      company: "SafeBeat Rx",
      role: "Research Intern",
      duration: "June 2023 - August 2023",
      location: "San Francisco, CA",
      achievements: [
        "Analyzed ECG data and contributed ideas to research meetings and projects at a Y-combinator-backed AI/health startup",
        "Researched and conducted outreach to pharmaceutical companies to form partnerships"
      ]
    },
    {
      company: "Selling Energy",
      role: "Research Intern",
      duration: "June 2022 - December 2022",
      location: "Reno, NV",
      achievements: [
        "Conducted market research on electric vehicle charging stations to lay the groundwork for a EV charging stations course",
        "Created mathematical models for EV Charging businesses"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((job, index) => (
            <div key={index} className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{job.role}</h3>
                  <p className="text-lg text-primary font-medium">{job.company}</p>
                  <p className="text-muted-foreground">{job.location}</p>
                </div>
                <div className="text-muted-foreground text-sm mt-2 md:mt-0">
                  {job.duration}
                </div>
              </div>
              <ul className="space-y-2">
                {job.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="text-muted-foreground flex items-start">
                    <span className="text-primary mr-2">●</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
