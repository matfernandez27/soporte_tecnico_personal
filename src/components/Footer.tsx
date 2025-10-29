// src/components/Footer.tsx
"use client"; // Necesario para los íconos

import React from 'react';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  const whatsappNumber = "5491162101770"; 
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;
  const mailTo = "mailto:fernandez.mat.g@gmail.com";

  return (
    // 1. Fondo oscuro 
    <footer className="w-full bg-texto-principal text-white py-12">
      {/* 2. Contenedor de nuestro proyecto */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3. Grid de 3 columnas */}
        <div className="grid md:grid-cols-3 gap-10 mb-8">
          
          {/* Columna 1: Marca */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Soporte Técnico en Computación
            </h3>
            <p className="text-white/80 leading-relaxed">
              Técnico en Computación especializado en soporte y reparación de equipos. 
              Servicio profesional y confiable.
            </p>
          </div>

          {/* Columna 2: Contacto */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contacto</h3>
            <div className="space-y-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/80 hover:text-verde-menta transition-colors"
              >
                <FaWhatsapp size={20} />
                <span>(011) 15-62101770</span>
              </a>
              <a
                href={mailTo}
                className="flex items-center gap-3 text-white/80 hover:text-verde-menta transition-colors"
              >
                <FaEnvelope size={20} />
                <span>soporte.tecnico@ejemplo.com</span>
              </a>
              <div className="flex items-start gap-3 text-white/80">
                <FaMapMarkerAlt size={20} className="mt-1 flex-shrink-0" />
                <span>Facultad de Medicina, CABA</span>
              </div>
            </div>
          </div>

          {/* Columna 3: Horarios */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Horarios</h3>
            <div className="text-white/80 space-y-2">
              <p><span className="font-semibold text-white">Lun - Vie:</span> 9:00 - 18:00</p>
              <p><span className="font-semibold text-white">Sábados:</span> 9:00 - 13:00</p>
              <p><span className="font-semibold text-white">Domingos:</span> Cerrado</p>
            </div>
          </div>
        </div>

        {/* Barra de Copyright */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/70">
            © {new Date().getFullYear()} Soporte Técnico en Computación. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}