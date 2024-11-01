"use client";

import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";

import { ExperienceLevel, Modality, SearchParams } from "@/app/page";
import { modalities, experienceLevels } from "@/lib/constants";

const Filters: React.FC<SearchParams> = ({
  modality: initialModality,
  experienceLevel: initialExperienceLevel,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [modality, setModality] = useState<Modality | "">(
    initialModality ?? ""
  );
  const [experienceLevel, setExperienceLevel] = useState<ExperienceLevel | "">(
    initialExperienceLevel ?? ""
  );

  const applyFilters = () => {
    const params = new URLSearchParams();

    if (modality) params.set("modality", modality);
    if (experienceLevel) params.set("experienceLevel", experienceLevel);

    router.push(`?${params.toString()}`);
  };

  const clearFilters = () => {
    if (modality || experienceLevel) {
      if (modality) setModality("");
      if (experienceLevel) setExperienceLevel("");

      router.push("/");
    }
  };

  return (
    <div className="">
      <div>
        <Select
          onValueChange={(value: string) => {
            setModality(value ? (value as Modality) : "");
          }}
          value={modality}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Modality" />
          </SelectTrigger>
          <SelectContent>
            {Object.keys(modalities).map((key, index) => {
              const { id, display } = modalities[key];
              return (
                <SelectItem key={`modality-${index}-${id}}`} value={id}>
                  {display}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Select
          onValueChange={(value: string) => {
            setExperienceLevel(value ? (value as ExperienceLevel) : "");
          }}
          value={experienceLevel}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Experience Level" />
          </SelectTrigger>
          <SelectContent>
            {Object.keys(experienceLevels).map((key, index) => {
              const { id, display } = experienceLevels[key];
              return (
                <SelectItem key={`experience-level-${index}-${id}`} value={id}>
                  {display}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Button
          variant="secondary"
          onClick={clearFilters}
          disabled={!(modalities || experienceLevel)}
        >
          Clear
        </Button>
        <Button onClick={applyFilters}>Apply Filters</Button>
      </div>
    </div>
  );
};

export default Filters;
