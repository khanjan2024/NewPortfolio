import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faHackerrank } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { SiLeetcode, SiCodechef } from 'react-icons/si';


function Home({ isDarkTheme, onViewProjects }) {
	const previewProjects = [
		{
			id: 1,
			title: 'WealthLens — AI Personal Finance Advisor',
			period: 'Nov 2024 - Dec 2024',
			description:
				'A full-stack AI-powered financial advisor that analyzes monthly income and expenses to generate a personalized financial health report — including a 0–100 health score, spending breakdown, and goal feasibility — in under 10 seconds.',
			tags: ['React.js', 'Node.js', 'Express.js', 'Groq API', 'Recharts'],
			githubUrl: 'https://github.com/khanjan2024/WealthLens',
			liveUrl: 'https://wealth-lens-git-main-khanjan-naths-projects.vercel.app/',
		},
		{
			id: 2,
			title: 'MedHelp — Multiple Disease Recognition System',
			period: 'Sept 2024 - Oct 2024',
			description:
				'A clinical decision-support web app that predicts risk across 4 diseases (diabetes, heart disease, liver disease, kidney disease) using 3 ML models — Logistic Regression, SVM, and a Neural Network — all implemented from scratch using pure NumPy.',
			tags: ['Python', 'NumPy', 'Streamlit', 'Plotly'],
			githubUrl: 'https://github.com/khanjan2024/MedHelp',
			liveUrl: 'https://med2026.streamlit.app/',
		},
		{
			id: 3,
			title: 'CivicMitra — Civic Issue Reporting Platform',
			period: 'Jul 2024 - Aug 2024',
			description:
				'A full-stack civic reporting platform enabling citizens to submit geo-tagged issue reports (potholes, garbage, street lights, etc.) with optional photo evidence, supporting both authenticated and anonymous submissions.',
			tags: ['Node.js', 'Express.js', 'SQLite', 'EJS', 'Multer', 'bcryptjs'],
			githubUrl: 'https://github.com/khanjan2024/CivicMitra',
			liveUrl: 'https://civicpulse-lznp.onrender.com/',
		},
	];

	// Additional content blocks
	const coreSkills = ['C', 'C++', 'HTML5', 'CSS3', 'JavaScript'];
	const techSkills = ['ReactJS','NodeJS','ExpressJS','MongoDB','TailwindCSS','Postman'];
	const exploring = ['Computer Networks','Operating Systems','DBMS','Data Structures and Algorithms','System Design'];

	return (
		<div className="mb-16">
			{/* Hero */}
			<div className="flex flex-col sm:flex-row items-start justify-between gap-6 mb-12 mt-16">
				<div className="max-w-2xl text-left">
					<h1 className={`text-5xl font-bolder mb-4 font-pacifico ${isDarkTheme ? 'text-white' : 'text-primary'}`}>Hi, I'm Khanjan <span className="inline-block">👋</span></h1>
					<h2 className={`text-xl sm:text-2xl mb-3 ${isDarkTheme ? 'text-gray-300' : 'text-secondary'}`}>Khanjan Nath | khanjan2024</h2>
					<div className={`w-full h-px mb-4 ${isDarkTheme ? 'bg-dark-border' : 'bg-gray-300'}`}></div>
					<p className={`text-lg sm:text-xl leading-relaxed ${isDarkTheme ? 'text-gray-300' : 'text-secondary'}`}>
					Aspiring software developer with a strong interest in full-stack development and data structures, currently learning how to design and scale applications using system design principles.
					</p>
				</div>
				<div className={`relative w-32 h-32 sm:w-48 sm:h-48 rounded-full flex items-center justify-center border shadow overflow-hidden ${isDarkTheme ? 'bg-dark-card border-dark-border text-white' : 'bg-white border-gray-200 text-black'}`}>
					<img 
						className="rounded-full w-full h-full " 
						src="/myphoto-photoaidcom-cropped.jpg" 
						alt="Khanjan Nath"
					/>
				</div>
			</div>

			{/* About blurb */}
			<section className="mb-12">
				<h2 className={`text-2xl font-bolder mb-3 relative inline-block font-pacifico ${isDarkTheme ? 'text-white' : 'text-black'}`}>
					About
					<div className={`absolute bottom-0 left-0 w-full h-1 -mb-1 bg-primary`}></div>
				</h2>
				<p className={`leading-relaxed ${isDarkTheme ? 'text-gray-300' : 'text-secondary'}`}>
				I am an aspiring software developer from an Electronics and Telecommunication background with a strong passion for full-stack development and system design. While my academic foundation lies in E&TE, I have actively transitioned into software development, gaining hands-on experience in building web applications and exploring modern technologies. To strengthen my technical expertise, I am also enhancing my problem-solving skills through data structures and algorithms while diving deeper into core computer science subjects such as operating systems, computer networks, and databases. With this blend of interdisciplinary knowledge and practical coding experience, I aim to build scalable and impactful software solutions.
				</p>
			</section>

			{/* Skills */}
			<section className="mb-12">
				<h2 className={`text-2xl font-bolder mb-3 relative inline-block font-pacifico ${isDarkTheme ? 'text-white' : 'text-black'}`}>
					Skills
					<div className={`absolute bottom-0 left-0 w-full h-1 -mb-1 bg-primary`}></div>
				</h2>
				<div className="flex flex-wrap gap-2 mb-2">
					{coreSkills.map((s, i) => (
						<span key={i} className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${isDarkTheme ? '!bg-white !text-black' : 'bg-black text-white'}`}>{s}</span>
					))}
				</div>
				<div className={`my-4 w-full h-px ${isDarkTheme ? 'bg-dark-border' : 'bg-gray-300'}`}></div>
				<div className="flex flex-wrap gap-2 mb-6">
					{techSkills.map((s, i) => (
						<span key={i} className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${isDarkTheme ? '!bg-white !text-black' : 'bg-black text-white'}`}>{s}</span>
					))}
				</div>
				<p className={`underline text-lg font-medium mb-3 ${isDarkTheme ? 'text-white' : 'text-black'}`}>Currently exploring:</p>
				<div className="flex flex-wrap gap-2">
					{exploring.map((s, i) => (
						<span key={i} className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${isDarkTheme ? '!bg-white !text-black' : 'bg-black text-white'}`}>{s}</span>
					))}
				</div>
			</section>

			{/* Resume CTA */}
			<section className="mt-12 text-center">
				<h2 className={`text-4xl font-bold mb-2 ${isDarkTheme ? 'text-white' : 'text-black'}`}>My Resume</h2>
				<p className={`text-lg mb-4 ${isDarkTheme ? 'text-gray-300' : 'text-secondary'}`}>Interested in my professional journey? View my resume.</p>
				<a href="https://1drv.ms/b/c/a0cea92a671f6243/EXwq3RdZ3M1JutS8S3nSG4QBvGZ-pCr3t6b1jAslscmpVA?e=rm57TL" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center justify-center gap-2 h-10 px-4 py-2 rounded-md transition-colors ${isDarkTheme ? '!bg-white !text-black hover:!bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}>
					<FontAwesomeIcon icon={faFile} />
					View Resume
				</a>
			</section>

			{/* Projects preview */}
			<section className="mt-12 text-center">
				<h2 className={`text-3xl font-bold mb-6 ${isDarkTheme ? 'text-white' : 'text-black'}`}>My Latest Work</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
					{previewProjects.map((p) => (
						<div key={p.id} className={`rounded-xl p-6 border hover:-translate-y-1 transition-transform duration-200 text-left ${isDarkTheme ? 'bg-dark-card text-gray-200 border-dark-border' : 'bg-white border-gray-200'}`}>
							<h3 className="text-xl font-bold text-primary mb-3">{p.title}</h3>
							<div className="text-secondary text-sm mb-4">{p.period}</div>
							<p className="mb-5 leading-relaxed">{p.description}</p>
							<div className="flex flex-wrap gap-2 mb-5">
								{p.tags.map((t, i) => (
									<span key={i} className={`${isDarkTheme ? 'bg-zinc-600 text-white' : 'bg-gray-200 text-black font-bold'} px-3 py-1 rounded-full text-xs`}>{t}</span>
								))}
							</div>
							<div className="flex gap-3">
								<a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm no-underline transition-colors duration-200 border font-bold ${isDarkTheme ? 'border-gray-300 !bg-white !text-black hover:!bg-gray-100' : 'border-gray-300 bg-black text-white hover:bg-zinc-700'}`}>
									<FontAwesomeIcon icon={faGithub} />
									Repository
								</a>
								{p.liveUrl && (
									<a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm no-underline transition-colors duration-200 border font-bold ${isDarkTheme ? 'border-gray-300 !bg-white !text-black hover:!bg-gray-100' : 'border-gray-300 bg-black text-white hover:bg-zinc-700'}`}>
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
				<div className="mt-6">
					<button onClick={onViewProjects} className={`text-xl underline decoration-[#1a73e8] cursor-pointer text-[#1a73e8]`}>View all projects</button>
				</div>
			</section>

			{/* Let's Connect */}
			<section className="mt-16 text-center">
				<h2 className={`text-4xl font-bold mb-3 ${isDarkTheme ? 'text-white' : 'text-black'}`}>Let's Connect</h2>
				<p className={`text-lg mb-4 ${isDarkTheme ? 'text-gray-300' : 'text-secondary'}`}>Explore my contributions, projects, and collaborations on these platforms:</p>
				<div className="flex flex-wrap gap-3 justify-center">
					{[
						{ label: 'GitHub', icon: faGithub, url: 'https://github.com/khanjan2024', isFontAwesome: true },
						{ label: 'LeetCode', icon: SiLeetcode, url: 'https://leetcode.com/u/khanjannath12/', isFontAwesome: false },
						{ label: 'LinkedIn', icon: faLinkedin, url: 'https://www.linkedin.com/in/khanjan-nath-5035092ba/', isFontAwesome: true },
						{ label: 'Twitter', icon: faTwitter, url: 'https://x.com/khanjan_nath05', isFontAwesome: true },
						{ label: 'CodeChef', icon: SiCodechef, url: 'https://www.codechef.com/users/khanjannath775', isFontAwesome: false },
						{ label: 'HackerRank', icon: faHackerrank, url: 'https://www.hackerrank.com/profile/khanjannath775', isFontAwesome: true }
					].map((platform, i) => (
						<a key={i} href={platform.url} className={`justify-center gap-2 rounded-md text-sm h-10 px-4 py-2 border inline-flex items-center transition-colors ${isDarkTheme ? 'border-dark-border hover:bg-zinc-800 text-gray-300' : 'border-gray-300 hover:bg-gray-50 text-gray-600'}`}>
							{platform.icon && (
								platform.isFontAwesome ? 
								<FontAwesomeIcon icon={platform.icon} /> : 
								<platform.icon />
							)}
							{platform.label}
						</a>
					))}
				</div>
			</section>

			{/* Reach Out */}
			<section className="mt-12 text-center">
				<h2 className={`text-4xl font-bold mb-2 ${isDarkTheme ? 'text-white' : 'text-black'}`}>Reach Out</h2>
				<p className={`text-lg mb-2 ${isDarkTheme ? 'text-gray-300' : 'text-secondary'}`}>Have a project idea, feedback, or just want to say hi?</p>
				<p className={`text-lg ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'}`}>Feel free to drop me an <a className="underline font-pacifico text-[#1a73e8]" href="mailto:khanjannath775@gmail.com">email</a> or connect with me on <a className="underline font-pacifico text-[#1a73e8]" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/khanjan-nath-5035092ba">LinkedIn</a>.</p>
			</section>
		</div>
	);
}

export default Home;
