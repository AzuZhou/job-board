"use client";

import type { Job } from "@/lib/types";

const JobPreview: React.FC<Job> = (job) => {
  console.log("job: ", job);

  return <div className="flex flex-col"></div>;
};

export default JobPreview;
