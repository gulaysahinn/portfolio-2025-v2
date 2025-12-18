import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // FaFileDownload kaldırıldı çünkü buton gitti
import { personalInfo } from "../data/content";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center scroll-mt-20"
    >
      {/* Arka Plan Efektleri */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] animate-pulse delay-1000 pointer-events-none"></div>

      <div className="container mx-auto px-6 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Avatar Kısmı (Aynı kalıyor) */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.2,
            }}
            className="mb-8 inline-block relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 to-purple-600 rounded-full blur-2xl opacity-60 animate-pulse -z-10 scale-110"></div>
            <img
              src="images/avatar.jpeg"
              alt="Avatar"
              className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border-[6px] border-slate-900/80 overflow-hidden object-cover shadow-2xl ring-4 ring-cyan-400/30"
            />
          </motion.div>

          <div className="mb-6">
            <span className="inline-block py-1 px-3 rounded-full bg-slate-800/80 border border-slate-700 text-cyan-400 text-sm font-mono backdrop-blur-sm">
              👋 Merhaba Dünya
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold font-mono text-white mb-6 tracking-tight">
            Ben{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              {personalInfo.name}
            </span>
          </h1>

          <div className="text-xl md:text-3xl text-cyan-400 mb-8 font-mono h-[40px] font-medium">
            <TypeAnimation
              sequence={[
                "Bilgisayar Mühendisliği Öğrencisi",
                1500,
                "Yazılım Geliştirici",
                1500,
                "Python & AI Meraklısı",
                1500,
                "Modern Web Teknolojileri",
                1500,
              ]}
              wrapper="span"
              speed={50}
              deletionSpeed={65}
              repeat={Infinity}
            />
          </div>

          <p className="max-w-2xl mx-auto text-slate-300 text-lg leading-relaxed mb-10 font-sans">
            {personalInfo.description}
          </p>

          {/* --- DEĞİŞİKLİK BURADA: BUTONLAR KALKTI, SADECE İKONLAR KALDI --- */}
          <div className="flex justify-center gap-6">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-white transition-all text-4xl hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
            >
              <FaGithub />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-all text-4xl hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]"
            >
              <FaLinkedin />
            </a>
          </div>
          {/* ------------------------------------------------------------------ */}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
