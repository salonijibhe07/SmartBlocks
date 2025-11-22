'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

// ✅ Import local images (same style as your EmailMarketingPage)
import BesideSEOImage from '../../../../Images/Beside_SEO_Services_and_Drupal_Development.png';
import InsideSEMImage from '../../../../Images/Inside_SEM&Google_and_Online_Survey_and_Drupal_Development.png';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

export default function SEMPage() {
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
            Search Engine Marketing
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10">
            Maximize your online visibility with strategic paid search campaigns and performance-driven marketing.
          </p>
          <Link href="/contact">
            <button className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Get Started
            </button>
          </Link>
        </motion.div>

        {/* Decorative Gradients */}
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

            {/* LEFT TEXT */}
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <h2 className="text-4xl font-bold mb-6 text-sky-800">Instant Visibility & Results</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Search engine marketing delivers immediate results for businesses looking to increase their online visibility. Our strategic SEM campaigns help you reach customers actively searching for your products or services.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We combine paid search advertising with proven optimization techniques to maximize your ROI and drive qualified traffic to your website.
              </p>
              <div className="mt-8 bg-sky-50 border-l-4 border-sky-500 p-5 rounded-xl shadow-sm">
                <p className="italic text-gray-700">
                  "Our SEM campaigns with CreatorIt generated 5x ROI in the first quarter!"
                </p>
                <p className="font-semibold mt-2 text-sky-700">— Mike Chen, E-commerce Director</p>
              </div>
            </motion.div>

            {/* ✅ RIGHT IMAGE (LOCAL IMPORT) */}
            <motion.div
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <Image
                src={BesideSEOImage}
                alt="Search Engine Marketing Strategy"
                width={600}
                height={450}
                className="rounded-2xl shadow-2xl w-full max-w-[480px] transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🧩 MAIN CONTENT */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 xl:px-16 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">

            {/* What is SEM */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-3xl font-bold text-sky-800 mb-6">What is SEM?</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                SEM is an acronym for search engine marketing. It's the act of marketing a website to improve its performance and to get noticed in search engines, such as Google, Yahoo, or Bing.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                SEM is a rapidly growing field. It can be a lucrative strategy due to rising demand for SEM services and the immediate results it delivers for businesses looking to increase online visibility.
              </p>
            </motion.div>

            {/* Paid Search - PPC */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-3xl font-bold text-sky-800 mb-6">Paid Search - PPC</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Pay per click (PPC) or pay per action (PPA) where ads are placed by the search engine. Advertisers pay only when a searcher clicks on a displayed ad (PPC) or clicks and takes a specific action, such as signing up or purchasing (PPA).
              </p>
            </motion.div>

            {/* Google Ads */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-3xl font-bold text-sky-800 mb-6">Google Ads</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Google Ads (formerly AdWords) is a powerful pay-per-click advertising tool that matches ads with keywords entered by potential customers. It allows highest-bidding advertisers to pull ahead of thousands of products or services generated in response to a single search.
              </p>
            </motion.div>

            {/* Google AdSense */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-3xl font-bold text-sky-800 mb-6">Google AdSense</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Google welcomes website owners to display ads for Google's advertisers. Use AdSense to maximize the reach of your Google Ads advertisements. Through AdSense, Google distributes text ads, graphical ads and even video advertisements to earn income per click.
              </p>
            </motion.div>
          </div>

          {/* SERVICES INCLUDE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-md p-10 mt-10 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-3xl font-bold text-center text-sky-800 mb-8">Our SEM Services Include</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Campaign Strategy", desc: "Comprehensive planning for maximum ROI on your advertising budget." },
                { title: "Keyword Research", desc: "Identifying high-value keywords for your target audience." },
                { title: "Ad Creation", desc: "Compelling ad copy and creative design for better conversion." },
                { title: "Performance Tracking", desc: "Continuous monitoring and optimization of campaign performance." },
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

      {/* 📊 DATA-DRIVEN OPTIMIZATION */}
      <section className="py-20 bg-gradient-to-b from-white to-sky-50">
        <div className="container mx-auto px-6 xl:px-16 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* ✅ SECOND LOCAL IMAGE */}
            <Image
              src={InsideSEMImage}
              alt="SEM Performance Dashboard"
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
            <h2 className="text-4xl font-bold mb-6 text-sky-800">Data-Driven Optimization</h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Track every aspect of your SEM campaigns with detailed analytics. Monitor clicks, conversions, and ROI in real-time to make informed decisions about your advertising spend.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our continuous optimization process ensures your campaigns deliver maximum results while maintaining cost efficiency.
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
            Start Your SEM Campaign Today
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-10">
            Let our experts create and manage high-performing search engine marketing campaigns for your business.
          </p>
          <Link href="/contact">
            <button className="bg-white text-sky-700 px-10 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl hover:bg-sky-50 transition-all transform hover:-translate-y-1 duration-300">
              Get Started
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
