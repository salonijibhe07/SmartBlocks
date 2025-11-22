import Link from 'next/link';
import Image from 'next/image';
import { Cpu, Rocket, Shield } from 'lucide-react';

// --- Logo Imports ---
import mobileAppLogo from '../../../Images/Mobile_App.png';
import customSoftwareLogo from '../../../Images/custom_software.png';
import offshoreDevelopmentLogo from '../../../Images/offshore_development.png';

// --- New Image Imports ---
import mobileAppBesideImage from '../../../Images/Beside_Mobile_App.png';
import customSoftwareBesideImage from '../../../Images/Beside_Custom_Software.png';
import offshoreBesideImage from '../../../Images/Beside_Offshore.png';

// Navigation + Footer
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function SoftwareDevelopmentPage(): JSX.Element {
  const services = [
    {
      title: 'Mobile App Development',
      description: 'iOS and Android app development covering the complete software development lifecycle from concept to deployment',
      href: '/services/mobile-apps',
      icon: <Image src={mobileAppLogo} alt="Mobile App Development" className="w-12 h-12 object-contain" />,
      image: mobileAppBesideImage,
    },
    {
      title: 'Custom Software Development',
      description: 'Tailored software solutions for business process automation, efficiency, and digital transformation',
      href: '/services/custom-software',
      icon: <Image src={customSoftwareLogo} alt="Custom Software Development" className="w-12 h-12 object-contain" />,
      image: customSoftwareBesideImage,
    },
    {
      title: 'Offshore Development',
      description: 'Dedicated offshore development teams delivering quality solutions with cost-effective collaboration',
      href: '/services/offshore-development',
      icon: <Image src={offshoreDevelopmentLogo} alt="Offshore Development" className="w-12 h-12 object-contain" />,
      image: offshoreBesideImage,
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gray-50 overflow-x-hidden">

      {/* 🌐 NAVIGATION */}
      <Navigation />

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
          <h1 className="text-5xl font-bold mb-4 text-center tracking-tight drop-shadow-lg">Software Development</h1>
          <p className="text-xl max-w-3xl text-center mb-6 drop-shadow">
            Custom software solutions and mobile applications that drive business innovation
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">200+</div>
              <div className="text-gray-600">Apps Developed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-gray-600">Enterprise Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
              <div className="text-gray-600">Technologies</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-gray-600">Dev Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Innovative Software Solutions</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our software development services help businesses automate processes, improve efficiency, and create new revenue streams. From mobile apps to enterprise software, we build solutions that solve real business problems.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="max-w-6xl mx-auto space-y-16">
            {services.map((service, index) => (
              <div
                key={service.href}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1
                    ? 'md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1'
                    : ''
                }`}
              >
                <div>
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 text-primary-600">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">{service.description}</p>
                  <Link href={service.href} className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                    Learn More
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
                <div className="flex justify-center">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="rounded-xl shadow-xl w-full h-auto max-w-[600px] transition-transform duration-300 hover:scale-110"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose Our Software Development</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Cpu className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Modern Technology</h3>
                <p className="text-gray-700">Built with the latest technologies and best development practices</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Rocket className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Agile Development</h3>
                <p className="text-gray-700">Iterative approach with regular updates and client collaboration</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Assurance</h3>
                <p className="text-gray-700">Rigorous testing to ensure reliable and bug-free software</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Ready to Build Custom Software?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us create software solutions that transform your business
          </p>
          <Link href="/contact">
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-apple text-lg font-semibold transition-all duration-200 transform hover:-translate-y-0.5 shadow-apple hover:shadow-apple-lg">
              Start Your Project
            </button>
          </Link>
        </div>
      </section>

      {/* 🌐 FOOTER */}
      <Footer />
    </div>
  );
}
