"use client";

import { Menu, X, Search, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Pages", href: "/pages" },
    { name: "Case Shop", href: "/shop" },
    { name: "Blog", href: "/blog" },
    { name: "Content", href: "/content" },
  ];

  const serviceDropdownItems = [
    { name: "Web Development", href: "/services/web-development" },
    { name: "UI/UX Design", href: "/services/ui-ux-design" },
    { name: "Marketing", href: "/services/marketing" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdown(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`fixed w-full z-50 bg-[#707070] shadow-md transition-all duration-300`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative h-12 w-12 rounded-full overflow-hidden"
        >
          <Link href="/">
            <Image
              src="/aivonLogo.png"
              alt="Company Logo"
              fill
              className="object-cover"
              priority
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.name} className="relative group">
                <button
                  onClick={() => setServicesDropdown(!servicesDropdown)}
                  className="flex items-center text-white px-3 py-2"
                >
                  {link.name}
                  {servicesDropdown ? (
                    <ChevronUp className="ml-2 h-4 w-4" />
                  ) : (
                    <ChevronDown className="ml-2 h-4 w-4" />
                  )}
                </button>
                <AnimatePresence>
                  {servicesDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md"
                    >
                      {serviceDropdownItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link key={link.name} href={link.href} className="relative group">
                <span
                  className={`px-3 py-2 transition-colors text-white ${
                    pathname === link.href
                      ? "text-red-600  font-bold"
                      : "text-white"
                  }`}
                >
                  {link.name}
                </span>
              </Link>
            )
          )}
        </nav>

        {/* Social Media, Search, Contact */}
        <div className="hidden md:flex items-center space-x-4">
          <span className="h-12 w-px bg-gray-300 mx-2" />

          {/* Social Icons */}
          <div className="flex space-x-6">
            <Link href="https://www.instagram.com">
              <Image
                src="/instagramm.svg"
                alt="Instagram"
                width={20}
                height={20}
              />
            </Link>
            <Link href="https://www.linkedin.com">
              <Image
                src="/llinkedin.svg"
                alt="LinkedIn"
                width={20}
                height={20}
              />
            </Link>
            <Link href="https://www.twitter.com">
              <Image src="/ttwitter.svg" alt="Twitter" width={20} height={20} />
            </Link>
            <Link href="https://www.facebook.com">
              <Image
                src="/facebookk.svg"
                alt="Facebook"
                width={20}
                height={20}
              />
            </Link>
          </div>

          <span className="h-12 w-px bg-gray-300 mx-2" />

          {/* Search Icon */}
          <button aria-label="Search">
            <Search className="h-5 w-5 text-white hover:text-primary" />
          </button>

          <span className="h-12 w-px bg-gray-300 mx-2" />

          {/* Contact Info */}
          <p className="text-white font-medium">
            Need help? <br /> +92 666 888 0000
          </p>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden p-2 text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#707070] text-white p-4"
          >
            <div className="space-y-4">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.name}>
                    <button
                      onClick={() => setServicesDropdown(!servicesDropdown)}
                      className="flex items-center w-full text-left"
                    >
                      {link.name}
                      {servicesDropdown ? (
                        <ChevronUp className="ml-2" />
                      ) : (
                        <ChevronDown className="ml-2" />
                      )}
                    </button>
                    {servicesDropdown && (
                      <div className="ml-4">
                        {serviceDropdownItems.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block py-1"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link key={link.name} href={link.href} className="block">
                    {link.name}
                  </Link>
                )
              )}

              {/* Social Icons, Search, Contact */}
              <div className="pt-4 space-y-2 text-center">
                <div className="flex space-x-3">
                  <Link href="https://www.instagram.com">
                    <Image
                      src="/instagramm.svg"
                      alt="Instagram"
                      width={20}
                      height={20}
                    />
                  </Link>
                  <Link href="https://www.linkedin.com">
                    <Image
                      src="/llinkedin.svg"
                      alt="LinkedIn"
                      width={20}
                      height={20}
                    />
                  </Link>
                  <Link href="https://www.twitter.com">
                    <Image
                      src="/ttwitter.svg"
                      alt="Twitter"
                      width={20}
                      height={20}
                    />
                  </Link>
                  <Link href="https://www.facebook.com">
                    <Image
                      src="/facebookk.svg"
                      alt="Facebook"
                      width={20}
                      height={20}
                    />
                  </Link>
                </div>{" "}
                {/* <Search className="mx-auto h-5 w-5" /> */}
                <hr />
                <p>Need help? +92 666 888 0000</p>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
