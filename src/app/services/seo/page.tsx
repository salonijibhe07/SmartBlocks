'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Local image imports (same pattern as EmailMarketingPage)
import BesideClassifiedImage from '../../../../Images/Beside_Classified_Services.png';
import InsideEmailSEOImage from '../../../../Images/Inside_Email_and_SEO.png';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

export default function SEOServicesPage(): JSX.Element {
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
            SEO Services
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10">
            Professional Search Engine Optimization services to boost your rankings and increase website traffic.
          </p>
          <Link href="/contact">
            <button className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Get Free SEO Consultation
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

      {/* 💬 IMAGE + TEXT SECTION */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto relative">
            <div className="hidden md:block absolute -left-24 top-10 w-64 h-64 bg-sky-200 opacity-20 rounded-full -z-10" />
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <h2 className="text-4xl font-bold mb-6 text-sky-800">Dominate Search Rankings</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Our proven SEO strategies help your website achieve top rankings in Google, Yahoo, Bing, and other major search engines. We focus on ethical, white-hat techniques that deliver sustainable results.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With our expert SEO services, you'll see increased organic traffic, better visibility, and higher conversion rates for your business.
              </p>
              <div className="mt-8 bg-sky-50 border-l-4 border-sky-500 p-5 rounded-xl shadow-sm">
                <p className="italic text-gray-700">
                  "CreatorIt boosted our search rankings and doubled our organic traffic in 6 months!"
                </p>
                <p className="font-semibold mt-2 text-sky-700">— Jane Doe, CEO of TechStartup</p>
              </div>
            </motion.div>

            {/* RIGHT IMAGE (LOCAL IMPORT) */}
            <motion.div
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <Image
                src={BesideClassifiedImage}
                alt="SEO Analytics and Strategy"
                width={600}
                height={450}
                className="rounded-2xl shadow-2xl w-full max-w-[480px] transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🧩 MAIN CONTENT SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 xl:px-16 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Expert SEO Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-3xl font-bold text-sky-800 mb-6">Expert SEO Solutions</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                CreatorIt offers quality solutions for SEO Services, Internet marketing, Web Marketing, and search engine optimization strategies. We are a leading Search Engine Optimization company providing affordable SEO services.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our Search Engine Optimization services are carefully planned by our SEO experts to get the best results from the SEO process.
              </p>
            </motion.div>

            {/* Proven Results */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-3xl font-bold text-sky-800 mb-6">Proven Results</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                We are a perfect SEO consultant who will provide complete SEO solutions, SEO guidance and SEO programs to our clients.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                The majority of our clients achieve good SEO rankings with first page top positions in Google, Yahoo, Bing, and other major search engines.
              </p>
            </motion.div>

            {/* White Hat SEO */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-3xl font-bold text-sky-800 mb-6">White Hat SEO</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Search Engine Optimization may be defined as a set of processes by which certain alterations and modifications are done to the website so that it can achieve higher rankings in search engines, thereby increasing the number of visitors (traffic) to the website. CreatorIt strongly believes in white hat SEO or the ethical way of SEO.
              </p>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-3xl font-bold text-sky-800 mb-6">Why Choose Us?</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Your search for an ethical SEO company ends here. CreatorIt is a leading professional SEO company which is a renowned service provider of Search Engine Optimization, Search Engine Placement, and Internet Marketing services.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                CreatorIt has a team of SEO consultants, analysts, and experts who give you the perfect strategies that will boost your search engine rankings.
              </p>
            </motion.div>
          </div>

          {/* SEO Services Include */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-md p-10 mt-10 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-3xl font-bold text-center text-sky-800 mb-8">Our SEO Services Include</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Keyword Research & Analysis", desc: "Comprehensive keyword research and analysis." },
                { title: "On-Page Optimization", desc: "On-page optimization and content strategy." },
                { title: "Technical SEO", desc: "Technical SEO audits and implementation." },
                { title: "Link Building", desc: "Link building and authority enhancement." },
                { title: "Local SEO", desc: "Local SEO optimization for regional targeting." },
                { title: "Performance Tracking", desc: "Monthly reporting and performance tracking." },
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

      {/* 📈 RESULTS SECTION */}
      <section className="py-20 bg-gradient-to-b from-white to-sky-50">
        <div className="container mx-auto px-6 xl:px-16 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src={InsideEmailSEOImage}
              alt="SEO Performance Results"
              width={800}
              height={600}
              className="rounded-2xl shadow-2xl w-full transition-transform duration-300 hover:scale-105"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-sky-800">Measurable Results</h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Track your SEO performance with detailed monthly reports and analytics. We provide transparent reporting that shows keyword rankings, organic traffic growth, and conversion improvements.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our data-driven approach ensures continuous optimization and maximum ROI from your SEO investment.
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
            Improve Your Search Rankings Today
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-10">
            Let our SEO experts help you achieve top rankings and drive more organic traffic to your website.
          </p>
          <Link href="/contact">
            <button className="bg-white text-sky-700 px-10 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl hover:bg-sky-50 transition-all transform hover:-translate-y-1 duration-300">
              Get SEO Consultation
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
