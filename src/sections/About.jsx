import React from "react";
import { motion } from "framer-motion";
import { FaTerminal, FaLayerGroup, FaCube } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

// Mühendislik Yolculuğu — Changelog formatında zaman çizelgesi
const LOG_ENTRIES = [
  {
    year: "2021",
    tag: "init",
    title: "Kocaeli Üniversitesi",
    detail: "Bilgisayar Programcılığı — Temel algoritmalar, C/C++ ve veri yapıları ile kodlama temelleri.",
    active: false,
  },
  {
    year: "2022",
    tag: "transfer",
    title: "Balıkesir Üniversitesi",
    detail: "Bilgisayar Mühendisliği — Yazılım mimarisi, veritabanı yönetimi, veri bilimi ve kuramsal mühendislik temelleri.",
    active: false,
  },
  {
    year: "2024",
    tag: "specialization",
    title: "AI & Full-Stack Entegrasyonu",
    detail: "Python ile makine öğrenmesi modelleri geliştirirken, React ve Flutter ile modelleri son kullanıcıya ulaştıran arayüzler kurmaya başladım.",
    active: false,
  },
  {
    year: "2026",
    tag: "current",
    title: "4. Sınıf Mühendislik Tezi & Staj",
    detail: "Bilgi İşlem Daire Başkanlığı stajı ve görüntü işleme + LLM tabanlı Resonix AI bitirme projesi üzerinde aktif çalışma.",
    active: true,
  },
];

// Odak Alanları — Temiz Mühendislik Mimarisi
const FOCUS_AREAS = [
  {
    code: "01",
    name: "Veri & Model Mimarisi",
    desc: "Python, Scikit-learn ve TensorFlow ile ham veriyi işleyip anlamlı tahmin ve sınıflandırma modellerine dönüştürme.",
    techs: ["Python", "Machine Learning", "NLP", "Computer Vision"],
  },
  {
    code: "02",
    name: "Ürün & Arayüz Katmanı",
    desc: "Karmaşık modellerin çıktılarını kullanıcı için sade, hızlı ve sezgisel web & mobil deneyimlerine çevirme.",
    techs: ["React.js", "Flutter", "Tailwind CSS", "REST APIs"],
  },
  {
    code: "03",
    name: "Veri Tabanı & Sistem",
    desc: "İlişkisel ve doküman tabanlı veritabanlarında veri modelleme, güvenli yerel depolama ve donanım seviyesi API entegrasyonu.",
    techs: ["Oracle", "PostgreSQL / MySQL", "Hive / SQLite", "Win32 API"],
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-36 relative scroll-mt-[90px]">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* ── Section Header — Terminal Tag Pattern ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex items-center gap-2 mb-3 font-mono text-xs" style={{ color: "var(--violet)" }}>
            <span style={{ opacity: 0.6 }}>// 01. about</span>
            <span style={{ color: "var(--border)" }}>·</span>
            <span className="px-2 py-0.5 rounded" style={{ background: "rgba(124,106,247,0.08)", border: "1px solid rgba(124,106,247,0.2)" }}>
              $ cat background.log
            </span>
          </div>
          <h2
            className="font-display text-4xl md:text-5xl font-bold"
            style={{ color: "var(--ink)" }}
          >
            Mühendislik{" "}
            <span style={{ color: "var(--violet)" }}>Geçmişi & Yaklaşım</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* ── Sol: Changelog / Trace ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-6 rounded-xl p-6 md:p-8"
            style={{
              background: "var(--bg-surface)",
              border: "1px solid var(--border)",
            }}
          >
            <div className="flex items-center gap-2 pb-4 mb-6" style={{ borderBottom: "1px solid var(--border)" }}>
              <FaTerminal size={13} style={{ color: "var(--violet)" }} />
              <span className="font-mono text-xs uppercase tracking-wider" style={{ color: "var(--ink-secondary)" }}>
                system_log: academic_and_dev_trace
              </span>
            </div>

            <div className="flex flex-col gap-6 relative">
              {/* Dikey çizgi */}
              <div
                className="absolute left-[39px] top-3 bottom-3 w-px pointer-events-none"
                style={{ background: "var(--border)" }}
                aria-hidden="true"
              />

              {LOG_ENTRIES.map((entry, idx) => (
                <div key={idx} className="flex items-start gap-4 relative">
                  {/* Yıl Badge */}
                  <span
                    className="font-mono text-xs px-2 py-1 rounded shrink-0 z-10"
                    style={{
                      background: entry.active ? "var(--violet)" : "var(--bg-base)",
                      color: entry.active ? "#fff" : "var(--ink-secondary)",
                      border: `1px solid ${entry.active ? "var(--violet)" : "var(--border)"}`,
                      boxShadow: entry.active ? "0 0 12px rgba(124,106,247,0.4)" : "none",
                    }}
                  >
                    {entry.year}
                  </span>

                  {/* Detay */}
                  <div className="flex-1 pt-0.5">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium text-sm" style={{ color: "var(--ink)" }}>
                        {entry.title}
                      </h4>
                      {entry.active && (
                        <span
                          className="font-mono text-[10px] px-1.5 py-0.2 rounded"
                          style={{
                            background: "rgba(74,222,128,0.1)",
                            color: "#4ade80",
                            border: "1px solid rgba(74,222,128,0.25)",
                          }}
                        >
                          active
                        </span>
                      )}
                    </div>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--ink-dim)" }}>
                      {entry.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Sağ: Odak Alanları / Mimari Kartları ── */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {FOCUS_AREAS.map((area, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="p-5 md:p-6 rounded-xl transition-all duration-200"
                style={{
                  background: "var(--bg-base)",
                  border: "1px solid var(--border)",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "rgba(124,106,247,0.4)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "var(--border)";
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs font-bold" style={{ color: "var(--violet)" }}>
                      [{area.code}]
                    </span>
                    <h3 className="font-display text-base font-semibold" style={{ color: "var(--ink)" }}>
                      {area.name}
                    </h3>
                  </div>
                </div>

                <p className="text-xs leading-relaxed mb-4" style={{ color: "var(--ink-secondary)" }}>
                  {area.desc}
                </p>

                {/* Tech tokens */}
                <div className="flex flex-wrap gap-1.5">
                  {area.techs.map(t => (
                    <span
                      key={t}
                      className="font-mono text-[11px] px-2 py-0.5 rounded"
                      style={{
                        background: "rgba(124,106,247,0.06)",
                        color: "var(--ink-dim)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
