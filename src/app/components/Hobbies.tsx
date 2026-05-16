export function Hobbies() {
  const hobbies = [
    {
      emoji: "🏃",
      label: "Corrida",
      description: "Treinos de resistência e corridas de rua",
    },
    {
      emoji: "🚴",
      label: "Ciclismo",
      description: "Pedais longos e exploração de rotas",
    },
    {
      emoji: "📚",
      label: "Leitura",
      description: "Explorando livros de tech e desenvolvimento pessoal",
    },
    {
      emoji: "✈️",
      label: "Viagens",
      description: "Descobrindo culturas e destinos novos",
    },
    {
      emoji: "🏎️",
      label: "GearHead",
      description: "Mecânica, tuning e cultura automotiva",
    },

  ];

  return (
    <section id="hobbies" className="py-24 px-6 bg-gradient-to-br from-card/50 to-background">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-5xl md:text-6xl mb-4 text-primary uppercase tracking-wider"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Quando não estou codando...
        </h2>
        <p className="text-muted-foreground mb-16 text-lg">
          Equilíbrio entre tech e vida ativa
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-8 text-center hover:scale-105 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-rotate-1"
            >
              <div className="text-6xl mb-4">{hobby.emoji}</div>
              <h3
                className="text-2xl text-foreground mb-2 uppercase tracking-wide"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {hobby.label}
              </h3>
              <p className="text-sm text-muted-foreground">{hobby.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}