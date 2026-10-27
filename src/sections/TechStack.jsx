import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills } from "../data/content";

import {
  FaPython,
  FaReact,
  FaJs,
  FaDatabase,
  FaCode,
  FaBrain,
  FaPhp,
  FaTerminal,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiFlutter,
  SiMongodb,
  SiFirebase,
  SiTensorflow,
  SiGithub,
  SiMysql,
} from "react-icons/si";

// Tüm ikonlar tek bir curated indigo-violet / teal paletinde
const skillIconMap = {
  Python:            <FaPython />,
  JavaScript:        <FaJs />,
  "C#":              <FaCode />,
  PHP:               <FaPhp />,
  "React.js":        <FaReact />,
  TypeScript:        <SiTypescript />,
  "Tailwind CSS":    <SiTailwindcss />,
  "Next.js":         <FaCode />,
  Flutter:           <SiFlutter />,
  "Node.js":         <FaJs />,
  "Machine Learning":<FaBrain />,
  TensorFlow:        <SiTensorflow />,
  Oracle:            <FaDatabase />,
  MsSQL:             <FaDatabase />,
  MySQL:             <SiMysql />,
  MongoDB:           <SiMongodb />,
  Firebase:          <SiFirebase />,
  "Git & GitHub":    <SiGithub />,
};

// Kategori filtreleri
const FILTERS = [
  { key: "all",      label: "Tümü",        cmd: "cat *" },
  { key: "ai",       label: "AI & ML",     cmd: "cat ai/" },
  { key: "language", label: "Diller",      cmd: "cat lang/" },
  { key: "frontend", label: "Frontend",    cmd: "cat web/" },
  { key: "mobile",   label: "Mobil",       cmd: "cat mobile/" },
  { key: "database", label: "Veritabanı",  cmd: "cat db/" },
  { key: "tools",    label: "Araçlar",     cmd: "cat tools/" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
};

const TechStack = () => {
  const [active, setActive] = useState("all");

  const filtered = active === "all"
    ? skills
    : skills.filter(s => s.category === active);

  return (
    <section id="techstack" className="py-24 md:py-36 scroll-mt-[90px]">
      <div className="max-w-5xl mx-auto px-6">

        {/* ── Section Header — Terminal Tag Pattern ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-3 font-mono text-xs" style={{ color: "var(--violet)" }}>
            <span style={{ opacity: 0.6 }}>// 03. stack</span>
            <span style={{ color: "var(--border)" }}>·</span>
            <span className="px-2 py-0.5 rounded" style={{ background: "rgba(124,106,247,0.08)", border: "1px solid rgba(124,106,247,0.2)" }}>
              $ ls -la tech_stack/
            </span>
          </div>
          <h2
            className="font-display text-4xl md:text-5xl font-bold"
            style={{ color: "var(--ink)" }}
          >
            Teknoloji{" "}
            <span style={{ color: "var(--violet)" }}>Yığınım</span>
          </h2>
        </motion.div>

        {/* ── Filtre Butonları (Terminal Segment) ── */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4" style={{ borderBottom: "1px solid var(--border)" }}>
          {FILTERS.map(f => {
            const isSelected = active === f.key;
            return (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className="font-mono text-xs px-3.5 py-1.5 rounded-lg transition-all duration-200 flex items-center gap-1.5"
                style={{
                  background: isSelected ? "var(--violet)" : "var(--bg-surface)",
                  color: isSelected ? "#fff" : "var(--ink-secondary)",
                  border: `1px solid ${isSelected ? "var(--violet)" : "var(--border)"}`,
                }}
              >
                <span>{f.label}</span>
                <span className="text-[10px]" style={{ opacity: isSelected ? 0.8 : 0.4 }}>
                  ({f.key === "all" ? skills.length : skills.filter(s => s.category === f.key).length})
                </span>
              </button>
            );
          })}
        </div>

        {/* ── Skill Matrix Grid ── */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
          <AnimatePresence mode="popLayout">
            {filtered.map(skill => {
              const isAdv = skill.level === "Advanced";

              return (
                <motion.div
                  key={skill.name}
                  layout
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="p-4 rounded-xl transition-all duration-200 flex flex-col justify-between"
                  style={{
                    background: "var(--bg-base)",
                    border: "1px solid var(--border)",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = "rgba(124,106,247,0.4)";
                    e.currentTarget.style.background = "var(--bg-surface)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.background = "var(--bg-base)";
                  }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    {/* Unified Icon — Tek tip, uyumlu violet/ink tonlarında */}
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-base shrink-0"
                      style={{
                        background: "rgba(124,106,247,0.08)",
                        color: isAdv ? "var(--violet)" : "#a998ff",
                        border: "1px solid rgba(124,106,247,0.18)",
                      }}
                    >
                      {skillIconMap[skill.name] || <FaCode />}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-sm truncate" style={{ color: "var(--ink)" }}>
                        {skill.name}
                      </h3>
                      <span className="font-mono text-[11px]" style={{ color: "var(--ink-dim)" }}>
                        {skill.category}
                      </span>
                    </div>
                  </div>

                  {/* Alt Seviye Çubuğu — Makine/Terminal Göstergesi */}
                  <div className="pt-2 flex items-center justify-between" style={{ borderTop: "1px solid var(--border-subtle)" }}>
                    <span className="font-mono text-[11px]" style={{ color: isAdv ? "#22d3ee" : "var(--ink-dim)" }}>
                      {skill.level}
                    </span>
                    <div className="flex gap-1">
                      {[0, 1, 2, 3].map(barIdx => {
                        const filled = isAdv ? true : barIdx < 2;
                        return (
                          <span
                            key={barIdx}
                            className="w-2.5 h-1 rounded-full"
                            style={{
                              background: filled
                                ? isAdv ? "#22d3ee" : "var(--violet)"
                                : "rgba(255,255,255,0.08)",
                            }}
                          />
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default TechStack;
