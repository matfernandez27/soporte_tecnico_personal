// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'texto-principal': '#2c3e50', 
        'base-claro': '#f8f9fa', 
        'celeste': '#a0d2eb',        
        'verde-menta': '#a9e5bb',    
        'amarillo-suave': '#fdeca6', 
        'naranja-pastel': '#fecbaf', 
        'naranja-vibrante': '#f8a57f', 
      },
      // ----- AÑADE ESTE BLOQUE 'boxShadow' -----
      boxShadow: {
        'soft': '0 4px 12px 0 rgba(0,0,0,0.04)', // Esta es la sombra 'shadow-soft'
      }
      // ----------------------------------------
    },
  },
  plugins: [],
};
export default config;