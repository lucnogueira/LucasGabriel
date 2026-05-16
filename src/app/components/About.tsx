import { MapPin, GraduationCap, Briefcase } from "lucide-react";

export function About() {
  return (
    <section id="sobre" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-5xl md:text-6xl mb-16 text-primary uppercase tracking-wider"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Sobre Mim
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile photo */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl"></div>
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary shadow-xl shadow-primary/20">
                <div className="w-full h-full bg-gradient-to-br from-card to-muted flex items-center justify-center">
                  <span className="text-6xl"><img src="https://media.licdn.com/dms/image/v2/D4E03AQEQJ__ZSIG8cg/profile-displayphoto-scale_400_400/B4EZifqpYJGYAw-/0/1755025419564?e=1780531200&v=beta&t=fTdZtKAv1UArvfX6g1lozOiL9wZYDHpseTbOOrPLCkE" alt="Lucas" /></span>
                </div>
              </div>
              
              
            </div>
          </div>

          {/* Bio text */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Olá meu nome é Lucas Gabriel sou estudante de Análise e Desenvolvimento de Sistemas no IFSP. Atuo no Mercado Livre na área de ICQA como Problem Solver, utilizando pensamento analítico para identificar falhas operacionais e propor soluções sistêmicas.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Atualmente em migração para desenvolvimento de software e análise de dados, construindo projetos com Python, SQL e JavaScript.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-4 pt-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg">
                <MapPin size={20} className="text-primary" />
                <span className="text-foreground">Bragança Paulista-SP</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg">
                <GraduationCap size={20} className="text-primary" />
                <span className="text-foreground">IFSP-BRA</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg">
                <Briefcase size={20} className="text-primary" />
                <span className="text-foreground">Mercado Livre MG01</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
