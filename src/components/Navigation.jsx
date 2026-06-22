import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

function Navigation({ currentSection, onSectionChange, isDarkTheme, onThemeToggle }) {
  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className={`fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50 flex items-center rounded-lg p-2 shadow-lg ${
      isDarkTheme 
        ? 'bg-black border-dark-border text-gray-200' 
        : 'bg-white border-gray-200'
    } border`}>
      <div className={`flex gap-1 p-1 rounded-md ${
        isDarkTheme ? 'bg-zinc-800' : 'bg-gray-100'
      }`}>
        {sections.map((section) => (
          <button
            key={section.id}
            className={`nav-tab px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 cursor-pointer ${
              currentSection === section.id
                ? isDarkTheme 
                  ? 'bg-black text-gray-200 shadow-sm' 
                  : 'bg-white text-gray-800 shadow-sm'
                : ''
            }`}
            onClick={() => onSectionChange(section.id)}
          >
            {section.label}
          </button>
        ))}
      </div>
      <button
        className={`theme-btn ml-2 w-10 h-10 border-none rounded-md cursor-pointer flex items-center justify-center text-lg transition-colors duration-200 ${
          isDarkTheme ? 'bg-zinc-800 text-gray-200 hover:bg-zinc-700' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
        }`}
        onClick={onThemeToggle}
      >
        {isDarkTheme ? <IoSunnyOutline /> : <IoMoonOutline />}
      </button>
    </div>
  );
}

export default Navigation;
