import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12 sm:pb-20"
    >
      {/* Dynamic Background Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[10%] w-[30vw] h-[30vw] rounded-full bg-indigo-500/10 dark:bg-indigo-500/15 blur-[80px] animate-pulse-slow"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[35vw] h-[35vw] rounded-full bg-purple-500/10 dark:bg-purple-500/15 blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 sm:space-y-8"
        >
          {/* Greeting Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-indigo-200/55 dark:border-indigo-500/30 bg-indigo-500/5 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-medium text-xs sm:text-sm tracking-wider uppercase backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping"></span>
            <span>Welcome to my Portfolio</span>
          </motion.div>

          {/* Title */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl font-outfit font-extrabold tracking-tight text-slate-900 dark:text-white"
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent inline-block hover:scale-[1.02] transition-transform duration-300">
              Kumar Ankit
            </span>
          </motion.h1>

          {/* Subheading / Roles */}
          <motion.h2 
            variants={itemVariants}
            className="text-xl sm:text-3xl font-semibold text-slate-700 dark:text-slate-300 max-w-2xl mx-auto"
          >
            B.Tech Computer Science student & Frontend Developer
          </motion.h2>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            Passionate about building responsive, modern, and high-performance web applications. Focused on React.js, clean CSS systems, and creating engaging, accessible UI/UX.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <button
              onClick={() => handleScrollTo('contact')}
              className="group w-full sm:w-auto px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/40 flex items-center justify-center space-x-2 transition-all duration-300 hover:scale-[1.03]"
            >
              <span>Get In Touch</span>
              <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="/Kumar_Ankit_Resume.pdf"
              download="Kumar_Ankit_Resume.pdf"
              className="w-full sm:w-auto px-8 py-3.5 border border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-white font-semibold rounded-xl shadow-sm flex items-center justify-center space-x-2 transition-all duration-300 hover:scale-[1.03]"
            >
              <FaFileDownload className="w-4 h-4 text-indigo-500" />
              <span>Download Resume</span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center gap-6 pt-6"
          >
            {[
              { icon: <FaGithub className="w-6 h-6" />, url: 'https://github.com', label: 'GitHub' },
              { icon: <FaLinkedin className="w-6 h-6" />, url: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: <FaEnvelope className="w-6 h-6" />, url: 'mailto:kumarankit997313@gmail.com', label: 'Email' }
            ].map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 hover:scale-110 shadow-sm transition-all duration-300"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Wave/Bottom border divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10 opacity-30 dark:opacity-20 pointer-events-none">
        <svg className="relative block w-full h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,55.05,17.43,84.09,24.16c68.32,15.84,138.86,22,207.27,20.25Z" fill="currentColor" className="text-indigo-500"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
