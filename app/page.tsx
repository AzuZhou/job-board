import Board, { Job } from "./components/Board";
import Filter from "./components/Filter";

export type Modality = "internship" | "junior" | "midSenior" | "senior";

export type ExperienceLevel = "remote" | "hybrid" | "onSite";

export type SearchParams = {
  modality?: Modality;
  experienceLevel?: ExperienceLevel;
};

const getJobs = async (
  params: SearchParams = {}
): Promise<{ jobPostings: Job[] }> => {
  const response = await fetch(process.env.HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query Jobs {
        jobPostings(orderBy: datePosted_DESC)  {
          jobId
          title
          description
          company
          datePosted
          modality
          experienceLevel
        }
        }`,
      variables: params,
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.statusText}`);
  }

  const json = await response.json();
  return json.data;
};

export default async function Home({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { jobPostings } = await getJobs(searchParams);

  return (
    <div className="flex flex-col">
      <Board jobs={jobPostings} />
      <Filter />
    </div>
  );
}
