import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    // Check if theme preference exists in localStorage
    const savedTheme = localStorage.getItem('darkTheme');
    if (savedTheme !== null) {
      return JSON.parse(savedTheme);
    }
    // Check system preference if no saved preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    // Save theme preference to localStorage
    localStorage.setItem('darkTheme', JSON.stringify(newTheme));
  };

  const showSection = (sectionName) => {
    setCurrentSection(sectionName);
  };

  // Apply dark theme to body element
  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add('dark-theme');
      document.documentElement.classList.add('dark');
    } else {
      document.body.classList.remove('dark-theme');
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkTheme]);

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      isDarkTheme 
        ? 'bg-dark text-gray-200' 
        : 'bg-gray-50 text-gray-800'
    }`}>
      <Navigation 
        currentSection={currentSection}
        onSectionChange={showSection}
        isDarkTheme={isDarkTheme}
        onThemeToggle={toggleTheme}
      />
      
      <div className="max-w-6xl mx-auto px-5 py-10">
        {currentSection === 'home' && (
          <Home
            isDarkTheme={isDarkTheme}
            onViewProjects={() => showSection('projects')}
          />
        )}
        {currentSection === 'about' && <About isDarkTheme={isDarkTheme} />}
        {currentSection === 'projects' && <Projects isDarkTheme={isDarkTheme} />}
        {currentSection === 'contact' && <Contact isDarkTheme={isDarkTheme} />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
