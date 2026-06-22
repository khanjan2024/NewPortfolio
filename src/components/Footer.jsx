function Footer() {
	return (
		<footer className="pb-24 text-center">
			<div className="flex items-center justify-center mb-2">
				<span className="mr-1">Made with</span>
		
				<svg 
					xmlns="http://www.w3.org/2000/svg" 
					width="24" 
					height="24" 
					viewBox="0 0 24 24" 
					fill="none" 
					stroke="currentColor" 
					strokeWidth="2" 
					strokeLinecap="round" 
					strokeLinejoin="round" 
					className="lucide lucide-heart w-4 h-4 text-red-500 mx-1"
				>
					<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
				</svg>
				
				<span>by Khanjan Nath</span>
			</div>
			<div className="text-sm text-secondary">© 2025 Khanjan Nath. All rights reserved.</div>
		</footer>
	);
}

export default Footer;


