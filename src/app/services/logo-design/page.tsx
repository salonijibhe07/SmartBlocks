'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ImageIcon, Palette, BookOpen, RefreshCw, Layers, FileText } from 'lucide-react';

// ✅ Correct local image imports
import BesideLogoDesignImage from '../../../../Images/Beside_Logo_Design.png';
import BesideInteractiveDesignImage from '../../../../Images/Beside_Interactive_Design.png';
import Footer from '@/components/footer';
import Navigation from '@/components/navigation';

export default function LogoDesignPage() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-blue-50 via-white to-sky-50 text-gray-800 font-inter overflow-x-hidden">
      <Navigation/>
      {/* 🌟 HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center text-center py-28 px-6 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl z-10"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-sky-700 via-blue-600 to-sky-500 bg-clip-text text-transparent leading-tight mb-6 drop-shadow-md">
            Logo Design
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10">
            Professional logo and branding design that creates lasting brand recall and recognition
          </p>
          <Link href="/contact">
            <button className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Start Your Logo Design
            </button>
          </Link>
        </motion.div>

        {/* Decorative Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-100/40 via-transparent to-blue-50 pointer-events-none" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          transition={{ duration: 2 }}
          className="absolute -top-24 left-1/2 w-[600px] h-[600px] bg-sky-300 rounded-full blur-3xl -translate-x-1/2"
        />
      </section>

      {/* 💬 INTRO + IMAGE */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto relative">
            <div className="hidden md:block absolute -left-24 top-10 w-64 h-64 bg-sky-200 opacity-20 rounded-full -z-10" />

            {/* Text Section */}
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 bg-white p-0 md:p-6 rounded-lg"
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Memorable Brand Identity</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our team of innovative and talented designers works in tandem with your needs to produce creative designs that will leave an impact on your customers. We streamline branding and make it memorable for users.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We ensure quality standards, professional execution and versatility across platforms. The stronger your brand identity, the higher recognition it will generate.
              </p>
            </motion.div>

            {/* ✅ Local Image 1 */}
            <motion.div
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <Image
                src={BesideLogoDesignImage}
                alt="Logo Design Process"
                width={600}
                height={450}
                className="rounded-2xl shadow-2xl w-full max-w-[480px] transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🧩 FEATURES GRID */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 xl:px-16 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-sky-800">
            Logo Design Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: ImageIcon, title: "Custom Logo Design", desc: "Unique logos tailored to your brand identity" },
              { icon: BookOpen, title: "Brand Identity", desc: "Complete branding packages with style guides" },
              { icon: RefreshCw, title: "Logo Redesign", desc: "Modernize and refresh existing logos" },
              { icon: Layers, title: "Vector Graphics", desc: "Scalable logos for all media and sizes" },
              { icon: Palette, title: "Multiple Concepts", desc: "Various design options to choose from" },
              { icon: FileText, title: "File Formats", desc: "All necessary formats for print and digital use" },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="p-8 bg-gradient-to-br from-white via-sky-50 to-sky-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-sky-100"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-sky-600 text-white rounded-xl shadow-md">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-sky-800">{title}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 📷 PROCESS / MISSION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            
            {/* ✅ Local Image 2 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1 flex justify-center"
            >
              <Image
                src={BesideInteractiveDesignImage}
                alt="Brand Design Process"
                width={600}
                height={450}
                className="rounded-2xl shadow-2xl w-full max-w-[480px] transition-transform duration-300 hover:scale-105"
              />
            </motion.div>

            {/* Text Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-2"
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We aspire to offer next generation technology driven web solutions that make an ideal component of client's business. Our criterion of working sets us apart from the crowd of web solution providers.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We focus our goals based on client's business strategies and work processes, mapping them according to our work model for greater transparency and timely project completion.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🚀 CTA */}
      <section className="py-24 bg-gradient-to-r from-sky-600 via-blue-600 to-sky-700 text-white text-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
            Ready to Create Your Brand Identity?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-10">
            Let us design a memorable logo that represents your business perfectly
          </p>
          <Link href="/contact">
            <button className="bg-white text-sky-700 px-10 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl hover:bg-sky-50 transition-all transform hover:-translate-y-1 duration-300">
              Start Your Logo Design
            </button>
          </Link>
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-24 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl"
        />
      </section>
      <Footer/>
    </main>
  );
}
