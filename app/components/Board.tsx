import React from "react";

import JobPreview from "./JobPreview";

import type { Job } from "@/lib/types";

const Board: React.FC<{ jobs: Job[] }> = ({ jobs }) => {
  return jobs.map((job) => <JobPreview key={job.jobId} {...job} />);
};

export default Board;
