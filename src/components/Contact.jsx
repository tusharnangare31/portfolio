// src/components/Contact.jsx
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useConfetti } from "../hooks/useConfetti";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

export default function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null);
  const [messageLength, setMessageLength] = useState(0);
  const { triggerConfetti } = useConfetti();

  const contactInfo = [
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      label: "Email",
      value: "tusharnangare311003@gmail.com",
      link: "mailto:tusharnangare311003@gmail.com",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <FaPhone className="w-6 h-6" />,
      label: "Phone",
      value: "+91-7499404445",
      link: "tel:+917499404445",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "tusharnangare31",
      link: "https://www.linkedin.com/in/tusharnangare31/",
      color: "from-blue-600 to-blue-400"
    },
    {
      icon: <FaGithub className="w-6 h-6" />,
      label: "GitHub",
      value: "tusharnangare31",
      link: "https://github.com/tusharnangare31",
      color: "from-gray-700 to-gray-900 dark:from-gray-300 dark:to-gray-100"
    }
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus(null);

    emailjs
      .sendForm(
        "service_6uioqls",
        "template_dw8n9eq",
        form.current,
        "wnE_jLbRGpM98YUZp"
      )
      .then(
        () => {
          setStatus({ type: "success", text: "Message sent successfully! I'll get back to you soon." });
          setIsSending(false);
          form.current.reset();
          setMessageLength(0);
          triggerConfetti(0.5, 0.5);
          setTimeout(() => setStatus(null), 6000);
        },
        (error) => {
          console.error("Error:", error.text);
          setStatus({ type: "error", text: "Failed to send message. Please try again or email me directly." });
          setIsSending(false);
          setTimeout(() => setStatus(null), 6000);
        }
      );
  };

  return (
    <section id="contact" className="relative py-16 md:py-20 px-4 overflow-hidden bg-gradient-to-b from-white via-blue-50/20 to-white dark:from-gray-900 dark:via-blue-950/10 dark:to-gray-900 transition-colors duration-300">
      
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tight mb-2">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's talk!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          
          {/* Contact Info Cards - Left Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-3"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Contact Information</h3>
            
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target={item.link.startsWith('http') ? "_blank" : undefined}
                rel={item.link.startsWith('http') ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className={`relative p-2.5 rounded-lg bg-gradient-to-br ${item.color} text-white shadow-lg`}>
                  {item.icon}
                </div>
                
                <div className="relative flex-1 min-w-0">
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400">{item.label}</p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">{item.value}</p>
                </div>
                
                <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>
            ))}

            {/* Location Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-2 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl border border-blue-100 dark:border-blue-900/30"
            >
              <FaMapMarkerAlt className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <div>
                <p className="text-xs font-medium text-gray-600 dark:text-gray-400">Based in</p>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">India</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="relative bg-white dark:bg-gray-800 backdrop-blur-xl rounded-2xl p-5 md:p-7 shadow-xl border border-gray-200 dark:border-gray-700">
              {/* Decorative corner elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-500/10 to-pink-500/10 rounded-tr-full"></div>
              
              <form ref={form} onSubmit={sendEmail} className="relative space-y-4">
                
                {/* Name Input */}
                <div className="group">
                  <label htmlFor="user_name" className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    id="user_name"
                    required
                    className="w-full px-3 py-2.5 bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 focus:bg-white dark:focus:bg-gray-800 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Input */}
                <div className="group">
                  <label htmlFor="user_email" className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    id="user_email"
                    required
                    className="w-full px-3 py-2.5 bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 focus:bg-white dark:focus:bg-gray-800 transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Subject Input */}
                <div className="group">
                  <label htmlFor="title" className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    className="w-full px-3 py-2.5 bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 focus:bg-white dark:focus:bg-gray-800 transition-all duration-300"
                    placeholder="Project Inquiry"
                  />
                </div>

                {/* Message Textarea */}
                <div className="group">
                  <label htmlFor="message" className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows="4"
                    maxLength="500"
                    onChange={(e) => setMessageLength(e.target.value.length)}
                    className="w-full px-3 py-2.5 bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 focus:bg-white dark:focus:bg-gray-800 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                  <div className="flex justify-between items-center mt-1.5">
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Share your ideas or just say hi!
                    </p>
                    <p className={`text-xs font-medium ${messageLength > 450 ? 'text-orange-500' : 'text-gray-400'}`}>
                      {messageLength}/500
                    </p>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-1">
                  <motion.button
                    type="submit"
                    disabled={isSending}
                    whileHover={{ scale: isSending ? 1 : 1.02 }}
                    whileTap={{ scale: isSending ? 1 : 0.98 }}
                    className={`
                      relative w-full flex items-center justify-center gap-2 px-6 py-3 
                      font-bold text-white text-sm rounded-lg overflow-hidden
                      transition-all duration-300 shadow-lg
                      ${isSending 
                        ? 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl hover:shadow-blue-500/30'
                      }
                    `}
                  >
                    {/* Animated background gradient */}
                    {!isSending && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600"
                        initial={{ x: '100%' }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    
                    <span className="relative flex items-center gap-2">
                      {isSending ? (
                        <>
                          <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <FaPaperPlane className="w-4 h-4" />
                        </>
                      )}
                    </span>
                  </motion.button>
                </div>

                {/* Status Message */}
                {status && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={`
                      flex items-center gap-3 p-4 rounded-xl text-sm font-medium
                      ${status.type === "success" 
                        ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border-2 border-green-200 dark:border-green-800" 
                        : "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 border-2 border-red-200 dark:border-red-800"
                      }
                    `}
                  >
                    {status.type === "success" ? (
                      <FaCheckCircle className="w-5 h-5 flex-shrink-0" />
                    ) : (
                      <FaExclamationCircle className="w-5 h-5 flex-shrink-0" />
                    )}
                    <span>{status.text}</span>
                  </motion.div>
                )}

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}