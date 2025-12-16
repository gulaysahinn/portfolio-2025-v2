import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaFileDownload } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { id: "about", title: "Hakkımda" },
    { id: "techstack", title: "Teknolojiler" },
    { id: "projects", title: "Projeler" },
    { id: "contact", title: "İletişim" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    setIsOpen(false);
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(id);
      if (element) {
        const y =
          element.getBoundingClientRect().top + window.pageYOffset - 100;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/95 shadow-lg border-b border-slate-800 py-4"
          : "bg-slate-950/60 backdrop-blur-md py-6"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* LOGO */}
        <div
          onClick={() => handleScrollTo("home")}
          className="text-2xl font-bold font-mono flex items-center gap-1 cursor-pointer z-[100]"
        >
          <span className="text-cyan-400">&lt;</span>
          <span className="text-white hover:text-cyan-400 transition-colors">
            Gülay
          </span>
          <span className="text-slate-400 hover:text-white transition-colors">
            ŞAHİN
          </span>
          <span className="text-cyan-400">/&gt;</span>
        </div>

        {/* MASAÜSTÜ MENÜ (Laptopta GÖRÜNÜR) */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScrollTo(link.id)}
                className="text-white hover:text-cyan-400 font-medium text-sm transition-colors py-2 relative group"
              >
                {link.title}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
              </button>
            ))}
          </div>

          <a
            href="/cv.pdf"
            download
            className="px-5 py-2 bg-cyan-500 text-slate-900 font-bold rounded-lg hover:bg-cyan-400 transition-all text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/20"
          >
            <FaFileDownload />
            CV İndir
          </a>
        </div>

        {/* MOBİL BUTON (Sadece Telefonda GÖRÜNÜR) */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none z-[100]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBİL MENÜ İÇERİĞİ */}
      {isOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-slate-950 flex flex-col items-center justify-center gap-8 z-[90]">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScrollTo(link.id)}
              className="text-white text-2xl font-medium hover:text-cyan-400 transition-colors"
            >
              {link.title}
            </button>
          ))}
          <a
            href="/cv.pdf"
            download
            className="px-8 py-3 bg-cyan-500 text-slate-900 font-bold rounded-xl mt-4"
          >
            CV İndir
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
