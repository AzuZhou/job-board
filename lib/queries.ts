const jobsQuery = `query Jobs {
  jobPostings(orderBy: datePosted_DESC) {
    jobId
    title
    description
    company
    datePosted
    location {
      latitude
      longitude
    }
    modality
    experienceLevel
  }
}`;

const whereJobsQuery = `query Jobs($where: JobPostingWhereInput) {
  jobPostings(orderBy: datePosted_DESC, where: $where) {
    jobId
    title
    description
    company
    datePosted
    location {
      latitude
      longitude
    }
    modality
    experienceLevel
  }
}`;

export { jobsQuery, whereJobsQuery };
