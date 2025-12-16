import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaFileDownload } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: "about", title: "Hakkımda" },
    { id: "techstack", title: "Teknolojiler" },
    { id: "projects", title: "Projeler" },
    { id: "contact", title: "İletişim" },
  ];

  const handleScrollTo = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    // DİKKAT: Arka planı kırmızı (bg-red-600) yaptık ki güncellendiğini anlayalım.
    <nav className="fixed top-0 left-0 w-full z-[9999] bg-red-600 py-4 transition-all">
      <div className="w-full max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* LOGO */}
        <div className="text-2xl font-bold font-mono text-white">
          Gülay ŞAHİN
        </div>

        {/* --- TEST ALANI: GİZLEME KODLARINI SİLDİK --- */}
        {/* 'hidden' ve 'md:flex' YOK. Sadece 'flex' var. 
            Bu menü şu an telefonda da bilgisayarda da GÖRÜNMEK ZORUNDA. 
        */}
        <div className="flex items-center gap-6">
          <div className="flex gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScrollTo(link.id)}
                className="text-white font-bold border border-white px-2"
              >
                {link.title}
              </button>
            ))}
          </div>
        </div>

        {/* Hamburger butonu da orada dursun */}
        <button
          className="text-white text-2xl focus:outline-none ml-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
