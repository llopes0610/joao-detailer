"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/60 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

          {/* Logo */}
          <Image
            src="/logo-jpd-sport.svg"
            alt="João Paulo Detailer"
            width={160}
            height={50}
            priority
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
            <Menu size={30} />
          </button>
        </div>
      </header>

      {/* MOBILE FULL SCREEN MENU */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close */}
        <div className="flex justify-between items-center px-6 py-6">
          <Image
            src="/logo-jpd-sport.svg"
            alt="João Paulo Detailer"
            width={150}
            height={50}
          />
          <button
            onClick={() => setOpen(false)}
            className="text-white"
          >
            <X size={32} />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col items-center justify-center h-[70%] space-y-8 text-2xl font-bold text-white">

          <a
            href="#servicos"
            onClick={() => setOpen(false)}
            className="hover:text-primary transition"
          >
            Serviços
          </a>

          <a
            href="#avaliacoes"
            onClick={() => setOpen(false)}
            className="hover:text-primary transition"
          >
            Avaliações
          </a>

          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="hover:text-primary transition"
          >
            Contato
          </a>

          <a
            href="https://wa.me/5513996263054"
            target="_blank"
            className="mt-6 bg-primary px-8 py-4 rounded-full text-white text-lg"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </>
  );
}