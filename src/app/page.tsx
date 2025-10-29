// src/app/page.tsx
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import Services from '@/components/Services';
import FinalCTA from '@/components/FinalCTA';
import Location from '@/components/Location';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      {/* ----- CLASE "items-center" ELIMINADA DE AQUÍ ----- */}
      <main className="flex min-h-screen flex-col">
        <Hero />
        <SocialProof />
        <Services />
        <FinalCTA />
        <Location />
      </main>
      <Footer />
    </>
  );
}