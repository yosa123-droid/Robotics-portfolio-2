import { Project, Skill } from "@/types";

export const PROGRAMMING_SKILLS: Skill[] = [
  { name: "Python", level: 95 },
  { name: "C++", level: 85 },
  { name: "ROS (Robot Operating System)", level: 90 },
  { name: "JavaScript/Web Development", level: 80 },
  { name: "Embedded Systems", level: 85 },
];

export const ML_SKILLS: Skill[] = [
  { name: "TensorFlow/PyTorch", level: 90 },
  { name: "Computer Vision", level: 92 },
  { name: "Natural Language Processing", level: 85 },
  { name: "Reinforcement Learning", level: 88 },
  { name: "Data Analysis & Visualization", level: 90 },
];

export const HARDWARE_SKILLS: string[] = [
  "Microcontroller Programming",
  "Sensor Integration",
  "PCB Design",
  "Circuit Design & Analysis",
];

export const TOOLS_SKILLS: string[] = [
  "Git & Version Control",
  "Docker & Containerization",
  "Cloud Platforms (AWS, GCP)",
  "Linux/Unix Systems",
];

export const SOFT_SKILLS: string[] = [
  "Project Management",
  "Technical Writing",
  "Problem Solving",
  "Collaborative Development",
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Autonomous Navigation Robot",
    description: "Developed an autonomous robot capable of navigating complex environments using SLAM algorithms and sensor fusion.",
    link: "#",
    technologies: [
      { name: "Robotics", color: "primary" },
      { name: "ROS", color: "secondary" },
      { name: "SLAM", color: "accent" },
    ],
  },
  {
    id: 2,
    title: "Real-time Object Detection System",
    description: "Created a computer vision system for real-time object detection and tracking using deep learning models.",
    link: "#",
    technologies: [
      { name: "Computer Vision", color: "primary" },
      { name: "TensorFlow", color: "secondary" },
      { name: "Python", color: "accent" },
    ],
  },
  {
    id: 3,
    title: "Reinforcement Learning for Robotic Control",
    description: "Applied reinforcement learning algorithms to optimize robotic control systems for complex manipulation tasks.",
    link: "#",
    technologies: [
      { name: "Reinforcement Learning", color: "primary" },
      { name: "PyTorch", color: "secondary" },
      { name: "Robot Control", color: "accent" },
    ],
  },
];
