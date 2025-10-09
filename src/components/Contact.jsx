// src/components/Contact.jsx
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_6uioqls", // 🔹 Replace with your Service ID from EmailJS
        "template_dw8n9eq", // 🔹 Replace with your Template ID from EmailJS
        form.current,
        "wnE_jLbRGpM98YUZp" // ✅ Use only your Public Key (safe for frontend)
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setIsSending(false);
          form.current.reset();
        },
        (error) => {
          console.error("Error:", error.text);
          setStatus("❌ Failed to send message. Try again later.");
          setIsSending(false);
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-12 text-gray-900"
        >
          Contact Me
        </motion.h2>

        <motion.div
          className="flex flex-col md:flex-row gap-10 justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Contact Info */}
          <motion.div
            className="md:w-1/2 space-y-6 text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-700 text-lg">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:tusharnangare311003@gmail.com"
                className="text-indigo-600 hover:underline"
              >
                tusharnangare311003@gmail.com
              </a>
            </p>
            <p className="text-gray-700 text-lg">
              <strong>Phone:</strong> +91-7499404445
            </p>
            <p className="text-gray-700 text-lg">
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline"
              >
                LinkedIn Profile
              </a>
            </p>
            <p className="text-gray-700 text-lg">
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline"
              >
                GitHub Profile
              </a>
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="md:w-1/2 bg-white p-6 md:p-8 rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              />
              <input
                type="text"
                name="title"
                placeholder="Subject"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
                className="p-3 border border-gray-300 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              />
              <button
                type="submit"
                disabled={isSending}
                className={`${
                  isSending
                    ? "bg-indigo-400 cursor-not-allowed"
                    : "bg-indigo-600 hover:bg-indigo-700"
                } text-white px-6 py-3 rounded-lg font-medium transition-all duration-300`}
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </form>
            {status && (
              <p className="mt-4 text-sm font-medium text-gray-700">{status}</p>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
