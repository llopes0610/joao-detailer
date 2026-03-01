export default function FinalCTA() {
  return (
    <section
      id="contato"
      className="py-24 bg-dark text-white px-6"
    >
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
          Seu carro merece um
          <span className="text-primary block">
            acabamento profissional
          </span>
        </h2>

        <p className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto">
          Atendimento em Praia Grande - SP e toda a Baixada Santista.
          Agende agora e garanta brilho, proteção e valorização do seu veículo.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center">

          <a
            href="https://wa.me/5513996263054"
            target="_blank"
            className="bg-primary hover:scale-105 transition text-white font-semibold px-10 py-5 rounded-full text-lg shadow-xl"
          >
            Agendar pelo WhatsApp
          </a>

          <a
            href="tel:+5513996263054"
            className="border border-white px-10 py-5 rounded-full hover:bg-white hover:text-black transition text-lg"
          >
            Ligar Agora
          </a>

        </div>

        <p className="mt-6 text-sm text-gray-400">
          Atendimento rápido • Orçamento sem compromisso • Agendamento facilitado
        </p>

      </div>
    </section>
  );
}