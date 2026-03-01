"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phone = "5513996263054";
  const message = "Olá! Gostaria de solicitar um orçamento para estética automotiva.";

  return (
    <a
      href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-5 py-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
    >
      <FaWhatsapp size={24} />
      <span className="hidden sm:block font-semibold">
        Fale conosco
      </span>
    </a>
  );
}