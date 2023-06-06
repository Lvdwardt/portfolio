export type ProjectList = {
  id: string;
  title: string;
  quote: string;
  logo: string;
  projectImage: string;
  projectImageLight: string;
  coverImage: string;
  translate: string;
  width: string;
  url: string;
  grid: string;
  order: string;
  description: string;
  workedOn: {
    work: string;
  }[];
  newSkills: {
    skill: string;
  }[];
  icons: {
    icon: JSX.Element;
    url: string;
  }[];
  githubUrl?: string;
};
