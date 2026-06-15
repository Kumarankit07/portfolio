import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaRocket, FaLightbulb, FaUserTie } from 'react-icons/fa';

const About = () => {
  const strengths = [
    {
      icon: <FaRocket className="w-5 h-5 text-indigo-500" />,
      title: 'Goal-Oriented',
      description: 'Focused on creating high-quality, impactful software solutions that solve real-world problems.'
    },
    {
      icon: <FaLightbulb className="w-5 h-5 text-amber-500" />,
      title: 'Problem Solver',
      description: 'Equipped with algorithmic thinking skills in C++ and Java to tackle complex coding challenges.'
    },
    {
      icon: <FaUserTie className="w-5 h-5 text-teal-500" />,
      title: 'Collaborative Leader',
      description: 'Experienced in leading team projects, fostering effective communication, and managing timelines.'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-outfit font-bold text-slate-900 dark:text-white"
          >
            About Me
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Column 1: Career Objective & Summary */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-light-border dark:border-dark-border hover:shadow-md transition-shadow">
              <h3 className="text-xl font-outfit font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                <FaGraduationCap className="text-indigo-500" />
                Career Objective
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                As a Computer Science and Engineering student at Lovely Professional University, I am committed to leveraging my foundational knowledge in frontend development, core Java/C++, and databases to build efficient web systems. I am seeking opportunities to apply my technical and collaborative strengths in an innovative organization that supports professional growth.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-light-border dark:border-dark-border hover:shadow-md transition-shadow">
              <h3 className="text-xl font-outfit font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                <FaCode className="text-purple-500" />
                Technical Interests
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-600 dark:text-slate-400">
                {[
                  'Single Page Applications (SPAs)',
                  'Data Structures & Algorithms',
                  'Cloud-Native Apps & Analytics',
                  'Modern CSS & UI Systems',
                  'Server-Side JS (Node.js)',
                  'State Management (Zustand/Redux)'
                ].map((interest, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                    <span>{interest}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Column 2: Strengths & Highlights */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <h3 className="text-2xl font-outfit font-bold text-slate-900 dark:text-white pb-2 border-b border-light-border dark:border-dark-border">
              Professional Strengths
            </h3>

            <div className="space-y-4">
              {strengths.map((strength, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="p-5 rounded-2xl border border-light-border dark:border-dark-border bg-white/40 dark:bg-slate-900/40 backdrop-blur-md flex gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center border border-light-border dark:border-dark-border">
                    {strength.icon}
                  </div>
                  <div>
                    <h4 className="font-outfit font-bold text-slate-800 dark:text-white text-base">
                      {strength.title}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mt-1 leading-relaxed">
                      {strength.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
