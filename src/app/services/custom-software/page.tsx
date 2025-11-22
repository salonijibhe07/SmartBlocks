'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  Rocket,
  Smartphone,
  BarChart3,
  Layers,
  CheckCircle2,
} from 'lucide-react';

// ✅ Local image imports
import BesideOnlineSurveysImage from '../../../../Images/Beside_Online_Surveys.png';
import InsideSEMGoogleImage from '../../../../Images/Inside_SEM&Google_and_Online_Survey_and_Drupal_Development.png';
import BesideOffshoreImage from '../../../../Images/Beside_Offshore.png';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

// 🧩 Custom Icons for SaaS & Document Management
const CloudIcon = (props: any) => (
  <svg {...props} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 010-8 4 4 0 017-3 5 5 0 015 5h3a4 4 0 010 8H7a4 4 0 01-4-4z" />
  </svg>
);

const FileIcon = (props: any) => (
  <svg {...props} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <polyline strokeLinecap="round" strokeLinejoin="round" points="14 2 14 8 20 8" />
  </svg>
);

export default function CustomSoftwarePage() {
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
            Custom Software Development
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10">
            Tailored software solutions for business process automation and efficiency.
          </p>
          <Link href="/contact">
            <button className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Start Your Project
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

            {/* Text */}
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-sky-800">Business Process Automation</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                We have expertise in comprehensive software, custom solutions and tools development which help both small companies and large enterprises in business process automation, increasing employee efficiency and reducing costs.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our business software development approach allows us to create highly expandable, modular and stable software tailored to your unique needs.
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
                src={BesideOnlineSurveysImage}
                alt="Custom Software Development"
                width={600}
                height={450}
                className="rounded-2xl shadow-2xl w-full max-w-[480px] transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🧩 DEVELOPMENT CYCLE */}
      <section className="py-20 bg-gradient-to-b from-sky-50 to-white">
        <div className="container mx-auto px-6 xl:px-16 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-sky-800">Our Development Cycle</h2>

          <div className="space-y-8 relative before:absolute before:left-8 before:top-0 before:h-full before:w-1 before:bg-gradient-to-b from-sky-400 to-blue-500 md:before:left-1/2 md:before:transform md:before:-translate-x-1/2">
            {[
              { step: '01', title: 'Analysis & Conceptualization', desc: 'Understanding requirements and defining the solution' },
              { step: '02', title: 'Technical Specification', desc: 'Creating detailed documentation and architecture' },
              { step: '03', title: 'Designing & Prototyping', desc: 'UI/UX design and interactive prototypes' },
              { step: '04', title: 'Development', desc: 'Building the software with best practices' },
              { step: '05', title: 'Quality Analysis & Testing', desc: 'Rigorous testing and quality assurance' },
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

      {/* ⚙️ AUTOMATION SOLUTIONS */}
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
                src={InsideSEMGoogleImage}
                alt="Software Solutions"
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
              <h2 className="text-4xl font-bold mb-6 text-sky-800">Automation Solutions</h2>
              <ul className="space-y-3">
                {[
                  'Workflow management systems',
                  'Customer support ticket tracking',
                  'Console tools development',
                  'File processing automation',
                  'Report management solutions',
                  'Custom database management',
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

      {/* 💡 SERVICES GRID */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 xl:px-16 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-sky-800">Our Services</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'Web Applications', icon: Code2 },
              { title: 'Corporate Portals', icon: Layers },
              { title: 'SaaS Development', icon: CloudIcon },
              { title: 'Document Management', icon: FileIcon },
              { title: 'Off-the-shelf Solutions', icon: Rocket },
              { title: 'Mobility Solutions', icon: Smartphone },
              { title: 'Business Intelligence', icon: BarChart3 },
              { title: 'Portability Services', icon: Database },
            ].map(({ title, icon: Icon }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-sky-50 rounded-2xl p-6 text-center shadow-sm hover:shadow-md border border-sky-100 transition-all"
              >
                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-sky-600" />
                </div>
                <h3 className="font-semibold text-gray-900">{title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🧠 EXPERT CONSULTATION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 xl:px-16 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-sky-800">Expert Consultation</h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                We strongly focus on adhering, conceptualizing, consulting and development with agility. Our qualified consultants clear uncertainties with their expert advice and recommendations for appropriate solutions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our experienced workforce is skilled in producing Software as a Service applications and products that help organizations in commercialization and growth.
              </p>
            </motion.div>

            {/* ✅ Local Image 3 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <Image
                src={BesideOffshoreImage}
                alt="Software Consulting"
                width={600}
                height={450}
                className="rounded-2xl shadow-2xl w-full max-w-[480px] transition-transform duration-300 hover:scale-105"
              />
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
            Need Custom Software?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-10">
            Let us build tailored solutions that automate your business processes.
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

