"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function HeroVisual() {
  const swiperRef = useRef<any>(null);

  const images = Array.from({ length: 10 }, (_, i) => `/hero/${i + 1}.jpg`);

  return (
    <section className="relative w-full h-[80vh] md:h-screen pt-[70px] overflow-hidden">

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
            <div className="relative w-full h-full overflow-hidden">

              <Image
                src={img}
                alt="Estética automotiva em Praia Grande"
                fill
                priority={index === 0}
                sizes="100vw"
                quality={90}
                className="object-cover brightness-110 contrast-110"
              />

              {/* Vinheta leve apenas nas bordas */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent,rgba(0,0,0,0.6))]" />

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* SETAS */}
      <div className="absolute inset-0 flex items-center justify-between px-6 md:px-16 z-20 pointer-events-none">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="pointer-events-auto bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-3 rounded-full transition"
        >
          <ChevronLeft size={26} />
        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="pointer-events-auto bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-3 rounded-full transition"
        >
          <ChevronRight size={26} />
        </button>
      </div>

    </section>
  );
}

<section className="bg-black text-white py-20 px-6">

  <div className="max-w-6xl mx-auto text-center space-y-8">

    <h1 className="text-4xl md:text-6xl font-extrabold">
      Estética Automotiva em
      <span className="text-primary block mt-2">
        Praia Grande - SP
      </span>
    </h1>

    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
      Polimento técnico, vitrificação e detalhamento automotivo
      premium para toda a Baixada Santista.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center">

      <a
        href="https://wa.me/5513996263054"
        target="_blank"
        className="bg-primary px-10 py-5 rounded-full text-white text-lg font-semibold shadow-2xl shadow-orange-500/40 hover:brightness-110 transition"
      >
        Solicitar Orçamento
      </a>

      <a
        href="#servicos"
        className="border border-white/40 px-10 py-5 rounded-full hover:bg-white hover:text-black transition"
      >
        Ver Serviços
      </a>

    </div>

  </div>

</section>