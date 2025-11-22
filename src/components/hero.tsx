"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["700", "800", "900"] });

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 600], [0, 120]);
  const y2 = useTransform(scrollY, [0, 600], [0, -120]);

  // Random particles array
  const particles = Array.from({ length: 20 });

  return (
    <section className="relative py-20 md:py-24 flex flex-col items-center justify-center px-4 md:px-6 lg:px-8 overflow-hidden">

      {/* ★ Animated Background Blob 1 */}
      <motion.div
        style={{ y: y1 }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-10 left-10 w-80 h-80 bg-blue-300/30 rounded-full blur-3xl"
      />

      {/* ★ Animated Background Blob 2 */}
      <motion.div
        style={{ y: y2 }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute bottom-10 right-10 w-80 h-80 bg-purple-300/30 rounded-full blur-3xl"
      />

      {/* ⭐ Floating Glow Particles */}
      {particles.map((_, i) => (
        <motion.div
          key={i}
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 6 + i * 0.3,
            repeat: Infinity,
            delay: i * 0.2,
          }}
          className="absolute w-2 h-2 bg-white/40 rounded-full blur-sm"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          y: isVisible ? 0 : 40,
        }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        {/* Enhanced Welcome Badge with Animation */}
        <div className="mb-6 inline-block">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: -30 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: 0
            }}
            transition={{ 
              delay: 0.2, 
              duration: 0.8,
              type: "spring",
              stiffness: 200,
              damping: 15
            }}
          >
            <motion.span
              animate={{ 
                scale: [1, 1.08, 1],
                rotate: [0, 2, -2, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className={`${inter.className} text-base md:text-lg lg:text-xl font-extrabold text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text px-6 py-3 rounded-full border-2 border-blue-400 shadow-2xl inline-block bg-white/80 backdrop-blur-sm`}
            >
              Welcome to Creator Research PVT. LTD.
            </motion.span>
          </motion.div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 font-serif leading-tight"
        >
          Discover Excellence in{" "}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Digital Solutions
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          className="text-xl md:text-2xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Creator Research Pvt. Ltd. brings together expertise, innovation, and
          technology to transform your ideas into reality.
        </motion.p>
      </motion.div>
    </section>
  );
}