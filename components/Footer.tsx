import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 px-6 py-16">
      <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-3">

        {/* Coluna 1 - Marca */}
        <div>
          <Image
            src="/logo-jpd-sport.svg"
            alt="João Paulo Detailer - Estética Automotiva"
            width={200}
            height={70}
          />

          <p className="mt-6 text-sm leading-relaxed text-gray-400">
            Especialista em estética automotiva em Praia Grande - SP.
            Atendimento profissional com polimento técnico,
            vitrificação automotiva e detalhamento completo
            para toda a Baixada Santista.
          </p>
        </div>

        {/* Coluna 2 - Serviços */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">
            Serviços
          </h3>

          <ul className="space-y-3 text-sm">
            <li>Polimento Automotivo</li>
            <li>Vitrificação Automotiva</li>
            <li>Higienização Interna</li>
            <li>Detalhamento Completo</li>
            <li>Revitalização de Faróis</li>
          </ul>
        </div>

        {/* Coluna 3 - Contato */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">
            Contato
          </h3>

          <ul className="space-y-3 text-sm">
            <li>Praia Grande - SP</li>
            <li>Baixada Santista</li>

            <li>
              <a
                href="tel:+5513996263054"
                className="hover:text-primary transition"
              >
                (13) 99626-3054
              </a>
            </li>

            <li>
              <a
                href="https://wa.me/5513996263054"
                target="_blank"
                className="hover:text-primary transition"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Linha inferior */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} João Paulo Detailer —
        Estética Automotiva em Praia Grande - SP.
        Todos os direitos reservados.
      </div>
    </footer>
  );
}