export default function Services() {
  const services = [
    {
      title: "Polimento Técnico",
      description:
        "Remoção de riscos, marcas e imperfeições da pintura com acabamento profissional e brilho intenso.",
    },
    {
      title: "Vitrificação Automotiva",
      description:
        "Proteção de longa duração contra sol, chuva ácida e sujeiras, mantendo o brilho por muito mais tempo.",
    },
    {
      title: "Higienização Interna",
      description:
        "Limpeza profunda de bancos, teto, carpete e painel, eliminando ácaros e odores.",
    },
    {
      title: "Detalhamento Completo",
      description:
        "Cuidado minucioso em cada detalhe do veículo, deixando seu carro com aparência de novo.",
    },
    {
      title: "Revitalização de Faróis",
      description:
        "Recuperação do brilho e transparência dos faróis, melhorando estética e segurança.",
    },
    {
      title: "Lavagem Técnica Premium",
      description:
        "Lavagem detalhada com técnicas profissionais que evitam micro riscos na pintura.",
    },
  ];

  return (
    <section
      id="servicos"
      className="py-20 bg-white text-gray-900 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* SEO Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold">
            Serviços de Estética Automotiva em
            <span className="text-primary block">
              Praia Grande - SP
            </span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Atendimento profissional para Praia Grande e toda a Baixada Santista.
            Seu carro com brilho, proteção e acabamento de alto nível.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => (
            <div
              key={index}
              className="group border border-gray-200 p-8 rounded-2xl hover:shadow-2xl transition duration-300 hover:-translate-y-2 bg-white"
            >
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>

              <div className="mt-6">
                <a
                  href="https://wa.me/5513996263054"
                  target="_blank"
                  className="text-primary font-semibold text-sm hover:underline"
                >
                  Solicitar orçamento →
                </a>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}