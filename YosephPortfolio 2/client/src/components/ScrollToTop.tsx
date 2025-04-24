import { useState, useEffect } from "react";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const scrollPosition = useScrollPosition();
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    setVisible(scrollPosition > 300);
  }, [scrollPosition]);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-lg transform transition-all duration-300 hover:scale-110 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
};

export default ScrollToTop;
