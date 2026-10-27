import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { personalInfo } from "../data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const inputStyle = {
  background: "var(--bg-base)",
  border: "1px solid var(--border)",
  borderRadius: "10px",
  padding: "14px 16px",
  color: "var(--ink)",
  fontSize: "14px",
  width: "100%",
  outline: "none",
  transition: "border-color 0.2s",
  fontFamily: "DM Sans, sans-serif",
};

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [focused, setFocused] = useState(null);

  const sendEmail = e => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setStatus("success");
          e.target.reset();
          setTimeout(() => setStatus(null), 5000);
        },
        () => {
          setLoading(false);
          setStatus("error");
          setTimeout(() => setStatus(null), 5000);
        }
      );
  };

  return (
    <section id="contact" className="py-24 md:py-36 scroll-mt-[90px] relative">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">

        {/* ── Section Header — Terminal Tag Pattern ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex items-center gap-2 mb-3 font-mono text-xs" style={{ color: "var(--violet)" }}>
            <span style={{ opacity: 0.6 }}>// 05. contact</span>
            <span style={{ color: "var(--border)" }}>·</span>
            <span className="px-2 py-0.5 rounded" style={{ background: "rgba(124,106,247,0.08)", border: "1px solid rgba(124,106,247,0.2)" }}>
              $ ping -c 1 contact.io
            </span>
          </div>
          <h2
            className="font-display text-4xl md:text-5xl font-bold"
            style={{ color: "var(--ink)" }}
          >
            İletişim &{" "}
            <span style={{ color: "var(--violet)" }}>Bağlantı</span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">

          {/* Sol: İletişim bilgileri */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="lg:w-2/5 flex flex-col gap-5"
          >
            {/* Email kartı */}
            <div
              className="p-6 rounded-xl"
              style={{
                background: "var(--bg-surface)",
                border: "1px solid var(--border)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="p-2.5 rounded-lg"
                  style={{ background: "rgba(124,106,247,0.1)", color: "var(--violet)" }}
                >
                  <FaEnvelope size={18} />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider mb-1" style={{ color: "var(--ink-dim)" }}>
                    E-posta
                  </p>
                  <a
                    href={personalInfo.email}
                    className="text-sm font-medium transition-colors duration-200"
                    style={{ color: "var(--ink-secondary)" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--violet)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--ink-secondary)")}
                  >
                    {personalInfo.email.replace("mailto:", "")}
                  </a>
                </div>
              </div>
            </div>

            {/* Konum kartı */}
            <div
              className="p-6 rounded-xl"
              style={{
                background: "var(--bg-surface)",
                border: "1px solid var(--border)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="p-2.5 rounded-lg"
                  style={{ background: "rgba(169,152,255,0.1)", color: "#a998ff" }}
                >
                  <FaMapMarkerAlt size={18} />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider mb-1" style={{ color: "var(--ink-dim)" }}>
                    Konum
                  </p>
                  <p className="text-sm font-medium" style={{ color: "var(--ink-secondary)" }}>
                    İstanbul, Türkiye
                  </p>
                </div>
              </div>
            </div>

            {/* Sosyal linkler */}
            <div
              className="p-6 rounded-xl"
              style={{
                background: "var(--bg-surface)",
                border: "1px solid var(--border)",
              }}
            >
              <p className="font-mono text-xs uppercase tracking-wider mb-4" style={{ color: "var(--ink-dim)" }}>
                Sosyal
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-sm transition-colors duration-200"
                  style={{ color: "var(--ink-secondary)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--ink)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--ink-secondary)")}
                >
                  <FaGithub size={16} />
                  github.com/gulaysahinn
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-sm transition-colors duration-200"
                  style={{ color: "var(--ink-secondary)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--violet)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--ink-secondary)")}
                >
                  <FaLinkedin size={16} />
                  linkedin.com/in/gulaysahinn
                </a>
              </div>
            </div>

            {/* Cevap süresi */}
            <p className="text-xs font-mono" style={{ color: "var(--ink-dim)" }}>
              Genellikle{" "}
              <span style={{ color: "var(--violet)" }}>24 saat</span>{" "}
              içinde geri dönerim.
            </p>
          </motion.div>

          {/* Sağ: Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:w-3/5 flex flex-col gap-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label
                  className="font-mono text-xs uppercase tracking-wider"
                  style={{ color: "var(--ink-dim)" }}
                >
                  İsim Soyisim
                </label>
                <input
                  type="text"
                  name="from_name"
                  required
                  placeholder="Adınız Soyadınız"
                  style={{
                    ...inputStyle,
                    borderColor: focused === "name" ? "var(--violet)" : "var(--border)",
                    boxShadow: focused === "name" ? "0 0 0 3px rgba(124,106,247,0.12)" : "none",
                  }}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  id="contact-name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  className="font-mono text-xs uppercase tracking-wider"
                  style={{ color: "var(--ink-dim)" }}
                >
                  E-posta
                </label>
                <input
                  type="email"
                  name="from_email"
                  required
                  placeholder="ornek@email.com"
                  style={{
                    ...inputStyle,
                    borderColor: focused === "email" ? "var(--violet)" : "var(--border)",
                    boxShadow: focused === "email" ? "0 0 0 3px rgba(124,106,247,0.12)" : "none",
                  }}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  id="contact-email"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 flex-grow">
              <label
                className="font-mono text-xs uppercase tracking-wider"
                style={{ color: "var(--ink-dim)" }}
              >
                Mesaj
              </label>
              <textarea
                name="message"
                required
                rows="7"
                placeholder="Projenizden bahsedin veya sadece merhaba deyin..."
                style={{
                  ...inputStyle,
                  resize: "none",
                  borderColor: focused === "msg" ? "var(--violet)" : "var(--border)",
                  boxShadow: focused === "msg" ? "0 0 0 3px rgba(124,106,247,0.12)" : "none",
                }}
                onFocus={() => setFocused("msg")}
                onBlur={() => setFocused(null)}
                id="contact-message"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="flex items-center justify-center gap-2 font-medium py-4 rounded-xl transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
              style={{
                background: "var(--violet)",
                color: "#fff",
                boxShadow: "0 4px 24px -8px rgba(124,106,247,0.5)",
              }}
              id="contact-submit"
            >
              {loading ? (
                <span className="animate-pulse">Gönderiliyor...</span>
              ) : (
                <>
                  <FaPaperPlane size={14} />
                  Mesajı Gönder
                </>
              )}
            </button>

            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 p-4 rounded-xl text-sm"
                style={{
                  background: "rgba(34,197,94,0.08)",
                  border: "1px solid rgba(34,197,94,0.2)",
                  color: "#4ade80",
                }}
              >
                <FaCheckCircle />
                Mesajınız başarıyla gönderildi!
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 p-4 rounded-xl text-sm"
                style={{
                  background: "rgba(239,68,68,0.08)",
                  border: "1px solid rgba(239,68,68,0.2)",
                  color: "#f87171",
                }}
              >
                <FaExclamationCircle />
                Bir hata oluştu. Lütfen tekrar deneyin.
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
