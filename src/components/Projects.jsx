import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Job Hunt React Application',
      description: 'A comprehensive job portal platform that facilitates job searches, application submissions, and company profile tracking. Integrates a blog section for career guidance.',
      image: '/job_hunt_app.png',
      technologies: ['React.js', 'Tailwind CSS', 'Zustand', 'Node.js', 'Express', 'MongoDB'],
      highlights: [
        'Zustand for lightweight and efficient global state management',
        'Fully responsive job portal UI with seamless filter controls',
        'Blog integration for career tips and job market discussions'
      ],
      github: 'https://github.com',
      demo: 'https://github.com'
    },
    {
      title: 'Sudoku Solver',
      description: 'An interactive Sudoku solving application implementing a visual backtracking algorithm to demonstrate recursion, search-space pruning, and puzzle solving in real-time.',
      image: '/sudoku_solver.png',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Algorithms'],
      highlights: [
        'Interactive grid with cell-by-cell step customization',
        'Real-time visualization of backtracking pathfinding',
        'Strict validation prevents invalid initial puzzle configurations'
      ],
      github: 'https://github.com',
      demo: 'https://github.com'
    },
    {
      title: 'Portfolio Website',
      description: 'The personal portfolio website showcasing B.Tech CSE details, skills, certifications, and projects. Featuring glassmorphism cards and smooth-scrolling experience.',
      image: '/portfolio_website.png',
      technologies: ['React.js', 'Tailwind CSS', 'Framer Motion', 'React Icons'],
      highlights: [
        'Dynamic light/dark theme toggle utilizing Tailwind variables',
        'Performant animations via Framer Motion',
        'Fully responsive design supporting all viewport shapes'
      ],
      github: 'https://github.com',
      demo: 'https://github.com'
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-outfit font-bold text-slate-900 dark:text-white"
          >
            Featured Projects
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Projects List */}
        <div className="space-y-12 sm:space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-center p-6 sm:p-8 rounded-3xl border border-light-border dark:border-dark-border bg-white/40 dark:bg-slate-900/40 backdrop-blur-md hover:shadow-xl hover:shadow-indigo-500/5 dark:hover:shadow-indigo-900/5 transition-all duration-300 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              
              {/* Project Image Panel */}
              <div className="w-full lg:w-1/2 overflow-hidden rounded-2xl border border-light-border dark:border-dark-border shadow-md group relative">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-auto object-cover aspect-[16/10] bg-slate-900"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent pointer-events-none" />
              </div>

              {/* Project Details Panel */}
              <div className="w-full lg:w-1/2 space-y-5">
                <div className="space-y-2">
                  <h3 className="text-2xl font-outfit font-bold text-slate-950 dark:text-white leading-tight">
                    {project.title}
                  </h3>
                  
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-semibold rounded-md bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights Bullet List */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
                    <FaCode /> Key Highlights
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-indigo-500 mt-0.5">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Link Buttons */}
                <div className="flex items-center gap-4 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-slate-300 dark:border-slate-700 bg-white/40 dark:bg-slate-950/40 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-white text-xs font-bold rounded-xl transition-all"
                  >
                    <FaGithub /> Source Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl transition-all shadow-md shadow-indigo-600/10"
                  >
                    <FaExternalLinkAlt className="text-[10px]" /> Live Demo
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
