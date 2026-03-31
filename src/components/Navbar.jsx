import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Beranda", path: "/" },
  { name: "Tentang Kami", path: "/tentang-kami" },
  { name: "Armada", path: "/armada" },
  { name: "Harga Sewa", path: "/harga-sewa" },
  { name: "Kalkulator Trip", path: "/kalkulator" },
  { name: "Kontak", path: "/kontak" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-light-card shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/images/logo.png"
              alt="Asshofiyah"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-text-secondary"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/628xxxxxxxxxx"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-dark text-text-on-primary text-sm font-semibold px-5 py-2 rounded-full transition-colors"
            >
              Hubungi Kami
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-text-secondary hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-light-card"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-text-secondary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://wa.me/628xxxxxxxxxx"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-primary hover:bg-primary-dark text-text-on-primary text-sm font-semibold px-5 py-2 rounded-full transition-colors"
              >
                Hubungi Kami
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
