"use client";

import { useEffect, useState } from "react";

export default function ExitPopup() {
  const [show, setShow] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasTriggered) {
        setShow(true);
        setHasTriggered(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasTriggered]);

  // Mobile fallback (mostra após 20s)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasTriggered) {
        setShow(true);
        setHasTriggered(true);
      }
    }, 20000);

    return () => clearTimeout(timer);
  }, [hasTriggered]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-[999] flex items-center justify-center px-6">

      <div className="bg-dark text-white max-w-md w-full p-8 rounded-2xl shadow-2xl border border-white/10 text-center relative">

        <button
          onClick={() => setShow(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          ✕
        </button>

        <h2 className="text-2xl font-extrabold mb-4">
          ⚠️ Antes de sair...
        </h2>

        <p className="text-gray-300 mb-4">
          Nossa agenda em <strong>Praia Grande</strong> está quase cheia
          essa semana.
        </p>

        <p className="text-primary font-semibold mb-6">
          Entre em contato agora e ganhe uma lavagem técnica
          de cortesia no seu atendimento.
        </p>

        <a
          href="https://wa.me/5513996263054?text=Quero garantir meu horário e receber o benefício."
          target="_blank"
          className="block bg-primary hover:brightness-110 transition text-white font-bold px-6 py-4 rounded-full shadow-xl"
        >
          QUERO GARANTIR MEU HORÁRIO
        </a>

        <p className="text-xs text-gray-500 mt-4">
          Vagas limitadas para esta semana
        </p>

      </div>
    </div>
  );
}