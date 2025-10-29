// src/components/ServiceCard.tsx
"use client";

import React from 'react';
import { IconType } from 'react-icons'; 
import { motion } from 'framer-motion';

type ServiceCardProps = {
  icon: IconType;
  title: string;
  description: string;
  colorClass: string; 
};

// Variantes de animación
const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5, 
      ease: "easeOut" 
    }
  },
};

export default function ServiceCard({ icon: Icon, title, description, colorClass }: ServiceCardProps) {
  return (
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 text-left"
      variants={cardVariants}
    >
      
      {/* Icono cuadrado, fondo amarillo, icono oscuro */}
      <div 
        className={`w-12 h-12 rounded-lg ${colorClass} flex items-center justify-center mb-5`}
      >
        <Icon size={24} className="text-texto-principal" />
      </div>
      
      <h3 className="text-xl font-bold text-texto-principal mb-2">
        {title}
      </h3>
      
      <p className="text-texto-principal/80">
        {description}
      </p>
    </motion.div>
  );
}