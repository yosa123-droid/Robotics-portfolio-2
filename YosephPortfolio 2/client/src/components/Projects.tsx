import { PROJECTS } from "../lib/constants";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-[#121212]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold font-[Inter,sans-serif] mb-6 text-[#f9fafb]">
            Featured <span className="text-[#38bdf8]">Projects</span>
          </h2>
          
          <div className="h-1 w-16 bg-primary mx-auto mb-8"></div>
          
          <p className="text-[#f9fafb]/80 max-w-2xl mx-auto">
            A selection of projects that showcase my technical expertise and problem-solving abilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <div 
              key={project.id}
              className="project-card bg-[#121212]/30 rounded-xl overflow-hidden group reveal" 
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden h-56">
                <div className="w-full h-full bg-gradient-to-br from-primary via-secondary to-accent animate-gradient"></div>
                <div className="project-overlay absolute inset-0 bg-primary/80 backdrop-blur-sm flex items-center justify-center opacity-0 transition-opacity duration-300">
                  <div className="text-center p-6">
                    <a href={project.link} className="px-4 py-2 bg-[#f9fafb] text-primary rounded-lg font-medium hover:bg-[#f9fafb]/90 transition">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-[Inter,sans-serif] mb-2 text-[#f9fafb] group-hover:text-[#38bdf8] transition">
                  {project.title}
                </h3>
                <p className="text-[#f9fafb]/70 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className={`px-2 py-1 rounded text-xs`}
                      style={{
                        backgroundColor: `hsla(var(--${tech.color}), 0.1)`,
                        color: `hsla(var(--${tech.color}), 0.9)`
                      }}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 reveal">
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-[#38bdf8] text-[#38bdf8] hover:bg-[#38bdf8] hover:text-[#121212] font-medium rounded-lg transition-all duration-300"
          >
            View All Projects
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;