'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Server, Layout, ShieldCheck, Code2, Users, Puzzle } from 'lucide-react';

// ✅ Local image imports (3 levels up)
import InsideJoomlaImage from '../../../../Images/Inside_Joomla.png';
import BesideCustomSoftwareImage from '../../../../Images/Beside_Custom_Software.png';
import Footer from '@/components/footer';
import Navigation from '@/components/navigation';

export default function JoomlaPage() {
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
            Joomla Development
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10">
            Professional Joomla CMS development with custom templates, extensions, and complete content management solutions.
          </p>
          <Link href="/contact">
            <button className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Contact Us
            </button>
          </Link>
        </motion.div>

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
            
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-sky-800">Powerful & Flexible CMS</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Joomla is one of the most popular content management systems, perfect for customers new to technology who want full control over their website administration.
                Joomla is used by individuals and corporate organizations for simple installations of intranet and extranet.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our dynamic, database-driven designs give you the power to manage your website like a competent programmer, controlling publishing, hosting, and all site activities.
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
                src={InsideJoomlaImage}
                alt="Joomla Development"
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
            Joomla Support Services
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Installation & Setup */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-white via-sky-50 to-sky-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-sky-100"
            >
              <h3 className="text-2xl font-bold text-sky-800 mb-6">Installation & Setup</h3>
              <ul className="space-y-4 text-gray-700">
                {[
                  'Complete Joomla Installation',
                  'Extensions Installation',
                  'Joomla Upgrades & Security',
                  'Initial Website Structure Setup',
                  'Customized Joomla Templates',
                  'Content Development & Menus',
                ].map((service, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    {service}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Management & Support */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-white via-sky-50 to-sky-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-sky-100"
            >
              <h3 className="text-2xl font-bold text-sky-800 mb-6">Management & Support</h3>
              <ul className="space-y-4 text-gray-700">
                {[
                  'Content Upload & Management',
                  'Component Selection & Installation',
                  'Search Engine Optimization',
                  'Data Backup & Recovery Plans',
                  'Employee Training Programs',
                  'Payment Gateway Integration',
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

      {/* 💎 WHY CHOOSE JOOMLA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 xl:px-16 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-sky-800">
            Why Choose Joomla?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Easy Expansion', desc: 'Flexible platform that grows with your business', icon: Layout },
              { title: 'Professional Quality', desc: 'Create attractive websites that stand out', icon: Code2 },
              { title: 'User Friendly', desc: 'No programming skills required for administration', icon: Users },
              { title: 'Scalable Solutions', desc: 'From simple sites to complex portals', icon: Server },
              { title: 'Open Source', desc: 'Cost-effective with no licensing fees', icon: ShieldCheck },
              { title: 'Strong Community', desc: 'Extensive extensions and templates available', icon: Puzzle },
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
                src={BesideCustomSoftwareImage}
                alt="Joomla Features"
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
              <h2 className="text-4xl font-bold mb-6 text-sky-800">Expert Joomla Development</h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                We cater to the needs of individuals with simple websites and large corporate organizations with complex web designs.
                Our trained professionals manage complex tasks with ease, offering new tools customized to your requirements.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                A professional Joomla website not only helps achieve business goals but also attracts visitors and markets your brand effectively.
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
            Interested in Joomla Development?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-10">
            Let us build a powerful Joomla website tailored to your business needs.
          </p>
          <Link href="/contact">
            <button className="bg-white text-sky-700 px-10 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl hover:bg-sky-50 transition-all transform hover:-translate-y-1 duration-300">
              Contact Us
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
