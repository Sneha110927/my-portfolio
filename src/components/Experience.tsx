"use client";
import { motion } from "framer-motion";
import { Briefcase, Code2, Database, FileText, Globe, Mail } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      company: "Capsitech IT Services",
      role: "Assistant System Engineer L1",
      period: "Jun 2025 – Present",
      description: "Working on Acting Office platform with focus on email functionality and AI integration",
      highlights: [
        { icon: Mail, text: "Built Email Module features" },
        { icon: FileText, text: "Summary modal & AI email translation" },
        { icon: Code2, text: "React + TypeScript + .NET API" },
        { icon: Globe, text: "Real-time sync improvements" },
      ],
      color: "from-purple-500 to-pink-500",
      tags: ["React", "TypeScript", ".NET", "AI Integration"],
    },
    {
      company: "Capsitech IT Services",
      role: "Full Stack Intern",
      period: "Jan 2025 – Jun 2025",
      description: "Developed full-stack web applications with modern technologies",
      highlights: [
        { icon: Code2, text: "React + Express.js + MongoDB" },
        { icon: Database, text: "Built REST APIs, Auth, CRUD" },
        { icon: Globe, text: "Tailwind, Bootstrap UI" },
        { icon: Briefcase, text: "Git + GitHub collaboration" },
      ],
      color: "from-blue-500 to-cyan-500",
      tags: ["React", "Express.js", "MongoDB", "REST API"],
    },
  ];

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Experience
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Building impactful solutions and growing through real-world challenges
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              {/* Glow Effect */}
              <motion.div
                className={`absolute -inset-1 bg-gradient-to-r ${exp.color} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity`}
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <div className="relative bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-8 overflow-hidden">
                {/* Decorative Corner */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${exp.color} opacity-20 blur-3xl`} />

                <div className="relative">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <motion.div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.color} p-0.5`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <div className="w-full h-full bg-black/40 rounded-xl flex items-center justify-center">
                            <Briefcase className="w-6 h-6 text-white" />
                          </div>
                        </motion.div>
                        <div>
                          <h3 className="text-2xl text-white">{exp.role}</h3>
                          <p className="text-purple-300">{exp.company}</p>
                        </div>
                      </div>
                    </div>
                    <span className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-gray-300 mb-6">{exp.description}</p>

                  {/* Highlights Grid */}
                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    {exp.highlights.map((highlight, hIndex) => (
                      <motion.div
                        key={hIndex}
                        className="flex items-center gap-3 p-3 bg-black/20 rounded-xl border border-purple-500/10 group-hover:border-purple-500/20 transition-colors"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 + hIndex * 0.1 }}
                      >
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0">
                          <highlight.icon className="w-4 h-4 text-purple-300" />
                        </div>
                        <span className="text-gray-300 text-sm">{highlight.text}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        className="px-3 py-1 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-full text-purple-200 text-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.4 + tagIndex * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
