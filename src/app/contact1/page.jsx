import Footer from '@/components/footer';
import { ContactForm } from '@/components/forms/contact-form';
import Navigation from '@/components/navigation';
import { Mail, Phone, MapPin, MessageCircle, FileCheck } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="min-h-screen w-full bg-gray-50 overflow-x-hidden">
      <Navigation/>
      {/* Hero Section */}
      <section className="relative py-20 hero-gradient text-white overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/10 pointer-events-none z-[1]" />
        <div className="relative container mx-auto px-6 xl:px-16 z-10 flex flex-col items-center">
          <h1 className="text-5xl font-bold mb-4 text-center tracking-tight drop-shadow-lg">Get in Touch</h1>
          <p className="text-xl max-w-3xl text-center mb-6 drop-shadow">
            Ready to bring your web project to life? Tell us about your vision and we'll provide a free consultation
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">&lt;24hr</div>
              <div className="text-gray-600">Response Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">Free</div>
              <div className="text-gray-600">Consultation</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-gray-600">Confidential</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Your Project</h2>
                <p className="text-lg text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours with a detailed proposal
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What Happens Next?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">1. Quick Response</h3>
                <p className="text-gray-600">We respond to all inquiries within 24 hours</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">2. Free Consultation</h3>
                <p className="text-gray-600">30-minute strategy session at no cost</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FileCheck className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">3. Detailed Proposal</h3>
                <p className="text-gray-600">Custom project plan with timeline & pricing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Other Ways to Reach Us</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-md text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Email Us</h3>
                <a href="mailto:info@CreatorIt.com" className="text-primary-600 hover:text-primary-700 font-medium">
                  info@creatorit.com
                </a>
                <p className="text-gray-600 text-sm mt-2">We'll respond within 24 hours</p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-md text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Call Us</h3>
                <a href="tel:+911234567890" className="text-primary-600 hover:text-primary-700 font-medium">
                  +91 9545415111
                </a>
                <p className="text-gray-600 text-sm mt-2">Mon-Fri, 9AM-6PM IST</p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-md text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Visit Us</h3>
                <p className="text-gray-700 font-medium">
                  73 Pannalal Nagar,Ch.Sambhaji Nagar, India<br />India
                </p>
                <p className="text-gray-600 text-sm mt-2">By appointment only</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Have Questions?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Check out our FAQ page for quick answers to common questions
            </p>
            <Link href="/faq">
              <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-apple text-lg font-semibold transition-all duration-200 transform hover:-translate-y-0.5 shadow-apple hover:shadow-apple-lg">
                View FAQ
              </button>
            </Link>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}