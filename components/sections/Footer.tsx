"use client";

import { motion } from "framer-motion";
import { Coffee, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background pt-24 pb-8 border-t-2 border-foreground relative overflow-hidden">

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 mb-20">

          <div className="lg:col-span-5 space-y-8">
            <a href="#" className="inline-block w-fit">
              <Image
                src="/images/logo.png"
                alt="Cafela Logo"
                width={80}
                height={80}
                className="h-full w-auto object-contain drop-shadow-md"
                priority={false}
              />
            </a>
            <p className="text-muted text-lg leading-relaxed font-medium max-w-sm">
              Harmoni rasa dalam secangkir kopi. Menghadirkan pengalaman ngopi modern, estetik, dan nyaman di Gemolong.
            </p>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <h4 className="font-bold text-foregroundtracking-widest uppercase text-sm">Navigasi</h4>
            <ul className="space-y-4">
              {['Beranda', 'Tentang', 'Menu', 'Lokasi'].map((item, i) => (
                <li key={i}>
                  <a href={`#${item.toLowerCase()}`} className="text-muted hover:text-foreground font-bold transition-colors inline-block hover:-translate-y-0.5 duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <h4 className="font-bold text-foreground tracking-widest uppercase text-sm">Sosial</h4>
            <ul className="space-y-4">
              {['Instagram', 'Tiktok'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-muted hover:text-foreground font-bold transition-colors group flex items-center gap-1">
                    {item}
                    <ArrowUpRight size={14} className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-bold text-foreground tracking-widest uppercase text-sm">Kontak</h4>
            <div className="space-y-4 font-bold text-muted">
              <a href="mailto:cafelacoffee.id@gmail.com" className="flex items-center gap-3 hover:text-foreground transition-colors group">
                <div className="bg-secondary p-2 rounded-full text-foreground group-hover:bg-primary transition-colors"><Mail size={16} /></div>
                cafelacoffee.id@gmail.com
              </a>
              {/* <a href="tel:+628111" className="flex items-center gap-3 hover:text-foreground transition-colors group">
                <div className="bg-secondary p-2 rounded-full text-foreground group-hover:bg-primary transition-colors"><Phone size={16} /></div>
                +62 811 1234
              </a> */}
            </div>
          </div>

        </div>

        {/* Huge Typographic Footer Mark */}
        <div className="w-full flex items-center justify-center border-t border-foreground/10 pt-16 pb-8">
          <h1 className="text-[15vw] font-black leading-none text-foreground/5 select-none pointer-events-none tracking-tighter w-full text-center">
            CAFELA.
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-8 pt-8 border-t border-foreground/10 text-sm font-bold text-muted">
          <p>&copy; {currentYear} Cafela Coffee & Tea.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
