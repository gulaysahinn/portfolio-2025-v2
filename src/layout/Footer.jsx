import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo, navLinks } from "../data/content";

const Footer = () => {
  const scrollToSection = id => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "var(--bg-base)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

          {/* Logo + tagline */}
          <div>
            <div className="flex items-center gap-1 font-mono text-lg font-bold mb-2">
              <span style={{ color: "var(--violet)" }}>&lt;</span>
              <span style={{ color: "var(--ink)" }}>Gülay</span>
              <span style={{ color: "var(--violet)" }}>/&gt;</span>
            </div>
            <p className="text-xs font-mono" style={{ color: "var(--ink-dim)" }}>
              Veriyi modele, modeli ürüne dönüştürüyorum.
            </p>
          </div>

          {/* Nav linkleri */}
          <nav className="flex flex-wrap gap-5">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="font-mono text-xs uppercase tracking-wider transition-colors duration-200"
                style={{ color: "var(--ink-dim)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--violet)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--ink-dim)")}
              >
                {link.title}
              </button>
            ))}
          </nav>

          {/* Sosyal ikonlar */}
          <div className="flex gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg transition-all duration-200"
              style={{ background: "var(--bg-surface)", color: "var(--ink-secondary)", border: "1px solid var(--border)" }}
              onMouseEnter={e => {
                e.currentTarget.style.color = "var(--ink)";
                e.currentTarget.style.borderColor = "rgba(124,106,247,0.35)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = "var(--ink-secondary)";
                e.currentTarget.style.borderColor = "var(--border)";
              }}
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg transition-all duration-200"
              style={{ background: "var(--bg-surface)", color: "var(--ink-secondary)", border: "1px solid var(--border)" }}
              onMouseEnter={e => {
                e.currentTarget.style.color = "var(--violet)";
                e.currentTarget.style.borderColor = "rgba(124,106,247,0.35)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = "var(--ink-secondary)";
                e.currentTarget.style.borderColor = "var(--border)";
              }}
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>

        {/* Divider + copyright */}
        <div
          className="mt-8 pt-6 flex items-center justify-center"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p className="font-mono text-xs" style={{ color: "var(--ink-dim)" }}>
            © {new Date().getFullYear()} Gülay ŞAHİN
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
