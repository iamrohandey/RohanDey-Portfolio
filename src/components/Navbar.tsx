import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#education", label: "Education" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    // ❌ removed: setIsOpen(false);
    // ✅ keep menu open after clicking
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <img
            src={scrolled ? "/logo-dark.png" : "/logo-white.png"}
            alt="Rohan Dey Logo"
            className="h-14 w-auto transition-all duration-300"
          />

          {/* Right side */}
          <div className="flex items-center">
            {/* Sliding nav strip */}
            <div
              className={`flex items-center space-x-4 transform transition-all duration-500 ease-in-out ${
                isOpen
                  ? "translate-x-0 opacity-100 max-w-lg"
                  : "translate-x-20 opacity-0 max-w-0"
              }`}
            >
              {navLinks.map((link, index) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    scrolled
                      ? "text-gray-700 hover:text-blue-600"
                      : "text-white hover:text-yellow-300"
                  }`}
                  style={{
                    transitionDelay: isOpen ? `${index * 100}ms` : "0ms",
                  }}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Custom Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="ml-2 flex flex-col justify-between w-6 h-5 focus:outline-none"
            >
              <span
                className={`block h-0.5 w-full rounded-sm bg-current transform transition duration-300 ease-in-out ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                } ${scrolled ? "text-gray-800" : "text-white"}`}
              />
              <span
                className={`block h-0.5 w-full rounded-sm bg-current transition-all duration-300 ease-in-out ${
                  isOpen ? "opacity-0" : ""
                } ${scrolled ? "text-gray-800" : "text-white"}`}
              />
              <span
                className={`block h-0.5 w-full rounded-sm bg-current transform transition duration-300 ease-in-out ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                } ${scrolled ? "text-gray-800" : "text-white"}`}
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
