import React, { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFileDownload,
} from "react-icons/fa";
import { navLinks, personalInfo } from "../data/content";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Ekran boyutunu kontrol et
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Scroll olayını dinle
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobil menü açıldığında scroll'u kilitle
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleDownloadCV = () => {
    setIsOpen(false);
    const cvUrl = personalInfo.cvUrl || "/cv.pdf";
    window.open(cvUrl, "_blank");
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.2 },
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 10 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/95 backdrop-blur-md shadow-lg py-2"
            : "bg-slate-950/90 backdrop-blur-sm py-4"
        } ${isOpen ? "z-[60]" : "z-50"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          {/* Logo */}
          <div
            onClick={() => scrollToSection("home")}
            className="cursor-pointer flex items-center gap-1 font-mono text-xl font-bold"
          >
            <span className="text-cyan-400">&lt;</span>
            <span className="text-white">Gülay</span>
            <span className="text-cyan-400">/&gt;</span>
          </div>

          {/* Desktop Menu */}
          {!isMobile && (
            <div className="flex items-center gap-6">
              <ul className="flex gap-6">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-sm text-white/80 hover:text-cyan-400 transition-colors py-1"
                    >
                      {link.title}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="h-4 w-px bg-gray-700"></div>

              <button
                onClick={handleDownloadCV}
                className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-3 py-1.5 rounded-md text-sm font-medium transition-all"
              >
                <FaFileDownload size={14} />
                <span>CV İndir</span>
              </button>

              <div className="flex gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  <FaLinkedin size={18} />
                </a>
              </div>
            </div>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              className="text-white hover:text-cyan-400 transition-colors p-1 z-[70]"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menü"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Menu Overlay - EN ÜSTTE OLMALI */}
      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-[55] bg-slate-900/95 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            {/* Menü İçeriği - Overlay'in ÜSTÜNDE */}
            <div
              className="absolute top-0 left-0 right-0 min-h-screen bg-slate-900 pt-20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="px-6 py-8 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.id}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    transition={{ delay: index * 0.1 }}
                  >
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="w-full text-left py-4 px-4 text-xl text-white hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-colors flex items-center justify-between"
                    >
                      <span>{link.title}</span>
                      <span className="text-cyan-400">→</span>
                    </button>
                  </motion.div>
                ))}

                {/* CV Button in Mobile Menu */}
                <motion.div
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  transition={{ delay: navLinks.length * 0.1 }}
                  className="pt-6"
                >
                  <button
                    onClick={handleDownloadCV}
                    className="w-full flex items-center justify-center gap-3 py-4 px-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-xl font-semibold text-lg transition-all active:scale-95"
                  >
                    <FaFileDownload size={20} />
                    <span>CV İndir</span>
                  </button>
                </motion.div>

                {/* Social Icons */}
                <motion.div
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  transition={{ delay: (navLinks.length + 1) * 0.1 }}
                  className="pt-10 flex justify-center gap-8"
                >
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-slate-800/70 rounded-full hover:bg-slate-700/70 transition-colors hover:scale-110"
                  >
                    <FaGithub size={24} className="text-white" />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-slate-800/70 rounded-full hover:bg-slate-700/70 transition-colors hover:scale-110"
                  >
                    <FaLinkedin size={24} className="text-white" />
                  </a>
                </motion.div>

                {/* Kapatma Butonu */}
                <motion.div
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  transition={{ delay: (navLinks.length + 2) * 0.1 }}
                  className="pt-10 flex justify-center"
                >
                  <button
                    onClick={() => setIsOpen(false)}
                    className="py-3 px-8 text-gray-400 hover:text-white border border-gray-700 hover:border-gray-500 rounded-full transition-colors"
                  >
                    Kapat
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
