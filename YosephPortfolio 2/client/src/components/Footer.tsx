const Footer = () => {
  return (
    <footer className="py-12 bg-[#0C0C0C] text-[#f9fafb]/60">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#hero" className="text-2xl font-bold font-[Inter,sans-serif] tracking-tight text-[#f9fafb]">
              <span className="text-[#38bdf8]">Yoseph</span> Getachew
            </a>
            <p className="mt-2">Robotics Engineer & ML Specialist</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#about" className="hover:text-[#f9fafb] transition-colors">About</a>
            <a href="#expertise" className="hover:text-[#f9fafb] transition-colors">Expertise</a>
            <a href="#projects" className="hover:text-[#f9fafb] transition-colors">Projects</a>
            <a href="#skills" className="hover:text-[#f9fafb] transition-colors">Skills</a>
            <a href="#contact" className="hover:text-[#f9fafb] transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="border-t border-[#f9fafb]/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Yoseph Getachew. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Designed & Built with ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
