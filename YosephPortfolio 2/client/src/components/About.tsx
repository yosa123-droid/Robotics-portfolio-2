const About = () => {
  return (
    <section id="about" className="py-20 bg-[#121212] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <div className="relative">
              <div className="w-full h-[400px] bg-gradient-to-tr from-primary to-accent rounded-lg overflow-hidden">
                <div className="w-full h-full bg-[#121212] opacity-50 mix-blend-overlay"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-secondary rounded-lg"></div>
            </div>
          </div>
          
          <div className="reveal" style={{ transitionDelay: "0.2s" }}>
            <h2 className="text-3xl md:text-4xl font-bold font-[Inter,sans-serif] mb-6 text-[#f9fafb]">
              About <span className="text-[#38bdf8]">Me</span>
            </h2>
            
            <div className="h-1 w-16 bg-primary mb-8"></div>
            
            <p className="text-[#f9fafb]/90 mb-6 leading-relaxed">
              I'm a passionate Robotics Engineer and Machine Learning Specialist with extensive experience in developing innovative solutions at the intersection of hardware and software.
            </p>
            
            <p className="text-[#f9fafb]/90 mb-6 leading-relaxed">
              My journey in technology began with a fascination for how machines could be programmed to perform complex tasks. This curiosity led me to explore robotics systems, computer vision applications, and artificial intelligence algorithms.
            </p>
            
            <p className="text-[#f9fafb]/90 mb-8 leading-relaxed">
              I believe in creating technology that solves real-world problems and enhances human capabilities rather than replacing them.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-[#121212] border border-primary/30 text-primary rounded-full text-sm">Robotics Engineer</span>
              <span className="px-4 py-2 bg-[#121212] border border-secondary/30 text-secondary rounded-full text-sm">ML Specialist</span>
              <span className="px-4 py-2 bg-[#121212] border border-accent/30 text-accent rounded-full text-sm">Software Developer</span>
              <span className="px-4 py-2 bg-[#121212] border border-[#38bdf8]/30 text-[#38bdf8] rounded-full text-sm">Problem Solver</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
