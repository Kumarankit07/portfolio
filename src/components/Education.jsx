import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt, FaBookOpen } from 'react-icons/fa';

const Education = () => {
  const academicDetails = {
    university: 'Lovely Professional University',
    degree: 'B.Tech in Computer Science and Engineering',
    location: 'Phagwara, Punjab, India',
    period: '2021 - 2026',
    cgpa: '6.63 / 10',
    courses: [
      'Data Structures & Algorithms (DSA)',
      'Object-Oriented Programming (OOPs)',
      'Database Management Systems (DBMS)',
      'Operating Systems (OS)',
      'Computer Networks (CN)',
      'Software Engineering & Testing'
    ]
  };

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-outfit font-bold text-slate-900 dark:text-white"
          >
            Education
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Education Details Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 sm:p-10 rounded-3xl border border-light-border dark:border-dark-border bg-white/40 dark:bg-slate-900/40 backdrop-blur-md hover:shadow-xl transition-all flex flex-col md:flex-row gap-8 items-start md:items-center"
          >
            {/* Left Panel: University details & logo block */}
            <div className="flex-grow space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-indigo-200/55 dark:border-indigo-500/30 bg-indigo-500/5 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-semibold text-xs uppercase">
                <FaGraduationCap />
                <span>Bachelor of Technology</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-outfit font-extrabold text-slate-950 dark:text-white leading-tight">
                {academicDetails.university}
              </h3>

              <p className="text-lg font-bold text-slate-700 dark:text-slate-300">
                {academicDetails.degree}
              </p>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5">
                  <FaMapMarkerAlt className="text-indigo-500" />
                  {academicDetails.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <FaCalendarAlt className="text-indigo-500" />
                  {academicDetails.period}
                </span>
              </div>
            </div>

            {/* Right Panel: CGPA Badge */}
            <div className="flex-shrink-0 w-full md:w-auto p-6 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex flex-col items-center justify-center shadow-lg shadow-indigo-500/20 text-center min-w-[180px]">
              <span className="text-sm font-semibold uppercase tracking-wider opacity-90">Cumulative GPA</span>
              <span className="text-3xl sm:text-4xl font-outfit font-extrabold mt-1 tracking-tight">
                {academicDetails.cgpa.split(' ')[0]}
              </span>
              <span className="text-xs font-semibold opacity-75 mt-1">out of 10.0 scale</span>
            </div>
          </motion.div>

          {/* Academic Courses Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-8 p-6 sm:p-8 rounded-3xl border border-light-border dark:border-dark-border bg-white/40 dark:bg-slate-900/40 backdrop-blur-md"
          >
            <h4 className="text-base font-outfit font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <FaBookOpen className="text-indigo-500" />
              Core Academic Coursework
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {academicDetails.courses.map((course, idx) => (
                <div 
                  key={idx}
                  className="px-4 py-3 rounded-xl border border-light-border dark:border-dark-border bg-white/20 dark:bg-slate-900/20 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:border-indigo-500/30 transition-all hover:bg-white/40 dark:hover:bg-slate-800/40"
                >
                  {course}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Education;
