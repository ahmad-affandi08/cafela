"use client";

import { motion } from "framer-motion";
import { Coffee, Wifi, Focus, Users, ThumbsUp } from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  return (
    <section id="about" className="py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
         
        {/* Section Title */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
           <div className="max-w-2xl">
             <h2 className="text-primary font-black tracking-widest uppercase text-sm mb-4">Mengenal Lebih Dekat</h2>
             <h3 className="text-4xl md:text-6xl font-black text-foreground leading-[1.1] tracking-tight">
               Kenyamanan Dalam Setiap Persepsi.
             </h3>
           </div>
           <p className="text-muted text-lg max-w-sm md:text-right font-medium">
             Lebih dari sekadar tempat ngopi. Kami menciptakan ekosistem bersantai dan produktivitas di satu tempat.
           </p>
        </div>

        {/* Bento Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[280px]"
        >
           {/* Item 1 - Large Story Card */}
           <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-2 row-span-2 bg-secondary/50 rounded-[2.5rem] p-10 flex flex-col justify-end relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/70 to-transparent z-10" />
              <img 
                src="/images/image1.png" 
                alt="Biji Kopi Premium" 
                className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:scale-105 transition-all duration-700 z-0"
              />
              
              <div className="relative z-20 mt-auto">
                 <div className="bg-primary/20 w-14 h-14 rounded-2xl flex items-center justify-center text-primary mb-6">
                    <Coffee size={28} />
                 </div>
                 <h4 className="text-3xl font-bold text-foreground mb-4 tracking-tight">Kurasi Biji Kopi Premium</h4>
                 <p className="text-muted/90 text-lg leading-relaxed max-w-md">
                   Kami bermitra dengan petani lokal terpilih untuk memastikan bahwa biji kopi yang diolah di meja Anda adalah kualitas Grade-A yang dipanggang dengan sempurna.
                 </p>
              </div>
           </motion.div>

           {/* Item 2 - Wi-Fi */}
           <motion.div variants={itemVariants} className="bg-foreground rounded-[2.5rem] p-8 flex flex-col text-background relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/70 to-transparent z-10" />
              <img 
                src="/images/image2.png" 
                alt="Wi-Fi Cepat" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700 z-0"
              />
              <div className="absolute top-0 right-0 p-8 opacity-10 z-20">
                 <Wifi size={100} />
              </div>
              <Wifi size={32} className="text-primary mb-auto relative z-20" />
              <div className="relative z-20">
                 <h4 className="text-xl font-bold mb-2">Wi-Fi Cepat</h4>
                 <p className="text-background/70 text-sm">Akses internet up-to 100 Mbps untuk kenyamanan kerja jarak jauh tanpa gangguan.</p>
              </div>
           </motion.div>

           {/* Item 3 - Productivity */}
           <motion.div variants={itemVariants} className="bg-primary rounded-[2.5rem] p-8 flex flex-col text-primary-foreground relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent z-10" />
              <img 
                src="/images/image3.png" 
                alt="Sudut Produktif" 
                className="absolute inset-0 w-full h-full object-cover opacity-70 mix-blend-multiply group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 z-0"
              />
              <Focus size={32} className="mb-auto text-yellow-100 relative z-20" />
              <div className="relative z-20">
                 <h4 className="text-xl font-bold mb-2 text-foreground">Sudut Produktif</h4>
                 <p className="text-foreground/80 text-sm font-medium">Banyak colokan listrik dan meja ergonomis.</p>
              </div>
           </motion.div>

           {/* Item 4 - Community */}
           <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-2 bg-secondary/80 rounded-[2.5rem] p-8 flex items-center gap-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/100 via-secondary/70 to-transparent z-10" />
              <img 
                src="/images/image4.png" 
                alt="Tempat Berkumpul" 
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 z-0"
              />
              <div className="bg-background rounded-full p-6 text-foreground hidden sm:block shrink-0 shadow-sm border border-foreground/5 relative z-20">
                 <Users size={48} />
              </div>
              <div className="relative z-20">
                 <h4 className="text-2xl font-bold text-foreground mb-2">Tempat Berkumpul</h4>
                 <p className="text-muted text-base leading-relaxed">
                   Tempat yang nyaman untuk ngobrol intim berdua, atau kumpul besar bersama teman komunitas Anda. Ruangan luas dan sirkulasi udara sangat baik.
                 </p>
              </div>
           </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
