import { GraduationCap, Award } from "lucide-react";

export function Education() {
  return (
    <section id="formacao" className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-5xl md:text-6xl mb-16 text-primary uppercase tracking-wider"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Formação
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Main degree */}
          <div className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <GraduationCap className="text-primary" size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl text-foreground mb-2">
                  Tecnólogo em Análise e Desenvolvimento de Sistemas
                </h3>
                <p className="text-primary" style={{ fontFamily: 'var(--font-display)' }}>
                  IFSP - Instituto Federal de São Paulo
                </p>
                <p className="text-sm text-muted-foreground mt-2">2023 - 2026 (em andamento)</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Formação focada em desenvolvimento de software, análise de sistemas, banco de dados,
              estruturas de dados e algoritmos, engenharia de software e gestão de projetos.
            </p>
          </div>

          {/* Certifications */}
          <div className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-secondary/10 rounded-lg">
                <Award className="text-secondary" size={32} />
              </div>
              <div>
                <h3 className="text-xl text-foreground">Certificações & Cursos</h3>
              </div>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <div>
                  <p className="text-foreground">CAI - Eletricista de Manutenção Eletroeletronica</p>
                  <p className="text-sm text-muted-foreground">SENAI · 2018-2019</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <div>
                  <p className="text-foreground">CAI - Mecânico de Usinagem</p>
                  <p className="text-sm text-muted-foreground">SENAI · 2016-2017</p>
                </div>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
