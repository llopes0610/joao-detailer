"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo-jpd-sport.svg"
            alt="João Paulo Detailer"
            width={180}
            height={60}
            priority
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 font-semibold text-gray-800">
          <a href="#servicos" className="hover:text-primary transition">
            Serviços
          </a>
          <a href="#avaliacoes" className="hover:text-primary transition">
            Avaliações
          </a>
          <a href="#contato" className="hover:text-primary transition">
            Contato
          </a>

          {/* CTA WhatsApp */}
          <a
            href="https://wa.me/55SEUNUMEROAQUI"
            target="_blank"
            className="bg-primary text-white px-5 py-2 rounded-full hover:scale-105 transition"
          >
            Orçamento
          </a>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white px-6 pb-6 space-y-4 font-semibold text-gray-800">
          <a
            href="#servicos"
            className="block"
            onClick={() => setOpen(false)}
          >
            Serviços
          </a>

          <a
            href="#avaliacoes"
            className="block"
            onClick={() => setOpen(false)}
          >
            Avaliações
          </a>

          <a
            href="#contato"
            className="block"
            onClick={() => setOpen(false)}
          >
            Contato
          </a>

          <a
            href="https://wa.me/55SEUNUMEROAQUI"
            target="_blank"
            className="block bg-primary text-white text-center py-3 rounded-full"
          >
            Solicitar Orçamento
          </a>
        </div>
      )}
    </header>
  );
}