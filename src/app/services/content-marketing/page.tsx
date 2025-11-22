'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

// ⬇️ Add these
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

// ✅ Local image imports
import VisionMissionImage from '../../../../Images/vision_and_Mission.png';
import InsideContentImage from '../../../../Images/Inside_Content_Marketing_and_Wordpress.png';

export default function ContentMarketingPage() {
  return (
    <>
      {/* 🔵 NAVIGATION */}
      <Navigation />

      <main className="min-h-screen w-full bg-gradient-to-b from-sky-50 via-white to-blue-50 text-gray-800 font-inter overflow-x-hidden">

        {/* 🌟 HERO SECTION */}
        <section className="relative flex flex-col items-center justify-center text-center py-28 px-6 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl z-10"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-sky-700 via-blue-600 to-sky-500 bg-clip-text text-transparent leading-tight mb-6 drop-shadow-md">
              Content Marketing
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10">
              Strategic content creation and marketing solutions that drive engagement and build your brand presence.
            </p>
            <Link href="/contact">
              <button className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                Start Your Content Journey
              </button>
            </Link>
          </motion.div>

          {/* Decorative Elements */}
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

              {/* Text Content */}
              <motion.div
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold mb-6 text-sky-800">Engaging Content That Converts</h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Our team of innovative and talented content creators works in tandem with your needs to produce creative content that will leave an impact on your customers. We ensure quality standards, engaging narratives and take care of audience targeting.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The higher the engagement with your content, the higher revenue it will generate. We ensure that the content is easy to find, valuable, and shareable.
                </p>
                <div className="mt-8 bg-sky-50 border-l-4 border-sky-500 p-5 rounded-xl shadow-sm">
                  <p className="italic text-gray-700">
                    "CreatorIt's content strategy increased our blog traffic by 400% in 6 months!"
                  </p>
                  <p className="font-semibold mt-2 text-sky-700">— David Martinez, Content Director</p>
                </div>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ x: 40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex justify-center"
              >
                <Image
                  src={VisionMissionImage}
                  alt="Content Marketing Strategy"
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
                  We also help remodel existing content strategies to make them more attractive and efficient. Our streamlined content is useful for the user and designed to maximize engagement.
                </p>
              </motion.div>

              {/* About Our Approach */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <h2 className="text-3xl font-bold text-sky-800 mb-6">About Our Approach</h2>
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
                  We aspire to offer next generation technology driven content solutions that make an ideal component of client's business. We focus our goals based on client's business strategies and their work processes, mapping them according to our work model for greater transparency and timely project completion.
                </p>
              </motion.div>

              {/* Quality Standards */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <h2 className="text-3xl font-bold text-sky-800 mb-6">Quality Standards</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We ensure quality standards, engaging narratives and take care of audience targeting. Our content is designed to be easy to find, valuable, and shareable, maximizing both engagement and revenue potential for your business.
                </p>
              </motion.div>
            </div>

            {/* Content Marketing Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-md p-10 mt-10 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-3xl font-bold text-center text-sky-800 mb-8">Content Marketing Services</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Blog Writing", desc: "Engaging blog posts that inform, educate, and convert your audience." },
                  { title: "Content Strategy", desc: "Comprehensive planning aligned with your business goals." },
                  { title: "Social Media Content", desc: "Compelling posts that drive engagement across platforms." },
                  { title: "Website Copy", desc: "Persuasive copy that converts visitors into customers." },
                  { title: "SEO Content", desc: "Optimized content that ranks well in search engines." },
                  { title: "Email Newsletters", desc: "Regular updates that keep your audience engaged." },
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
              <Image
                src={InsideContentImage}
                alt="Content Performance Analytics"
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
              <h2 className="text-4xl font-bold mb-6 text-sky-800">Results-Driven Content</h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Every piece of content we create is designed with your business goals in mind. We track performance metrics and continuously optimize to ensure maximum engagement and ROI.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From initial strategy to final delivery, we provide transparent reporting and regular updates on how your content is performing and driving business growth.
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
              Ready to Boost Your Content Strategy?
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-10">
              Let us create compelling content that engages your audience and drives business results.
            </p>
            <Link href="/contact">
              <button className="bg-white text-sky-700 px-10 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl hover:bg-sky-50 transition-all transform hover:-translate-y-1 duration-300">
                Start Your Content Journey
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

      </main>

      {/* 🔵 FOOTER */}
      <Footer />
    </>
  );
}
