import React from "react";
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";
import { personalInfo } from "../data/content";

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Sol - Hakkında */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <span className="text-cyan-400 text-2xl font-bold font-mono">
                &lt;
              </span>
              <span className="text-white text-xl font-bold">Gülay ŞAHİN</span>
              <span className="text-cyan-400 text-2xl font-bold font-mono">
                /&gt;
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Yazılım geliştirme tutkusuyla modern teknolojiler kullanarak
              projeler üretiyorum.
            </p>
          </div>

          {/* Orta - Hızlı Linkler */}
          <div className="text-center">
            <h3 className="text-white font-semibold mb-4">Hızlı Erişim</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Hakkımda
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Projeler
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  İletişim
                </a>
              </li>
            </ul>
          </div>

          {/* Sağ - Sosyal Medya */}
          <div className="text-center md:text-right">
            <h3 className="text-white font-semibold mb-4">Beni Takip Edin</h3>
            <div className="flex justify-center md:justify-end gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Alt - Copyright */}
        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-500 text-sm flex items-center justify-center gap-2">
            © {new Date().getFullYear()} Gülay ŞAHİN. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
