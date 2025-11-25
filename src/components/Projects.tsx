"use client";
import { motion } from "framer-motion";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, Github, Heart, Stethoscope, Rocket, Globe } from "lucide-react";
import { Button } from "./ui/button";

export function Projects() {
  const projects = [
    {
      title: "Medvista",
      subtitle: "Healthcare Web Platform",
      description: "A comprehensive healthcare platform featuring e-commerce functionality and doctor booking system with role-based authentication and secure REST APIs.",
      image: "https://images.unsplash.com/photo-1758691462848-ba1e929da259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbWVkaWNhbCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYzNTY0MTcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["React", "Node.js", "Express.js", "MongoDB"],
      color: "from-blue-500 to-cyan-500",
      icon: Stethoscope,
    },
    {
      title: "Planetary Weight Calculator",
      subtitle: "Interactive Space Experience",
      description: "A playful web application that calculates your weight on different planets with an immersive space-themed UI and smooth animations.",
      image: "https://images.unsplash.com/photo-1603098108219-1c253b72a9f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMHBsYW5ldHMlMjBzdGFyc3xlbnwxfHx8fDE3NjM2NDQ4NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["HTML", "CSS", "JavaScript"],
      color: "from-purple-500 to-pink-500",
      icon: Rocket,
    },
  ];

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Crafting solutions that blend functionality with delightful user experiences
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              {/* 3D Tilt Effect Container */}
              <motion.div
                className="relative"
                whileHover={{
                  rotateY: 5,
                  rotateX: -5,
                  z: 50,
                }}
                transition={{ duration: 0.3 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${project.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />

                <div className="relative bg-gradient-to-br from-purple-900/40 to-blue-900/40 backdrop-blur-xl border border-purple-500/20 rounded-3xl overflow-hidden group-hover:border-purple-500/40 transition-colors">
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <motion.div
                      className="w-full h-full"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    </motion.div>

                    {/* Floating Icon */}
                    <motion.div
                      className={`absolute top-4 right-4 w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} p-0.5`}
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="w-full h-full bg-black/60 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <project.icon className="w-7 h-7 text-white" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-2xl text-white mb-1">{project.title}</h3>
                      <p className={`bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-gray-300 mb-6">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-black/40 border border-purple-500/20 rounded-lg text-purple-200 text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      {/* <Button
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-0"
                      >
                        <Globe className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-purple-500/30 bg-purple-500/5 hover:bg-purple-500/10"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button> */}
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr ${project.color} opacity-20 blur-2xl`} />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects CTA
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-purple-500/30 bg-purple-500/5 hover:bg-purple-500/10 backdrop-blur-sm"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View All Projects
          </Button>
        </motion.div> */}
      </div>
    </section>
  );
}
