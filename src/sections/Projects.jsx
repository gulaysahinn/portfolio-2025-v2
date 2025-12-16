import React from "react";
import { motion } from "framer-motion";
import { projects } from "../data/content";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen scroll-mt-[90px]">
      {" "}
      {/* bg-transparent yaptık çünkü body'deki grid dokusu görünsün */}
      <div className="container mx-auto px-6">
        {/* Başlık */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold font-mono text-center mb-16 text-white" // font-mono eklendi (Space Grotesk)
        >
          Öne Çıkan <span className="text-cyan-400">Projelerim</span>
        </motion.h2>

        {/* Proje Kartları Grid Yapısı */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-cyan-400/50 hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.15)] transition-all duration-300 shadow-xl overflow-hidden group flex flex-col backdrop-blur-sm"
            >
              {/* --- AKILLI RESİM ALANI --- */}
              <div className="h-48 overflow-hidden relative">
                {project.type === "mobile" ? (
                  // MOBİL GÖRÜNÜM
                  <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-950 flex items-center justify-center p-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-auto object-contain drop-shadow-2xl rounded transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  // WEB GÖRÜNÜMÜ
                  <div className="w-full h-full relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Karartma perdesi */}
                    <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/0 transition-colors duration-300"></div>
                  </div>
                )}
              </div>
              {/* ------------------------- */}

              {/* İçerik Alanı */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Başlık ve Linkler */}
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold font-mono text-slate-100 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-400 hover:text-white transition-colors"
                      title="GitHub Kodları"
                    >
                      <FaGithub size={20} />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-400 hover:text-white transition-colors"
                        title="Canlı Proje"
                      >
                        <FaExternalLinkAlt size={18} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Açıklama */}
                <p className="text-slate-400 text-sm mb-6 leading-relaxed line-clamp-3 font-sans">
                  {project.description}
                </p>

                {/* Etiketler */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs font-mono px-2 py-1 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
