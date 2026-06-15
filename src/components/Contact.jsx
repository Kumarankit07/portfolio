import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane, FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import confetti from 'canvas-confetti';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required.';
    
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email format is invalid.';
    }
    
    if (!formData.message.trim()) tempErrors.message = 'Message is required.';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear validation error when typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate API request submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Fire confetti celebration!
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
    }, 1800);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-outfit font-bold text-slate-900 dark:text-white"
          >
            Get In Touch
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-stretch">
          
          {/* Left panel: Info & Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col justify-between p-8 rounded-3xl border border-light-border dark:border-dark-border bg-white/40 dark:bg-slate-900/40 backdrop-blur-md"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-outfit font-extrabold text-slate-950 dark:text-white leading-tight">
                Let's discuss something <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">awesome</span> together.
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Whether you have an internship opportunity, a project to collaborate on, or just want to connect, feel free to drop a message or reach out through my social profiles.
              </p>
            </div>

            {/* Direct Contact Links */}
            <div className="space-y-4 my-8 lg:my-0">
              {[
                { icon: <FaEnvelope className="text-indigo-500" />, label: 'Email', value: 'kumarankit997313@gmail.com', href: 'mailto:kumarankit997313@gmail.com' },
                { icon: <FaPhone className="text-teal-500" />, label: 'Mobile', value: '+91 XXXXX XXXXX', href: 'tel:+910000000000' },
                { icon: <FaMapMarkerAlt className="text-rose-500" />, label: 'Location', value: 'Lovely Professional University, Punjab, India', href: null }
              ].map((info, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800/80 flex items-center justify-center border border-light-border dark:border-dark-border shadow-sm">
                    {info.icon}
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">{info.label}</span>
                    {info.href ? (
                      <a href={info.href} className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social quick links */}
            <div className="flex items-center gap-4 pt-4 border-t border-light-border dark:border-dark-border">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-light-border dark:border-dark-border bg-white/50 dark:bg-slate-950/50 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold transition-all"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-light-border dark:border-dark-border bg-white/50 dark:bg-slate-950/50 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold transition-all"
              >
                <FaLinkedin className="text-indigo-500" /> LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Right panel: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 p-8 rounded-3xl border border-light-border dark:border-dark-border bg-white/40 dark:bg-slate-900/40 backdrop-blur-md flex flex-col justify-center min-h-[400px]"
          >
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-5"
                >
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-bold text-slate-500 uppercase tracking-wider">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Kumar Ankit"
                      className={`w-full px-4 py-3 rounded-xl border bg-white/60 dark:bg-slate-950/60 focus:ring-2 focus:ring-indigo-500/20 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none transition-all ${
                        errors.name ? 'border-red-500 focus:border-red-500' : 'border-light-border dark:border-dark-border focus:border-indigo-500'
                      }`}
                    />
                    {errors.name && <p className="text-xs font-bold text-red-500">{errors.name}</p>}
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-bold text-slate-500 uppercase tracking-wider">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="ankit@example.com"
                      className={`w-full px-4 py-3 rounded-xl border bg-white/60 dark:bg-slate-950/60 focus:ring-2 focus:ring-indigo-500/20 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none transition-all ${
                        errors.email ? 'border-red-500 focus:border-red-500' : 'border-light-border dark:border-dark-border focus:border-indigo-500'
                      }`}
                    />
                    {errors.email && <p className="text-xs font-bold text-red-500">{errors.email}</p>}
                  </div>

                  {/* Message field */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-bold text-slate-500 uppercase tracking-wider">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      className={`w-full px-4 py-3 rounded-xl border bg-white/60 dark:bg-slate-950/60 focus:ring-2 focus:ring-indigo-500/20 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none transition-all resize-none ${
                        errors.message ? 'border-red-500 focus:border-red-500' : 'border-light-border dark:border-dark-border focus:border-indigo-500'
                      }`}
                    />
                    {errors.message && <p className="text-xs font-bold text-red-500">{errors.message}</p>}
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-600/70 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/30 flex items-center justify-center gap-2 hover:scale-[1.01]"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <FaPaperPlane className="text-xs" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-card"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="text-center py-10 space-y-5"
                >
                  <div className="inline-flex w-16 h-16 rounded-full bg-green-100 dark:bg-green-950/30 text-green-500 flex items-center justify-center text-4xl mx-auto shadow-sm">
                    <FaCheckCircle />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-2xl font-outfit font-extrabold text-slate-900 dark:text-white">Message Sent!</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm max-w-sm mx-auto leading-relaxed">
                      Thank you for reaching out! Your message was submitted successfully. Kumar Ankit will get back to you shortly.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-2.5 border border-slate-300 dark:border-slate-700 bg-white/40 dark:bg-slate-950/40 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-white text-xs font-bold rounded-xl transition-all"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
