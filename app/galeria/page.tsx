"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

export default function Galeria() {
  const images = Array.from({ length: 48 }, (_, i) => `/galeria/${i + 1}.jpg`);
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white py-24 px-6">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-extrabold">
            Galeria de <span className="text-primary">Resultados</span>
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Confira alguns dos nossos trabalhos de polimento, vitrificação
            e detalhamento automotivo em Praia Grande - SP.
          </p>
        </div>

        {/* GRID ESPORTIVO */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

  {images.map((img, index) => (
    <div
      key={index}
      onClick={() => setSelected(img)}
      className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group"
    >
      <Image
        src={img}
        alt={`Trabalho ${index + 1} - João Paulo Detailer`}
        fill
        className="object-cover group-hover:scale-110 transition duration-700 brightness-110 contrast-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />

      {/* Borda esportiva */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary transition duration-500 rounded-xl" />
    </div>
  ))}

</div>

        {/* CTA FINAL */}
        <div className="mt-28 text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Gostou dos resultados?
          </h2>

          <p className="text-gray-400 mb-8">
            Garanta agora seu horário e deixe seu carro com brilho profissional.
          </p>

          <a
            href="https://wa.me/5513996263054?text=Quero agendar meu horário após ver a galeria."
            target="_blank"
            className="inline-block bg-primary px-10 py-5 rounded-full text-white text-lg font-semibold shadow-2xl shadow-orange-500/40 hover:brightness-110 transition"
          >
            Agendar pelo WhatsApp
          </a>

        </div>

      </div>

      {/* LIGHTBOX PREMIUM */}
      {selected && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-md flex items-center justify-center z-50 p-6">

          <button
            onClick={() => setSelected(null)}
            className="absolute top-6 right-6 text-white hover:text-primary transition"
          >
            <X size={34} />
          </button>

          <div className="relative w-full max-w-5xl h-[80vh]">
            <Image
              src={selected}
              alt="Imagem ampliada"
              fill
              className="object-contain"
            />
          </div>

        </div>
      )}
    </section>
  );
}