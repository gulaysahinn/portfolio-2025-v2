import React from "react";
import { motion } from "framer-motion";
import { experience } from "../data/content";
import { FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

// Log entry ID eşlemeleri
const TRACE_META = {
  1: { traceId: "trace://exp_01", status: "active", dateTag: "2026-02 -> present" },
  2: { traceId: "trace://exp_02", status: "completed", dateTag: "2025-08 -> 2025-09" },
  3: { traceId: "trace://exp_03", status: "completed", dateTag: "2025-07 -> 2025-08" },
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-36 scroll-mt-[90px]" style={{ background: "var(--bg-surface)" }}>
      <div className="max-w-4xl mx-auto px-6">

        {/* ── Section Header — Terminal Tag Pattern ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex items-center gap-2 mb-3 font-mono text-xs" style={{ color: "var(--violet)" }}>
            <span style={{ opacity: 0.6 }}>// 02. experience</span>
            <span style={{ color: "var(--border)" }}>·</span>
            <span className="px-2 py-0.5 rounded" style={{ background: "rgba(124,106,247,0.08)", border: "1px solid rgba(124,106,247,0.2)" }}>
              $ git log --oneline experience/
            </span>
          </div>
          <h2
            className="font-display text-4xl md:text-5xl font-bold"
            style={{ color: "var(--ink)" }}
          >
            Çalışma &{" "}
            <span style={{ color: "var(--violet)" }}>Staj Günlüğü</span>
          </h2>
        </motion.div>

        {/* ── Log Entries ── */}
        <div className="flex flex-col gap-6">
          {experience.map((exp, index) => {
            const meta = TRACE_META[exp.id] || { traceId: `trace://exp_0${index + 1}`, status: "completed", dateTag: exp.date };
            const isActive = meta.status === "active";

            return (
              <motion.div
                key={exp.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-xl p-6 md:p-7 transition-all duration-200"
                style={{
                  background: "var(--bg-base)",
                  border: `1px solid ${isActive ? "rgba(124,106,247,0.4)" : "var(--border)"}`,
                  boxShadow: isActive ? "0 4px 24px -6px rgba(124,106,247,0.15)" : "none",
                }}
              >
                {/* Terminal Header Bar */}
                <div
                  className="flex flex-wrap items-center justify-between gap-3 pb-3.5 mb-4 font-mono text-xs"
                  style={{ borderBottom: "1px solid var(--border)" }}
                >
                  <div className="flex items-center gap-2">
                    <span style={{ color: "var(--violet)" }}>{meta.traceId}</span>
                    <span style={{ color: "var(--border)" }}>·</span>
                    <span style={{ color: "var(--ink-dim)" }}>{meta.dateTag}</span>
                  </div>

                  {/* Status Indicator */}
                  <div className="flex items-center gap-1.5">
                    <span
                      className="w-1.5 h-1.5 rounded-full inline-block"
                      style={{
                        background: isActive ? "#4ade80" : "var(--ink-dim)",
                        boxShadow: isActive ? "0 0 8px #4ade80" : "none",
                      }}
                    />
                    <span
                      className="font-mono text-xs"
                      style={{ color: isActive ? "#4ade80" : "var(--ink-dim)" }}
                    >
                      status: {meta.status}
                    </span>
                  </div>
                </div>

                {/* Rol ve Şirket */}
                <div className="mb-3">
                  <h3
                    className="font-display text-lg md:text-xl font-semibold mb-1"
                    style={{ color: "var(--ink)" }}
                  >
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-xs" style={{ color: "var(--ink-secondary)" }}>
                    <span className="font-medium" style={{ color: "var(--violet)" }}>
                      {exp.company}
                    </span>
                    <span style={{ color: "var(--border)" }}>·</span>
                    <span className="flex items-center gap-1" style={{ color: "var(--ink-dim)" }}>
                      <FaMapMarkerAlt size={11} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Açıklama */}
                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--ink-secondary)" }}>
                  {exp.description}
                </p>

                {/* Stack Satırı — Hero ve Proje formatıyla birebir aynı */}
                <div className="flex flex-wrap items-center gap-2 pt-3" style={{ borderTop: "1px solid var(--border-subtle)" }}>
                  <span className="font-mono text-xs" style={{ color: "var(--ink-dim)" }}>
                    stack:
                  </span>
                  {exp.technologies.map(tech => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-2.5 py-0.5 rounded"
                      style={{
                        background: "rgba(124,106,247,0.06)",
                        color: "var(--violet)",
                        border: "1px solid rgba(124,106,247,0.18)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Experience;
