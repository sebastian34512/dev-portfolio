export interface SocialLink {
  name: string;
  url: string;
  class: string;
}

export interface SkillIcon {
  name: string;
  class: string;
  level: string;
}

export interface Skills {
  icons?: SkillIcon[];
}

export interface Technology {
  name: string;
  class: string;
}

export interface SectionNames {
  about: string;
  projects: string;
  skills: string;
  experience: string;
}

export interface BasicInfo {
  name?: string;
  titles?: string[];
  social?: SocialLink[];
  image?: string;
  description_header?: string; // Neu hinzugefügt
  description?: string; // Neu hinzugefügt
  section_name?: SectionNames; // Neu hinzugefügt
}

export interface Project {
  title: string;
  description: string;
  startDate: string; // Neu hinzugefügt
  images: string[];
  url?: string; // Neu hinzugefügt
  technologies?: Technology[];
}

export interface Experience {
  company: string;
  title: string;
  description: string;
  start_date: string;
  end_date?: string;
  years?: string; // Neu hinzugefügt
  mainTech?: string[]; // Neu hinzugefügt
  technologies?: string[]; // Neu hinzugefügt
}

export interface ResumeData {
  basic_info?: BasicInfo;
  projects?: Project[];
  experience?: Experience[];
}

export interface SharedData {
  basic_info?: BasicInfo;
  skills?: Skills;
}
