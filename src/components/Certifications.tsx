"use client";
import { motion } from "framer-motion"; import { Award, BookOpen, FileText, Sparkles, Users, Music } from "lucide-react";

export function Certifications() {
  const certifications = [
    {
      title: "Effective Writing",
      issuer: "NPTEL",
      icon: BookOpen,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Soft Skills & Personality",
      issuer: "NPTEL",
      icon: Users,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Automatic Text Summarization",
      issuer: "TECHNOVA Research Paper",
      description: "Genetic Algorithms",
      icon: FileText,
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Google DevFest 2024",
      issuer: "Google Developer Groups",
      icon: Sparkles,
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Debate Competitions",
      issuer: "Cultural Activities",
      icon: Users,
      color: "from-rose-500 to-pink-500",
    },
    {
      title: "Cultural Dance",
      issuer: "Cultural Activities",
      icon: Music,
      color: "from-purple-500 to-blue-500",
    },
  ];

  return (
    <section id="certifications" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/5 to-black" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Certifications & Achievements
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Continuous learning and professional development milestones
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Ribbon Effect */}
                <div className={`absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-br ${cert.color} rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity`} />

                <div className="relative bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6 h-full group-hover:border-purple-500/40 transition-colors overflow-hidden">
                  {/* Corner Accent */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${cert.color} opacity-10 blur-2xl`} />

                  {/* Icon Badge */}
                  <motion.div
                    className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${cert.color} p-0.5 mb-4`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="w-full h-full bg-black/40 rounded-xl flex items-center justify-center">
                      <cert.icon className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>

                  <div className="relative">
                    <h3 className="text-xl text-white mb-2">{cert.title}</h3>
                    <p className="text-purple-300 mb-2">{cert.issuer}</p>
                    {cert.description && (
                      <p className="text-gray-400 text-sm">{cert.description}</p>
                    )}

                    {/* Award Icon */}
                    <motion.div
                      className="absolute bottom-0 right-0 opacity-10 group-hover:opacity-20 transition-opacity"
                      animate={{
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Award className="w-16 h-16 text-purple-500" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="relative mt-16 max-w-3xl mx-auto">
          <motion.div
            className="flex items-center justify-center gap-4 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="px-6 py-3 bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-xl border border-purple-500/20 rounded-full">
              <span className="text-purple-300">Lifelong Learner</span>
            </div>
            <div className="px-6 py-3 bg-gradient-to-r from-blue-900/40 to-cyan-900/40 backdrop-blur-xl border border-blue-500/20 rounded-full">
              <span className="text-blue-300">Problem Solver</span>
            </div>
            <div className="px-6 py-3 bg-gradient-to-r from-pink-900/40 to-rose-900/40 backdrop-blur-xl border border-pink-500/20 rounded-full">
              <span className="text-pink-300">Team Player</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
