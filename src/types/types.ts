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
  description_header?: string;
  description?: string;
  section_name?: SectionNames;
}

export interface Project {
  title: string;
  description: string;
  startDate: string;
  images: string[];
  url?: string;
  technologies?: Technology[];
}

export interface Experience {
  company: string;
  title: string;
  description: string;
  start_date: string;
  end_date?: string;
  years?: string;
  mainTech?: string[];
  technologies?: string[];
  icon?: string;
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
