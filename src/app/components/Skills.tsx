import { Progress } from "@radix-ui/react-progress";

interface Skill {
  name: string;
  level: number;
}

const technicalSkills: Skill[] = [
  { name: "Python", level: 20 },
  { name: "SQL & Data Analysis", level: 20 },
  { name: "JavaScript / HTML / CSS", level: 50 },
  { name: "Git & GitHub", level: 75 },
  { name: "Excel / Power BI", level: 70 },
  { name: "Problem Solving & RCA", level: 85 },
];

const softSkills: Skill[] = [
  { name: "Pensamento analítico", level: 90 },
  { name: "Comunicação", level: 80 },
  { name: "Trabalho em equipe", level: 85 },
  { name: "Adaptabilidade", level: 88 },
  { name: "Gestão de processos", level: 75 },
];

function SkillBar({ skill }: { skill: Skill }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-foreground">{skill.name}</span>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="h-2 bg-card rounded-full overflow-hidden border border-border">
        <div
          className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="habilidades" className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-5xl md:text-6xl mb-16 text-primary uppercase tracking-wider"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Habilidades
        </h2>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <div className="space-y-6">
            <h3
              className="text-3xl text-secondary uppercase tracking-wide mb-8"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Hard Skills
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="space-y-6">
            <h3
              className="text-3xl text-secondary uppercase tracking-wide mb-8"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Soft Skills
            </h3>
            <div className="space-y-6">
              {softSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
