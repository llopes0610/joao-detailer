"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Hero() {
  const images = [
    "/hero/1.jpg",
    "/hero/2.jpg",
    "/hero/3.jpg",
    "/hero/4.jpg",
    "/hero/5.jpg",
    "/hero/6.jpg",
  ];

  return (
    <section className="relative w-full h-[85vh] min-h-[600px]">

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        loop
        className="h-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={img}
                alt="Estética automotiva em Praia Grande - João Paulo Detailer"
                fill
                priority={index === 0}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/65"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Conteúdo */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-6 z-10">
        <div className="max-w-3xl text-white space-y-6">

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Estética Automotiva em
            <span className="text-primary block">
              Praia Grande - SP
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200">
            Polimento técnico, vitrificação e detalhamento automotivo
            premium para toda a Baixada Santista.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">

            <a
              href="https://wa.me/5513996263054"
              target="_blank"
              className="bg-primary hover:scale-105 transition text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg"
            >
              Solicitar Orçamento Agora
            </a>

            <a
              href="#servicos"
              className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition"
            >
              Ver Serviços
            </a>

          </div>

          <p className="text-sm text-gray-300">
            Atendimento em Praia Grande e toda a região da Baixada Santista
          </p>

        </div>
      </div>
    </section>
  );
}