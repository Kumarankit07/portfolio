import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt, FaCloud, FaDatabase, FaJs, FaJava, FaCode } from 'react-icons/fa';

const Certifications = () => {
  const certifications = [
    {
      title: 'Cloud Computing',
      issuer: 'NPTEL (National Programme on Technology Enhanced Learning)',
      icon: <FaCloud className="text-sky-500" />,
      credentialId: 'NPTEL-CC-2024-87A',
      date: 'July - October 2024',
      badgeColor: 'sky',
      url: null
    },
    {
      title: 'SAP Analytics Cloud – Data Analyst',
      issuer: 'SAP Professional Academy',
      icon: <FaDatabase className="text-blue-500" />,
      credentialId: 'SAP-SAC-DA-2910',
      date: 'September 2024',
      badgeColor: 'blue',
      url: '/sap_analytics_cloud_certificate.pdf'
    },
    {
      title: 'Server-side JavaScript with Node.js',
      issuer: 'Coursera / Specialized Training',
      icon: <FaJs className="text-yellow-500" />,
      credentialId: 'COURSERA-NODE-448A',
      date: 'May 2024',
      badgeColor: 'yellow',
      url: null
    },
    {
      title: 'Core and Advance Java',
      issuer: 'NIIT Professional Development',
      icon: <FaJava className="text-red-500" />,
      credentialId: 'NIIT-JAVA-CORE-ADV-589',
      date: 'February 2024',
      badgeColor: 'red',
      url: null
    },
    {
      title: 'Programming in C++',
      issuer: 'NPTEL / University Coursework',
      icon: <FaCode className="text-purple-500" />,
      credentialId: 'NPTEL-CPP-2023-102C',
      date: 'July - September 2023',
      badgeColor: 'purple',
      url: null
    }
  ];

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-outfit font-bold text-slate-900 dark:text-white"
          >
            Certifications & Training
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Certifications List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.01 }}
              className="p-6 rounded-2xl border border-light-border dark:border-dark-border bg-white/40 dark:bg-slate-900/40 backdrop-blur-md hover:shadow-md transition-all flex gap-5 items-start"
            >
              {/* Certification Icon */}
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-2xl border border-light-border dark:border-dark-border shadow-sm">
                {cert.icon}
              </div>

              {/* Certification Details */}
              <div className="flex-grow space-y-2">
                <div className="flex justify-between items-start gap-2">
                  <h3 className="font-outfit font-bold text-slate-900 dark:text-white text-lg leading-snug">
                    {cert.title}
                  </h3>
                  <FaCertificate className="text-indigo-500 w-4 h-4 flex-shrink-0 mt-1" />
                </div>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">
                  {cert.issuer}
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pt-2 text-xs font-semibold text-slate-500">
                  <div className="flex flex-wrap items-center gap-2">
                    <span>ID: <code className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800/80 rounded text-slate-700 dark:text-slate-300 font-mono text-[10px]">{cert.credentialId}</code></span>
                    {cert.url && (
                      <a 
                        href={cert.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors font-bold pl-1 border-l border-slate-300 dark:border-slate-700"
                      >
                        <span>View</span>
                        <FaExternalLinkAlt className="text-[9px]" />
                      </a>
                    )}
                  </div>
                  <span className="text-indigo-600 dark:text-indigo-400">{cert.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
