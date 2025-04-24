import { useEffect, useRef, useState } from "react";
import { 
  Cpu, 
  Drill, 
  Users 
} from 'lucide-react';
import { PROGRAMMING_SKILLS, ML_SKILLS, HARDWARE_SKILLS, TOOLS_SKILLS, SOFT_SKILLS } from "@/lib/constants";
import { motion, useAnimation } from "framer-motion";
import { useTheme } from "../hooks/useTheme";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip, Legend } from 'recharts';

// Convert skill data to radar chart format
const formatSkillsForRadar = (skills: { name: string, level: number }[]) => {
  return skills.map(skill => ({
    subject: skill.name,
    value: skill.level,
    fullMark: 100
  }));
};

// Format data for combined radar chart
const formatCombinedRadarData = () => {
  const programmingData = PROGRAMMING_SKILLS.map(skill => ({ 
    subject: skill.name,
    Programming: skill.level,
    fullMark: 100
  }));
  
  const mlData = ML_SKILLS.map(skill => ({ 
    subject: skill.name,
    ML: skill.level,
    fullMark: 100
  }));
  
  // Create a combined dataset
  const hardwareData = HARDWARE_SKILLS.map((skill, index) => ({ 
    subject: skill,
    Hardware: 85 + (index % 3) * 5, // Generate values between 85-95
    fullMark: 100
  }));
  
  const toolsData = TOOLS_SKILLS.map((skill, index) => ({ 
    subject: skill,
    Tools: 80 + (index % 4) * 5, // Generate values between 80-95
    fullMark: 100
  }));
  
  const softData = SOFT_SKILLS.map((skill, index) => ({ 
    subject: skill,
    Soft: 85 + (index % 3) * 5, // Generate values between 85-95
    fullMark: 100
  }));
  
  return [...programmingData, ...mlData, ...hardwareData, ...toolsData, ...softData];
};

