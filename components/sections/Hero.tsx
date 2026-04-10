"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-background"
    >
      {/* Ambient glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/60 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start gap-8"
          >
            <h1 className="text-6xl md:text-8xl font-black leading-[1.05] text-foreground tracking-tighter">
              Ruang Untuk Menikmati <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-600 block mt-2">Secangkir Kebaikan.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted max-w-lg leading-relaxed font-medium">
              Eksplorasi rasa dan harmoni dalam setiap tegukan. Ruang estetik yang dirancang khusus untuk inspirasi dan kenyamanan Anda.
            </p>

            <div className="flex flex-wrap items-center gap-5 mt-4">
              <a
                href="#menu"
                className="bg-foreground hover:bg-foreground/90 text-background px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2 group shadow-xl shadow-foreground/20"
              >
                Eksplor Menu Baru
                <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
              </a>
            </div>

            {/* Reviews miniature */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-4 mt-8 pt-8 border-t border-foreground/10"
            >
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className={`w-12 h-12 rounded-full border-4 border-background bg-secondary flex items-center justify-center z-${40 - i * 10}`}>
                    <span className="text-xs font-bold text-muted">User</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex text-primary">
                  <Star size={16} className="fill-primary" />
                  <Star size={16} className="fill-primary" />
                  <Star size={16} className="fill-primary" />
                  <Star size={16} className="fill-primary" />
                  <Star size={16} className="fill-primary" />
                </div>
                <span className="text-sm font-bold mt-1 text-foreground">Rating 4.9 dari 500+ pengunjung</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:h-[700px] w-full rounded-[3rem] hidden lg:flex items-center justify-center p-8 z-0"
          >
            {/* Abstract Aesthetic Composition replacing standard image */}
            <div className="absolute inset-x-8 inset-y-12 bg-gradient-to-br from-secondary/80 to-background rounded-[3rem] transform rotate-3 z-0" />
            <div className="absolute inset-0 bg-foreground text-background rounded-[3rem] overflow-hidden flex flex-col items-center justify-center shadow-2xl z-10 border border-white/10">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
              <Image
                src="/images/logo.png"
                alt="Cafela Logo"
                width={500}
                height={500}
                className="w-full h-auto object-contain max-w-[350px] drop-shadow-2xl z-20"
                priority
              />
            </div>

            {/* Floating Glass panels */}
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: -20 }}
              transition={{ repeat: Infinity, duration: 5, repeatType: "reverse", ease: "easeInOut" }}
              className="absolute -right-8 top-32 bg-background/80 backdrop-blur-xl p-6 rounded-3xl shadow-xl z-30 border border-foreground/5 max-w-[200px]"
            >
              <div className="bg-primary/20 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-primary font-bold">100%</div>
              <p className="font-bold text-foreground text-sm">Biji Arabika Asli</p>
              <p className="text-xs text-muted mt-2">Diseduh oleh barista berpengalaman.</p>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
