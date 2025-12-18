import React from "react";
import { motion } from "framer-motion";
import { skills } from "../data/content";

// 1. GEREKLİ İKONLAR (FaBrain EKLENDİ)
import {
  FaPython,
  FaReact,
  FaJs,
  FaDatabase,
  FaCode,
  FaBrain, // <-- YENİ: Machine Learning için Beyin ikonu
} from "react-icons/fa";

// Mevcut Si ikonları (Çalışanlar)
import {
  SiTypescript,
  SiTailwindcss,
  SiFlutter,
  SiMongodb,
  SiFirebase,
  SiTensorflow,
  SiGithub,
} from "react-icons/si";

const TechStack = () => {
  // İkon Eşleştirme Haritası
  const skillMap = {
    // 1. DİLLER
    Python: { icon: <FaPython />, color: "text-yellow-400" },
    JavaScript: { icon: <FaJs />, color: "text-yellow-300" },
    "C#": { icon: <FaCode />, color: "text-purple-500" },

    // 2. FRONTEND & MOBILE
    "React.js": { icon: <FaReact />, color: "text-cyan-400" },
    TypeScript: { icon: <SiTypescript />, color: "text-blue-500" },
    "Tailwind CSS": { icon: <SiTailwindcss />, color: "text-cyan-500" },
    "Next.js": { icon: <FaCode />, color: "text-white" },
    Flutter: { icon: <SiFlutter />, color: "text-blue-400" },

    // 3. BACKEND & AI (GÜNCELLENDİ)
    "Node.js": { icon: <FaJs />, color: "text-green-500" },

    // DEĞİŞİKLİK BURADA:
    "Machine Learning": { icon: <FaBrain />, color: "text-pink-500" }, // <-- ARTIK BEYİN İKONU VE PEMBE
    TensorFlow: { icon: <SiTensorflow />, color: "text-orange-400" }, // <-- TENSORFLOW TURUNCU VE KENDİ LOGOSU

    // 4. DATABASE & TOOLS
    Oracle: { icon: <FaDatabase />, color: "text-red-600" },
    MsSQL: { icon: <FaDatabase />, color: "text-red-500" },
    MongoDB: { icon: <SiMongodb />, color: "text-green-500" },
    Firebase: { icon: <SiFirebase />, color: "text-yellow-500" },
    "Git & GitHub": { icon: <SiGithub />, color: "text-white" },
  };

  return (
    <section id="techstack" className="py-20 scroll-mt-[90px]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Başlık Alanı */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Teknoloji <span className="text-cyan-400">Yeteneklerim</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Projelerimde aktif olarak kullandığım diller, kütüphaneler ve
            araçlar.
          </p>
        </motion.div>

        {/* Grid Alanı */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => {
            // Eğer haritada yoksa varsayılan ikon ata
            const currentSkill = skillMap[skill.name] || {
              icon: <FaCode />,
              color: "text-gray-400",
            };

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 rounded-xl flex flex-col items-center justify-center gap-4 hover:border-cyan-400/30 hover:shadow-[0_0_20px_-5px_rgba(6,182,212,0.3)] transition-all group"
              >
                <div
                  className={`text-4xl md:text-5xl ${currentSkill.color} drop-shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {currentSkill.icon}
                </div>

                <h3 className="text-slate-300 font-medium text-sm group-hover:text-white transition-colors text-center">
                  {skill.name}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
