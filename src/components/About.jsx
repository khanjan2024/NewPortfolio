
import { FaGraduationCap } from 'react-icons/fa';

function About({ isDarkTheme }) {

  const education = [
    {
      institution: 'Jorhat Institute of Science and Technology',
      degree: 'B.Tech in Electronics and Telecommunication Engineering',
      period: '2023 - 2027 (Expected)',
      location: 'Jorhat, Assam, India',
      courses: [
        'Data Structures and Algorithms (DSA)',
        'Object-Oriented Programming (OOPs)',
        'Computer Networks (CN)',
        'Operating Systems (OS)',
        'Database Management Systems (DBMS)',
        'System Design'
      ]
    }
  ];

  return (
    <div className="mb-16">
      <h2 className="text-4xl font-bold mb-8 text-primary text-center">
        About Me
      </h2>
      <div className={`max-w-4xl mx-auto mb-10 rounded-xl p-6 border ${
        isDarkTheme ? 'bg-dark-card border-dark-border text-gray-200' : 'bg-white border-gray-200'
      }`}>
        <h3 className="text-2xl font-semibold mb-3 text-left underline">My Journey in Technology</h3>
        <p className="text-lg leading-relaxed text-left">
          My journey with technology began in childhood, fueled by an insatiable curiosity. I was the kid who loved to tinker with machines, always eager to understand how they worked. While my attempts to repair them often ended up making things worse, each failed experiment was a lesson in what not to do, deepening my fascination with the inner workings of mechanical and electronic devices.
        </p>
        <p className="text-lg leading-relaxed mt-4 text-left">
          My first formal introduction to computers came in the 6th standard. The concepts captivated me, but access was a significant challenge. Without a computer at home and only limited time on school PCs, my learning was mostly theoretical, a world I could observe but not fully interact with.
        </p>
        <p className="text-lg leading-relaxed mt-4 text-left">
          That all changed in my first semester of college when I finally got my own PC. It was a gateway to endless possibilities. The initial hurdle was figuring out where to start in the vast field of programming. After some research, I dedicated my second semester to diving into full-stack development.
        </p>
        <p className="text-lg leading-relaxed mt-4 text-left">
          I progressed quickly. By the end of my third semester, I had solidified my understanding of the frontend, building a foundation in HTML, CSS, and JavaScript, and proving my skills by completing several basic projects. Eager to understand how everything worked behind the scenes, I deep-dived into backend architecture and server-side programming in my fourth semester.
        </p>
        <p className="text-lg leading-relaxed mt-4 text-left">
          Alongside web development, I recognized the importance of core computer science fundamentals. I began learning Data Structures and Algorithms (DSA) using C++ to strengthen my problem-solving abilities and computational thinking. I have been diligently practicing ever since and have successfully solved over 150 problems.
        </p>
        <p className="text-lg leading-relaxed mt-4 text-left">
          Today, I continue to hone my skills by practicing DSA daily and applying my knowledge to build cool, innovative projects. My journey from a curious kid taking apart gadgets to a budding developer building complex systems is ongoing, and I am excited to see what I will create next.
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <h3 className="text-4xl font-bold mb-6 text-primary underline decoration-blue-500 text-left">
          Education
        </h3>

        <div className="space-y-6">
          {education.map((edu, idx) => (
            <div key={idx} className="relative">
              <div className={`rounded-xl p-6 border ${
                isDarkTheme ? 'bg-dark-card border-dark-border text-gray-200' : 'bg-white border-gray-200'
              }`}>
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl flex-shrink-0 ${
                    isDarkTheme ? 'bg-zinc-800 text-[#1a73e8]' : 'bg-gray-100 text-[#1a73e8]'
                  }`}>
                    <FaGraduationCap />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-left">{edu.institution}</h3>
                    <p className={`text-md font-semibold text-left mt-1 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
                      {edu.degree}
                    </p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-sm text-secondary">
                      <span>{edu.period}</span>
                      <span>•</span>
                      <span>{edu.location}</span>
                    </div>
                    
                    {edu.courses && edu.courses.length > 0 && (
                      <div className="mt-4 text-left">
                        <p className={`text-sm font-semibold mb-2 ${isDarkTheme ? 'text-white' : 'text-black'}`}>
                          Relevant Coursework & Focus Areas:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {edu.courses.map((course, cIdx) => (
                            <span
                              key={cIdx}
                              className={`inline-flex items-center text-xs px-2.5 py-1 rounded-full border font-semibold ${
                                isDarkTheme 
                                  ? 'bg-zinc-800 border-zinc-700 text-gray-300' 
                                  : 'bg-gray-100 border-gray-200 text-gray-700'
                              }`}
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
