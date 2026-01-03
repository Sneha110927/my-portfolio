"use client";
import { useState, useRef, FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, Phone, Linkedin, Send, MessageSquare, Code, MapPin, Loader2, CheckCircle, XCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function Contact() {
  // FIXED: Added <HTMLFormElement>(null) to satisfy TypeScript
  const formRef = useRef<HTMLFormElement>(null);
  
  const [loading, setLoading] = useState(false);
  
  // FIXED: Defined the allowed types for status (null, success, or error)
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  // FIXED: Added type for the event 'e'
const sendEmail = (e: FormEvent) => {
  e.preventDefault();
  setLoading(true);
  setStatus(null);

  const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
  const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

  if (formRef.current) {
    emailjs
      .sendForm(serviceID, templateID, formRef.current, { publicKey })
      .then(
        () => {
          setLoading(false);
          setStatus("success");
          e.target instanceof HTMLFormElement && e.target.reset();
          setTimeout(() => setStatus(null), 5005);
        },
        (error) => {
          setLoading(false);
          setStatus("error");
          console.error("FAILED...", error.text);
        }
      );
  }
};

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9883524884",
      href: "tel:+919883524884",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Mail,
      label: "Email",
      value: "jhawarsneha11@gmail.com",
      href: "mailto:jhawarsneha11@gmail.com",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/sneha-jhawar",
      href: "https://linkedin.com/in/sneha-jhawar",
      color: "from-pink-500 to-rose-500",
    },
  ];

  const floatingIcons = [
    { icon: MessageSquare, delay: 0, position: "top-10 left-10" },
    { icon: Code, delay: 0.5, position: "top-20 right-20" },
    { icon: Send, delay: 1, position: "bottom-20 left-20" },
  ];

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      {/* Floating Decorative Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute ${item.position} hidden lg:block`}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: item.delay,
          }}
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-purple-500/20 flex items-center justify-center">
            <item.icon className="w-8 h-8 text-purple-400" />
          </div>
        </motion.div>
      ))}

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I&#39;d love to hear from you!
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />

              <div className="relative bg-gradient-to-br from-purple-900/40 to-blue-900/40 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-8">
                
                <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                  <div>
                    <label htmlFor="user_name" className="block text-purple-300 mb-2">
                      Your Name
                    </label>
                    <Input
                      id="user_name"
                      name="user_name"
                      required
                      placeholder="John Doe"
                      className="bg-black/40 border-purple-500/20 focus:border-purple-500/50 text-white placeholder:text-gray-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="user_email" className="block text-purple-300 mb-2">
                      Email Address
                    </label>
                    <Input
                      id="user_email"
                      name="user_email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="bg-black/40 border-purple-500/20 focus:border-purple-500/50 text-white placeholder:text-gray-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-purple-300 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Tell me about your project..."
                      rows={6}
                      className="bg-black/40 border-purple-500/20 focus:border-purple-500/50 text-white placeholder:text-gray-500 resize-none"
                    />
                  </div>

                  <Button
                    size="lg"
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-0 shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] transition-all disabled:opacity-50"
                  >
                    {loading ? (
                      <span className="flex items-center">
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending...
                      </span>
                    ) : status === "success" ? (
                      <span className="flex items-center text-green-200">
                        <CheckCircle className="w-4 h-4 mr-2" /> Message Sent!
                      </span>
                    ) : status === "error" ? (
                      <span className="flex items-center text-red-200">
                        <XCircle className="w-4 h-4 mr-2" /> Failed. Try Again.
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="w-4 h-4 mr-2" /> Send Message
                      </span>
                    )}
                  </Button>
                </form>

                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-3xl" />
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-8">
              <h3 className="text-2xl text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    target={contact.label === "LinkedIn" ? "_blank" : undefined}
                    rel={contact.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 group"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${contact.color} p-0.5 flex-shrink-0`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="w-full h-full bg-black/40 rounded-xl flex items-center justify-center">
                        <contact.icon className="w-6 h-6 text-white" />
                      </div>
                    </motion.div>

                    <div className="flex-1">
                      <p className="text-purple-300 mb-1">{contact.label}</p>
                      <p className="text-white group-hover:text-purple-300 transition-colors break-all">
                        {contact.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

             <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity" />

              <div className="relative bg-gradient-to-br from-pink-900/30 to-purple-900/30 backdrop-blur-xl border border-pink-500/20 rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-pink-400" />
                  </div>
                  <div>
                    <h4 className="text-white mb-2">Open to Opportunities</h4>
                    <p className="text-gray-300 text-sm">
                      Currently exploring exciting opportunities in full-stack development and frontend engineering roles.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 backdrop-blur-xl border border-purple-500/10 rounded-2xl p-6"
            >
              <p className="text-gray-300 text-center">
                <span className="text-purple-300">⚡ Average response time:</span>{" "}
                <span className="text-white">Within 24 hours</span>
              </p>
            </motion.div> */}

          </motion.div>
        </div>
      </div>
    </section>
  );
}