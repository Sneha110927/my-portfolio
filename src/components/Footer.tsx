"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

export function Footer() {
  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/Sneha110927", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/sneha1127", label: "LinkedIn" },
    { icon: Mail, href: "mailto:jhawarsneha11@gmail.com", label: "Email" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-b from-black to-purple-950/20 border-t border-purple-500/10">
      {/* Top Glow Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="container mx-auto px-6 py-16 relative">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                Sneha Jhawar
              </h3>
              <p className="text-gray-400 mb-4">
                Building immersive digital experiences with clean logic and playful design.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 flex items-center justify-center hover:border-purple-500/50 backdrop-blur-sm transition-all group"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-purple-300 group-hover:text-purple-200 transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-white mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-purple-300 transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500/50 group-hover:bg-purple-400 transition-colors" />
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-white mb-4">Get In Touch</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a
                    href="mailto:jhawarsneha11@gmail.com"
                    className="hover:text-purple-300 transition-colors"
                  >
                    jhawarsneha11@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+919883524884"
                    className="hover:text-purple-300 transition-colors"
                  >
                    +91 9883524884
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/sneha1127"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-300 transition-colors"
                  >
                    linkedin.com/in/sneha1127
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent mb-8" />

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <p className="text-gray-400 text-center md:text-left flex items-center gap-2 flex-wrap justify-center">
              <span>© 2025 Designed & Developed by Sneha Jhawar</span>
              <span className="flex items-center gap-1">
                with <Heart className="w-4 h-4 text-pink-500 fill-pink-500 animate-pulse" />
              </span>
            </p>

            {/* Scroll to Top Button */}
            <motion.button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 flex items-center justify-center hover:border-purple-500/50 backdrop-blur-sm transition-all group"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 text-purple-300 group-hover:text-purple-200 transition-colors" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Decorative Elements */}
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
    </footer>
  );
}
