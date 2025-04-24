import { 
  Brain, 
  Code, 
  Bot, 
  CheckCircle
} from 'lucide-react';

const Expertise = () => {
  return (
    <section id="expertise" className="py-20 bg-[#151515]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold font-[Inter,sans-serif] mb-6 text-[#f9fafb]">
            My <span className="text-[#38bdf8]">Expertise</span>
          </h2>
          
          <div className="h-1 w-16 bg-primary mx-auto mb-8"></div>
          
          <p className="text-[#f9fafb]/80 max-w-2xl mx-auto">
            My technical background spans multiple disciplines, allowing me to approach problems from different angles and create innovative solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Robotics Card */}
          <div className="bg-[#121212]/50 rounded-xl p-8 border border-primary/20 hover:border-primary/50 transition-all duration-300 reveal">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <Bot className="text-primary text-3xl" />
            </div>
            
            <h3 className="text-xl font-bold font-[Inter,sans-serif] mb-4 text-[#f9fafb]">Robotics Engineering</h3>
            
            <p className="text-[#f9fafb]/70 mb-6 leading-relaxed">
              Specialized in designing, building, and programming robotic systems for various applications. My expertise includes:
            </p>
            
            <ul className="space-y-2 mb-6">
              {[
                "Autonomous navigation systems",
                "Sensor integration and fusion",
                "Control system design",
                "ROS (Bot Operating System)",
                "Hardware prototyping"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="text-primary h-5 w-5 mt-1 mr-2" />
                  <span className="text-[#f9fafb]/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Coding Card */}
          <div className="bg-[#121212]/50 rounded-xl p-8 border border-secondary/20 hover:border-secondary/50 transition-all duration-300 reveal" style={{ transitionDelay: "0.2s" }}>
            <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
              <Code className="text-secondary text-3xl" />
            </div>
            
            <h3 className="text-xl font-bold font-[Inter,sans-serif] mb-4 text-[#f9fafb]">Software Development</h3>
            
            <p className="text-[#f9fafb]/70 mb-6 leading-relaxed">
              Proficient in multiple programming languages and frameworks with a focus on efficient, scalable code. My coding expertise includes:
            </p>
            
            <ul className="space-y-2 mb-6">
              {[
                "Python, C++, JavaScript",
                "Embedded systems programming",
                "Web and mobile application development",
                "Database design and management",
                "RESTful API development"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="text-secondary h-5 w-5 mt-1 mr-2" />
                  <span className="text-[#f9fafb]/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Machine Learning Card */}
          <div className="bg-[#121212]/50 rounded-xl p-8 border border-accent/20 hover:border-accent/50 transition-all duration-300 reveal" style={{ transitionDelay: "0.4s" }}>
            <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
              <Brain className="text-accent text-3xl" />
            </div>
            
            <h3 className="text-xl font-bold font-[Inter,sans-serif] mb-4 text-[#f9fafb]">Machine Learning</h3>
            
            <p className="text-[#f9fafb]/70 mb-6 leading-relaxed">
              Experienced in developing and deploying machine learning models for various applications. My ML expertise includes:
            </p>
            
            <ul className="space-y-2 mb-6">
              {[
                "Computer vision and image processing",
                "Deep learning with TensorFlow/PyTorch",
                "Natural language processing",
                "Reinforcement learning",
                "Data analysis and visualization"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="text-accent h-5 w-5 mt-1 mr-2" />
                  <span className="text-[#f9fafb]/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
