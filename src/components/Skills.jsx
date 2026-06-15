import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaJs, FaReact, FaNodeJs, FaJava, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaCode,
  FaUsers, FaHandshake, FaClock, FaComments 
} from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiCplusplus } from 'react-icons/si';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('technical');

  const technicalSkills = [
    { name: 'React.js', icon: <FaReact className="text-cyan-400" />, level: 85 },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-400" />, level: 80 },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" />, level: 75 },
    { name: 'Java', icon: <FaJava className="text-red-500" />, level: 70 },
    { name: 'C++', icon: <SiCplusplus className="text-blue-600" />, level: 75 },
    { name: 'HTML/CSS', icon: <div className="flex gap-0.5"><FaHtml5 className="text-orange-500" /><FaCss3Alt className="text-blue-500" /></div>, level: 90 },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500" />, level: 85 },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-600" />, level: 65 },
    { name: 'Git & GitHub', icon: <div className="flex gap-0.5"><FaGitAlt className="text-orange-600" /><FaGithub className="text-slate-800 dark:text-white" /></div>, level: 80 },
  ];

  const softSkills = [
    { name: 'Leadership', icon: <FaUsers className="text-indigo-500" />, level: 85, desc: 'Led development teams in university projects' },
    { name: 'Collaboration', icon: <FaHandshake className="text-teal-500" />, level: 90, desc: 'Fosters team synergy and syncs workflows' },
    { name: 'Time Management', icon: <FaClock className="text-amber-500" />, level: 80, desc: 'Ensures milestones are hit on schedule' },
    { name: 'Communication', icon: <FaComments className="text-purple-500" />, level: 85, desc: 'Clear presentation of ideas and code walkthroughs' }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-outfit font-bold text-slate-900 dark:text-white"
          >
            My Skills
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-slate-200/50 dark:bg-slate-900/60 backdrop-blur-md rounded-xl border border-light-border dark:border-dark-border">
            <button
              onClick={() => setActiveTab('technical')}
              className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 ${
                activeTab === 'technical'
                  ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-white shadow'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              Technical Skills
            </button>
            <button
              onClick={() => setActiveTab('soft')}
              className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 ${
                activeTab === 'soft'
                  ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-white shadow'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              Soft Skills
            </button>
          </div>
        </div>

        {/* Skills Display Grid */}
        <div className="min-h-[400px]">
          {activeTab === 'technical' ? (
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="p-6 rounded-2xl border border-light-border dark:border-dark-border bg-white/40 dark:bg-slate-900/40 backdrop-blur-md hover:shadow-lg transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-2xl border border-light-border dark:border-dark-border">
                        {skill.icon}
                      </div>
                      <span className="font-outfit font-bold text-slate-800 dark:text-white">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">
                      {skill.level}%
                    </span>
                  </div>
                  
                  {/* Progress Bar Container */}
                  <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut', delay: index * 0.05 }}
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
            >
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl border border-light-border dark:border-dark-border bg-white/40 dark:bg-slate-900/40 backdrop-blur-md hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800/80 flex items-center justify-center text-xl border border-light-border dark:border-dark-border">
                        {skill.icon}
                      </div>
                      <h4 className="font-outfit font-bold text-slate-800 dark:text-white">
                        {skill.name}
                      </h4>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                      {skill.desc}
                    </p>
                  </div>
                  
                  {/* Gauge */}
                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">
                      <span>Proficiency</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut', delay: index * 0.08 }}
                        className="h-full bg-gradient-to-r from-teal-400 to-indigo-500 rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
