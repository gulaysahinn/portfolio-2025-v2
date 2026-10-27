import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import { personalInfo } from "../data/content";

// ─── Animasyon varyantları ───────────────────────────
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

// ─── Sistem durumu satırları ─────────────────────────
// Proje kartlarındaki eye_focus: 0.73 diliyle birebir aynı — hepsi gerçek, hepsi ölçülü
const SYSTEM_ROWS = [
  { key: "status",       value: "active",          color: "#4ade80",        live: "dot" },
  { key: "projects",     value: "8",               color: "var(--ink)" },
  { key: "internships",  value: "3",               color: "var(--ink)" },
  { key: "experience",   value: "4+ yr",            color: "var(--ink)" },
  { key: "ml_models",    value: "3",               color: "#22d3ee" },
  { key: "domain",       value: "AI · Web · Mobile", color: "#a998ff" },
];

const Hero = () => {
  const [blinkOn, setBlinkOn] = useState(true);

  // Status dot blink — badge ile system_status'taki yeşil nokta birlikte yanıp söner
  useEffect(() => {
    const id = setInterval(() => setBlinkOn(v => !v), 900);
    return () => clearInterval(id);
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = personalInfo.cvUrl || "/Gulay_SAHIN_CV.pdf";
    link.download = "Gulay_SAHIN_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden scroll-mt-20 pt-28 pb-16 md:pt-32 md:pb-24"
    >
      {/* Arka plan glow — sakin, tek */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(124,106,247,0.07) 0%, transparent 68%)",
          filter: "blur(50px)",
        }}
      />

      <div className="container mx-auto px-6 z-10 max-w-5xl">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-14">

          {/* ── SOL: İçerik ── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex-1 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div variants={item} className="mb-4 sm:mb-6">
              <span
                className="inline-flex items-center gap-2 py-1.5 px-3.5 sm:px-4 rounded-full font-mono text-xs"
                style={{
                  background: "rgba(124,106,247,0.08)",
                  border: "1px solid rgba(124,106,247,0.22)",
                  color: "var(--violet)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full inline-block transition-opacity duration-300 shrink-0"
                  style={{
                    backgroundColor: "#4ade80",
                    opacity: blinkOn ? 1 : 0.3,
                  }}
                />
                4. Sınıf Bilgisayar Mühendisi · Balıkesir Üniversitesi
              </span>
            </motion.div>

            {/* İsim */}
            <motion.h1
              variants={item}
              className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight sm:leading-none mb-4 sm:mb-5 tracking-tight"
              style={{ color: "var(--ink)" }}
            >
              Gülay{" "}
              <span
                className="font-display"
                style={{
                  background: "linear-gradient(135deg, #7c6af7 0%, #a998ff 50%, #22d3ee 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                ŞAHİN
              </span>
            </motion.h1>

            {/* Tez cümlesi — sakin, güçlü, tek başına duruyor */}
            <motion.p
              variants={item}
              className="text-lg md:text-xl font-light leading-relaxed mb-6"
              style={{ color: "var(--ink-secondary)" }}
            >
              Veriyi modele, modeli ürüne dönüştüren bir mühendis.
            </motion.p>

            {/* Alt açıklama */}
            <motion.p
              variants={item}
              className="max-w-xl mx-auto lg:mx-0 text-sm leading-relaxed mb-10"
              style={{ color: "var(--ink-dim)" }}
            >
              Python ile yapay zeka sistemleri, React ile modern arayüzler,
              Flutter ile mobil uygulamalar — karmaşık problemlere mühendislik
              çözümleri üretiyorum.
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={item}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
            >
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-3 rounded-lg font-medium text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: "var(--violet)",
                  color: "#fff",
                  boxShadow: "0 4px 24px -8px rgba(124,106,247,0.5)",
                }}
                id="hero-projects-btn"
              >
                Projeleri Gör
              </button>

              <button
                onClick={handleDownloadCV}
                className="px-6 py-3 rounded-lg font-medium text-sm flex items-center gap-2 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  border: "1px solid var(--border)",
                  color: "var(--ink-secondary)",
                  background: "transparent",
                }}
                id="hero-cv-btn"
              >
                <FaFileDownload size={14} />
                CV İndir
              </button>
            </motion.div>

            {/* Sosyal */}
            <motion.div
              variants={item}
              className="flex gap-5 justify-center lg:justify-start"
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="transition-colors duration-200"
                style={{ color: "var(--ink-dim)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--ink)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--ink-dim)")}
                id="hero-github-link"
                aria-label="GitHub profili"
              >
                <FaGithub size={20} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="transition-colors duration-200"
                style={{ color: "var(--ink-dim)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--violet)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--ink-dim)")}
                id="hero-linkedin-link"
                aria-label="LinkedIn profili"
              >
                <FaLinkedin size={20} />
              </a>
            </motion.div>
          </motion.div>

          {/* ── SAĞ: Sistem Durumu Paneli ── */}
          {/* Avatar yok. Proje kartlarıyla aynı terminal dili. */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="shrink-0"
          >
            <div
              className="rounded-xl overflow-hidden"
              style={{
                background: "var(--bg-surface)",
                border: "1px solid var(--border)",
                minWidth: "260px",
                maxWidth: "300px",
              }}
            >
              {/* Terminal başlık — proje kartlarıyla birebir aynı */}
              <div
                className="flex items-center gap-2 px-4 py-3"
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f56" }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#febc2e" }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#28c840" }} />
                </div>
                <span
                  className="font-mono text-xs ml-1"
                  style={{ color: "var(--violet)" }}
                >
                  system_status
                </span>
              </div>

              {/* Satırlar */}
              <div className="px-4 py-4 flex flex-col gap-2.5">
                {SYSTEM_ROWS.map((row, i) => (
                  <div key={i} className="flex items-baseline gap-2 font-mono text-xs">
                    <span style={{ color: "var(--ink-dim)", minWidth: "16px" }}>
                      {String(i).padStart(2, "0")}
                    </span>
                    <span style={{ color: "var(--violet)", opacity: 0.85, minWidth: "110px" }}>
                      {row.key}
                    </span>
                    <span style={{ color: "var(--border)" }}>:</span>

                    {row.live === "dot" ? (
                      <span className="flex items-center gap-1.5" style={{ color: row.color }}>
                        <span
                          className="w-1.5 h-1.5 rounded-full inline-block transition-opacity duration-300"
                          style={{ background: row.color, opacity: blinkOn ? 1 : 0.3 }}
                        />
                        {row.value}
                      </span>
                    ) : (
                      <span style={{ color: row.color }}>{row.value}</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Scan line animasyonu — proje kartlarındaki gibi */}
              <div className="relative h-px overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(124,106,247,0.5), transparent)",
                  }}
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                />
              </div>

              {/* Alt footer */}
              <div
                className="px-4 py-2.5 flex items-center gap-2"
                style={{ borderTop: "1px solid var(--border)" }}
              >
                <span className="font-mono text-xs" style={{ color: "var(--ink-dim)" }}>
                  stack:
                </span>
                {["Python", "React", "Flutter"].map(s => (
                  <span
                    key={s}
                    className="font-mono text-xs px-2 py-0.5 rounded"
                    style={{
                      background: "rgba(124,106,247,0.08)",
                      color: "var(--violet)",
                      border: "1px solid rgba(124,106,247,0.18)",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
