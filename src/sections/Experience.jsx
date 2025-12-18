// components/Experience.jsx
import React from "react";
import { experience } from "../data/content";
import { FaCalendarAlt, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Başlık */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            <span className="text-cyan-400">#</span>Deneyimlerim
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Yazılım ve teknoloji alanında edindiğim profesyonel deneyimler
          </p>
        </div>

        {/* Deneyim Kartları */}
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div
              key={exp.id}
              className="relative group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Timeline Çizgisi - Sadece ara bağlantılar için */}
              {index < experience.length - 1 && (
                <div className="absolute left-6 top-full h-8 w-0.5 bg-gradient-to-b from-cyan-500 to-purple-500 hidden md:block"></div>
              )}

              {/* Ana Kart */}
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10">
                {/* Kart Üst Kısmı */}
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
                  <div className="flex-1">
                    {/* Rol ve Şirket */}
                    <div className="flex items-start gap-4">
                      {/* İkon */}
                      <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
                        <FaBriefcase size={20} />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {exp.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 text-gray-300">
                          <span className="flex items-center gap-2 font-medium text-cyan-400">
                            <FaMapMarkerAlt size={14} />
                            {exp.company}
                          </span>
                          <span className="text-gray-500 hidden md:inline">
                            •
                          </span>
                          <span className="flex items-center gap-2 text-gray-400">
                            <FaCalendarAlt size={14} />
                            {exp.date}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Etiket */}
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
                    <span className="text-cyan-300 font-medium text-sm">
                      {index === 0 ? "Son Deneyim" : "Staj"}
                    </span>
                  </div>
                </div>

                {/* Açıklama */}
                <div className="mb-6">
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {exp.description}
                  </p>
                </div>

                {/* Teknolojiler */}
                <div className="pt-6 border-t border-slate-700">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                    Kullanılan Teknolojiler
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies?.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-slate-800/70 text-cyan-300 rounded-lg text-sm font-medium hover:bg-slate-700/70 transition-colors"
                      >
                        {tech}
                      </span>
                    )) || (
                      <span className="px-3 py-1.5 bg-slate-800/70 text-gray-400 rounded-lg text-sm">
                        Full-stack Development
                      </span>
                    )}
                  </div>
                </div>

                {/* Alt Bilgi */}
                <div className="mt-6 flex items-center justify-between text-sm text-gray-500">
                  <span>
                    📍{" "}
                    {exp.company.includes("Belediyesi")
                      ? "Tuzla, İstanbul"
                      : "İstanbul"}
                  </span>
                  <span>
                    ⏱️ {exp.date.includes("Ağustos") ? "2 Ay" : "2 Ay"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
