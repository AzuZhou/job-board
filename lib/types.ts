type Filter = {
  id: string;
  display: string;
};

type Filters = {
  [key: string]: Filter;
};

interface Job {
  jobId: number;
  title: string;
  description: string;
  datePosted: string;
  company: string;
  location: {
    latitude: number;
    longitude: number;
  };
  modality: string;
  experienceLevel: string;
}

type Modality = "remote" | "hybrid" | "onSite";

type ExperienceLevel = "internship" | "junior" | "midSenior" | "senior";

type SearchParams = {
  modality?: Modality;
  experienceLevel?: ExperienceLevel;
};

export type { Filter, Filters, Job, Modality, ExperienceLevel, SearchParams };
