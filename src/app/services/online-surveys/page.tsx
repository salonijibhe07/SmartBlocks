'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

// ✅ Local image imports
import BesideSurveyImage from '../../../../Images/Beside_Online_Surveys.png';
import InsideSurveyImage from '../../../../Images/Inside_SEM&Google_and_Online_Survey_and_Drupal_Development.png';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

export default function OnlineSurveysPage() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-sky-50 via-white to-blue-50 text-gray-800 font-inter overflow-x-hidden">
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
            Online Survey Services
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10">
            Professional survey creation and market research tools to gather valuable customer insights.
          </p>
          <Link href="/contact">
            <button className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Create Your Survey
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

            {/* Text Section */}
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-sky-800">Gather Actionable Insights</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Our team of innovative designers works in tandem with your needs to produce creative survey solutions that engage your audience and deliver meaningful data.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We ensure surveys are easy to navigate, mobile-friendly, and optimized for maximum response rates. The higher the engagement with your surveys, the better insights you will generate.
              </p>
              <div className="mt-8 bg-sky-50 border-l-4 border-sky-500 p-5 rounded-xl shadow-sm">
                <p className="italic text-gray-700">
                  "CreatorIt's survey platform helped us achieve an 85% response rate!"
                </p>
                <p className="font-semibold mt-2 text-sky-700">— Emily Chen, Research Director</p>
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
                src={BesideSurveyImage}
                alt="Survey Research and Analytics"
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

            {/* Professional Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-3xl font-bold text-sky-800 mb-6">Professional Solutions</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                CreatorIt offers creative technological solutions for your business online. We build survey systems using the latest technology to boost business and generate valuable insights.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We also help remodel existing survey systems to make them more attractive and efficient, ensuring best practices and cross-browser compatibility.
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
                CreatorIt has an impressive list of clients on its roster, which pays testimony to the high quality, timeliness and value of our work. We have the expertise to make your communication and data collection on the internet effective.
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
                We aspire to offer next generation technology driven survey solutions that make an ideal component of client's business. We focus our goals based on client's business strategies and work processes, ensuring greater transparency and timely project completion.
              </p>
            </motion.div>

            {/* User-Friendly Design */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-3xl font-bold text-sky-800 mb-6">User-Friendly Design</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We streamline surveys and make them useful for users. Our surveys ensure fast loading, intuitive navigation, and maximum engagement to generate the best possible insights for your business decisions.
              </p>
            </motion.div>
          </div>

          {/* Services Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-md p-10 mt-10 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-3xl font-bold text-center text-sky-800 mb-8">Online Survey Services</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Custom Survey Design", desc: "Create professional surveys tailored to your research needs." },
                { title: "Market Research", desc: "Gather valuable customer insights and market data." },
                { title: "Customer Feedback", desc: "Collect and analyze customer satisfaction data." },
                { title: "Employee Surveys", desc: "Measure employee engagement and satisfaction." },
                { title: "Data Analysis", desc: "Comprehensive reporting and insights from survey data." },
                { title: "Multi-Platform Support", desc: "Mobile-friendly surveys accessible on any device." },
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

      {/* 📊 DATA INSIGHTS SECTION */}
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
              src={InsideSurveyImage}
              alt="Survey Data Analytics"
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
            <h2 className="text-4xl font-bold mb-6 text-sky-800">Actionable Data Insights</h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Transform survey responses into actionable business intelligence. Our comprehensive analytics and reporting tools help you understand your audience and make data-driven decisions.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Track response rates, analyze trends, and export detailed reports to share insights across your organization.
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
            Start Gathering Valuable Insights
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-10">
            Let us help you create effective surveys that provide actionable insights for your business.
          </p>
          <Link href="/contact">
            <button className="bg-white text-sky-700 px-10 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl hover:bg-sky-50 transition-all transform hover:-translate-y-1 duration-300">
              Create Your Survey
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
