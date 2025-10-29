// src/components/Location.tsx
"use client";

import React from 'react';
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaClock, FaExclamationCircle } from "react-icons/fa";

export default function Location() {
  return (
    <section id="ubicacion" className="py-24 bg-white">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-texto-principal tracking-tighter">
            Dónde Encontrarnos
          </h2>
          <p className="text-lg text-texto-principal/70 mt-2 max-w-2xl mx-auto">
            Coordiná la recepción de tu equipo
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Mapa Animado */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-lg h-[450px] border-4 border-white"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1273.9840732608386!2d-58.39793782088257!3d-34.59898282342412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca944582dea1%3A0x1187bb1c0c4c27b0!2sPlaza%20Dr.%20Bernardo%20Houssay!5e0!3m2!1ses!2sar!4v1761770408887!5m2!1ses!2sar" // Tu src de iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </motion.div>

          {/* Columna de Información Animada */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Tarjeta de Dirección */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="bg-celeste w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-texto-principal" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-texto-principal mb-2">
                    Dirección del Taller
                  </h3>
                  <p className="text-lg text-texto-principal/80">
                    Zona Facultad de Medicina<br />
                    Ciudad Autónoma de Buenos Aires, Argentina
                  </p>
                </div>
              </div>
            </div>

            {/* Tarjeta de Horarios */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="bg-verde-menta w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaClock className="text-texto-principal" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-texto-principal mb-2">
                    Horarios de Atención
                  </h3>
                  <div className="text-lg text-texto-principal/80 space-y-1">
                    <p><span className="font-semibold">Lunes a Viernes:</span> 9:00 - 18:00</p>
                    <p><span className="font-semibold">Sábados:</span> 9:00 - 13:00</p>
                    <p><span className="font-semibold">Domingos:</span> Cerrado</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tarjeta de Aviso Importante */}
            <div className="bg-amarillo-suave/50 border border-amarillo-suave rounded-xl p-6 flex items-start gap-4">
              <FaExclamationCircle className="text-naranja-vibrante mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-xl font-bold text-texto-principal">Importante</h3>
                <p className="text-lg text-texto-principal/80">
                  El servicio se realiza en nuestro taller. No ofrecemos servicio a domicilio. Coordinamos día y hora para la recepción de tu equipo.
                </p>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}