"use client";
import { motion } from "framer-motion";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { GraduationCap, Briefcase, Award } from "lucide-react";

export function About() {
  const timeline = [
    {
      icon: Briefcase,
      title: "Assistant System Engineer L1",
      company: "Capsitech IT Services",
      period: "Jun 2025 – Present",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Briefcase,
      title: "Full Stack Intern",
      company: "Capsitech IT Services",
      period: "Jan 2025 – Jun 2025",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: GraduationCap,
      title: "B.Tech CSE",
      company: "GPA 8.35",
      period: "2021 – 2025",
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/5 to-black" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A journey of passion, perseverance, and continuous learning
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />

              <div className="relative bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-8 overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-pink-500/20 to-transparent rounded-full blur-3xl" />

                <div className="relative">
                  <motion.div
                    className="w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden border-4 border-purple-500/30"
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ImageWithFallback
                      src="./images/SJ.png"
                      alt="Sneha Jhawar"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  <div className="text-center mb-6">
                    <h3 className="text-2xl text-white mb-2">Sneha Jhawar</h3>
                    <p className="text-purple-300">Full Stack Developer</p>
                  </div>

                  <div className="space-y-4 text-gray-300">
                    <p>
                      Passionate about crafting beautiful, functional web experiences that make a difference.
                      I believe in writing clean code and creating intuitive interfaces.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-4">
                      <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300">
                        Problem Solver
                      </span>
                      <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300">
                        Team Player
                      </span>
                      <span className="px-3 py-1 bg-pink-500/20 border border-pink-500/30 rounded-full text-pink-300">
                        Quick Learner
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="relative group">
                  {/* Connection Line */}
                  {index < timeline.length - 1 && (
                    <div className="absolute left-10 top-20 w-0.5 h-16 bg-gradient-to-b from-purple-500/50 to-transparent" />
                  )}

                  <div className="flex gap-4">
                    {/* Icon */}
                    <motion.div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} p-0.5 flex-shrink-0`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-full h-full bg-black/40 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1 bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/10 rounded-2xl p-6 group-hover:border-purple-500/30 transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-white">{item.title}</h4>
                        <span className="text-purple-400 text-sm">{item.period}</span>
                      </div>
                      <p className="text-gray-400">{item.company}</p>
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
}
