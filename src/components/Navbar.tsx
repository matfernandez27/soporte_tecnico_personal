// src/components/Navbar.tsx
"use client";

import React from 'react';
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  const whatsappNumber = "5491162101770"; // Tu número
  const whatsappMessage = encodeURIComponent("Hola, necesito ayuda con un problema técnico.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    // 1. Animación y nuevo estilo de fondo/sombra
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      // Usamos bg-white/95 (traducido de bg-background/95) y la nueva shadow-soft
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-soft"
    >
      {/* 2. Usamos max-w-6xl para consistencia */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        
        {/* 3. Logo de una sola línea (del código que pasaste) */}
        <h2 className="text-xl font-bold text-texto-principal">
          Matías Fernández - Soporte Técnico
        </h2>
        
        {/* 4. Botón de Escritorio (Oculto en móvil) */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            hidden md:flex items-center gap-2
            bg-transparent                 
            border border-naranja-vibrante   
            text-naranja-vibrante          
            px-5 py-2 rounded-full 
            text-sm font-semibold
            hover:bg-naranja-pastel        
            hover:text-texto-principal     
            transition-all
          "
        >
          <FaWhatsapp size={20} />
          <span>Contactar por WhatsApp</span>
        </a>

        {/* 5. Botón de Móvil (Solo ícono, oculto en escritorio) */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            md:hidden flex items-center justify-center
            bg-transparent                 
            border border-naranja-vibrante   
            text-naranja-vibrante          
            h-10 w-10 rounded-full // <-- Tamaño de botón de ícono
            text-sm font-semibold
            hover:bg-naranja-pastel        
            hover:text-texto-principal     
            transition-all
          "
        >
          <FaWhatsapp size={20} />
        </a>

      </div>
    </motion.nav>
  );
}