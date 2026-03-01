export default function Differentials() {
  const items = [
    {
      title: "Atendimento Personalizado",
      description:
        "Cada veículo recebe atenção individual, garantindo o melhor resultado possível.",
    },
    {
      title: "Produtos Premium",
      description:
        "Utilizamos produtos profissionais de alta performance para maior durabilidade e brilho.",
    },
    {
      title: "Técnicas Profissionais",
      description:
        "Processos técnicos que evitam micro riscos e garantem acabamento superior.",
    },
    {
      title: "Acabamento Impecável",
      description:
        "Foco nos mínimos detalhes para entregar um resultado acima do esperado.",
    },
    {
      title: "Atendimento Regional",
      description:
        "Atendemos Praia Grande e toda a Baixada Santista com agendamento facilitado.",
    },
    {
      title: "Agendamento Rápido",
      description:
        "Orçamento e atendimento rápido direto pelo WhatsApp.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
            Por que escolher a
            <span className="text-primary block">
              João Paulo Detailer?
            </span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Profissionalismo, qualidade e dedicação para entregar o melhor
            resultado em estética automotiva em Praia Grande - SP.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition duration-300 hover:-translate-y-2"
            >
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}

        </div>

        {/* CTA inferior */}
        <div className="mt-16 text-center">
          <a
            href="https://wa.me/5513996263054"
            target="_blank"
            className="bg-primary text-white px-10 py-4 rounded-full font-semibold hover:scale-105 transition shadow-lg"
          >
            Quero meu carro impecável
          </a>
        </div>

      </div>
    </section>
  );
}