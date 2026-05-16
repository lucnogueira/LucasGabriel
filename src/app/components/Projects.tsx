import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    name: "Vivi Cleaning",
    description:
      "Web-App de gestão para empresas de limpeza profissional, focado em escalas e controle administrativos.",
    tags: ["React" , "SQL"],
    github: "https://github.com",
    demo: null,
  },{
    name: "Shopp Café",
    description:
      "Sistema para otimização de atendimentp e atualização de dados em tempo real para estabelecimentos.",
    tags: ["HTML" , "CSS", "JavaScript"],
    github: "https://github.com",
    demo: null,
  },
 
];

export function Projects() {
  return (
    <section id="projetos" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-5xl md:text-6xl mb-16 text-primary uppercase tracking-wider"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Projetos
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group flex flex-col"
            >
              <h3 className="text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-primary/10 text-primary text-xs rounded border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 pt-4 border-t border-border">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
