import Board, { Job } from "./components/Board";

const getJobs = async (): Promise<{ jobPostings: Job[] }> => {
  const response = await fetch(process.env.HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query Jobs {
        jobPostings {
          jobId
          title
          description
          company
          datePosted
          modality
          experienceLevel
        }
      }`,
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.statusText}`);
  }

  const json = await response.json();
  return json.data;
};

export default async function Home() {
  const { jobPostings } = await getJobs();

  return <Board jobs={jobPostings} />;
}
