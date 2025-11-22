'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import BesideSEOImage from '../../../../Images/Beside_SEO_Services_and_Drupal_Development.png';
import InsideEmailSEOImage from '../../../../Images/Inside_Email_and_SEO.png';
import Footer from '@/components/footer';
import Navigation from '@/components/navigation';

export default function EmailMarketingPage() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-sky-50 via-white to-blue-50 text-gray-800 overflow-x-hidden font-inter">
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
            Email Marketing
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10">
            Build customer loyalty, enhance brand recognition, and stay connected with your clients through targeted email campaigns.
          </p>
          <Link href="/contact">
            <button className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Get Started
            </button>
          </Link>
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-sky-100/40 via-transparent to-blue-50 pointer-events-none" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2 }}
          className="absolute -top-24 left-1/2 w-[600px] h-[600px] bg-sky-300 rounded-full blur-3xl -translate-x-1/2"
        />
      </section>

      {/* 💬 IMAGE + TEXT + TESTIMONIAL SECTION */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto relative">
            <div className="hidden md:block absolute -left-24 top-10 w-64 h-64 bg-sky-200 opacity-20 rounded-full -z-10" />

            {/* LEFT TEXT BLOCK */}
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 bg-white p-0 md:p-6 rounded-lg shadow-none"
            >
              <h2 className="text-3xl font-bold mb-4 text-sky-800">Reach Your Audience Effectively</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Email marketing is one of the most powerful tools for building customer relationships and driving conversions. Our targeted campaigns help you connect with your audience at the right time with the right message.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We help you create personalized email campaigns that resonate with your subscribers and deliver measurable results for your business.
              </p>
              <div className="mt-8 bg-sky-50 border-l-4 border-sky-500 text-sky-900 rounded shadow p-5">
                <p className="italic mb-2">"Our email campaigns now have 3x higher engagement rates thanks to CreatorIt!"</p>
                <p className="font-semibold">— Sarah Johnson, Marketing Director</p>
              </div>
            </motion.div>

            {/* RIGHT IMAGE (LOCAL IMPORT) */}
            <motion.div
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center relative z-10"
            >
              <Image
                src={BesideSEOImage}
                alt="Email Marketing Strategy"
                width={600}
                height={450}
                className="rounded-2xl shadow-2xl w-full max-w-[400px] md:max-w-full transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🧩 MAIN CONTENT SECTIONS */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 xl:px-16 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* What is Email Marketing */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-3xl font-bold text-sky-800 mb-6">What is Email Marketing?</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Email marketing enriches business communications, targets specific key markets, and is both cost-effective and environmentally friendly. It helps build customer loyalty, trust in a product or company, and brand recognition.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Email marketing occurs when a company sends a commercial message to a group of people using electronic mail. It's an efficient way to stay connected with your clients while also promoting your business.
              </p>
            </motion.div>

            {/* Why Choose Email Marketing */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-3xl font-bold text-sky-800 mb-6">Why Choose Email Marketing?</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                With email marketing, you can easily and quickly reach target markets without the need for large quantities of print space, television or radio time, or high production costs.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Thanks to effective email marketing software, you can maintain an email list segmented based on several factors including customer preferences, spending habits, and other important criteria.
              </p>
            </motion.div>

            {/* Personalized Approach */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-3xl font-bold text-sky-800 mb-6">Personalized Approach</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Emails are created and sent out to specifically target members of your email list, providing them with personalized information that they are interested in or have requested. This helps promote trust and loyalty while also increasing sales.
              </p>
            </motion.div>

            {/* Drive Results */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-3xl font-bold text-sky-800 mb-6">Drive Results</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Email marketing is more effective than traditional advertising because it allows for targeted, personalized communication. Track engagement, measure ROI, and continuously optimize your campaigns for better performance and higher conversion rates.
              </p>
            </motion.div>
          </div>

          {/* BENEFITS GRID */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-md p-10 mt-10 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-3xl font-bold text-center text-sky-800 mb-8">Email Marketing Benefits</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Cost-Effective", desc: "Reach target markets without large production costs or media space requirements." },
                { title: "Targeted Communication", desc: "Segment your audience based on preferences, behavior, and spending habits." },
                { title: "Build Loyalty", desc: "Stay connected with clients and promote trust in your brand." },
                { title: "Personalized Approach", desc: "Send relevant content based on customer interests and requests." }
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

      {/* 📊 ANALYTICS SECTION */}
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
              alt="Email Campaign Analytics"
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
            <h2 className="text-4xl font-bold mb-6 text-sky-800">Data-Driven Results</h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Track your campaign performance with detailed analytics and insights. Monitor open rates, click-through rates, and conversions to continuously optimize your email marketing strategy.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our email marketing solutions include comprehensive reporting tools that help you understand what works and make data-driven decisions for better ROI.
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
            Ready to Start Your Email Campaign?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-10">
            Let us help you build effective email marketing strategies that drive results.
          </p>
          <Link href="/contact">
            <button className="bg-white text-sky-700 px-10 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl hover:bg-sky-50 transition-all transform hover:-translate-y-1 duration-300">
              Contact Us Today
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
