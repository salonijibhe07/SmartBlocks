"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const faqs = [
  {
    question: "What does Creator Research Pvt Ltd specialize in?",
    answer:
      "We specialize in research support, software development, ERP solutions, AI tools, and consulting services.",
  },
  {
    question: "Do you help PhD students with complete guidance?",
    answer: "Yes. We support scholars from topic selection to publication.",
  },
  {
    question: "Can businesses outsource software development to you?",
    answer:
      "Absolutely. We develop custom apps, websites, dashboards, CRMs, and automation tools.",
  },
  {
    question: "How do partnerships work?",
    answer:
      "Choose a model (reseller, referral, technology, etc.). We guide you through everything to ensure mutual growth.",
  },
  {
    question: "Do you provide 24/7 support?",
    answer: "Yes — scholars and IT clients receive round-the-clock assistance.",
  },
];

export default function CreativeFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-12 text-center">
          Frequently Asked Questions
        </h2>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Left side: FAQ blocks */}
          <div className="flex-1 space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl cursor-pointer overflow-hidden"
              >
                <div
                  className="flex justify-between items-center p-4 md:p-6"
                  onClick={() => toggle(index)}
                >
                  <h3 className="text-base md:text-lg text-slate-900 font-medium">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={20} className="text-indigo-600" />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-4 md:px-6 pb-4 text-gray-700 text-sm md:text-base"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Right side: Single image */}
          <div className="flex-shrink-0 w-full md:w-96 h-auto">
            <Image
              src="/images/faq-right.png" // replace with your image path
              alt="FAQ Illustration"
              width={384}
              height={384}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
