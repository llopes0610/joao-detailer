"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function Hero() {
  const swiperRef = useRef<any>(null);

  const images = [
    "/hero/1.jpg",
    "/hero/2.jpg",
    "/hero/3.jpg",
    "/hero/4.jpg",
    "/hero/5.jpg",
    "/hero/6.jpg",
    "/hero/7.jpg",
    "/hero/8.jpg",
    "/hero/9.jpg",
    "/hero/10.jpg",
  ];

  return (
    <section className="relative w-full h-screen pt-[90px] overflow-hidden">

      {/* SWIPER */}
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 4500 }}
        pagination={{ clickable: true }}
        loop
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="h-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full overflow-hidden group">

              {/* IMAGEM COM ZOOM SUAVE */}
              <Image
                src={img}
                alt="Estética automotiva em Praia Grande - João Paulo Detailer"
                fill
                priority={index === 0}
                sizes="100vw"
                quality={85}
                className="object-cover transition-transform duration-[7000ms] ease-out group-hover:scale-105"
              />

              {/* OVERLAY CINEMATOGRÁFICO */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/95" />

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* SETAS CUSTOM PREMIUM */}
      <div className="absolute inset-0 flex items-center justify-between px-6 md:px-16 z-20 pointer-events-none">

        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="pointer-events-auto bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-3 rounded-full transition shadow-lg"
        >
          <ChevronLeft size={26} />
        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="pointer-events-auto bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-3 rounded-full transition shadow-lg"
        >
          <ChevronRight size={26} />
        </button>

      </div>

      {/* CONTEÚDO CENTRAL */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-6 z-10">
        <div className="max-w-3xl text-white space-y-8">

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-2xl">
            Estética Automotiva em
            <span className="text-primary block mt-2">
              Praia Grande - SP
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            Polimento técnico, vitrificação e detalhamento automotivo
            premium para toda a Baixada Santista.
          </p>

          <div className="flex flex-col md:flex-row gap-5 justify-center">

            <a
              href="https://wa.me/5513996263054"
              target="_blank"
              className="bg-primary hover:brightness-110 transition text-white font-semibold px-10 py-5 rounded-full text-lg shadow-2xl shadow-orange-500/40"
            >
              Solicitar Orçamento Agora
            </a>

            <a
              href="#servicos"
              className="border border-white/40 px-10 py-5 rounded-full hover:bg-white hover:text-black transition text-lg backdrop-blur-sm"
            >
              Ver Serviços
            </a>

          </div>

          <p className="text-sm text-gray-400">
            Atendimento em Praia Grande e toda a região da Baixada Santista
          </p>

        </div>
      </div>
    </section>
  );
}