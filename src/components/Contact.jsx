import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faComments } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter, faHackerrank } from '@fortawesome/free-brands-svg-icons';
import { SiLeetcode, SiCodechef } from 'react-icons/si';

function Contact({ isDarkTheme }) {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: faGithub,
      url: 'https://github.com/khanjan2024',
      color: 'text-lg',
      isFontAwesome: true
    },
    {
      name: 'LeetCode',
      icon: SiLeetcode,
      url: 'https://leetcode.com/u/khanjannath12/',
      color: 'text-lg',
      isFontAwesome: false
    },
    {
      name: 'LinkedIn',
      icon: faLinkedin,
      url: 'https://www.linkedin.com/in/khanjan-nath-5035092ba',
      color: 'text-lg',
      isFontAwesome: true
    },
    {
      name: 'Twitter',
      icon: faTwitter,
      url: 'https://x.com/khanjan_nath05',
      color: 'text-lg',
      isFontAwesome: true
    },
    {
      name: 'CodeChef',
      icon: SiCodechef,
      url: 'https://www.codechef.com/users/khanjannath775',
      color: 'text-lg',
      isFontAwesome: false
    },
    {
      name: 'HackerRank',
      icon: faHackerrank,
      url: 'https://www.hackerrank.com/profile/khanjannath775',
      color: 'text-lg',
      isFontAwesome: true
    }
  ];

  return (
    <div className="mb-16">
      <div className={`rounded-xl p-10 shadow-lg text-center ${
        isDarkTheme ? 'bg-dark-card text-gray-200' : 'bg-white'
      }`}>
        <h2 className="text-4xl font-bold mb-8 text-primary">
          <FontAwesomeIcon icon={faEnvelope} className="mr-3" />
          Let's Connect
        </h2>
        <p className="text-lg mb-8">Explore my contributions, projects, and collaborations on these platforms:</p>
        
        <div className="flex flex-wrap justify-center gap-5 mb-10">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-5 py-3 border rounded-lg no-underline transition-all duration-200 ${
                isDarkTheme 
                  ? 'border-dark-border text-gray-200 hover:bg-zinc-800 hover:border-primary' 
                  : 'border-gray-200 text-gray-800 hover:bg-gray-50 hover:border-primary'
              }`}
            >
              {link.icon && (
                link.isFontAwesome ? 
                <FontAwesomeIcon icon={link.icon} className={link.color} /> : 
                <link.icon className={link.color} />
              )}
              {link.name}
            </a>
          ))}
        </div>

        <div className={`pt-8 border-t ${
          isDarkTheme ? 'border-dark-border' : 'border-gray-200'
        }`}>
          <h3 className="text-2xl font-bold mb-5 text-primary">
            <FontAwesomeIcon icon={faComments} className="mr-3" />
            Reach Out
          </h3>
          <p className="mb-5">Have a project idea, feedback, or just want to say hi?</p>
          <p>
            Feel free to drop me an{' '}
            <a 
              href="mailto:khanjannath775@gmail.com" 
              className="text-primary hover:underline"
            >
              <FontAwesomeIcon icon={faEnvelope} className="mr-1" />
              email
            </a>{' '}
            or connect with me on{' '}
            <a 
              href="https://www.linkedin.com/in/khanjan-nath-5035092ba" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              <FontAwesomeIcon icon={faLinkedin} className="mr-1" />
              LinkedIn
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
