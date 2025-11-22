"use client";

import Link from 'next/link';
import Image from 'next/image';
import { TrendingUp, Globe, Database, Cpu, Award, Zap, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

// ✅ Local Image Imports
import heroImage from '../../../Images/Hero_Services.png';
import besideSEOServices from '../../../Images/Beside_SEO_Services_and_Drupal_Development.png';
import besideWebDesign from '../../../Images/Beside_Web_Design.png';
import besideWordPress from '../../../Images/Beside_WordPress Development.png';
import besideMobileApp from '../../../Images/Beside_Mobile_App.png';

export default function ServicesPage() {
  const categories = [
    {
      title: 'Digital Marketing Services',
      description:
        'Boost your brand visibility with our 360° digital marketing — SEO, SEM, email, and content strategies that deliver real results.',
      href: '/digital-marketing',
      services: [
        'Email Marketing',
        'SEO Optimization',
        'Search Engine Marketing',
        'Content Strategy',
        'Google Ads',
        'Online Surveys',
        'Classified Promotions',
      ],
      icon: <TrendingUp className="w-8 h-8" />,
      image: besideSEOServices,
    },
    {
      title: 'Web Services',
      description:
        'From concept to creation, we build high-performing, visually stunning, and user-friendly websites for all industries.',
      href: '/web-services',
      services: [
        'Web Design',
        'Full Stack Development',
        'Interactive UI/UX',
        'E-commerce Solutions',
        'Logo & Brand Identity',
      ],
      icon: <Globe className="w-8 h-8" />,
      image: besideWebDesign,
    },
    {
      title: 'CMS Development',
      description:
        'Empower your content team with robust and flexible CMS platforms customized for performance and scalability.',
      href: '/cms-development',
      services: ['WordPress', 'Joomla', 'Drupal', 'Magento'],
      icon: <Database className="w-8 h-8" />,
      image: besideWordPress,
    },
    {
      title: 'Software Development',
      description:
        'Tailored software and mobile apps built with precision — driving business efficiency and innovation.',
      href: '/software-development',
      services: ['Mobile Apps', 'Custom Software', 'Offshore Development'],
      icon: <Cpu className="w-8 h-8" />,
      image: besideMobileApp,
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-sky-50 via-white to-slate-50 overflow-x-hidden font-inter">
      {/* 🌟 HERO SECTION */}
      <section className="relative py-28 text-white bg-gradient-to-r from-sky-900 via-sky-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src={heroImage}
            alt="Services Hero Background"
            fill
            className="object-cover object-center"
          />
        </div>
        <motion.div
          className="relative container mx-auto px-6 xl:px-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Our Services
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Empowering brands with cutting-edge digital solutions that spark
            growth and transformation.
          </p>
        </motion.div>
      </section>

      {/* 📊 STATS SECTION */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center max-w-5xl mx-auto">
            {[
              { value: '25+', label: 'Services Offered' },
              { value: '500+', label: 'Projects Completed' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '15+', label: 'Years Experience' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl font-extrabold text-sky-700 mb-2 drop-shadow-sm">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🧩 SERVICES SECTION */}
      <section className="py-24">
        <div className="container mx-auto px-6 xl:px-16 space-y-24">
          {categories.map((category, index) => (
            <motion.div
              key={category.href}
              className={`rounded-3xl shadow-xl p-10 md:p-16 backdrop-blur-lg border border-white/40 ${
                index % 2 === 0 ? 'bg-sky-50/60' : 'bg-white/60'
              } transition-all hover:shadow-2xl`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* TEXT SIDE */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-sky-100 rounded-2xl flex items-center justify-center text-sky-700 shadow-sm">
                      {category.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-sky-900">
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    {category.description}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-x-10 gap-y-2 mb-8">
                    {category.services.map((service, i) => (
                      <span
                        key={i}
                        className="text-gray-800 font-medium hover:text-sky-700 transition-colors flex items-start gap-2"
                      >
                        <span className="text-sky-600 mt-1">▪</span>
                        {service}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={category.href}
                    className="inline-flex items-center px-6 py-3 bg-sky-700 text-white font-semibold rounded-lg hover:bg-sky-800 transition-all shadow-md hover:shadow-lg"
                  >
                    Explore Services
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>

                {/* IMAGE SIDE */}
                <motion.div
                  className="flex justify-center md:justify-end"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  <Image
                    src={category.image}
                    alt={category.title}
                    className="rounded-2xl shadow-2xl w-full max-w-[450px] md:max-w-[520px] h-auto"
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 💎 WHY CHOOSE CREATORIT */}
      <section className="bg-gradient-to-b from-white to-sky-50 py-24 border-t border-gray-100">
        <div className="container mx-auto px-6 xl:px-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-14">
            Why Choose <span className="text-sky-700">CreatorIt</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[
              {
                icon: <Award className="w-7 h-7 text-sky-600" />,
                title: 'Expert Team',
                desc: 'Our professionals bring years of expertise and creativity to deliver perfection.',
              },
              {
                icon: <Zap className="w-7 h-7 text-sky-600" />,
                title: 'Lightning Fast Delivery',
                desc: 'We combine efficiency and precision to ensure on-time delivery every time.',
              },
              {
                icon: <CheckCircle className="w-7 h-7 text-sky-600" />,
                title: 'Guaranteed Quality',
                desc: 'From design to deployment, every stage is perfected with rigorous QA testing.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center mb-5 mx-auto">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
