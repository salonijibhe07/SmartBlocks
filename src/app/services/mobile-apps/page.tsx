'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Smartphone, Layers, Rocket, Globe, CheckCircle2 } from 'lucide-react';

// ✅ Local image imports
import BesideMobileAppImage from '../../../../Images/Beside_Mobile_App.png';
import BesideCustomSoftwareImage from '../../../../Images/Beside_Custom_Software.png';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

export default function MobileAppsPage() {
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
            Mobile App Development
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10">
            iOS and Android app development covering the complete software development lifecycle.
          </p>
          <Link href="/contact">
            <button className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Start Your App
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

            {/* Text */}
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-sky-800">Complete Development Lifecycle</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                We offer cutting-edge mobile development solutions that help enterprises communicate seamlessly and process data effortlessly in a fast environment.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our solutions cover the entire software development cycle — from requirements to deployment, testing, and maintenance with a systematic approach.
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
                src={BesideMobileAppImage}
                alt="Mobile App Development"
                width={600}
                height={450}
                className="rounded-2xl shadow-2xl w-full max-w-[480px] transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🚀 DEVELOPMENT PROCESS */}
      <section className="py-20 bg-gradient-to-b from-sky-50 to-white">
        <div className="container mx-auto px-6 xl:px-16 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-sky-800">
            Our Development Process
          </h2>

          <div className="space-y-8 relative before:absolute before:left-8 before:top-0 before:h-full before:w-1 before:bg-gradient-to-b from-sky-400 to-blue-500 md:before:left-1/2 md:before:transform md:before:-translate-x-1/2">
            {[
              { step: '01', title: 'Requirements Analysis', desc: 'Decipher requirements and define project scope' },
              { step: '02', title: 'Architecture Design', desc: 'Design scalable and efficient app architecture' },
              { step: '03', title: 'Development', desc: 'Build the application using best practices' },
              { step: '04', title: 'Testing & QA', desc: 'Rigorous testing for quality assurance' },
              { step: '05', title: 'Deployment', desc: 'Launch to App Store and Play Store' },
              { step: '06', title: 'Maintenance', desc: 'Ongoing support and updates' },
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

      {/* 📱 PLATFORMS SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 xl:px-16 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-sky-800">
            Platforms We Support
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: 'iOS Apps', icon: Smartphone },
              { name: 'Android Apps', icon: Rocket },
              { name: 'Cross-Platform', icon: Layers },
              { name: 'PWA', icon: Globe },
            ].map(({ name, icon: Icon }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-gradient-to-br from-white to-sky-50 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all border border-sky-100"
              >
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-sky-600" />
                </div>
                <h3 className="font-semibold text-gray-900">{name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ⚙️ TECHNOLOGIES SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 xl:px-16 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-sky-800">
            Technologies We Use
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['iOS/Swift', 'Android/Kotlin', 'React Native', 'Flutter', 'Java/J2ME', 'Progressive Web Apps'].map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-white p-4 rounded-xl text-center shadow-sm hover:shadow-md border border-sky-100 transition-all"
              >
                <p className="font-semibold text-gray-900 text-sm">{tech}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🧠 SERVICES SECTION */}
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
                src={BesideCustomSoftwareImage}
                alt="Mobile Development Process"
                width={600}
                height={450}
                className="rounded-2xl shadow-2xl w-full max-w-[480px] transition-transform duration-300 hover:scale-105"
              />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-2"
            >
              <h2 className="text-4xl font-bold mb-6 text-sky-800">Comprehensive Mobile Services</h2>
              <ul className="space-y-3">
                {[
                  'Mobile application development',
                  'Mobile games design & development',
                  'GPS enabled applications',
                  'Social networking integrations',
                  'SMS and MMS integration',
                  'Platform migration & porting',
                ].map((service, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-sky-600 mr-3" />
                    {service}
                  </li>
                ))}
              </ul>
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
            Ready to Build Your Mobile App?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-10">
            Let us create powerful mobile applications that engage your users.
          </p>
          <Link href="/contact">
            <button className="bg-white text-sky-700 px-10 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl hover:bg-sky-50 transition-all transform hover:-translate-y-1 duration-300">
              Start Your App
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
