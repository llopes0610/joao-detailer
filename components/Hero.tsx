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
    <section className="relative w-full h-screen pt-[70px] overflow-hidden">

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

              {/* IMAGEM MAIS VIVA */}
              <Image
                src={img}
                alt="Estética automotiva em Praia Grande - João Paulo Detailer"
                fill
                priority={index === 0}
                sizes="100vw"
                quality={90}
                className="object-cover brightness-110 contrast-110 transition-transform duration-[7000ms] ease-out group-hover:scale-105"
              />

              {/* OVERLAY LATERAL (não apaga o carro) */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* SETAS CUSTOM */}
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

      {/* CONTEÚDO LATERAL PREMIUM */}
      <div className="absolute inset-0 flex items-center z-10">
        <div className="max-w-6xl mx-auto w-full px-6 md:px-12">

          <div className="max-w-xl text-white space-y-8">

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Estética Automotiva em
              <span className="text-primary block mt-2">
                Praia Grande - SP
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Polimento técnico, vitrificação e detalhamento automotivo
              premium para toda a Baixada Santista.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">

              <a
                href="https://wa.me/5513996263054"
                target="_blank"
                className="bg-primary hover:brightness-110 transition text-white font-semibold px-8 py-4 rounded-full text-lg shadow-2xl shadow-orange-500/40"
              >
                Solicitar Orçamento
              </a>

              <a
                href="#servicos"
                className="border border-white/40 px-8 py-4 rounded-full hover:bg-white hover:text-black transition"
              >
                Ver Serviços
              </a>

            </div>

            <p className="text-sm text-gray-300">
              Atendimento em Praia Grande e toda a região da Baixada Santista
            </p>

          </div>

        </div>
      </div>

    </section>
  );
}