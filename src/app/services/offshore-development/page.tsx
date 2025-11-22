'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Users, Clock, TrendingUp, ShieldCheck, Globe2 } from 'lucide-react';

// ✅ Local image imports
import BesideOffshoreImage from '../../../../Images/Beside_Offshore.png';
import FAQImage from '../../../../Images/FAQ.png';
import InsideOffshoreImage from '../../../../Images/Inside_Offshore.png';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

export default function OffshoreDevelopmentPage() {
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
            Offshore Development
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10">
            Dedicated offshore development teams delivering quality solutions with cost-effective pricing.
          </p>
          <Link href="/contact">
            <button className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Get Started
            </button>
          </Link>
        </motion.div>

        {/* Background Glow */}
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
              <h2 className="text-4xl font-bold mb-6 text-sky-800">Global Development Excellence</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Our team of innovative and talented developers works in tandem with your needs to produce impactful solutions. We streamline development processes and make them efficient for your organization.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                CreatorIt ensures quality standards, fast delivery, and takes care of compatibility issues. We ensure that solutions are scalable and maintainable.
              </p>
            </motion.div>

            {/* ✅ Local Image 1 */}
            <motion.div
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <Image
                src={BesideOffshoreImage}
                alt="Offshore Development Team"
                width={600}
                height={450}
                className="rounded-2xl shadow-2xl w-full max-w-[480px] transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ⚙️ BENEFITS SECTION */}
      <section className="py-20 bg-gradient-to-b from-sky-50 to-white">
        <div className="container mx-auto px-6 xl:px-16 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-sky-800">
            Why Choose Offshore Development?
          </h2>

          <div className="space-y-8 relative before:absolute before:left-8 before:top-0 before:h-full before:w-1 before:bg-gradient-to-b from-sky-400 to-blue-500 md:before:left-1/2 md:before:transform md:before:-translate-x-1/2">
            {[
              { step: '01', title: 'Cost Efficiency', desc: 'High-quality development at competitive offshore rates without compromising quality' },
              { step: '02', title: 'Time Zone Advantage', desc: 'Round-the-clock development cycles for faster delivery and continuous progress' },
              { step: '03', title: 'Scalability', desc: 'Easily scale your team up or down based on project needs and requirements' },
              { step: '04', title: 'Expert Resources', desc: 'Access to skilled developers and specialized technical expertise' },
            ].map(({ step, title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative flex md:even:flex-row-reverse gap-6 md:gap-12 items-center"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                  {step}
                </div>
                <div className="flex-1 bg-white rounded-2xl p-6 shadow-md border border-sky-100">
                  <h3 className="text-xl font-bold text-sky-800 mb-2">{title}</h3>
                  <p className="text-gray-700">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🧩 DEDICATED TEAMS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 xl:px-16 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* ✅ Local Image 2 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1 flex justify-center"
            >
              <Image
                src={FAQImage}
                alt="Remote Team Collaboration"
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
              <h2 className="text-4xl font-bold mb-6 text-sky-800">Dedicated Teams</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                We provide dedicated developers who work exclusively on your projects as an extension of your in-house team. Our transparent communication ensures you're always in the loop.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With our proven track record and impressive client roster, we deliver high-quality, timely solutions that drive business value.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🌍 SERVICES GRID (✅ Re-added) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 xl:px-16 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-sky-800">
            Offshore Development Services
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Dedicated Teams', desc: 'Experienced developers working exclusively on your projects', icon: Users },
              { title: 'Cost Efficiency', desc: 'High-quality development at competitive offshore rates', icon: DollarIcon },
              { title: 'Time Zone Advantage', desc: 'Round-the-clock development cycles for faster delivery', icon: Clock },
              { title: 'Scalability', desc: 'Easily scale your team up or down based on needs', icon: TrendingUp },
              { title: 'Quality Assurance', desc: 'Rigorous testing and quality control processes', icon: ShieldCheck },
              { title: 'Transparent Communication', desc: 'Regular updates and clear project management', icon: Globe2 },
            ].map(({ title, desc, icon: Icon }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-sky-50 rounded-2xl p-6 text-left shadow-sm hover:shadow-md border border-sky-100 transition-all"
              >
                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-sky-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-700">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🎯 OUR MISSION */}
      <section className="py-20 bg-white relative">
        {/* ✅ Local Image 3 (as soft background) */}
        <Image
          src={InsideOffshoreImage}
          alt="Global Team Success"
          fill
          className="object-cover opacity-10 absolute inset-0 z-0"
        />

        <div className="container mx-auto px-6 xl:px-16 max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-sky-800">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                We aspire to offer next-generation technology-driven web solutions that align seamlessly with your business. Our unique approach sets us apart from traditional providers.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We focus on your business goals and processes, aligning them with our agile model for greater transparency and timely completion.
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
            Ready to Build Your Offshore Team?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-10">
            Let us provide dedicated developers who work as an extension of your team.
          </p>
          <Link href="/contact">
            <button className="bg-white text-sky-700 px-10 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl hover:bg-sky-50 transition-all transform hover:-translate-y-1 duration-300">
              Get Started
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

// 💰 Custom Icon
const DollarIcon = (props: any) => (
  <svg {...props} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-2.21 0-4 1.343-4 3s1.79 3 4 3 4 1.343 4 3-1.79 3-4 3m0-18v2m0 16v2" />
  </svg>
);
