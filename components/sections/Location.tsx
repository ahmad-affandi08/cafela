"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Navigation, Send } from "lucide-react";

export default function Location() {
  const mapLink = "https://www.google.com/maps/place/Cafela+Gemolong/@-7.3997139,110.8247127,17z/data=!3m1!4b1!4m6!3m5!1s0x2e7a0ffcfda97833:0xe314a61a446d4f76!8m2!3d-7.3997139!4d110.8272876!16s%2Fg%2F11lgkd4kfx";

  return (
    <section id="location" className="py-32 bg-foreground text-background relative overflow-hidden">
      {/* Decorative large text */}
      <div className="absolute top-0 right-0 opacity-5 pointer-events-none -translate-y-1/4 translate-x-1/4">
        <h2 className="text-[20vw] font-black leading-none uppercase">Lokasi</h2>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">

          {/* Details Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-10"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-8">
                <MapPin size={14} /> Temukan Kami
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-6 leading-[1.1] tracking-tight">
                Mampir Ke<br/>Tempat Kami.
              </h3>
              <p className="text-white/60 text-lg leading-relaxed font-medium">
                Pintu Cafela selalu terbuka untuk Anda. Baik untuk bekerja, ngobrol ringan, atau melepas lelah, semuanya dimulai dari secangkir kopi disini.
              </p>
            </div>

            <div className="grid gap-6">
              <div className="group flex items-start gap-5 p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="bg-primary/20 p-3.5 rounded-2xl text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-foreground transition-all duration-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Alamat</h4>
                  <p className="text-white/60 font-medium text-sm leading-relaxed">Gemolong, Sragen<br/>Jawa Tengah, Indonesia</p>
                </div>
              </div>

              <div className="group flex items-start gap-5 p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="bg-primary/20 p-3.5 rounded-2xl text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-foreground transition-all duration-500">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Operasional</h4>
                  <p className="text-white/60 font-medium text-sm leading-relaxed">
                    <span className="block">Senin - Minggu: 16:00 - 23:00</span>
                  </p>
                </div>
              </div>
            </div>

            <a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto justify-center items-center gap-3 bg-primary hover:bg-primary/90 text-foreground px-8 py-4 rounded-full font-bold transition-all group"
            >
              <Navigation size={18} className="group-hover:rotate-45 transition-transform duration-300" />
              Petunjuk Arah Google Maps
            </a>
          </motion.div>

          {/* Map Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 h-[500px] lg:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl relative p-4 bg-background border border-foreground"
          >
             <div className="w-full h-full rounded-[2.2rem] overflow-hidden relative group">
                <div className="absolute inset-0 bg-primary/20 mix-blend-color z-10 pointer-events-none group-hover:bg-transparent transition-colors duration-1000" />
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.1266060120153!2d110.82471267597143!3d-7.399713892609953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a0ffcfda97833%3A0xe314a61a446d4f76!2sCafela%20Gemolong!5e0!3m2!1sen!2sid!4v1712753736780!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(50%)" }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 z-0 bg-background transition-all duration-1000"
                />
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
