import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCode, FaRocket } from "react-icons/fa";

const About = () => {
  const cards = [
    {
      icon: <FaGraduationCap />,
      title: "Akademik Yolculuğum",
      desc: (
        <div className="flex flex-col gap-4 mt-2">
          {/* 1. Okul */}
          <div className="pl-3 border-l-2 border-cyan-500">
            <h4 className="font-bold text-white text-base">
              Bilgisayar Mühendisliği
            </h4>
            <p className="text-cyan-400 text-xs font-mono">
              Balıkesir Üniversitesi
            </p>
            <p className="text-slate-500 text-xs">4. Sınıf • Devam Ediyor</p>
          </div>
          {/* 2. Okul */}
          <div className="pl-3 border-l-2 border-slate-700">
            <h4 className="font-bold text-slate-300 text-base">
              Bilgisayar Programcılığı
            </h4>
            <p className="text-slate-400 text-xs font-mono">
              Kocaeli Üniversitesi
            </p>
            <p className="text-slate-500 text-xs">2021 Mezun</p>
          </div>
        </div>
      ),
      color: "text-blue-400",
      bg: "bg-blue-500/5",
      border: "border-blue-500/20",
    },
    {
      icon: <FaCode />,
      title: "Kodlama Tutkum",
      desc: "Sadece kod yazmıyor, problem çözüyorum. Python ve Yapay Zeka (AI) dünyasında derinleşirken, modern web teknolojileriyle kullanıcı dostu arayüzler tasarlıyorum.",
      color: "text-purple-400",
      bg: "bg-purple-500/5",
      border: "border-purple-500/20",
    },
    {
      icon: <FaRocket />,
      title: "Gelecek Hedefim",
      desc: "Teorik mühendislik bilgisini pratik saha tecrübesiyle harmanlayarak, insan hayatına dokunan ölçeklenebilir yapay zeka çözümleri üretmek.",
      color: "text-pink-400",
      bg: "bg-pink-500/5",
      border: "border-pink-500/20",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-transparent relative">
      {/* ANA KAPSAYICI (CONTAINER) */}
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        {/* İKİ SÜTUNLU YAPI (GRID) 
            Mobilde tek sütun, Laptopta (lg) iki sütun.
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* --- SOL TARAFI (METİN & KİŞİSEL BİLGİ) --- */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-mono text-white mb-8 leading-tight">
              Kodlamaya Olan <br />{" "}
              <span className="text-cyan-400">Yolculuğum</span>
            </h2>

            <div className="space-y-6 text-slate-400 text-lg leading-relaxed font-sans">
              <p>
                Merhaba! Ben{" "}
                <span className="text-cyan-400 font-bold">Gülay</span>. Yazılım
                dünyasındaki serüvenim, temelleri sağlam atmakla başladı.
              </p>
              <p>
                <strong className="text-white">Kocaeli Üniversitesi</strong>'nde
                başladığım kodlama maceramı, şuan{" "}
                <strong className="text-white">Balıkesir Üniversitesi</strong>{" "}
                Bilgisayar Mühendisliği son sınıf öğrencisi olarak ileri
                seviyeye taşıyorum.
              </p>
              <p className="border-l-4 border-cyan-500 pl-4 italic text-slate-500 bg-slate-900/30 py-2 rounded-r-lg">
                "Benim için yazılım, siyah bir ekrana renkli kodlar yazmaktan
                fazlası; gerçek dünya problemlerine akılcı çözümler üretme
                sanatıdır."
              </p>
            </div>

            {/* İstatistikler */}
            <div className="mt-10 flex gap-12 pt-8 border-t border-slate-800">
              <div>
                <h4 className="text-4xl font-bold text-cyan-400 font-mono">
                  4+
                </h4>
                <p className="text-sm text-slate-500 mt-1">Yıl Eğitim</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-purple-400 font-mono">
                  10+
                </h4>
                <p className="text-sm text-slate-500 mt-1">Tamamlanan Proje</p>
              </div>
            </div>
          </motion.div>

          {/* --- SAĞ TARAF (KARTLAR) --- */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid gap-6"
          >
            {cards.map((card, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className={`p-8 rounded-2xl border ${card.border} ${card.bg} backdrop-blur-sm hover:shadow-lg transition-all group`}
              >
                <div className="flex items-start gap-5">
                  <div
                    className={`p-3 rounded-lg bg-slate-900 ${card.color} text-2xl shrink-0`}
                  >
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {card.title}
                    </h3>
                    <div className="text-slate-400 text-sm leading-relaxed">
                      {card.desc}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
