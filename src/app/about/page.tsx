"use client";
import React from "react";

import {
  Target,
  Rocket,
  Users,
  Award,
  HeadphonesIcon,
  DollarSign,
  BookOpen,
  BarChart,
  Globe,
  CheckCircle2,
  Phone,
  Star,
} from "lucide-react";
import CreativeaFAQ from "@/components/CreativeFAQ/CreativeFAQ";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Image from "next/image";

export default function AboutPage() {
  const highlights = [
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for excellence in research services",
    },
    {
      icon: Users,
      title: "Professional Staff",
      description: "Highly qualified PhD holders and experts",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Round-the-clock assistance for all clients",
    },
    { icon: Users, title: "Partnership", description: "50+ Active Partners" },
  ];

  const services = [
    "PhD Topic Selection",
    "Research Proposal Writing",
    "Thesis Writing",
    "Data Analysis Using SPSS, Python, R, MATLAB",
    "Plagiarism Checking, Correction & Proofreading",
    "Journal Submission Guidance",
    "Plagiarism Checking, Correction & Proofreading",
    "Research Paper Writing & Publication (Scopus, UGC Care, SCI)",


// "",

// "",

"End-to-End Research Mentoring"

  ];

  const teamExpertise = [
    { icon: BookOpen, title: "PhD Holders", count: "" },
    { icon: Users, title: "Software developers", count: "" },
    { icon: BarChart, title: "Analysts", count: "" },
    { icon: Globe, title: "Research Fields", count: "" },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navigation />

      {/* Header */}
      <section className="py-24 text-center bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-7xl font-serif font-bold mb-4">
            About Us
          </h1>
          <p className="text-xl md:text-2xl font-sans text-blue-200 max-w-2xl mx-auto">
            The Best Research Solution With 15+ Years of Experience — empowering
            academic excellence through dedicated research support and
            innovation.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 -mt-32 relative z-10">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-xl text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="text-white" size={28} />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="font-sans text-lg text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Section */}
<section className="py-12 px-6">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
    {/* Left side: Text */}
    <div className="flex-1 text-left">
      <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
        Welcome to{" "}
        <span className="text-blue-900">Creator Research Pvt Ltd</span>
      </h2>
      <p className="text-lg md:text-xl text-gray-600 font-sans max-w-3xl text-justify">
        Leading Research, Software Development, and Digital Transformation
        Company in India. Creator Research Pvt Ltd is a trusted research
        and technology solutions company delivering end-to-end support for
        academic scholars, startups, enterprises, and global partners.
        With a strong foundation in innovation, data-driven methodologies,
        and industry expertise, we help clients achieve academic,
        technological, and business excellence. Over the years, we have
        supported thousands of PhD scholars, developed scalable digital
        products, and collaborated with global organizations — making us
        one of India’s most reliable and versatile research & IT service
        providers.
      </p>
    </div>

    {/* Right side: Image */}
    <div className="flex-shrink-0 w-full md:w-1/2 h-auto">
      <Image
        src="/about/about-image.jpg" // no /public
        alt="Welcome Illustration"
        width={700}   // increased from 604
        height={700}  // increased from 604
        className="object-contain rounded-xl shadow-lg max-w-full h-auto"
      />
    </div>
  </div>
