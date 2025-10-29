// src/components/SocialProof.tsx
"use client";

import React from 'react';
// 1. Importamos el nuevo ícono (FaHandshake) y quitamos FaStore
import { FaWhatsapp, FaDollarSign, FaHandshake, FaChevronRight } from 'react-icons/fa';

const steps = [
  {
    icon: FaWhatsapp,
    title: "1. Contacto por WhatsApp",
    description: "Escribinos contándonos tu problema. Te respondemos rápido y coordinamos los detalles.",
    color: "bg-celeste",
  },
  {
    icon: FaDollarSign,
    title: "2. Presupuesto Claro",
    description: "Recibís un presupuesto detallado y sin sorpresas. Sin costos ocultos, total transparencia.",
    color: "bg-verde-menta",
  },
  {
    // 2. ÍCONO ACTUALIZADO
    icon: FaHandshake, 
    title: "3. Coordinación de Recepción",
    description: "Acordamos día y hora para que traigas tu equipo al taller. Servicio profesional en nuestras instalaciones.",
    color: "bg-amarillo-suave",
  }
];

// Componente de Tarjeta individual
const StepCard = ({ step }: { step: typeof steps[0] }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 flex flex-col items-center text-center md:w-1/3">
    <div 
      className={`w-20 h-20 rounded-full ${step.color} flex items-center justify-center mb-6 mx-auto`}
    >
      <step.icon size={40} className="text-texto-principal opacity-80" />
    </div>
    <h3 className="text-xl font-bold text-texto-principal mb-2">{step.title}</h3>
    <p className="text-texto-principal/90">{step.description}</p>
  </div>
);

// Componente de Chevron
const Chevron = () => (
  <div className="hidden md:flex items-center justify-center">
    <FaChevronRight className="text-celeste opacity-50" size={24} />
  </div>
);

export default function SocialProof() {
  return (
    <section className="w-full bg-celeste/20 py-24">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-texto-principal tracking-tighter">
            Proceso en 3 Pasos
          </h2>
          <p className="text-lg text-texto-principal/70 mt-2">
            Simple, rápido y transparente. Así trabajamos.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-stretch justify-center gap-8">
          <StepCard step={steps[0]} />
          <Chevron />
          <StepCard step={steps[1]} />
          <Chevron />
          <StepCard step={steps[2]} />
        </div>
      </div>
    </section>
  );
}