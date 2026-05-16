import { Mail, Linkedin, Github, Send, Instagram } from "lucide-react";

export function Contact() {
  return (
    <section id="contato" className="py-24 px-6 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-5xl md:text-6xl mb-4 text-primary uppercase tracking-wider"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Contato
          </h2>
          <p className="text-xl text-muted-foreground">
            Aberto a oportunidades em desenvolvimento de software e dados
          </p>
        </div>

        <div className="flex flex-col items-center gap-8">
          {/* Social links */}
          <div className="flex gap-6">
            <a
              href="mailto:seu.email@example.com"
              className="flex flex-col items-center gap-2 p-6 bg-card border border-border rounded-lg hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group"
            >
              <Mail size={32} className="text-primary group-hover:scale-110 transition-transform" />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                Email
              </span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-6 bg-card border border-border rounded-lg hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group"
            >
              <Linkedin size={32} className="text-primary group-hover:scale-110 transition-transform" />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                LinkedIn
              </span>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-6 bg-card border border-border rounded-lg hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group"
            >
              <Github size={32} className="text-primary group-hover:scale-110 transition-transform" />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                GitHub
              </span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-6 bg-card border border-border rounded-lg hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group"
            >
              <Instagram size={32} className="text-primary group-hover:scale-110 transition-transform" />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                Instagram
              </span>
            </a>
          </div>

          {/* CTA */}
          <div className="text-center mt-8">
            <a
              href="mailto:seu.email@example.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/20"
            >
              <Send size={20} />
              Enviar Mensagem
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
          </p>
        </div>
      </div>
    </section>
  );
}