</section>


      {/* Vision & Mission */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl flex items-center justify-center mb-6">
              <Target className="text-white" size={32} />
            </div>
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Vision
            </h3>
            <p className="font-sans text-lg md:text-xl text-gray-700 leading-relaxed">
              To become a global leader in research assistance, software
              development, and digital transformation — empowering individuals
              and businesses with reliable, future-ready solutions.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-900 to-indigo-700 rounded-xl flex items-center justify-center mb-6">
              <Rocket className="text-white" size={32} />
            </div>
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Mission
            </h3>
            <ul className="font-sans text-lg md:text-xl text-gray-700 leading-relaxed list-disc list-inside space-y-2">
              <li>High-quality academic and research guidance</li>
              <li>Scalable web, mobile, and ERP products</li>
              <li>Advanced AI-powered digital solutions</li>
              <li>Ethical, transparent, and reliable services</li>
              <li>Consistent value and long-term partnerships</li>
            </ul>
          </div>
        </div>
      </section>

     <section>
  <div className="bg-gray-50 py-16">
    <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center gap-12">
      
      {/* Left Content: slightly wider */}
      <div className="lg:w-7/12">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-8">
          Why Choose <span className="text-blue-900">Creator <br /> Research Pvt Ltd</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          Our clients trust us because we consistently deliver:
        </p>
        <ul className="space-y-5 text-gray-700 text-lg md:text-xl">
          <li className="flex items-start">
            <span className="text-green-500 mr-3 mt-1">✔</span>
            <div>
              <strong>Industry-Leading Expertise</strong>
              <p className="mt-1 text-gray-600">
                Over a decade of combined experience in research, software
                development, and consulting.
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-3 mt-1">✔</span>
            <div>
              <strong>End-to-End Solutions</strong>
              <p className="mt-1 text-gray-600">
                From PhD thesis support to ERP systems, everything under
                one roof.
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-3 mt-1">✔</span>
            <div>
              <strong>1000+ Successful Research Projects</strong>
              <p className="mt-1 text-gray-600">
                Accurate, well-structured, and academically approved
                outputs.
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-3 mt-1">✔</span>
            <div>
              <strong>300+ Digital Products Delivered</strong>
              <p className="mt-1 text-gray-600">
                Web apps, mobile apps, dashboards, automation systems & more.
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-3 mt-1">✔</span>
            <div>
              <strong>24/7 Support</strong>
              <p className="mt-1 text-gray-600">
                Dedicated assistance for urgent deadlines and project queries.
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-3 mt-1">✔</span>
            <div>
              <strong>Transparent & Ethical Approach</strong>
              <p className="mt-1 text-gray-600">
                No plagiarism, no shortcuts, only quality work.
              </p>
            </div>
          </li>
        </ul>
      </div>

      {/* Right Image */}
      <div className="lg:w-5/12">
        <img
          src="/about/Why-we.png" // replace with your image path
          alt="Creator Research"
          className="w-full h-auto rounded-2xl shadow-lg"
        />
      </div>
      
    </div>
  </div>
</section>


      {/* Services */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto ">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 mb-4 text-center">
            Our <span className="text-blue-900">Services</span>
          </h2>
          <p className="text-xl md:text-2xl font-sans text-gray-600 max-w-3xl mx-auto mb-12">
            We offer research support from topic selection to publication —
            every step tailored to your goals.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-blue-100"
              >
                <div className="flex items-start space-x-3">
                  <CheckCircle2
                    className="text-blue-900 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <span className="font-sans text-lg md:text-xl text-gray-800 font-medium">
                    {service}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 space-y-20">
          {/* Section 1: IT & Software Development Services */}
          <div className="flex flex-col  lg:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
                Our IT & Software Development Services
              </h2>
              <p className="text-lg md:text-xl text-gray-700 mb-6">
                We help startups and enterprises scale efficiently with modern
                digital solutions:
              </p>
              <ul className="space-y-4 text-gray-700 text-lg md:text-xl list-disc list-inside">
                <li>
                  <strong>Web & App Development:</strong> Custom websites, SaaS
                  platforms, dashboards, and mobile apps.
                </li>
                <li>
                  <strong>ERP & CRM Solutions:</strong> Complete business
                  automation systems tailored to your workflow.
                </li>
                <li>
                  <strong>AI & Automation Tools:</strong> Smart systems for
                  analytics, prediction, chatbot automation, and research tools.
                </li>
                <li>
                  <strong>UI/UX & Branding:</strong> Modern, user-centric
                  designs that deliver excellent user experiences.
                </li>
                <li>
                  <strong>Cloud & Database Solutions:</strong> Scalable, secure,
                  and optimized infrastructures for high-traffic applications.
                </li>
                <li>
                  <strong>Custom Software Development:</strong> Enterprise-grade
                  applications built for performance and reliability.
                </li>
              </ul>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/2">
              <img
                src="/about/It-Software.png" // replace with your image path
                alt="IT & Software Development"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Section 2: Business & Financial Consulting */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Image */}
            <div className="lg:w-1/2 order-last lg:order-first">
              <img
                src="/about/Bussiness.png" // replace with your image path
                alt="Business & Financial Consulting"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>

            {/* Right Content */}
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
                Business & Financial Consulting
              </h2>
              <p className="text-lg md:text-xl text-gray-700 mb-6">
                We provide expert guidance for:
              </p>
              <ul className="space-y-4 text-gray-700 text-lg md:text-xl list-disc list-inside">
                <li>Academic project support</li>
                <li>Corporate project planning</li>
                <li>Financial answering & analysis</li>
                <li>Business workflow design</li>
                <li>Industry-specific research insights</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Team */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 mb-4">
            Our <span className="text-blue-900">Team</span>
          </h2>
          <p className="font-sans text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12">
            Our team of PhD experts, software developers, and academic writers
            collaborate to ensure excellence at every stage.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-left">
              <p className="font-sans text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                We are a dedicated team of PhD experts, software developers, academic professionals, analysts, and digital consultants committed to delivering high-quality research services and modern technology solutions.

Our core strengths include accuracy, timely delivery, transparency, and personalized support. With every project, we aim to create real value through innovation and well-structured execution.

              </p>
              <p className="font-sans text-lg md:text-xl text-gray-700 leading-relaxed">
                Passionate and purpose-driven, we’re here to help clients
                succeed academically and professionally.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {teamExpertise.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-blue-900 to-slate-900 rounded-2xl p-6 text-white text-center hover:scale-105 transition-transform duration-300"
                >
                  <item.icon className="mx-auto mb-3" size={32} />
                  <div className="text-3xl md:text-4xl font-serif font-bold mb-2">
                    {item.count}
                  </div>
                  <div className="font-sans text-sm md:text-base text-blue-200">
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <CreativeaFAQ />

          <div className="bg-gradient-to-r from-blue-900 via-slate-900 to-blue-900 rounded-2xl p-12 text-white text-center">
            <Star className="mx-auto mb-6 w-16 h-16 text-yellow-400" />
            <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Join Our Success Story
            </h3>
            <p className="font-sans text-lg md:text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
              Reach out today to discover how we can assist you in achieving
              your research goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919545415111"
                className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg md:text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center space-x-2"
              >
                <Phone size={20} />
                <span>+91 9545415111</span>
              </a>
              <a
                href="/contact"
                className="bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg md:text-xl hover:bg-blue-600 hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
