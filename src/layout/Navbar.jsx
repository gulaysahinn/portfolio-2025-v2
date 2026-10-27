import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaFileDownload } from "react-icons/fa";
import { navLinks, personalInfo } from "../data/content";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Aktif section takibi
  useEffect(() => {
    const sections = navLinks.map(l => document.getElementById(l.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const scrollToSection = id => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: "smooth" });
    }
  };

  const handleDownloadCV = () => {
    setIsOpen(false);
    const link = document.createElement("a");
    link.href = personalInfo.cvUrl || "/Gulay_SAHIN_CV.pdf";
    link.download = "Gulay_SAHIN_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full transition-all duration-300 ${isOpen ? "z-[60]" : "z-50"}`}
        style={{
          background: scrolled ? "rgba(9,9,15,0.92)" : "rgba(9,9,15,0.7)",
          backdropFilter: "blur(12px)",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          paddingTop: scrolled ? "8px" : "16px",
          paddingBottom: scrolled ? "8px" : "16px",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-14">

          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-1 font-mono text-lg font-bold transition-opacity hover:opacity-80"
            id="nav-logo"
          >
            <span style={{ color: "var(--violet)" }}>&lt;</span>
            <span style={{ color: "var(--ink)" }}>Gülay</span>
            <span style={{ color: "var(--violet)" }}>/&gt;</span>
          </button>

          {/* Desktop nav */}
          {!isMobile && (
            <div className="flex items-center gap-8">
              <ul className="flex gap-6">
                {navLinks.map(link => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-sm transition-colors duration-200 relative py-1"
                      style={{
                        color: activeSection === link.id ? "var(--ink)" : "var(--ink-secondary)",
                        fontWeight: activeSection === link.id ? "500" : "400",
                      }}
                      id={`nav-${link.id}`}
                    >
                      {link.title}
                      {/* Aktif gösterge */}
                      {activeSection === link.id && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute bottom-0 left-0 right-0 h-px"
                          style={{ background: "var(--violet)" }}
                        />
                      )}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="w-px h-4" style={{ background: "var(--border)" }} />

              <button
                onClick={handleDownloadCV}
                className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: "var(--violet)",
                  color: "#fff",
                }}
                id="nav-cv-btn"
              >
                <FaFileDownload size={13} />
                CV İndir
              </button>
            </div>
          )}

          {/* Mobile hamburger */}
          {isMobile && (
            <button
              className="p-1 z-[70] transition-colors duration-200"
              style={{ color: isOpen ? "var(--violet)" : "var(--ink-secondary)" }}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menüyü aç/kapat"
              id="nav-mobile-toggle"
            >
              {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          )}
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[55]"
            style={{ background: "rgba(9,9,15,0.97)", backdropFilter: "blur(16px)" }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute top-0 right-0 h-full w-72 flex flex-col pt-20 px-8"
              style={{ borderLeft: "1px solid var(--border)" }}
              onClick={e => e.stopPropagation()}
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    onClick={() => scrollToSection(link.id)}
                    className="text-left py-3.5 px-4 rounded-lg text-lg font-medium transition-colors duration-200"
                    style={{
                      color: activeSection === link.id ? "var(--violet)" : "var(--ink-secondary)",
                      background: activeSection === link.id ? "rgba(124,106,247,0.08)" : "transparent",
                    }}
                  >
                    {link.title}
                  </motion.button>
                ))}
              </div>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                onClick={handleDownloadCV}
                className="mt-8 flex items-center justify-center gap-2 py-3.5 rounded-xl font-medium text-sm"
                style={{
                  background: "var(--violet)",
                  color: "#fff",
                }}
              >
                <FaFileDownload size={14} />
                CV İndir
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
