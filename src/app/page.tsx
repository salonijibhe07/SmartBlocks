"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  BookOpen,
  Users,
  Code2,
  Lightbulb,
  Brain,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Hero from "@/components/hero";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useBlocks } from "@/hooks/useBlocks";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});



// Google Font
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], weight: ["700", "800"] });




// -----------------------------
// Motion Variants
// -----------------------------
const parallaxVariant = (direction: "left" | "right"): Variants => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -120 : 120,
    y: 60,
    scale: 0.85,
    rotate: direction === "left" ? -4 : 4,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    rotate: 0,
    filter: "blur(0px)",
    transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
  },
});

const floatOnScroll: Variants = {
  rest: { y: 0 },
  hover: { y: -6, transition: { type: "spring", stiffness: 200, damping: 10 } },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

// Gradient + Accent Colors
const gradientPalettes = [
  "from-indigo-200 via-purple-200 to-pink-200",
  "from-emerald-200 via-lime-200 to-yellow-200",
  "from-rose-200 via-orange-200 to-amber-200",
  "from-cyan-200 via-sky-200 to-blue-200",
  "from-fuchsia-200 via-purple-200 to-indigo-200",
];

const accentColors = [
  "text-indigo-700",
  "text-green-700",
  "text-rose-700",
  "text-cyan-700",
  "text-fuchsia-700",
];

// Icon Mapping for Backend Icons
const iconMap: Record<string, React.ComponentType<any>> = {
  BookOpen,
  Users,
  Code2,
  Lightbulb,
  Brain,
};

// -----------------------------
// HomePage Component
// -----------------------------
export default function HomePage() {
  const { blocks, loading, error } = useBlocks();

  const displayDomains =
    blocks && blocks.length > 0
      ? [...blocks].sort((a, b) => a.id - b.id)
      : [];

  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <Navigation />
      <Hero />
      

      

      {/* Explore Section */}
      <section className="py-14 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className={`${inter.className} text-4xl md:text-5xl font-extrabold text-slate-900 mb-3 tracking-tight`}
          >
            Explore Our Digital Ecosystem
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover our suite of digital solutions and services — each one uniquely designed.
          </p>
        </motion.div>

        {error && (
          <div className="mb-10 p-6 bg-red-100 border border-red-300 rounded-2xl text-center">
            <p className="text-red-700 font-medium">{error}</p>
          </div>
        )}

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
        >
          {loading ? (
            <p className="text-center text-gray-500">Loading domains...</p>
          ) : (
            displayDomains.map((domain: any, idx) => {
              const Icon =
                domain.icon && iconMap[domain.icon]
                  ? iconMap[domain.icon]
                  : BookOpen;

              const gradientBg = gradientPalettes[idx % gradientPalettes.length];
              const accent = accentColors[idx % accentColors.length];

              return (
                <motion.article
                  key={domain.id}
                  variants={parallaxVariant(idx % 2 === 0 ? "left" : "right")}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.25 }}
                  whileHover="hover"
                  animate="rest"
                  className={`relative rounded-3xl p-8 shadow-2xl overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 bg-gradient-to-br ${gradientBg} border border-white/20`}
                >
                  <motion.div variants={floatOnScroll}>
                    <div className="flex items-center mb-4">
                      <Icon className={`${accent} w-10 h-10 mr-3`} />
                      <h3
                         className={`${montserrat.className} text-2xl font-bold ${accent} tracking-wide`}
                      >
                        {domain.title}
                      </h3>
                    </div>

                    <p className="text-slate-800 mb-6">{domain.description}</p>

                    {domain.url && (
                      <Button
                        onClick={() => window.open(domain.url, "_blank")}
                        className="bg-white text-slate-900 border border-gray-200 hover:bg-gray-100 flex items-center gap-2 shadow-sm"
                      >
                        Visit Website <ExternalLink size={16} />
                      </Button>
                    )}
                  </motion.div>

                  {/* Decorative shapes */}
                  <div
                    className={`absolute top-4 right-4 w-6 h-6 ${accent} rounded-full opacity-20`}
                  ></div>
                  <div
                    className={`absolute bottom-4 left-4 w-6 h-6 ${accent} rounded-full opacity-20`}
                  ></div>
                </motion.article>
              );
            })
          )}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-10 md:p-14 text-center text-white shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Vision?
          </h3>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Let Creator Research Pvt. Ltd. be your partner in building innovative digital solutions.
          </p>
          <Link href="/contact" className="inline-block">
            <Button
              size="lg"
              className="bg-white text-slate-900 hover:bg-slate-100 font-semibold flex items-center gap-2"
            >
              Get Started Today <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
