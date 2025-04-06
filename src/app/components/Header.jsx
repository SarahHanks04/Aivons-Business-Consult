"use client";

import { Menu, X, Search, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Pages", href: "/experience" },
    { name: "Case Shop", href: "/faq" },
    { name: "Blog", href: "/blog" },
    { name: "Content", href: "/content" },
  ];

  const serviceDropdownItems = [
    {
      name: "Leadership",
      href: "/services/leadership",
    },
    { name: "Good collaboration", href: "/services/good-collaboration" },
    { name: "Free Communication", href: "/services/free-communication" },
  ];

  // searchable pages
  const searchablePages = [
    ...navLinks.map((link) => ({ name: link.name, href: link.href })),
    ...serviceDropdownItems,
  ];

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdown(false);
  }, [pathname]);

  // Search submission
  const handleSearch = (e) => {
    e.preventDefault();

    const matchedPage = searchablePages.find((page) =>
      page.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (matchedPage) {
      router.push(matchedPage.href);
      setSearchQuery("");
      setSearchOpen(false);
    } else {
      console.log("No match found for:", searchQuery);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`fixed w-full z-50 bg-[#707070] border-b border-gray-400 shadow-md transition-all duration-300`}
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
              sizes="48px"
              className="object-cover"
              priority
            />
          </Link>
        </motion.div>
        {/* <span className="h-12 w-px bg-gray-300 mr-10" /> */}

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-3">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => setServicesDropdown(true)}
                onMouseLeave={() => setServicesDropdown(false)}
              >
                <span
                  className={`flex items-center text-white px-3 py-2 cursor-pointer ${
                    pathname === link.href ? "text-green-500 font-bold" : ""
                  }`}
                >
                  {link.name}
                  {servicesDropdown ? (
                    <ChevronUp className="ml-2 h-4 w-4 text-blue" />
                  ) : (
                    <ChevronDown className="ml-2 h-4 w-4 text-blue" />
                  )}
                </span>
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
                          className={`block px-4 py-2 text-gray-700 hover:bg-gray-200 ${
                            pathname === item.href
                              ? "text-green-400 font-bold"
                              : ""
                          }`}
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
                  className={`px-3 py-2 transition-colors ${
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
          <div className="flex space-x-5">
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

          {/* Search Icon with Dropdown */}
          <div className="relative">
            <button
              aria-label="Search"
              onClick={() => setSearchOpen((prev) => !prev)}
            >
              <Search className="h-5 w-5 text-white hover:text-primary" />
            </button>
            <AnimatePresence>
              {searchOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-64 shadow-md rounded-md p-2"
                >
                  <form onSubmit={handleSearch}>
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search pages..."
                      className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-0"
                      autoFocus
                    />
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <span className="h-12 w-px bg-gray-300 mx-2" />

          <p className="text-white font-medium text-[16px]">
            Need help?{" "}
            <a href="tel:+926668880000" className="hover:underline text-sm">
              +92 666 888 0000
            </a>
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
                        <ChevronUp className="ml-2 text-blue" />
                      ) : (
                        <ChevronDown className="ml-2 text-blue" />
                      )}
                    </button>
                    {servicesDropdown && (
                      <div className="ml-4">
                        {serviceDropdownItems.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            // className="block py-1"
                            className={`block py-1 ${
                              pathname === item.href
                                ? "text-red-600 font-bold"
                                : ""
                            }`}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`block ${
                      pathname === link.href ? "text-red-600 font-bold" : ""
                    }`}
                  >
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
                <p className="text-white font-medium">
                  Need help?{" "}
                  <a
                    href="tel:+926668880000"
                    className="hover:underline text-sm"
                  >
                    +92 666 888 0000
                  </a>
                </p>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
