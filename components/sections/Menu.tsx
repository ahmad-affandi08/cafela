"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee, CupSoda, Croissant } from "lucide-react";

const allMenuCategories = [
  {
    id: "coffee",
    name: "Coffee",
    icon: <Coffee size={20} />,
    items: [
      { name: "Cafela Signature", price: "25.000", desc: "Kopi susu gula aren khas Cafela yang creamy." },
      { name: "Cafe Latte", price: "22.000", desc: "Espresso dengan susu steamed lembut." },
      { name: "Americano", price: "18.000", desc: "Classic robust espresso shot dengan air murni." },
      { name: "Caramel Macchiato", price: "28.000", desc: "Paduan espresso, creamy milk, & sirup karamel." },
      { name: "Mochaccino", price: "26.000", desc: "Perpaduan kopi dan cokelat premium yang legit." },
      { name: "V60 Manual Brew", price: "30.000", desc: "Pilih biji kopi favoritmu (Arabika Pilihan)." },
    ],
  },
  {
    id: "non-coffee",
    name: "Non-Coffee",
    icon: <CupSoda size={20} />,
    items: [
      { name: "Matcha Latte", price: "25.000", desc: "Bubuk matcha premium Jepang dengan susu." },
      { name: "Red Velvet", price: "24.000", desc: "Rasa kue red velvet manis nan lembut cair." },
      { name: "Taro Milks", price: "22.000", desc: "Minuman taro alami yang creamy menggoda." },
      { name: "Lychee Yakult", price: "22.000", desc: "Teh leci segar dengan buah asli dan Yakult." },
    ],
  },
  {
    id: "snacks",
    name: "Snacks & Food",
    icon: <Croissant size={20} />,
    items: [
      { name: "Butter Croissant", price: "20.000", desc: "Croissant berlapis renyah dengan aroma mentega." },
      { name: "Truffle Fries", price: "25.000", desc: "Kentang goreng renyah bumbu truffle & keju." },
      { name: "Dimsum Mentai", price: "22.000", desc: "Dimsum ayam udang dengan saus mentai bakar." },
      { name: "Platter Spesial", price: "35.000", desc: "Sosis, kentang, nugget cocok untuk sharing." },
    ],
  },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("coffee");

  const shownItems = allMenuCategories.find(c => c.id === activeCategory)?.items || [];

  return (
    <section id="menu" className="py-32 bg-secondary/30 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-primary font-black tracking-widest uppercase text-sm mb-4">Pilihan Rasa</h2>
          <h3 className="text-4xl md:text-5xl font-black text-foreground mb-12 tracking-tight">
            Menu Kami
          </h3>

          {/* Modern Tab Navigation */}
          <div className="flex bg-background p-1.5 rounded-full shadow-sm border border-foreground/5 overflow-x-auto max-w-full no-scrollbar">
            {allMenuCategories.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`relative flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-colors whitespace-nowrap z-10 ${isActive ? "text-background" : "text-foreground/70 hover:text-foreground"
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-foreground rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className={isActive ? "text-primary" : "text-foreground/50"}>{category.icon}</span>
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Items Grid with AnimatePresence for smooth tab switching */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {shownItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-background rounded-3xl p-6 shadow-sm border border-foreground/5 hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 group flex flex-col"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h5 className="font-bold text-foreground text-xl tracking-tight group-hover:text-primary transition-colors">
                      {item.name}
                    </h5>
                    <span className="font-black text-foreground bg-secondary px-3 py-1 rounded-full text-sm tracking-widest shrink-0 ml-4 group-hover:bg-primary group-hover:text-background transition-colors">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-muted text-sm font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
