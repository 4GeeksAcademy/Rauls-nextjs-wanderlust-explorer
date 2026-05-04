import { useMemo } from "react";
import { Experience, ExperienceFilters } from "@/types/experience";

interface UseExperiencesResult {
  filteredExperiences: Experience[];
  destinationOptions: string[];
}

export function useExperiences(
  allExperiences: Experience[],
  filters: ExperienceFilters,
): UseExperiencesResult {
  const filteredExperiences = useMemo(() => {
    return allExperiences.filter((experience) => {
      const term = filters.search.trim();
      let titleMatches = true;

      if (term) {
        try {
          titleMatches = new RegExp(term, "i").test(experience.title);
        } catch {
          titleMatches = false;
        }
      }

      const categoryMatches = !filters.category || experience.category === filters.category;
      const destinationMatches =
        !filters.destination || experience.destination === filters.destination;

      return titleMatches && categoryMatches && destinationMatches;
    });
  }, [allExperiences, filters.category, filters.destination, filters.search]);

  const destinationOptions = useMemo(() => {
    return [...new Set(allExperiences.map((experience) => experience.destination))].sort();
  }, [allExperiences]);

  return { filteredExperiences, destinationOptions };
}
