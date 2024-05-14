export interface Project {
  cohort: string;
  comments: string;
  onsentToShareRecieved: string;
  country: string;
  email: string;
  intranetID: string;
  kimba: string;
  name: string;
  projectDescription: string;
  projectTitle: string;
  score: string;
  slides: string;
  video: string;
}

export interface ParsedProject {
  consentToShareRecieved: boolean;
  kimba: boolean;
  cohort: string;
  comments: string;
  country: string;
  email: string;
  intranetID: string;
  name: string;
  projectDescription: string;
  projectTitle: string;
  score: string;
  slides: string;
  video: string;
}
