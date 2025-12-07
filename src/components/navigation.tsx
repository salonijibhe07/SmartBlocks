"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const pathname = usePathname();

  const servicesItems = [
    { href: "/digital-marketing", label: "Digital Marketing" },
    { href: "/web-services", label: "Web Services" },
    { href: "/cms-development", label: "CMS Development" },
    { href: "/software-development", label: "Software Development" },
  ];

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Services",
      dropdown: true,
      items: servicesItems,
    },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="top-0 z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Navbar Row */}
        <div className="flex items-center justify-between h-24 md:h-28">
          {/* Logo */}
          <Link href="/" className="flex items-center h-full">
            <div className="relative h-full w-32 md:w-40 flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Creator Research Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.name} className="relative group h-full flex items-center">
                  <div className="flex flex-col">
                    <button
                      className={`flex items-center font-semibold text-lg px-2 py-2 ${
                        pathname.startsWith("/digital-marketing") ||
                        pathname.startsWith("/web-services") ||
                        pathname.startsWith("/cms-development") ||
                        pathname.startsWith("/software-development")
                          ? "text-blue-600"
                          : "text-slate-700 group-hover:text-black"
                      }`}
                    >
                      {link.name}
                      <ChevronDown className="ml-1 w-4 h-4" />
                    </button>

                    {/* Invisible bridge to prevent gap */}
                    <div className="absolute left-0 right-0 top-full h-2 bg-transparent" />

                    {/* Dropdown Menu */}
                    <div className="absolute left-0 top-full mt-2 w-56 bg-white shadow-xl rounded-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-2">
                        {link.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`block px-4 py-3 transition-colors ${
                              pathname === item.href
                                ? "bg-blue-50 text-blue-700 font-medium"
                                : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                            }`}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href ?? "#"}
                  className={`transition-colors font-semibold text-lg ${
                    pathname === link.href
                      ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                      : "text-slate-700 hover:text-black"
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-700"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-200 pt-4 space-y-3">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={`block py-3 text-lg font-medium ${
                pathname === "/"
                  ? "text-blue-600 font-semibold"
                  : "text-slate-700"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className={`block py-3 text-lg font-medium ${
                pathname === "/about"
                  ? "text-blue-600 font-semibold"
                  : "text-slate-700"
              }`}
            >
              About
            </Link>

            {/* Services Dropdown - Mobile */}
            <div>
              <button
                onClick={() => setOpenDropdown(!openDropdown)}
                className="flex items-center justify-between w-full py-3 text-lg font-medium text-slate-700"
              >
                Services
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openDropdown && (
                <div className="ml-4 mt-1 space-y-2">
                  {servicesItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => {
                        setIsOpen(false);
                        setOpenDropdown(false);
                      }}
                      className={`block py-2 ${
                        pathname === item.href
                          ? "text-blue-600 font-medium"
                          : "text-slate-600 hover:text-blue-600"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className={`block py-3 text-lg font-medium ${
                pathname === "/contact"
                  ? "text-blue-600 font-semibold"
                  : "text-slate-700"
              }`}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
