import { useTheme } from "../hooks/useTheme";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Only show theme toggle after hydration to avoid SSR issues
  useEffect(() => {
    setMounted(true);
  }, []);

  // Show a specific icon based on theme
  const renderIcon = () => {
    if (!mounted) return null;
    
    return (
      <>
        <motion.div
          initial={{ scale: 0.6, opacity: 0, rotate: -180 }}
          animate={{ 
            scale: theme === "dark" ? 1 : 0, 
            opacity: theme === "dark" ? 1 : 0,
            rotate: theme === "dark" ? 0 : -180
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Moon className="h-5 w-5 text-text-primary" />
        </motion.div>
        
        <motion.div
          initial={{ scale: 0.6, opacity: 0, rotate: 180 }}
          animate={{ 
            scale: theme === "light" ? 1 : 0, 
            opacity: theme === "light" ? 1 : 0,
            rotate: theme === "light" ? 0 : 180
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Sun className="h-5 w-5 text-text-primary" />
        </motion.div>
      </>
    );
  };

  return (
    <motion.button 
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className={`relative w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
        theme === 'dark' 
          ? 'hover:bg-gray-800 focus:bg-gray-800' 
          : 'hover:bg-gray-200 focus:bg-gray-200'
      } focus:outline-none`}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      {renderIcon()}
      
      {/* Animated background circle that expands on hover */}
      <motion.div 
        className="absolute inset-0 rounded-full opacity-0 pointer-events-none"
        initial={{ scale: 0 }}
        whileHover={{ scale: 1, opacity: 0.1 }}
        style={{ 
          backgroundColor: theme === 'dark' ? '#ffffff' : '#000000'
        }}
      />
    </motion.button>
  );
}