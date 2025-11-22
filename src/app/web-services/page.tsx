import Link from 'next/link';
import Image from 'next/image';
import { Layout, Zap, CheckCircle } from 'lucide-react';

// --- Logo Imports ---
import webDesignLogo from '../../../Images/Web_design.png';
import webDevelopmentLogo from '../../../Images/web_development.png';
import interactiveDesignLogo from '../../../Images/Interactive_design.png';
import ecommerceLogo from '../../../Images/E_Commerce Services.png';
import logoDesignLogo from '../../../Images/Logo_design.png';

// --- New Image Imports ---
import besideWebDesign from '../../../Images/Beside_Web_Design.png';
import besideWebDevelopment from '../../../Images/Beside_Web_Development.png';
import besideInteractiveDesign from '../../../Images/Beside_Interactive_Design.png';
import besideEcommerceServices from '../../../Images/Beside_E-commerce_Services_and_Magento.png';
import besideLogoDesign from '../../../Images/Beside_Logo_Design.png';

// --- Navigation + Footer ---
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function WebServicesPage(): JSX.Element {
  const IMAGE_WIDTH = 600;
  const IMAGE_HEIGHT = 400;

  const services = [
    {
      title: 'Web Design',
      description: 'Professional, attractive, and mission-oriented web design that conveys your message at a single glance',
      href: '/services/web-design',
      icon: <Image src={webDesignLogo} alt="Web Design" className="w-12 h-12 object-contain" />,
      image: besideWebDesign
    },
    {
      title: 'Web Development',
      description: 'Custom web development with solid coding and strategic features for exceptional performance',
      href: '/services/web-development',
      icon: <Image src={webDevelopmentLogo} alt="Web Development" className="w-12 h-12 object-contain" />,
      image: besideWebDevelopment
    },
    {
      title: 'Interactive Design',
      description: 'Modern animations and interactive web experiences that captivate audiences and enhance engagement',
      href: '/services/interactive-design',
      icon: <Image src={interactiveDesignLogo} alt="Interactive Design" className="w-12 h-12 object-contain" />,
      image: besideInteractiveDesign
    },
    {
      title: 'E-commerce Services',
      description: 'Complete online store development with superior design and powerful shopping features',
      href: '/services/ecommerce',
      icon: <Image src={ecommerceLogo} alt="E-commerce Services" className="w-12 h-12 object-contain" />,
      image: besideEcommerceServices
    },
    {
      title: 'Logo Design',
      description: 'Professional logo and branding design that creates lasting brand recognition and identity',
      href: '/services/logo-design',
      icon: <Image src={logoDesignLogo} alt="Logo Design" className="w-12 h-12 object-contain" />,
      image: besideLogoDesign
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
          <h1 className="text-5xl font-bold mb-4 text-center tracking-tight drop-shadow-lg">Web Services</h1>
          <p className="text-xl max-w-3xl text-center mb-6 drop-shadow">
            Complete web solutions from design to development, creating exceptional online experiences
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-gray-600">Websites Built</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">99%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-gray-600">Design Awards</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Build Your Digital Foundation</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our web services cover everything you need to establish and grow your online presence. From stunning visual design to robust development, we create websites that not only look great but perform exceptionally well.
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
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                <div className={`${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
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

                <div className={`flex justify-center ${index % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={IMAGE_WIDTH}
                    height={IMAGE_HEIGHT}
                    className="rounded-xl shadow-xl w-full h-auto max-w-[600px] transition-transform duration-300 hover:scale-110"
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxWidth: '600px',
                      objectFit: 'cover',
                    }}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose Our Web Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Layout className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Responsive Design</h3>
                <p className="text-gray-700">Beautiful websites that work perfectly on all devices and screen sizes</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast Performance</h3>
                <p className="text-gray-700">Optimized for speed and performance to improve user experience</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Assurance</h3>
                <p className="text-gray-700">Thorough testing to ensure flawless functionality across all browsers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Ready to Build Your Website?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us create a stunning web presence that drives your business forward
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
