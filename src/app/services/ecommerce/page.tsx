'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ShoppingBag,
  CreditCard,
  Store,
  Package,
  ClipboardList,
  Smartphone,
} from 'lucide-react';

// ✅ Correct relative imports (3 levels up from /src/app/services/ecommerce)
import BesideEcommerceImage from '../../../../Images/Beside_E-commerce_Services_and_Magento.png';
import InsideEcommerceImage from '../../../../Images/Inside_E-Commerce_and_Magento_development.png';
import Footer from '@/components/footer';
import Navigation from '@/components/navigation';

export default function EcommercePage() {
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
            E-commerce Services
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10">
            Complete online store development with superior design that drives customers straight to checkout.
          </p>
          <Link href="/contact">
            <button className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Start Selling Online
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

            <motion.div
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-sky-800">E-commerce Opportunities</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                With e-commerce booming at a tremendous pace, small businesses have found dimensional gates of growth. 
                E-tailers connect sellers with buyers for a commission, helping them mutually. Many businesses survive purely depending on online marketplaces.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                E-commerce sites provide small scale retailers a space to market their products without physical stores. 
                Small businesses have rocketed after establishing their online presence.
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
                src={BesideEcommerceImage}
                alt="E-commerce Solutions"
                width={600}
                height={450}
                className="rounded-2xl shadow-2xl w-full max-w-[480px] transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🧩 FEATURES GRID */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 xl:px-16 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-sky-800">
            E-commerce Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Store, title: 'Custom Online Stores', desc: 'Fully customized e-commerce platforms tailored to your business.' },
              { icon: ShoppingBag, title: 'Shopping Cart Integration', desc: 'Seamless cart systems with secure checkout processes.' },
              { icon: CreditCard, title: 'Payment Gateway Setup', desc: 'Multiple payment options and secure transaction processing.' },
              { icon: Package, title: 'Product Management', desc: 'Easy-to-use systems for managing inventory and products.' },
              { icon: ClipboardList, title: 'Order Management', desc: 'Complete order tracking and fulfillment systems.' },
              { icon: Smartphone, title: 'Mobile Commerce', desc: 'Responsive designs optimized for mobile shopping.' },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="p-8 bg-gradient-to-br from-white via-sky-50 to-sky-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-sky-100"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-sky-600 text-white rounded-xl shadow-md">
                    <Icon size={26} />
                  </div>
                  <h3 className="text-xl font-semibold text-sky-800">{title}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 📊 DESIGN APPROACH SECTION */}
      <section className="py-20 bg-gradient-to-b from-white to-sky-50">
        <div className="container px-6 xl:px-16 grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* ✅ Local Image 2 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src={InsideEcommerceImage}
              alt="E-commerce Platform Design"
              width={800}
              height={600}
              className="rounded-2xl shadow-2xl w-full transition-transform duration-300 hover:scale-105"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-sky-800">Superior Design Approach</h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              CreatorIt understands that e-commerce requires superior design to drive customers straight to checkout. 
              We follow best practices to reach maximum consumer outreach and define your marketing goals.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We design your e-commerce site from the ground up — everything from content development to final graphic design layout 
              for consistent branding on every page.
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
            Ready to Launch Your Online Store?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-10">
            Let us build a powerful e-commerce platform that drives sales and grows your business.
          </p>
          <Link href="/contact">
            <button className="bg-white text-sky-700 px-10 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl hover:bg-sky-50 transition-all transform hover:-translate-y-1 duration-300">
              Start Selling Online
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
