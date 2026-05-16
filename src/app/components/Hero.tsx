import { motion } from "motion/react";
import { Download, Github, Linkedin, Mail, Instagram } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Decorative background code snippet */}
      <div className="absolute inset-0 opacity-5 select-none pointer-events-none">
        <pre className="text-primary text-xs leading-relaxed p-8">
          {`function transformData(input) {
  const processed = input
    .filter(item => item.isValid)
    .map(item => ({
      ...item,
      timestamp: new Date(),
      status: 'active'
    }));
  return processed;
}`}
        </pre>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          <span className="block text-7xl md:text-9xl tracking-wider text-foreground uppercase">
            Lucas Gabriel Nogueira dos Santos
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <p className="text-xl md:text-2xl text-muted-foreground mb-2">
            Estudante de ADS · IFSP | Problem Solver ICQA no Mercado Livre | Futuro Dev
          </p>
          <p className="text-2xl md:text-3xl text-primary tracking-wide" style={{ fontFamily: 'var(--font-display)' }}>
            Transformando dados em decisões. Código em soluções.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
        >
          <a
            href="#projetos"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/20"
          >
            Ver Projetos
          </a>
          <a
            href="#"
            className="px-8 py-4 bg-card text-foreground border border-border rounded-lg hover:bg-card/80 transition-all duration-200 flex items-center gap-2"
          >
            <Download size={20} />
            Baixar Currículo
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex gap-6 justify-center items-center mt-12"
        >
          <a href="mailto:lluucas.gabrieel@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail size={24} />
          </a>
          <a href="https://www.linkedin.com/in/lucas-gabriel-nogueira-dos-santos/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={24} />
          </a>
          <a href="https://www.instagram.com/luucas.gabrieel?igsh=MWJjZXdhNjZrNWpjYQ==" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Instagram size={24} />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}