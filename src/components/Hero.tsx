"use client";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  Sparkles,
  Code2,
  Rocket,
} from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  const badges = [
    "Full Stack Developer",
    "React Developer",
    "Frontend Developer",
    "Software Engineer",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />

      {/* Animated Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Floating Tech Icons */}
          <motion.div
            className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl backdrop-blur-sm border border-blue-500/20 flex items-center justify-center"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Code2 className="w-8 h-8 text-blue-400" />
          </motion.div>

          <motion.div
            className="absolute top-40 right-20 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl backdrop-blur-sm border border-purple-500/20 flex items-center justify-center"
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            <Rocket className="w-10 h-10 text-purple-400" />
          </motion.div>

          <motion.div
            className="absolute bottom-40 left-20 w-14 h-14 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-2xl backdrop-blur-sm border border-pink-500/20 flex items-center justify-center"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <Sparkles className="w-7 h-7 text-pink-400" />
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-6"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(168,85,247,0.3)",
                  "0 0 40px rgba(168,85,247,0.5)",
                  "0 0 20px rgba(168,85,247,0.3)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="px-6 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full border border-purple-500/20 backdrop-blur-sm">
                <span className="text-purple-300 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Welcome to my digital space
                </span>
              </div>
            </motion.div>

            <h1 className="mb-6">
              <motion.span
                className="block text-6xl md:text-8xl bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Sneha Jhawar
              </motion.span>
            </h1>

            <motion.div
              className="flex flex-wrap justify-center gap-3 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {badges.map((badge, index) => (
                <motion.span
                  key={badge}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-blue-200 backdrop-blur-sm"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    borderColor: "rgba(139,92,246,0.5)",
                  }}
                >
                  {badge}
                </motion.span>
              ))}
            </motion.div>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Building immersive digital experiences with clean logic and
              playful design.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-0 shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] transition-all"
              >
                <Rocket className="w-4 h-4 mr-2" />
                View Projects
              </Button>
              <a
                href="/Sneha_Jhawar_Resume.pdf"
                download
                className="inline-flex items-center px-6 py-3 text-sm font-medium rounded-full border border-purple-500/30 bg-purple-500/5 hover:bg-purple-500/10 backdrop-blur-sm transition-all"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex justify-center gap-4 mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.a
                href="https://github.com/Sneha110927"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 flex items-center justify-center hover:border-purple-500/50 backdrop-blur-sm transition-all"
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <Github className="w-5 h-5 text-purple-300" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/sneha1127"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 flex items-center justify-center hover:border-blue-500/50 backdrop-blur-sm transition-all"
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <Linkedin className="w-5 h-5 text-blue-300" />
              </motion.a>
              <motion.a
                href="mailto:jhawarsneha11@gmail.com"
                className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500/10 to-rose-500/10 border border-pink-500/20 flex items-center justify-center hover:border-pink-500/50 backdrop-blur-sm transition-all"
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <Mail className="w-5 h-5 text-pink-300" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
