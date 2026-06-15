import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  // Read theme preference from localStorage or default to dark (true)
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans ${
      darkMode ? 'bg-dark-bg text-slate-100' : 'bg-light-bg text-slate-800'
    }`}>
      {/* Decorative Grid Overlays */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none z-0" />
      
      {/* Sticky Header Navigation */}
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        
        {/* Section Dividers */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <hr className="border-light-border dark:border-dark-border" />
        </div>

        <About />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <hr className="border-light-border dark:border-dark-border" />
        </div>

        <Skills />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <hr className="border-light-border dark:border-dark-border" />
        </div>

        <Projects />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <hr className="border-light-border dark:border-dark-border" />
        </div>

        <Certifications />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <hr className="border-light-border dark:border-dark-border" />
        </div>

        <Education />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <hr className="border-light-border dark:border-dark-border" />
        </div>

        <Contact />
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 border-t border-light-border dark:border-dark-border bg-white/20 dark:bg-slate-950/20 backdrop-blur-md text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
            &copy; {new Date().getFullYear()} Kumar Ankit. All rights reserved.
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500">
            Built with React, Tailwind CSS, and Framer Motion.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
