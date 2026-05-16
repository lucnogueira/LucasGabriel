import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Mercado Livre",
    role: "Problem Solver ICQA",
    period: "2022 - Presente",
    location: "Extrema, MG",
    description:
      "Identificação e resolução de problemas operacionais de qualidade e controle de inventário. Análise de dados para redução de falhas e melhoria de processos logísticos.",
    highlights: [
      "Análise de dados operacionais com SQL e Excel",
      "Implementação de soluções para otimização de processos",
      "Colaboração com equipes operacionais",
    ],
  },
];

export function Experience() {
  return (
    <section id="experiencia" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-5xl md:text-6xl mb-16 text-primary uppercase tracking-wider"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Experiência
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl text-foreground mb-2">
                    {exp.role}
                  </h3>
                  <p className="text-xl text-primary" style={{ fontFamily: 'var(--font-display)' }}>
                    {exp.company}
                  </p>
                </div>
                <div className="mt-4 md:mt-0 space-y-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar size={16} />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin size={16} />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {exp.description}
              </p>

              <div className="space-y-2">
                {exp.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Decorative element */}
              <div className="absolute -left-2 top-8 w-4 h-4 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}

          {/* Timeline line */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-0.5 bg-border" />
        </div>
      </div>
    </section>
  );
}
