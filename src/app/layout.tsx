// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Esto importa Tailwind

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Soporte Técnico en Computación', // Actualizado
  description: 'Soluciones reales para tus proyectos digitales', // Actualizado
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      {/* Aplicamos los colores base al body */}
      <body className={`${inter.className} bg-white text-texto-principal`}>
        {children}
        {/* Ya no necesitamos el <div> extra */}
      </body>
    </html>
  );
}