export interface Skill {
  name: string;
  level: number;
}

export interface Technology {
  name: string;
  color: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
  technologies: Technology[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
