import React from "react";
import { motion } from "framer-motion";
import { skills } from "../data/content";
// FaBrain ikonunu ekledik
import {
  FaPython,
  FaReact,
  FaJs,
  FaGithub,
  FaCode,
  FaDatabase,
  FaBrain,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTensorflow,
  SiFlutter,
  SiMongodb,
} from "react-icons/si";

// İkon eşleştirmesi
const iconMap = {
  Python: <FaPython className="text-yellow-400" />,
  "Machine Learning": <FaBrain className="text-pink-500" />, // <-- YENİ (Pembe Beyin İkonu)
  TensorFlow: <SiTensorflow className="text-orange-500" />,
  "React.js": <FaReact className="text-cyan-400" />,
  Flutter: <SiFlutter className="text-blue-400" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-500" />,
  JavaScript: <FaJs className="text-yellow-300" />,
  MsSQL: <FaDatabase className="text-red-500" />,
  MongoDB: <SiMongodb className="text-green-500" />,
  "Git & GitHub": <FaGithub className="text-white" />,
};

const TechStack = () => {
  return (
    <section id="techstack" className="min-h-screen scroll-mt-[90px]">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold font-mono text-center mb-16 text-white"
        >
          Teknolojiler & <span className="text-cyan-400">Yetenekler</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, borderColor: "rgba(34, 211, 238, 0.5)" }}
              className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 flex flex-col items-center justify-center gap-4 hover:shadow-[0_0_20px_-5px_rgba(34,211,238,0.2)] transition-all backdrop-blur-sm group"
            >
              <div className="text-5xl group-hover:scale-110 transition-transform duration-300 filter drop-shadow-lg">
                {iconMap[skill.name] || <FaCode className="text-gray-400" />}
              </div>
              <h3 className="text-slate-300 font-mono font-medium text-sm text-center">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
