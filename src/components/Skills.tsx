"use client";
import { motion } from "framer-motion";
import { Code2, Database, Wrench, Globe, Server, Braces } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code2,
      color: "from-purple-500 to-pink-500",
      skills: ["C", "Java", "JavaScript", "HTML", "CSS"],
    },
    {
      title: "Frontend",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      skills: ["React.js", "TypeScript", "Tailwind CSS", "Bootstrap"],
    },
    {
      title: "Backend",
      icon: Server,
      color: "from-pink-500 to-rose-500",
      skills: ["Node.js", "Express.js", ".NET", "REST APIs"],
    },
    {
      title: "Database",
      icon: Database,
      color: "from-cyan-500 to-blue-500",
      skills: ["MongoDB", "SQL"],
    },
    {
      title: "Tools",
      icon: Wrench,
      color: "from-rose-500 to-pink-500",
      skills: ["Git", "GitHub", "VS Code", "Postman"],
    },
  ];

  // Central floating tech icons
  const centerIcons = [
    { name: "React", icon: Braces, color: "text-blue-400", angle: 0 },
    { name: "Node", icon: Server, color: "text-green-400", angle: 72 },
    { name: "Database", icon: Database, color: "text-purple-400", angle: 144 },
    { name: "Code", icon: Code2, color: "text-pink-400", angle: 216 },
    { name: "Globe", icon: Globe, color: "text-cyan-400", angle: 288 },
  ];

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/5 to-black" />

      {/* Radial Grid */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-96 h-96 rounded-full border border-purple-500/20"
            style={{
              width: `${(i + 1) * 12}rem`,
              height: `${(i + 1) * 12}rem`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A diverse toolkit for building modern web applications
          </p>
        </motion.div>

        {/* Central Floating Icons */}
        <div className="relative max-w-4xl mx-auto mb-20">
          <div className="relative w-full aspect-square max-w-md mx-auto">
            {/* Center Glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-pink-500/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {centerIcons.map((item, index) => {
              const radius = 35; // percentage
              const angle = (item.angle * Math.PI) / 180;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.div
                  key={item.name}
                  className="absolute"
                  style={{
                    left: `${50 + x}%`,
                    top: `${50 + y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  whileHover={{ scale: 1.2 }}
                >
                  <div className="relative group">
                    <motion.div
                      className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${skillCategories.find(c => c.icon === item.icon)?.color || "from-purple-500 to-pink-500"} p-0.5`}
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                        delay: index * 2,
                      }}
                    >
                      <div className="w-full h-full bg-black/60 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                        <item.icon className={`w-8 h-8 md:w-10 md:h-10 ${item.color}`} />
                      </div>
                    </motion.div>
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-xs text-purple-300 whitespace-nowrap">{item.name}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Center Core */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 p-1"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                <Code2 className="w-12 h-12 text-purple-300" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${category.color} rounded-2xl blur opacity-25 group-hover:opacity-50 transition-opacity`} />

              <div className="relative bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} p-0.5`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="w-full h-full bg-black/40 rounded-xl flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                  </motion.div>
                  <h3 className="text-xl text-white">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1.5 bg-black/40 border border-purple-500/20 rounded-lg text-purple-200 text-sm hover:border-purple-500/40 hover:bg-black/60 transition-colors"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
