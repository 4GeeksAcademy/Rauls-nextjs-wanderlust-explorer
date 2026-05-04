"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ExperienceCard from "@/components/ExperienceCard";
import FilterBar from "@/components/FilterBar";
import SearchBar from "@/components/SearchBar";
import { categories, destinations, experiences } from "@/data/experiences";
import { useExperiences } from "@/hooks/useExperiences";
import { ExperienceCategory } from "@/types/experience";

function readCategory(value: string | null): "" | ExperienceCategory {
  if (!value) return "";
  return categories.includes(value as ExperienceCategory) ? (value as ExperienceCategory) : "";
}

function readDestination(value: string | null): string {
  if (!value) return "";

  const normalized = value.trim().toLowerCase();

  const exactMatch = destinations.find(
    (destinationOption) => destinationOption.toLowerCase() === normalized,
  );
  if (exactMatch) return exactMatch;

  const countryMatch = destinations.find((destinationOption) =>
    destinationOption.toLowerCase().endsWith(`, ${normalized}`),
  );
  return countryMatch ?? "";
}

export default function ExperiencesPage() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const [search, setSearch] = useState(searchParams.get("search") ?? "");
  const [category, setCategory] = useState<"" | ExperienceCategory>(
    readCategory(searchParams.get("category")),
  );
  const [destination, setDestination] = useState(readDestination(searchParams.get("destination")));

  useEffect(() => {
    setSearch(searchParams.get("search") ?? "");
    setCategory(readCategory(searchParams.get("category")));
    setDestination(readDestination(searchParams.get("destination")));
  }, [searchParams]);

  const { filteredExperiences, destinationOptions } = useExperiences(experiences, {
    search,
    category,
    destination,
  });

  const updateUrl = useMemo(() => {
    return (next: { search?: string; category?: string; destination?: string }) => {
      const params = new URLSearchParams(searchParams.toString());

      if (next.search !== undefined) {
        if (next.search) params.set("search", next.search);
        else params.delete("search");
      }

      if (next.category !== undefined) {
        if (next.category) params.set("category", next.category);
        else params.delete("category");
      }

      if (next.destination !== undefined) {
        if (next.destination) params.set("destination", next.destination);
        else params.delete("destination");
      }

      const query = params.toString();
      router.replace(query ? `${pathname}?${query}` : pathname);
    };
  }, [pathname, router, searchParams]);

  return (
    <main className="mx-auto w-full max-w-6xl space-y-6 px-4 py-8 sm:px-6">
      <section className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Explore Experiences</h1>
        <p className="text-slate-600">
          Search by title and refine by category and destination.
        </p>
      </section>

      <section className="space-y-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
        <SearchBar
          value={search}
          onChange={(nextSearch) => {
            setSearch(nextSearch);
            updateUrl({ search: nextSearch });
          }}
        />

        <FilterBar
          category={category}
          destination={destination}
          categories={categories}
          destinations={destinationOptions}
          onCategoryChange={(nextCategory) => {
            setCategory(nextCategory);
            updateUrl({ category: nextCategory });
          }}
          onDestinationChange={(nextDestination) => {
            setDestination(nextDestination);
            updateUrl({ destination: nextDestination });
          }}
          onReset={() => {
            setSearch("");
            setCategory("");
            setDestination("");
            router.replace(pathname);
          }}
        />
      </section>

      {filteredExperiences.length === 0 ? (
        <section className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-600">
          No results found
        </section>
      ) : (
        <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {filteredExperiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </section>
      )}
    </main>
  );
}
