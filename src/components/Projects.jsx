import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  FaReact, FaNodeJs, FaPython, FaChartBar, FaLock, FaUpload, FaBrain 
} from 'react-icons/fa';
import { 
  SiExpress, SiMongodb, SiRedux, SiMui, SiStreamlit, SiPlotly, 
  SiNumpy, SiSqlite, SiHtml5, SiJsonwebtokens
} from 'react-icons/si';

// Helper function to map technology names to modern react-icons
const getTechIcon = (name) => {
  const normalized = name.toLowerCase();
  if (normalized.includes('react')) return <FaReact className="text-[#61dafb]" />;
  if (normalized.includes('node')) return <FaNodeJs className="text-[#339933]" />;
  if (normalized.includes('express')) return <SiExpress className="text-gray-400" />;
  if (normalized.includes('mongodb')) return <SiMongodb className="text-[#47a248]" />;
  if (normalized.includes('redux')) return <SiRedux className="text-[#764abc]" />;
  if (normalized.includes('material-ui') || normalized.includes('mui')) return <SiMui className="text-[#007fff]" />;
  if (normalized.includes('groq') || normalized.includes('llama') || normalized.includes('api')) return <FaBrain className="text-[#ff5a00]" />;
  if (normalized.includes('recharts') || normalized.includes('chart') || normalized.includes('plotly')) return <FaChartBar className="text-[#fc6d26]" />;
  if (normalized.includes('python')) return <FaPython className="text-[#3776ab]" />;
  if (normalized.includes('numpy')) return <SiNumpy className="text-[#013243]" />;
  if (normalized.includes('streamlit')) return <SiStreamlit className="text-[#ff4b4b]" />;
  if (normalized.includes('sqlite')) return <SiSqlite className="text-[#003b57]" />;
  if (normalized.includes('ejs')) return <SiHtml5 className="text-[#b4ca65]" />;
  if (normalized.includes('multer') || normalized.includes('upload')) return <FaUpload className="text-blue-500" />;
  if (normalized.includes('bcrypt') || normalized.includes('jwt') || normalized.includes('token') || normalized.includes('session')) return <FaLock className="text-yellow-500" />;
  
  return null;
};

function Projects({ isDarkTheme }) {
  const projects = [
    {
      id: 1,
      title: 'WealthLens — AI Personal Finance Advisor',
      period: 'Nov 2024 - Dec 2024',
      description: 'A full-stack AI-powered financial advisor that analyzes monthly income and expenses to generate a personalized financial health report — including a 0–100 health score, spending breakdown, and goal feasibility — in under 10 seconds. Features a Node.js/Express backend integrating Groq’s Llama 3.3 70B model for structured JSON plans based on Indian salary and expense contexts.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'Groq API (Llama 3.3 70B)', 'Recharts'],
      githubUrl: 'https://github.com/khanjan2024/WealthLens',
      liveUrl: ''
    },
    {
      id: 2,
      title: 'MedHelp — Multiple Disease Recognition System',
      period: 'Sept 2024 - Oct 2024',
      description: 'A clinical decision-support web app that predicts risk across 4 diseases (diabetes, heart disease, liver disease, kidney disease) using 3 ML models — Logistic Regression, SVM, and a Neural Network — all implemented from scratch using pure NumPy. Streamlit app includes side-by-side model comparison, probability risk scores, and loss convergence curves.',
      technologies: ['Python', 'NumPy', 'Streamlit', 'Plotly'],
      githubUrl: 'https://github.com/khanjan2024/MedHelp',
      liveUrl: ''
    },
    {
      id: 3,
      title: 'CivicMitra — Civic Issue Reporting Platform',
      period: 'Jul 2024 - Aug 2024',
      description: 'A full-stack civic reporting platform enabling citizens to submit geo-tagged issue reports (potholes, garbage, street lights, etc.) with optional photo evidence. Implements role-based access control (citizen, authority, admin), session-based authentication, SQLite persistence, and disk-stored image management.',
      technologies: ['Node.js', 'Express.js', 'SQLite', 'EJS', 'Multer', 'bcryptjs'],
      githubUrl: 'https://github.com/khanjan2024/CivicMitra',
      liveUrl: ''
    },
    {
      id: 4,
      title: 'College Management System',
      period: 'May 2024 - Jun 2024',
      description: 'A comprehensive MERN-stack college management platform supporting three roles (admin, teacher, student) with features including attendance tracking, exam result management, assignment submission, timetable creation, and subject performance analytics. Deployed on Render/Netlify with MongoDB Atlas.',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Redux', 'JWT', 'Material-UI'],
      githubUrl: 'https://github.com/khanjan2024/StudentLifeManagementSystem',
      liveUrl: ''
    }
  ];

  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Dive Into My Work
      </h2>

      <p className="text-lg text-center text-secondary max-w-3xl mx-auto mb-10 leading-relaxed">
        Here's a peek at some of the cool stuff I've built over the years! From AI experiments to handy tools and just-for-fun projects, this is where I pour my ideas into code. Want to see what I've been up to lately? Check out my{' '}
        <a href="https://github.com/khanjan2024" className="underline font-medium font-pacifico text-[#1a73e8]">latest creations!</a>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`rounded-xl p-6 border hover:-translate-y-1 transition-transform duration-200 ${
              isDarkTheme
                ? 'bg-dark-card text-gray-200 border-dark-border'
                : 'bg-white border-gray-200'
            }`}
          >
            <h3 className="text-xl font-bold text-primary mb-3">
              {project.title}
            </h3>
            <div className="text-secondary text-sm mb-4">
              {project.period}
            </div>
            <p className="mb-5 leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-5">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${
                    isDarkTheme
                      ? 'bg-zinc-800 text-white border border-zinc-700'
                      : 'bg-gray-100 text-black border border-gray-200'
                  }`}
                >
                  <span className="mr-1 flex items-center">{getTechIcon(tech)}</span>
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm no-underline transition-colors duration-200 border font-bold ${
                  isDarkTheme
                    ? 'border-gray-300 !bg-white !text-black hover:!bg-gray-100'
                    : 'border-gray-300 bg-black text-white hover:bg-zinc-700'
                }`}
              >
                <FontAwesomeIcon icon={faGithub} />
                Repository
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm no-underline transition-colors duration-200 border font-bold ${
                    isDarkTheme
                      ? 'border-gray-300 !bg-white !text-black hover:!bg-gray-100'
                      : 'border-gray-300 bg-black text-white hover:bg-zinc-700'
                  }`}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
