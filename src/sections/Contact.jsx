import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { personalInfo } from "../data/content";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceID = import.meta.env.VITE_SERVICE_ID;
    const templateID = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
        setLoading(false);
        setStatus("success");
        e.target.reset();
        setTimeout(() => setStatus(null), 5000);
      },
      (error) => {
        console.log(error.text);
        setLoading(false);
        setStatus("error");
        setTimeout(() => setStatus(null), 5000);
      }
    );
  };

  return (
    <section id="contact" className="min-h-screen scroll-mt-[90px]">
      {/* Arka plan süslemesi */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-cyan-900/10 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Başlık Alanı */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            İletişime <span className="text-cyan-400">Geç</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Benim ile iletişime geçmekten çekinmeyin! Sadece formu doldurun ve
            en kısa sürede size geri döneceğim.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-5/12 bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-500/10 rounded-bl-full"></div>

            <h3 className="text-xl font-bold text-white mb-8">
              İletişim Bilgileri
            </h3>

            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-800 rounded-lg text-cyan-400 shrink-0">
                  <FaEnvelope size={20} />
                </div>
                <div className="overflow-hidden">
                  {" "}
                  {/* Taşmayı engellemek için */}
                  <p className="text-sm text-slate-500 mb-1 font-medium">
                    E-posta
                  </p>
                  {/* DÜZELTME: 'break-all' kaldırıldı, font biraz büyütüldü */}
                  <a
                    href={personalInfo.email}
                    className="text-slate-200 hover:text-cyan-400 transition-colors text-base md:text-lg font-medium whitespace-nowrap"
                  >
                    {personalInfo.email.replace("mailto:", "")}
                  </a>
                </div>
              </div>

              {/* Konum */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-800 rounded-lg text-purple-400 shrink-0">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1 font-medium">
                    Konum
                  </p>
                  <p className="text-slate-200 text-base">İstanbul, Türkiye</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-800">
              <p className="text-slate-500 text-sm">
                Geri dönüş süresi: Genellikle{" "}
                <span className="text-cyan-400">24 saat</span> içinde.
              </p>
            </div>
          </motion.div>

          {/* SAĞ TARAF (Form):
             Eskiden: lg:w-2/3 (%66)
             Şimdi:   lg:w-7/12 (%58) - Sol taraf genişlediği için burayı orantılı küçülttük.
          */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-7/12 bg-slate-900 p-8 md:p-10 rounded-2xl border border-slate-800 shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex flex-col gap-2">
                <label className="text-slate-400 text-sm font-medium ml-1">
                  İsim Soyisim
                </label>
                <input
                  type="text"
                  name="from_name"
                  required
                  className="bg-slate-950 border border-slate-700 rounded-xl p-4 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  placeholder="Adınız Soyadınız"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-slate-400 text-sm font-medium ml-1">
                  E-posta Adresi
                </label>
                <input
                  type="email"
                  name="from_email"
                  required
                  className="bg-slate-950 border border-slate-700 rounded-xl p-4 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  placeholder="ornek@email.com"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 mb-8">
              <label className="text-slate-400 text-sm font-medium ml-1">
                Mesajınız
              </label>
              <textarea
                name="message"
                required
                rows="5"
                className="bg-slate-950 border border-slate-700 rounded-xl p-4 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                placeholder="Projenizden bahsedin veya sadece merhaba deyin..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 rounded-xl hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="animate-pulse">Gönderiliyor...</span>
              ) : (
                <>
                  <FaPaperPlane /> Mesajı Gönder
                </>
              )}
            </button>

            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 flex items-center gap-3"
              >
                <FaCheckCircle className="text-xl" />
                <span>Mesajınız başarıyla gönderildi!</span>
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 flex items-center gap-3"
              >
                <FaExclamationCircle className="text-xl" />
                <span>Bir hata oluştu.</span>
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
