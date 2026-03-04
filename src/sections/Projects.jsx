import React, { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/content";
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// NOT: Tilt kütüphanesini kaldırdık, artık saf CSS/React kullanıyoruz.

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen scroll-mt-[90px] py-20">
      <div className="container mx-auto px-6">
        {/* Başlık */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold font-mono text-center mb-16 text-white"
        >
          Öne Çıkan <span className="text-cyan-400">Projelerim</span>
        </motion.h2>

        {/* Proje Kartları Grid Yapısı */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const hasMultipleImages = project.images && project.images.length > 1;
  const displayImage = project.images ? project.images[currentImageIndex] : project.image;

  const nextImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (hasMultipleImages) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }
  };

  const prevImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (hasMultipleImages) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? project.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-cyan-400/50 hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.15)] hover:-translate-y-2 transition-all duration-300 shadow-xl overflow-hidden group flex flex-col backdrop-blur-sm h-full">
        {/* Resim Alanı */}
        <div className="h-48 overflow-hidden relative shrink-0 bg-gradient-to-br from-slate-800 to-slate-950">
          {project.type === "mobile" && !hasMultipleImages ? (
            // MOBİL GÖRÜNÜM (Tek resim)
            <div className="w-full h-full flex items-center justify-center p-4">
              <img
                src={displayImage}
                alt={project.title}
                loading="lazy"
                className="h-full w-auto object-contain drop-shadow-2xl rounded transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ) : (
            // WEB GÖRÜNÜMÜ veya Çoklu Resim
            <div className="w-full h-full relative">
              <img
                src={displayImage}
                alt={`${project.title} - ${currentImageIndex + 1}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/0 transition-colors duration-300"></div>
              
              {/* Çoklu Resim Kontrolü */}
              {hasMultipleImages && (
                <>
                  {/* Sol/Sağ Ok Butonları */}
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-slate-800 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
                    aria-label="Önceki resim"
                  >
                    <FaChevronLeft size={16} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-slate-800 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
                    aria-label="Sonraki resim"
                  >
                    <FaChevronRight size={16} />
                  </button>
                  
                  {/* Resim Göstergeleri (Dots) */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                    {project.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setCurrentImageIndex(idx);
                        }}
                        className={`w-2 h-2 rounded-full transition-all ${
                          idx === currentImageIndex
                            ? "bg-cyan-400 w-4"
                            : "bg-slate-400/50 hover:bg-slate-300"
                        }`}
                        aria-label={`${idx + 1}. resim`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        {/* İçerik Alanı */}
        <div className="p-6 flex flex-col flex-grow">
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

          <p className="text-slate-400 text-sm mb-6 leading-relaxed line-clamp-3 font-sans flex-grow">
            {project.description}
          </p>

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
      </div>
    </motion.div>
  );
};

export default Projects;
