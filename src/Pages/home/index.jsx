export default function Home() {
  const cards = [
    {
      title: 'React',
      text: 'Biblioteca para construir interfaces reativas e modernas com componentes reutilizáveis.',
    },
    {
      title: 'Vite',
      text: 'Ferramenta rápida para desenvolvimento local, build e preview com excelente desempenho.',
    },
    {
      title: 'React Router',
      text: 'Navegação entre páginas sem recarregar a aplicação, ideal para SPAs.',
    },
  ];

  return (
    <section>
      <h1>Bem-vindo ao projeto React</h1>
      <p>Esta aplicação demonstra navegação entre páginas e componentes reutilizáveis.</p>

      <div className="home-wrapper">
        {cards.map((card) => (
          <article key={card.title} className="home-card">
            <h2>{card.title}</h2>
            <p>{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
