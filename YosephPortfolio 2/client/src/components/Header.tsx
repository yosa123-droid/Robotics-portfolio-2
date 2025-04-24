import { useState } from "react";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full bg-bg-primary/90 backdrop-blur-md z-50 transition-all duration-300 ${scrollPosition > 50 ? 'py-2 shadow-md' : 'py-4'}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#hero" 
          className="text-2xl font-bold font-[Inter,sans-serif] tracking-tight text-[#38bdf8]"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <span className="text-text-primary">Yoseph</span> Getachew
        </motion.a>
        
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex space-x-5">
            <motion.a 
              href="#about" 
              className="transition-colors hover:text-[#38bdf8] relative group"
              whileHover={{ scale: 1.05 }}
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#38bdf8] transition-all group-hover:w-full"></span>
            </motion.a>
            <motion.a 
              href="#expertise" 
              className="transition-colors hover:text-[#38bdf8] relative group"
              whileHover={{ scale: 1.05 }}
            >
              Expertise
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#38bdf8] transition-all group-hover:w-full"></span>
            </motion.a>
            <motion.a 
              href="#skills" 
              className="transition-colors hover:text-[#38bdf8] relative group"
              whileHover={{ scale: 1.05 }}
            >
              Skills
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#38bdf8] transition-all group-hover:w-full"></span>
            </motion.a>
            <motion.a 
              href="#contact" 
              className="transition-colors hover:text-[#38bdf8] relative group"
              whileHover={{ scale: 1.05 }}
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#38bdf8] transition-all group-hover:w-full"></span>
            </motion.a>
          </nav>
          <ThemeToggle />
        </div>
        
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <button 
            className="text-text-primary focus:outline-none" 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </button>
        </div>
      </div>
      
      <div className={`md:hidden bg-bg-primary/95 backdrop-blur-md ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
          <motion.a 
            href="#about" 
            className="py-2 transition-colors hover:text-[#38bdf8]" 
            onClick={closeMobileMenu}
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            About
          </motion.a>
          <motion.a 
            href="#expertise" 
            className="py-2 transition-colors hover:text-[#38bdf8]" 
            onClick={closeMobileMenu}
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            Expertise
          </motion.a>
          <motion.a 
            href="#skills" 
            className="py-2 transition-colors hover:text-[#38bdf8]" 
            onClick={closeMobileMenu}
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            Skills
          </motion.a>
          <motion.a 
            href="#contact" 
            className="py-2 transition-colors hover:text-[#38bdf8]" 
            onClick={closeMobileMenu}
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact
          </motion.a>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
