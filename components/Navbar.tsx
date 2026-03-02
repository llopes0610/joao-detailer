"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

          {/* Logo menor no mobile */}
          <Image
            src="/logo-jpd-sport.svg"
            alt="João Paulo Detailer"
            width={130}
            height={40}
            priority
            className="md:w-[160px]"
          />

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 font-semibold text-white">
            <a href="#servicos" className="hover:text-primary transition">
              Serviços
            </a>
            <a href="#avaliacoes" className="hover:text-primary transition">
              Avaliações
            </a>
            <a href="#contato" className="hover:text-primary transition">
              Contato
            </a>
            <a href="/galeria" className="hover:text-primary transition">
  Galeria
</a>

            <a
              href="https://wa.me/5513996263054"
              target="_blank"
              className="bg-primary text-white px-6 py-2 rounded-full hover:scale-105 transition"
            >
              Orçamento
            </a>
          </nav>

          {/* Mobile Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(true)}
          >
            <Menu size={26} />
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex flex-col items-center justify-center space-y-8 text-white text-xl font-semibold">

          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6"
          >
            <X size={30} />
          </button>

          <a href="#servicos" onClick={() => setOpen(false)}>
            Serviços
          </a>

          <a href="#avaliacoes" onClick={() => setOpen(false)}>
            Avaliações
          </a>

          <a href="#contato" onClick={() => setOpen(false)}>
            Contato
          </a>

          <a
            href="https://wa.me/5513996263054"
            target="_blank"
            className="bg-primary px-8 py-4 rounded-full text-white"
          >
            Solicitar Orçamento
          </a>
        </div>
      )}
    </>
  );
}