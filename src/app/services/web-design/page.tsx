'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Palette, Monitor, Globe, ShieldCheck, Layers, Users } from 'lucide-react';

// ✅ Local image imports
import BesideWebDesignImage from '../../../../Images/Beside_Web_Design.png';
import InsideWebDesignImage from '../../../../Images/Inside_Web_Design.png';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

export default function WebDesignPage() {
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
            Web Design
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10">
            Professional, attractive, and mission-oriented web design that conveys your business message at a single glance.
          </p>
          <Link href="/contact">
            <button className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Get Free Quote
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
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto relative">
            <div className="hidden md:block absolute -left-24 top-10 w-64 h-64 bg-sky-200 opacity-20 rounded-full -z-10" />

            <motion.div
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-sky-800">Design That Drives Results</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                CreatorIt is a dedicated web solution company, whose objective is to enable customer profitability through building web solutions that work. Design should be professional, attractive, mission-oriented, and convey your business message at a single glance.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you're building your first website or enhancing your current one, CreatorIt helps your business succeed online with affordable, professional design services.
              </p>
              <div className="mt-8 bg-sky-50 border-l-4 border-sky-500 p-5 rounded-xl shadow-sm">
                <p className="italic text-gray-700">
                  "CreatorIt transformed our outdated site into a modern masterpiece that tripled our conversions!"
                </p>
                <p className="font-semibold mt-2 text-sky-700">— Jennifer Lee, E-commerce Owner</p>
              </div>
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
                src={BesideWebDesignImage}
                alt="Professional Web Design"
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
          <h2 className="text-4xl font-bold text-center mb-12 text-sky-800">
            Complete Web Design Solutions
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Palette, title: 'Graphic Design', desc: 'High-quality design and layout using modern tools and technologies.' },
              { icon: Monitor, title: 'Responsive Design', desc: 'Mobile-friendly websites that work perfectly on all devices.' },
              { icon: Globe, title: 'Domain & Hosting', desc: 'Complete solutions including domain registration and web hosting.' },
              { icon: ShieldCheck, title: 'SEO Optimization', desc: 'Search engine optimized designs for better visibility.' },
              { icon: Layers, title: 'CMS Integration', desc: 'Integration with WordPress and Joomla platforms.' },
              { icon: Users, title: 'Technical Support', desc: 'Ongoing support and maintenance services.' },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="p-8 bg-gradient-to-br from-white via-sky-50 to-sky-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-sky-100"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-sky-600 text-white rounded-xl shadow-md">
                    <Icon size={26} />
                  </div>
                  <h3 className="text-xl font-semibold text-sky-800">{title}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-md p-10 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-3xl font-bold text-center text-sky-800 mb-8">
              Why Choose Our Web Design Team?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Unique Custom Designs', desc: 'Tailored designs that match your brand identity.' },
                { title: 'Commitment & Dedication', desc: 'Focused team dedicated to your success.' },
                { title: 'Honest Approach', desc: 'Transparent communication throughout the project.' },
                { title: 'Cost-Effective Delivery', desc: 'Quality designs within your budget and timeline.' },
              ].map(({ title, desc }, i) => (
                <div className="flex items-start" key={i}>
                  <span className="text-sky-600 mr-3 text-2xl">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                    <p className="text-gray-700">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 📊 MODERN DESIGN SECTION */}
      <section className="py-20 bg-gradient-to-b from-white to-sky-50">
        <div className="container px-6 xl:px-16 grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* ✅ Local Image 2 */}
            <Image
              src={InsideWebDesignImage}
              alt="Web Design Process"
              width={800}
              height={600}
              className="rounded-2xl shadow-2xl w-full transition-transform duration-300 hover:scale-105"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-sky-800">Modern Design Solutions</h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              We provide complete web design solutions including multimedia design, print graphics, online marketing, web promotions, and e-commerce capabilities.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our services include converting designs to responsive HTML/CSS with language conversion options, ensuring your website reaches a global audience effectively.
            </p>
          </motion.div>
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
            Need Pricing Information?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-10">
            Contact us now to get a free, no-obligation quote today!
          </p>
          <Link href="/contact">
            <button className="bg-white text-sky-700 px-10 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl hover:bg-sky-50 transition-all transform hover:-translate-y-1 duration-300">
              Get Free Quote
            </button>
          </Link>
        </motion.div>

        {/* Floating Glow */}
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
