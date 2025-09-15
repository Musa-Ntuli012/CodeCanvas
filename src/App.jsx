import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const sections = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'projects', name: 'Projects' },
    { id: 'certificates', name: 'Certificates' },
    { id: 'contact', name: 'Contact' },
  ];

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Load theme preference from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDarkMode(false);
    }
    // Default to dark mode if no preference is saved
  }, []);

  // Save theme preference to localStorage and apply theme
  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'dark' : ''
    }`}>
      <Navigation 
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme} 
        sections={sections}
      />
      <main>
        <Home />
        <About />
        <Projects />
        <Certificates />
        <Contact />
      </main>
    </div>
  );
}

export default App;