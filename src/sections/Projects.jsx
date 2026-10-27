import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/content";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
  FaLock,
  FaTimes,
  FaTerminal,
} from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const Projects = () => {
  const featured = projects.filter(p => p.featured);
  const rest = projects.filter(p => !p.featured);

  return (
    <section
      id="projects"
      className="py-24 md:py-36 scroll-mt-[90px]"
      style={{ background: "var(--bg-surface)" }}
    >
      <div className="container mx-auto px-6 max-w-6xl">

        {/* ── Section Header — Terminal Tag Pattern ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-6"
        >
          <div className="flex items-center gap-2 mb-3 font-mono text-xs" style={{ color: "var(--violet)" }}>
            <span style={{ opacity: 0.6 }}>// 04. projects</span>
            <span style={{ color: "var(--border)" }}>·</span>
            <span className="px-2 py-0.5 rounded" style={{ background: "rgba(124,106,247,0.08)", border: "1px solid rgba(124,106,247,0.2)" }}>
              $ eval projects/ --deep
            </span>
          </div>
          <h2
            className="font-display text-4xl md:text-5xl font-bold mb-3"
            style={{ color: "var(--ink)" }}
          >
            Öne Çıkan{" "}
            <span style={{ color: "var(--violet)" }}>Projelerim</span>
          </h2>
        </motion.div>

        {/* Konsept Açıklama Satırı */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="mb-14 flex items-start gap-3 max-w-xl font-mono text-xs"
          style={{ color: "var(--ink-dim)" }}
        >
          <span style={{ color: "var(--violet)" }}>›</span>
          <p>
            Her kart çift katmanlıdır: <span style={{ color: "var(--ink)" }}>Ön yüz</span> kullanıcı arayüzünü,{" "}
            <span style={{ color: "var(--violet)" }}>output_layer</span> butonu modelin/sistemin ham çıktısını gösterir.
          </p>
        </motion.div>

        {/* Featured projeler */}
        {featured.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {featured.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                featured
              />
            ))}
          </div>
        )}

        {/* Diğer projeler */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={featured.length + index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   İki katmanlı proje kartı (UI + Model Trace)
───────────────────────────────────────────── */
const ProjectCard = ({ project, index, featured = false }) => {
  const [showModel, setShowModel] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const hasMultipleImages = project.images && project.images.length > 1;
  const displayImage = project.images
    ? project.images[currentImageIndex]
    : project.image;

  const nextImage = e => {
    e.preventDefault();
    e.stopPropagation();
    if (hasMultipleImages)
      setCurrentImageIndex(prev => (prev + 1) % project.images.length);
  };
  const prevImage = e => {
    e.preventDefault();
    e.stopPropagation();
    if (hasMultipleImages)
      setCurrentImageIndex(prev =>
        prev === 0 ? project.images.length - 1 : prev - 1
      );
  };

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group relative flex flex-col rounded-xl overflow-hidden"
      style={{
        background: "var(--bg-base)",
        border: `1px solid ${showModel ? "rgba(124,106,247,0.5)" : "var(--border)"}`,
        boxShadow: showModel ? "0 8px 40px -8px rgba(124,106,247,0.25)" : "none",
        transition: "border-color 0.25s, box-shadow 0.25s, transform 0.25s",
        minHeight: "360px",
      }}
      role="article"
      aria-label={`${project.title} projesi`}
    >
      {/* Üst aksan çizgisi — featured */}
      {featured && (
        <div
          className="h-0.5 w-full shrink-0"
          style={{
            background: "linear-gradient(90deg, var(--violet), #22d3ee)",
          }}
        />
      )}

      {/* ── ÖN YÜZ: Kullanıcının gördüğü ── */}
      <div className="flex flex-col flex-grow">
        {/* Resim Alanı */}
        <div
          className="relative overflow-hidden shrink-0 group/img"
          style={{
            height: featured ? "200px" : "170px",
            background: "var(--bg-elevated)",
          }}
        >
          {project.type === "mobile" && !hasMultipleImages ? (
            <div className="w-full h-full flex items-center justify-center p-4">
              <img
                src={displayImage}
                alt={project.title}
                loading="lazy"
                className="h-full w-auto object-contain drop-shadow-xl rounded"
              />
            </div>
          ) : (
            <div className="w-full h-full relative">
              <img
                src={displayImage}
                alt={`${project.title} - ${currentImageIndex + 1}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{ background: "rgba(9,9,15,0.25)" }}
              />

              {/* Çoklu resim butonları */}
              {hasMultipleImages && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full opacity-80 hover:opacity-100 transition-opacity z-20 cursor-pointer"
                    style={{ background: "rgba(9,9,15,0.85)", color: "var(--ink)" }}
                    aria-label="Önceki resim"
                  >
                    <FaChevronLeft size={11} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full opacity-80 hover:opacity-100 transition-opacity z-20 cursor-pointer"
                    style={{ background: "rgba(9,9,15,0.85)", color: "var(--ink)" }}
                    aria-label="Sonraki resim"
                  >
                    <FaChevronRight size={11} />
                  </button>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                    {project.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={e => {
                          e.preventDefault();
                          e.stopPropagation();
                          setCurrentImageIndex(idx);
                        }}
                        className="h-1 rounded-full transition-all duration-200 cursor-pointer"
                        style={{
                          width: idx === currentImageIndex ? "16px" : "5px",
                          background: idx === currentImageIndex
                            ? "var(--violet)"
                            : "rgba(240,240,255,0.4)",
                        }}
                        aria-label={`${idx + 1}. resim`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        {/* İçerik alanı */}
        <div className="p-5 flex flex-col flex-grow relative">

          {/* Başlık + Linkler */}
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3
              className="font-display text-base font-semibold leading-snug"
              style={{ color: "var(--ink)" }}
            >
              {project.title}
            </h3>
            <div className="flex items-center gap-2.5 shrink-0 mt-0.5">
              {project.isPrivate && (
                <span
                  className="font-mono text-[10px] px-1.5 py-0.5 rounded flex items-center gap-1"
                  style={{
                    background: "rgba(251,191,36,0.08)",
                    color: "#fbbf24",
                    border: "1px solid rgba(251,191,36,0.2)",
                  }}
                >
                  <FaLock size={8} /> Private
                </span>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors duration-200"
                  style={{ color: "var(--ink-dim)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--ink)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--ink-dim)")}
                  title="GitHub"
                >
                  <FaGithub size={15} />
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors duration-200"
                  style={{ color: "var(--ink-dim)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--violet)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--ink-dim)")}
                  title="Canlı Demo"
                >
                  <FaExternalLinkAlt size={12} />
                </a>
              )}
            </div>
          </div>

          {/* Açıklama */}
          <p
            className="text-xs leading-relaxed mb-4 line-clamp-3"
            style={{ color: "var(--ink-secondary)" }}
          >
            {project.description}
          </p>

          {/* Tag'lar */}
          <div className="flex flex-wrap gap-1.5 mt-auto mb-3">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="font-mono text-[11px] px-2 py-0.5 rounded"
                style={{
                  background: "rgba(124,106,247,0.06)",
                  color: "var(--ink-dim)",
                  border: "1px solid var(--border)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Model katmanı toggle butonu */}
          {project.modelLayer && (
            <div
              className="pt-2.5 flex items-center justify-between"
              style={{ borderTop: "1px solid var(--border-subtle)" }}
            >
              <button
                onClick={() => setShowModel(true)}
                className="w-full flex items-center justify-between font-mono text-[11px] py-1.5 px-2.5 rounded-lg transition-all duration-200 cursor-pointer"
                style={{
                  background: "rgba(124,106,247,0.08)",
                  border: "1px solid rgba(124,106,247,0.22)",
                  color: "var(--violet)",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "rgba(124,106,247,0.18)";
                  e.currentTarget.style.borderColor = "rgba(124,106,247,0.4)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "rgba(124,106,247,0.08)";
                  e.currentTarget.style.borderColor = "rgba(124,106,247,0.22)";
                }}
              >
                <span className="flex items-center gap-1.5">
                  <FaTerminal size={10} />
                  <span>view_model_trace</span>
                </span>
                <span className="text-[10px]" style={{ color: "var(--ink-dim)" }}>
                  [open output] ›
                </span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ── ARKA YÜZ: Model / Sistem Çıktısı ── */}
      <AnimatePresence>
        {showModel && project.modelLayer && (
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex flex-col p-5 overflow-hidden z-30"
            style={{
              background: "rgba(9, 9, 15, 0.98)",
              backdropFilter: "blur(12px)",
            }}
          >
            {/* Terminal başlık + Kapat butonu */}
            <div
              className="flex items-center justify-between mb-3 pb-2.5"
              style={{ borderBottom: "1px solid var(--border)" }}
            >
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full" style={{ background: "#ff5f56" }} />
                  <span className="w-2 h-2 rounded-full" style={{ background: "#febc2e" }} />
                  <span className="w-2 h-2 rounded-full" style={{ background: "#28c840" }} />
                </div>
                <span
                  className="font-mono text-[11px] ml-1 truncate"
                  style={{ color: "var(--violet)" }}
                >
                  {project.modelLayer.pipeline}
                </span>
              </div>

              <button
                onClick={() => setShowModel(false)}
                className="p-1.5 rounded-md transition-colors cursor-pointer"
                style={{ color: "var(--ink-dim)", background: "rgba(255,255,255,0.05)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--ink)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--ink-dim)")}
                title="Kapat"
                aria-label="Kapat"
              >
                <FaTimes size={12} />
              </button>
            </div>

            {/* Scan line animasyonu */}
            <motion.div
              className="absolute left-0 right-0 h-px pointer-events-none"
              style={{ background: "linear-gradient(90deg, transparent, rgba(124,106,247,0.4), transparent)" }}
              animate={{ top: ["15%", "85%", "15%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />

            {/* Metrikler — makine tarafı JetBrains Mono */}
            <div className="flex flex-col gap-1.5 flex-grow overflow-hidden pt-1">
              {project.modelLayer.metrics.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="flex items-baseline gap-2 font-mono text-[11px]"
                >
                  <span style={{ color: "var(--ink-dim)", minWidth: "14px" }}>
                    {String(i).padStart(2, "0")}
                  </span>
                  <span style={{ color: "var(--violet)", opacity: 0.85 }}>{m.key}</span>
                  <span style={{ color: "var(--border)" }}>:</span>
                  <span
                    className="font-medium"
                    style={{
                      color:
                        m.key.includes("score") || m.key === "R²_score" || m.key === "ai_strength"
                          ? "#22d3ee"
                          : m.key === "best_model" || m.key === "sentiment"
                          ? "#a998ff"
                          : "var(--ink)",
                    }}
                  >
                    {m.value}
                  </span>
                  {m.unit && (
                    <span style={{ color: "var(--ink-dim)" }}>{m.unit}</span>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Alt: Stack tokens + Kapat linki */}
            <div
              className="mt-3 pt-2.5 flex items-center justify-between gap-2"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="font-mono text-[10px]" style={{ color: "var(--ink-dim)" }}>
                  stack:
                </span>
                {project.modelLayer.stack.map((s, i) => (
                  <span
                    key={i}
                    className="font-mono text-[10px] px-1.5 py-0.2 rounded"
                    style={{
                      background: "rgba(124,106,247,0.1)",
                      color: "var(--violet)",
                      border: "1px solid rgba(124,106,247,0.2)",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setShowModel(false)}
                className="font-mono text-[10px] underline cursor-pointer shrink-0"
                style={{ color: "var(--ink-dim)" }}
              >
                [close]
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Projects;
