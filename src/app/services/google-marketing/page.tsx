'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

// ✅ Local image imports
import BesideGoogleImage from '../../../../Images/Beside_Google_Marketing.png';
import InsideGoogleImage from '../../../../Images/Inside_SEM&Google_and_Online_Survey_and_Drupal_Development.png';
import Footer from '@/components/footer';
import Navigation from '@/components/navigation';

export default function GoogleMarketingPage() {
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
            Google Marketing
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10">
            Comprehensive Google marketing solutions including Google Ads, My Business optimization, and search visibility.
          </p>
          <Link href="/contact">
            <button className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Get Started with Google Marketing
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

            {/* LEFT TEXT SECTION */}
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-sky-800">Dominate Google's Ecosystem</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Our team of innovative and talented marketing specialists works in tandem with your needs to produce creative Google marketing strategies that will leave an impact on your customers.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We ensure that your business is easy to find and navigate through Google's ecosystem, maximizing traffic and revenue generation through strategic visibility.
              </p>
              <div className="mt-8 bg-sky-50 border-l-4 border-sky-500 p-5 rounded-xl shadow-sm">
                <p className="italic text-gray-700">
                  "CreatorIt's Google Ads strategy reduced our CPC by 45% while doubling conversions!"
                </p>
                <p className="font-semibold mt-2 text-sky-700">— Rachel Kim, Digital Marketing Lead</p>
              </div>
            </motion.div>

            {/* ✅ LOCAL IMAGE 1 */}
            <motion.div
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <Image
                src={BesideGoogleImage}
                alt="Google Marketing Strategy"
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

            {/* Creative Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-3xl font-bold text-sky-800 mb-6">Creative Solutions</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                CreatorIt offers creative technological solutions for your business online. We build the online presence of companies using the latest technology to boost business and generate both brand recall and revenue.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We also help remodel existing websites to make them more attractive and efficient, ensuring best practices, fast loading and cross-browser compatibility.
              </p>
            </motion.div>

            {/* About Us */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-3xl font-bold text-sky-800 mb-6">About Us</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                CreatorIt has an impressive list of clients on its roster, which pays testimony to the high quality, timeliness and value of our work. We have the expertise to make your communication and transactions on the internet effective.
              </p>
            </motion.div>

            {/* Our Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-3xl font-bold text-sky-800 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We aspire to offer next generation technology driven web solutions that make an ideal component of client's business. We focus our goals based on client's business strategies and work processes, mapping them according to our work model for greater transparency and timely project completion.
              </p>
            </motion.div>

            {/* Maximum Visibility */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-3xl font-bold text-sky-800 mb-6">Maximum Visibility</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We appreciate that the higher the traffic to your website, the higher revenue it will generate. We ensure that your website is easy to find and navigate through Google's powerful ecosystem of marketing tools and platforms.
              </p>
            </motion.div>
          </div>

          {/* SERVICES SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-md p-10 mt-10 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-3xl font-bold text-center text-sky-800 mb-8">Google Marketing Services</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Google Ads Management", desc: "Strategic campaign management for maximum ROI on your advertising budget." },
                { title: "Google My Business", desc: "Optimize your business presence on Google Maps and local search." },
                { title: "Display Advertising", desc: "Create compelling display ads across Google's vast network." },
                { title: "Shopping Campaigns", desc: "Drive e-commerce sales with Google Shopping ads." },
                { title: "YouTube Advertising", desc: "Reach audiences through video advertising on YouTube." },
                { title: "Performance Tracking", desc: "Detailed analytics and reporting for all Google campaigns." },
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

      {/* 📊 RESULTS SECTION */}
      <section className="py-20 bg-gradient-to-b from-white to-sky-50">
        <div className="container mx-auto px-6 xl:px-16 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* ✅ LOCAL IMAGE 2 */}
            <Image
              src={InsideGoogleImage}
              alt="Google Analytics Dashboard"
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
              Track every metric across all Google platforms with comprehensive analytics. Monitor performance, identify opportunities, and make data-driven decisions to maximize your marketing ROI.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our continuous optimization ensures your Google marketing campaigns deliver consistent results and adapt to changing market conditions.
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
            Maximize Your Google Presence
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-10">
            Let our experts help you leverage Google's powerful marketing platform to grow your business.
          </p>
          <Link href="/contact">
            <button className="bg-white text-sky-700 px-10 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl hover:bg-sky-50 transition-all transform hover:-translate-y-1 duration-300">
              Get Started with Google Marketing
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
