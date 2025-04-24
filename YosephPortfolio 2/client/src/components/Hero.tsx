import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "../hooks/useTheme";

const Hero = () => {
  const controls = useAnimation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { theme } = useTheme();
  
  // Parallax effect for background elements
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  
  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);
  
  const backgroundVariants = {
    light: {
      background: "linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(217,234,255,0.6) 100%)"
    },
    dark: {
      background: "linear-gradient(135deg, rgba(18,18,18,0.6) 0%, rgba(30,30,30,0.6) 100%)"
    }
  };
  
  const svgMotionVariants = {
    initial: { pathLength: 0, opacity: 0 },
    animate: { 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        pathLength: { type: "spring", duration: 2, bounce: 0 },
        opacity: { duration: 0.5 }
      }
    }
  };
  
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center bg-gradient-animate relative overflow-hidden pt-16"
    >
      {/* Background particles / shapes */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${theme === 'light' ? 'bg-primary/10' : 'bg-white/5'}`}
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: mousePosition.x * (i % 2 ? -20 : 20),
              y: mousePosition.y * (i % 2 ? -20 : 20),
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
      
      <motion.div 
        className="absolute inset-0 z-0"
        variants={backgroundVariants}
        animate={theme === "light" ? "light" : "dark"}
        transition={{ duration: 0.8 }}
      ></motion.div>
      
      <div className="container mx-auto px-6 py-12 z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-4"
        >
          <motion.svg 
            width="70" 
            height="70" 
            viewBox="0 0 100 100" 
            className="mx-auto mb-3"
          >
            <motion.circle 
              cx="50" 
              cy="50" 
              r="45" 
              stroke="currentColor" 
              strokeWidth="2" 
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="text-[#38bdf8]"
            />
            <motion.path 
              d="M25,50 L45,70 L75,30" 
              stroke="currentColor" 
              strokeWidth="3" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              variants={svgMotionVariants}
              initial="initial"
              animate="animate"
              className="text-[#38bdf8]"
            />
          </motion.svg>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold font-[Inter,sans-serif] mb-6 leading-tight"
        >
          <span className="text-text-primary">Hello, I'm</span>
          <motion.span 
            className="text-[#38bdf8] block md:inline"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          > Yoseph Getachew</motion.span>
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="h-1 w-24 bg-primary mx-auto mb-8 origin-left"
        />
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-xl md:text-2xl font-light mb-12 text-text-secondary"
        >
          Specializing in
          <motion.span 
            className="font-semibold text-primary inline-block"
            whileHover={{ scale: 1.1, y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          > Robotics</motion.span>,
          <motion.span 
            className="font-semibold text-secondary inline-block"
            whileHover={{ scale: 1.1, y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          > Machine Learning</motion.span> &
          <motion.span 
            className="font-semibold text-accent inline-block"
            whileHover={{ scale: 1.1, y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          > Software Development</motion.span>
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex flex-col md:flex-row justify-center gap-4 md:gap-6"
        >
          <motion.a 
            href="#about" 
            className="px-8 py-3 bg-primary hover:bg-primary/80 text-white font-medium rounded-lg"
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(56, 189, 248, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Learn More
          </motion.a>
          <motion.a 
            href="#contact" 
            className={`px-8 py-3 bg-transparent border-2 text-text-primary font-medium rounded-lg ${theme === 'light' ? 'border-primary hover:border-primary/80 hover:text-primary/80' : 'border-[#f9fafb] hover:border-[#38bdf8] hover:text-[#38bdf8]'}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
      
      <motion.a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-text-primary/80 hover:text-text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        whileHover={{ y: 5 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <motion.path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 9l-7 7-7-7"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
          />
        </svg>
      </motion.a>
    </section>
  );
};

export default Hero;
