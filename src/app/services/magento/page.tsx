'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShoppingBag, Zap, Layers, Server, DollarSign, Code2 } from 'lucide-react';

// ✅ Local image imports (3 levels up from /magento/page.tsx)
import BesideMagentoImage from '../../../../Images/Beside_E-commerce_Services_and_Magento.png';
import InsideMagentoImage from '../../../../Images/Inside_E-Commerce_and_Magento_development.png';
import Footer from '@/components/footer';
import Navigation from '@/components/navigation';

export default function MagentoPage() {
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
            Magento Development
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10">
            Powerful Magento e-commerce solutions with unparalleled flexibility and complete control over your online store.
          </p>
          <Link href="/contact">
            <button className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Start Your Project
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

      {/* 💬 ABOUT SECTION */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

            {/* About Text */}
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-sky-800">Ultimate E-commerce Platform</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Magento provides modern open-source web solutions with unparalleled control and flexibility. Every e-commerce implementation must be distinctive as each business thrives due to its unique strengths.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With complete flexibility over content, appearance, and store functionality, Magento helps you design a store that fits your brand and goals perfectly — all while being cost-efficient and scalable.
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
                src={BesideMagentoImage}
                alt="Magento E-commerce"
                width={600}
                height={450}
                className="rounded-2xl shadow-2xl w-full max-w-[480px] transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🧩 SERVICES GRID */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 xl:px-16 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-sky-800">
            Magento Development Services
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Core Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-white via-sky-50 to-sky-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-sky-100"
            >
              <h3 className="text-2xl font-bold text-sky-800 mb-6">Core Services</h3>
              <ul className="space-y-4 text-gray-700">
                {[
                  'Custom Store Development',
                  'Module Development',
                  'Theme Customization',
                  'Integration Services',
                  'Migration to Magento',
                  'Performance Optimization',
                ].map((service, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    {service}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Advanced Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-white via-sky-50 to-sky-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-sky-100"
            >
              <h3 className="text-2xl font-bold text-sky-800 mb-6">Advanced Features</h3>
              <ul className="space-y-4 text-gray-700">
                {[
                  'SEO Optimization Tools',
                  'Multi-Store Management',
                  'Payment Gateway Integration',
                  'Catalog Management Tools',
                  'Marketing & Promotions',
                  'Dedicated Support & Maintenance',
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 💎 WHY CHOOSE MAGENTO */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 xl:px-16 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-sky-800">
            Why Choose Magento?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Complete Flexibility', desc: 'Total control over store appearance and functionality', icon: Layers },
              { title: 'SEO Friendly', desc: 'Built-in SEO tools and clean URL structure', icon: Zap },
              { title: 'Highly Customizable', desc: 'Modular architecture for unique requirements', icon: Code2 },
              { title: 'Scalable Platform', desc: 'Grows with your business from startup to enterprise', icon: Server },
              { title: 'Rich Features', desc: 'Comprehensive e-commerce functionality out of the box', icon: ShoppingBag },
              { title: 'Cost Effective', desc: 'Open source with no licensing fees', icon: DollarSign },
            ].map(({ title, desc, icon: Icon }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="p-6 border-l-4 border-sky-500 bg-gradient-to-br from-white to-sky-50 rounded-lg shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="text-sky-600" size={24} />
                  <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                </div>
                <p className="text-gray-700">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🧠 EXPERTISE SECTION */}
      <section className="py-20 bg-gradient-to-b from-sky-50 to-white">
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
                src={InsideMagentoImage}
                alt="Magento Platform"
                width={600}
                height={450}
                className="rounded-2xl shadow-2xl w-full max-w-[480px] transition-transform duration-300 hover:scale-105"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-2"
            >
              <h2 className="text-4xl font-bold mb-6 text-sky-800">Our Magento Expertise</h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Our deep insights in open-source technology allow us to provide Magento customization that delivers assured quality and value. 
                We maintain full transparency and deliver solutions tailored to your unique business model.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team builds customized modules, integrates third-party services, and optimizes performance — 
                ensuring minimal hassle and maximum scalability for your online store.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🚀 CTA SECTION */}
      <section className="py-24 bg-gradient-to-r from-sky-600 via-blue-600 to-sky-700 text-white text-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
            Ready to Build Your Magento Store?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-10">
            Let us create a powerful e-commerce platform that drives sales and grows your business.
          </p>
          <Link href="/contact">
            <button className="bg-white text-sky-700 px-10 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl hover:bg-sky-50 transition-all transform hover:-translate-y-1 duration-300">
              Start Your Project
            </button>
          </Link>
        </motion.div>

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