const SkillItem = ({ skill, icon, color }: { skill: string, icon: React.ReactNode, color: string }) => {
  const [hover, setHover] = useState(false);
  
  return (
    <motion.li 
      className={`flex items-center p-3 rounded-md transition-all duration-300 ${hover ? `${color.replace('text-', 'bg-')}/10` : ''}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      whileHover={{ x: 5 }}
    >
      <motion.div
        animate={{ 
          rotate: hover ? [0, -10, 10, -10, 0] : 0,
          scale: hover ? 1.2 : 1,
        }}
        transition={{ duration: 0.4 }}
        className={`${color} mr-3`}
      >
        {icon}
      </motion.div>
      <span className="text-text-secondary">{skill}</span>
    </motion.li>
  );
};

const SkillCard = ({ 
  title, 
  icon, 
  skills, 
  colorClass, 
  delay 
}: { 
  title: string, 
  icon: React.ReactNode, 
  skills: string[], 
  colorClass: string,
  delay: number
}) => {
  const { theme } = useTheme();
  
  return (
    <motion.div 
      className={`rounded-xl p-6 shadow-lg ${theme === 'light' ? 'bg-white' : 'bg-bg-secondary'} border border-${colorClass.split('-')[1]}/20`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay }}
      whileHover={{ y: -5, boxShadow: `0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1), 0 0 0 1px ${colorClass.split('-')[1] === 'primary' ? 'rgba(56, 189, 248, 0.2)' : colorClass.split('-')[1] === 'secondary' ? 'rgba(42, 174, 127, 0.2)' : 'rgba(168, 85, 247, 0.2)'}` }}
    >
      <h4 className="text-xl font-bold font-[Inter,sans-serif] mb-4 text-text-primary flex items-center">
        <motion.div 
          className={`${colorClass} h-6 w-6 mr-3`}
          animate={{ rotate: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        >
          {icon}
        </motion.div>
        {title}
      </h4>
      <ul className="space-y-1">
        {skills.map((skill, index) => (
          <SkillItem 
            key={index} 
            skill={skill} 
            icon={icon} 
            color={colorClass} 
          />
        ))}
      </ul>
    </motion.div>
  );
};

const RadarChartWithTooltip = ({ data, colors }: { 
  data: any[], 
  colors: { [key: string]: string } 
}) => {
  const { theme } = useTheme();
  const textColor = theme === 'light' ? '#333333' : '#f9fafb';
  
  return (
    <ResponsiveContainer width="100%" height={450}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid stroke={theme === 'light' ? "#ddd" : "#444"} />
        <PolarAngleAxis 
          dataKey="subject" 
          tick={{ fill: textColor, fontSize: 12 }}
          axisLine={{ stroke: theme === 'light' ? "#ddd" : "#444" }}
        />
        <PolarRadiusAxis 
          angle={30} 
          domain={[0, 100]} 
          tick={{ fill: textColor }}
          axisLine={{ stroke: theme === 'light' ? "#ddd" : "#444" }}
        />
        
        {Object.keys(colors).map((key) => (
          <Radar
            key={key}
            name={key}
            dataKey={key}
            stroke={colors[key]}
            fill={colors[key]}
            fillOpacity={0.5}
            isAnimationActive={true}
            animationBegin={300}
            animationDuration={1200}
            animationEasing="ease-out"
          />
        ))}
        
        <Tooltip 
          contentStyle={{ 
            backgroundColor: theme === 'light' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(30, 30, 30, 0.9)',
            borderColor: theme === 'light' ? '#ddd' : '#444',
            color: textColor,
            borderRadius: '8px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            padding: '8px 12px',
          }}
          labelStyle={{ fontWeight: 'bold', marginBottom: '5px' }}
        />
        
        <Legend 
          wrapperStyle={{ 
            paddingTop: '15px', 
            fontSize: '14px',
            color: textColor
          }}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const [chartKey, setChartKey] = useState(Date.now()); // For re-rendering chart on theme change
  
  // Update chart when theme changes
  useEffect(() => {
    setChartKey(Date.now());
  }, [theme]);
  
  // Prepare data for separate charts
  const programmingData = formatSkillsForRadar(PROGRAMMING_SKILLS);
  const mlData = formatSkillsForRadar(ML_SKILLS);
  
  // Prepare data for combined chart view
  const combinedData = formatCombinedRadarData();
  
  // Chart colors setup - Hacker theme
  const programmingChartColors = { 
    Programming: "#00ff00" // Terminal Green
  };
  
  const mlChartColors = { 
    ML: "#00ffff" // Cyan
  };
  
  const combinedChartColors = {
    Programming: "#00ff00", // Terminal Green
    ML: "#00ffff",         // Cyan
    Hardware: "#ff00ff",   // Magenta
    Tools: "#00ff8f",      // Light Green
    Soft: "#0099ff"        // Blue
  };
  
  const [activeChart, setActiveChart] = useState<'combined' | 'separate'>('combined');
  
  return (
    <section 
      id="skills" 
      className={`py-20 ${theme === 'light' ? 'bg-bg-secondary' : 'bg-[#151515]'}`} 
      ref={skillsRef}
    >
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold font-[Inter,sans-serif] mb-6 text-text-primary"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          >
            Technical <span className="text-[#00ff00] terminal-cursor">Skills</span>
          </motion.h2>
          
          <motion.div 
            className="h-1 w-16 bg-primary mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
          
          <motion.p 
            className="text-text-secondary max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            A comprehensive overview of my technical abilities and competencies.
          </motion.p>
        </motion.div>
        
        {/* Chart View Toggle */}
        <div className="flex justify-center mb-8 gap-4">
          <motion.button
            className={`px-4 py-2 rounded-md transition-all ${activeChart === 'combined' 
              ? `bg-primary text-white shadow-md` 
              : `bg-bg-tertiary text-text-secondary`}`}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveChart('combined')}
          >
            Combined View
          </motion.button>
          <motion.button
            className={`px-4 py-2 rounded-md transition-all ${activeChart === 'separate' 
              ? `bg-primary text-white shadow-md` 
              : `bg-bg-tertiary text-text-secondary`}`}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveChart('separate')}
          >
            Category View
          </motion.button>
        </div>
        
        {/* Radar Charts */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          {activeChart === 'combined' ? (
            <div className={`p-4 rounded-xl shadow-lg border-matrix-glow crt-effect ${theme === 'light' ? 'bg-white' : 'bg-bg-secondary'}`}>
              <h3 className="text-xl font-bold text-center mb-4 text-text-primary">Complete Skill Profile</h3>
              <RadarChartWithTooltip 
                key={`combined-${chartKey}`}
                data={combinedData} 
                colors={combinedChartColors}
              />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className={`p-4 rounded-xl shadow-lg border-matrix crt-effect ${theme === 'light' ? 'bg-white' : 'bg-bg-secondary'}`}>
                <h3 className="text-xl font-bold text-center mb-4 text-text-primary">Programming Skills</h3>
                <RadarChartWithTooltip 
                  key={`programming-${chartKey}`}
                  data={programmingData} 
                  colors={programmingChartColors} 
                />
              </div>
              <div className={`p-4 rounded-xl shadow-lg border-matrix crt-effect ${theme === 'light' ? 'bg-white' : 'bg-bg-secondary'}`}>
                <h3 className="text-xl font-bold text-center mb-4 text-text-primary">ML & AI Skills</h3>
                <RadarChartWithTooltip 
                  key={`ml-${chartKey}`}
                  data={mlData} 
                  colors={mlChartColors} 
                />
              </div>
            </div>
          )}
        </motion.div>
        
        {/* Additional Skills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SkillCard 
            title="Hardware & Electronics" 
            icon={<Cpu />} 
            skills={HARDWARE_SKILLS}
            colorClass="text-primary"
            delay={0}
          />
          
          <SkillCard 
            title="Tools & Platforms" 
            icon={<Drill />} 
            skills={TOOLS_SKILLS}
            colorClass="text-secondary"
            delay={0.2}
          />
          
          <SkillCard 
            title="Soft Skills" 
            icon={<Users />} 
            skills={SOFT_SKILLS}
            colorClass="text-accent"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
