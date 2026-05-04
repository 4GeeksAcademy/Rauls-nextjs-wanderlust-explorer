"use client";

import Link from "next/link";
import ExperienceCard from "@/components/ExperienceCard";
import { useFavorites } from "@/context/FavoritesContext";
import { experiences } from "@/data/experiences";

export default function FavoritesPage() {
  const { favoriteIds } = useFavorites();
  const favoriteExperiences = experiences.filter((item) => favoriteIds.includes(item.id));

  return (
    <main className="mx-auto w-full max-w-6xl space-y-6 px-4 py-8 sm:px-6">
      <section className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Your Favorites</h1>
        <p className="text-slate-600">Saved experiences in this session: {favoriteIds.length}</p>
      </section>

      {favoriteExperiences.length === 0 ? (
        <section className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
          <p className="text-slate-600">No favorites yet.</p>
          <Link
            href="/experiences"
            className="mt-4 inline-flex rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            Discover experiences
          </Link>
        </section>
      ) : (
        <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {favoriteExperiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </section>
      )}
    </main>
  );
}
