export default function Reviews() {
  const reviews = [
    {
      name: "Cliente Satisfeito",
      text: "Excelente atendimento e acabamento impecável. Meu carro ficou com brilho de zero!",
    },
    {
      name: "Carlos M.",
      text: "Profissional extremamente cuidadoso. Recomendo para quem busca estética automotiva em Praia Grande.",
    },
    {
      name: "Fernanda R.",
      text: "A vitrificação ficou perfeita. Atendimento rápido e muito profissional.",
    },
  ];

  return (
    <section
      id="avaliacoes"
      className="py-20 bg-dark text-white px-6"
    >
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl md:text-5xl font-extrabold">
          Avaliações no Google
        </h2>

        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Clientes de Praia Grande e Baixada Santista recomendam
          o trabalho da João Paulo Detailer.
        </p>

        {/* Nota média */}
        <div className="mt-10">
          <div className="text-5xl font-bold text-primary">
            ★ 5.0
          </div>
          <p className="text-gray-400 mt-2">
            Baseado nas avaliações do Google
          </p>

          <a
            href="https://share.google/YBoYrHMKzjeu7tr8n"
            target="_blank"
            className="inline-block mt-4 text-primary font-semibold hover:underline"
          >
            Ver todas as avaliações →
          </a>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-14">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-primary transition"
            >
              <div className="text-primary text-xl mb-3">
                ★★★★★
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {review.text}
              </p>

              <p className="font-semibold text-white text-sm">
                {review.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}