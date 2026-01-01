import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Instagram,
  Facebook,
  Check,
  X,
} from "lucide-react";
import data from "../data/data.json";

const icons = {
  Github,
  Linkedin,
  Instagram,
  Facebook,
  X,
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    const res = await fetch(import.meta.env.VITE_FORMSPREE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Message sent successfully!");
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(""), 4000);
    } else {
      setStatus("error");
      setTimeout(() => setStatus(""), 4000);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-10 px-6 md:px-12 lg:px-20 mb-5"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-center underline underline-offset-12 decoration-1 decoration-cyan-400/40 dark:decoration-pink-400/40 leading-tight"
      >
        Let’s Connect
      </motion.h2>

      <div className="mt-8 md:mt-12 max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-7"
        >
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Get in Touch
            </h2>
            <p className="mt-3 md:mt-4 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              Open to collaborations, career opportunities, and building
              impactful user-centric products.
            </p>
          </div>

          {/* Contact Items */}
          <div className="space-y-5">
            <div className="flex items-center gap-3 text-gray-800 dark:text-gray-200">
              <Mail className="w-5 h-5 text-cyan-500" />
              <a href="mailto:asudharsan1805@gmail.com" className="text-sm">
                asudharsan1805@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3 text-gray-800 dark:text-gray-200">
              <Phone className="w-5 h-5 text-purple-500" />
              <a href="tel:+917708749693" className="text-sm">
                +91 7708749693
              </a>
            </div>

            <div className="flex items-center gap-3 text-gray-800 dark:text-gray-200">
              <MapPin className="w-5 h-5 text-pink-500" />
              <a
                href="https://maps.app.goo.gl/YqHKmejkK5E2FBgp7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm"
              >
                Tirunelveli, Tamil Nadu, India
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 pt-2">
            {data.socials.map((item, i) => {
              const Socials = icons[item.icon];
              return (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-600 dark:text-gray-400 transition-colors ${item.color}`}
                >
                  {Socials && <Socials className="w-5 h-5" />}
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative p-6 rounded-2xl bg-white/70 dark:bg-white/5 border border-gray-200/60 dark:border-gray-700/60 backdrop-blur-xl shadow-md"
        >
          <div className="absolute inset-0 rounded-2xl p-[1.5px] opacity-30 bg-[conic-gradient(from_var(--border-angle),#06b6d4,#8b5cf6,#db2777,#06b6d4)] animate-border-spin" />
          <div className="absolute inset-[2px] rounded-[14px] bg-white/50 dark:bg-zinc-900" />

          <form onSubmit={submitForm} className="relative z-10 space-y-5">
            <div>
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full mt-2 px-3 py-2 rounded-xl bg-gray-100/90 dark:bg-gray-800 border border-gray-400/60 dark:border-gray-600 text-sm focus:border focus:border-cyan-500 outline-none transition"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@awesome.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-2 px-3 py-2 rounded-xl bg-gray-100/90 dark:bg-gray-800 border border-gray-400/60 dark:border-gray-600 text-sm focus:border focus:border-purple-500 outline-none transition"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Enter your message..."
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full mt-2 px-3 py-2 rounded-xl placeholder:text-gray-400 bg-gray-100/90 dark:bg-gray-800 border border-gray-400/60 dark:border-gray-600 text-sm resize-none focus:border focus:border-pink-500 outline-none transition"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 hover:opacity-85 dark:hover:opacity-80 transition-opacity cursor-pointer"
            >
              Send Message
            </button>

            {/* Status Message */}
            {status === "success" && (
              <p className="flex items-center justify-center text-green-600 text-sm">
                <Check className="mr-1" /> Message delivered!
              </p>
            )}
            {status === "error" && (
              <p className="flex items-center justify-center text-red-500 text-sm">
                <X className="mr-1" /> Failed to send message
              </p>
            )}
          </form>
        </motion.div>
      </div>

      {/* CSS for animated border spin */}
      <style>{` 
      @keyframes border-spin { to { --border-angle: 360deg; } }
        .animate-border-spin {
          --border-angle: 0deg;
          animation: border-spin 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Contact;
