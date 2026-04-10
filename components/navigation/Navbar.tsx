"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "#hero" },
    { name: "Tentang", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Lokasi", href: "#location" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-foreground/95 backdrop-blur-md shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Left Nav (Links) */}
        <nav className="hidden md:flex items-center gap-8 flex-1 justify-start">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium transition-colors ${
                isScrolled ? "text-white/80 hover:text-primary" : "text-foreground/80 hover:text-primary"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Center Logo */}
        <a href="#" className="flex items-center justify-center flex-1">
          <Image
            src="/images/logo.png"
            alt="Cafela Logo"
            width={50}
            height={50}
            className="h-full w-auto object-contain drop-shadow-lg"
            priority
          />
        </a>

        {/* Right Action (Hubungi Kami) */}
        <div className="hidden md:flex items-center justify-end flex-1">
          <a
            href="#location"
            className="bg-primary hover:bg-yellow-400 text-accent px-6 py-2.5 rounded-full font-bold transition-all shadow-sm"
          >
            Hubungi Kami
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex flex-1 justify-end">
          <button
            className={`p-2 ${isScrolled ? 'text-white' : 'text-foreground'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-foreground border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-white/80 hover:text-primary"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#location"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-primary text-center text-accent px-6 py-3 rounded-xl font-bold"
              >
                Hubungi Kami
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
