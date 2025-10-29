// src/components/Services.tsx
"use client"; 

import React from 'react';
import ServiceCard from './ServiceCard';
// 1. Importamos los nuevos iconos y 'motion'
import { motion } from "framer-motion";
import {
  FaDesktop,
  FaBroom,
  FaHdd, // <-- Nuevo
  FaTools,
  FaTachometerAlt,
  FaDatabase, // <-- Nuevo
} from "react-icons/fa";

// 2. Nueva lista de servicios con colores individuales
const services = [
  {
    icon: FaDesktop,
    title: "Soporte Remoto",
    description: "Asistencia inmediata a distancia vía Anydesk para problemas de software.",
    color: "bg-celeste",
  },
  {
    icon: FaBroom,
    title: "Limpieza y Mantenimiento",
    description: "Limpieza profunda de componentes internos y externos. Mantenimiento preventivo para prolongar la vida útil de tu equipo.",
    color: "bg-verde-menta",
  },
  {
    icon: FaHdd,
    title: "Formateo e Instalación",
    description: "Instalación limpia de sistemas operativos. Configuración optimizada de drivers y programas esenciales.",
    color: "bg-amarillo-suave",
  },
  {
    icon: FaTools,
    title: "Armado de PC a Medida",
    description: "Diseñamos y ensamblamos la computadora perfecta según tus necesidades y presupuesto.",
    color: "bg-naranja-pastel",
  },
  {
    icon: FaTachometerAlt,
    title: "Optimización de Rendimiento",
    description: "Diagnóstico completo y mejoras de hardware y software para maximizar la velocidad de tu equipo.",
    color: "bg-celeste",
  },
  {
    icon: FaDatabase,
    title: "Recuperación de Datos",
    description: "Rescatamos información valiosa de discos dañados o formateados accidentalmente.",
    color: "bg-verde-menta",
  },
];

// 3. Variantes de animación del contenedor (del código que diste)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export default function Services() {
  return (
    // 4. Usamos 'bg-white' y 'py-24'
    <section id="servicios" className="py-24 bg-white">
      {/* 5. Usamos 'max-w-7xl' para el ancho */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título animado */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12" // 6. Ajustado a 'mb-12'
        >
          <h2 className="text-4xl font-bold text-texto-principal tracking-tighter">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-texto-principal/70 mt-2 max-w-2xl mx-auto">
            Soluciones completas para todas tus necesidades tecnológicas
          </p>
        </motion.div>

        {/* Grid animado */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              // 7. Prop 'colorClass' coincide con nuestro ServiceCard
              colorClass={service.color}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}