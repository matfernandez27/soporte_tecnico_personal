// src/components/FinalCTA.tsx
"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function FinalCTA() {
  const whatsappNumber = "5491162101770"; // TU NÚMERO
  const whatsappMessage = encodeURIComponent("Hola, necesito ayuda con un problema técnico.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="py-24 bg-amarillo-suave">
      <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-texto-principal mb-6"
          >
            ¿Listo para solucionar tu problema?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-texto-principal/70 mb-10"
          >
            Contactanos ahora y obtené un presupuesto sin cargo
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* ----- BOTÓN ACTUALIZADO CON DEGRADADO ----- */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center justify-center gap-3 
                text-texto-principal 
                px-8 py-4 rounded-xl 
                text-lg font-bold
                
                bg-gradient-to-r from-naranja-pastel to-naranja-vibrante
                
                transition-all hover:scale-105 hover:shadow-lg
              "
            >
              <FaWhatsapp className="mr-1" size={24} />
              Escribinos por WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 text-texto-principal/70"
          >
            <p className="text-lg">
              ⚡ Respuesta rápida • 💯 Sin costos ocultos • 🤝 Atención personalizada
            </p>
          </motion.div>
          
        </motion.div>
      </div>
    </section>
  );
}