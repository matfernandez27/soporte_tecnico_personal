// src/components/Hero.tsx
"use client"; 

import React from 'react';
import { FaWhatsapp, FaCheckCircle } from 'react-icons/fa';
import Image from 'next/image';

export default function Hero() {
  const benefits = [
    { icon: FaCheckCircle, text: "Presupuestos sin cargo" },
    { icon: FaCheckCircle, text: "Transparencia total en costos" },
    { icon: FaCheckCircle, text: "Atención personalizada" },
  ];

  return (
    <section className="w-full bg-base-claro py-24">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En móvil, las columnas se apilan (grid-cols-1). En pantallas medianas y grandes, son 2 columnas (md:grid-cols-2). */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* --- Columna Izquierda: Título y Beneficios --- */}
          {/* En móvil, esta columna aparece primero */}
          <div className="flex flex-col gap-8">
            
            {/* ----- TAMAÑO DE FUENTE AJUSTADO PARA MÓVIL ----- */}
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-texto-principal">
            {/* ----------------------------------------------- */}
              TÉCNICO EN 
              <span className="
                bg-gradient-to-r from-celeste to-verde-menta 
                bg-clip-text text-transparent
              ">
                {" "}COMPUTACIÓN
              </span>
            </h1>
            
            <div className="flex items-start gap-4 bg-celeste/20 p-4 rounded-lg shadow-sm border border-celeste">
              <FaWhatsapp className="text-verde-menta flex-shrink-0 mt-1" size={24} />
              <div>
                <p className="text-lg font-semibold text-texto-principal">
                  Tu consulta, nuestra solución.
                </p>
                <span className="block text-texto-principal/70 text-base">
                  En cualquier lugar. Respondemos rápido.
                </span>
              </div>
            </div>

            <ul className="flex flex-col gap-3">
              {benefits.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <item.icon className="text-verde-menta" size={20} />
                  <span className="text-texto-principal/90 text-lg">{item.text}</span>
                </li>
              ))}
            </ul>
            
            <a 
              href="https://wa.me/5491162101770" // Tu número
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 
                         text-texto-principal px-6 py-3 rounded-full 
                         text-lg font-bold w-fit
                         
                         bg-gradient-to-r from-naranja-pastel to-naranja-vibrante
                         
                         transition-all hover:shadow-lg 
                         hover:scale-105"
            >
              <FaWhatsapp size={18} />
              <span>Consultar Ahora</span>
            </a>
          </div>

          {/* --- Columna Derecha: Ilustración y Distintivo --- */}
          {/* En móvil, esta columna aparece debajo de la anterior */}
          <div className="relative flex flex-col items-center">
            
            <div className="w-full h-96 relative rounded-lg overflow-hidden">
              <Image
                src="/img/computer-background.jpg" 
                alt="Ilustración de soporte técnico amigable"
                fill
                className="object-cover"
              />
            </div>
            
            {/* El distintivo +5 se posiciona absolutamente */}
            <div className="
              absolute -bottom-6 -left-6 
              bg-amarillo-suave 
              py-6 px-5 rounded-2xl 
              shadow-lg 
              text-center 
              border-4 border-white
            ">
              <span className="text-4xl font-bold text-texto-principal">+5</span>
              <span 
                className="block text-texto-principal/80 -mt-1 text-lg leading-tight"
                dangerouslySetInnerHTML={{ __html: 'Años de<br />experiencia' }}
              />
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
}