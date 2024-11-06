import Filters from "./components/Filters";
import Board from "./components/Board";

import type { Job, SearchParams } from "@/lib/types";
import { jobsQuery, whereJobsQuery } from "@/lib/queries";

const getStringifiedBody = (params: SearchParams) => {
  const hasParams = !!Object.keys(params).length;

  if (!hasParams) {
    return JSON.stringify({
      query: jobsQuery,
    });
  }

  let where = {};
  Object.entries(params).forEach(([paramKey, paramValue]) => {
    where = { ...where, [paramKey]: paramValue };
  });

  return JSON.stringify({ query: whereJobsQuery, variables: { where } });
};

const getJobs = async (
  params: SearchParams = {},
): Promise<{ jobPostings: Job[] }> => {
  const response = await fetch(process.env.HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: getStringifiedBody(params),
  });

  if (!response.ok) {
    console.error(`Failed to fetch data: ${await response.text()}`);
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
    <div className="flex min-h-screen flex-col p-5 md:container md:mx-auto md:p-8">
      <Filters {...searchParams} />
      {!!jobPostings.length ? <Board jobs={jobPostings} /> : null}
    </div>
  );
}
