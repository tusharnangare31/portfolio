// src/components/Contact.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-10">
          Contact Me
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row gap-10 justify-center"
        >
          {/* Contact Info */}
          <div className="md:w-1/2 space-y-4 text-left">
            <p className="text-gray-700">
              <strong>Email:</strong> tusharnangare311003@gmail.com
            </p>
            <p className="text-gray-700">
              <strong>Phone:</strong> +91-7499404445
            </p>
            <p className="text-gray-700">
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/"
                className="text-indigo-600 hover:underline"
              >
                LinkedIn Profile
              </a>
            </p>
            <p className="text-gray-700">
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/"
                className="text-indigo-600 hover:underline"
              >
                GitHub Profile
              </a>
            </p>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2">
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 border border-gray-300 rounded-lg"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 border border-gray-300 rounded-lg"
              />
              <textarea
                placeholder="Your Message"
                className="p-3 border border-gray-300 rounded-lg h-32"
              />
              <button
                type="submit"
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
