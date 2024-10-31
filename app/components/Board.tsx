"use client";

import React from "react";

export interface Job {
  jobId: number;
  title: string;
  description: string;
  datePosted: string;
  company: string;
  modality: string;
  experienceLevel: string;
}

interface BoardProps {
  jobs: Job[];
}

const Board: React.FC<BoardProps> = ({ jobs }) => {
  console.log("jobs: ", jobs);
  return <div className=""></div>;
};

export default Board;
