type Filter = {
  id: string;
  display: string;
};

type Filters = {
  [key: string]: Filter;
};

export const modalities: Filters = {
  REMOTE: { id: "remote", display: "Remote" },
  HYBRID: { id: "hybrid", display: "Hybrid" },
  ON_SITE: { id: "onSite", display: "On-Site" },
};

export const experienceLevels: Filters = {
  INTERNSHIP: { id: "internship", display: "Internship" },
  JUNIOR: { id: "junior", display: "Junior" },
  MID_SENIOR: { id: "midSenior", display: "Mid-Senior" },
  SENIOR: { id: "senior", display: "Senior" },
};
