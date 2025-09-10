export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  name: string;
  short: string; // short teaser
  description?: string; // long description
  details?: string[]; // bullet points
  tags?: string[];
  links?: ProjectLink[];
}

