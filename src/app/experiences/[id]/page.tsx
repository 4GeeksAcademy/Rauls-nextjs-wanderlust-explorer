"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useMemo } from "react";
import { useFavorites } from "@/context/FavoritesContext";
import { experiences } from "@/data/experiences";

export default function ExperienceDetailPage() {
  const params = useParams<{ id: string }>();
  const id = Number(params.id);
  const { isFavorite, toggleFavorite } = useFavorites();

  const experience = useMemo(() => experiences.find((item) => item.id === id), [id]);

  useEffect(() => {
    if (experience) {
      document.title = `${experience.title} | Wanderlust Labs`;
    } else {
      document.title = "Experience Not Found | Wanderlust Labs";
    }
  }, [experience]);

  if (!experience) {
    return (
      <main className="mx-auto flex min-h-[70vh] w-full max-w-3xl flex-col items-start justify-center gap-4 px-4 py-10 sm:px-6">
        <h1 className="text-3xl font-bold text-slate-900">Experience not found</h1>
        <p className="text-slate-600">The experience you selected does not exist.</p>
        <Link
          href="/experiences"
          className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
        >
          Back to explorer
        </Link>
      </main>
    );
  }

  const saved = isFavorite(experience.id);

  return (
    <main className="mx-auto w-full max-w-5xl space-y-6 px-4 py-8 sm:px-6">
      <Link href="/experiences" className="inline-flex text-sm font-medium text-teal-700 hover:text-teal-900">
        ← Back to experiences
      </Link>

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <Image
          src={experience.imageUrl}
          alt={experience.title}
          width={1200}
          height={720}
          className="h-72 w-full object-cover sm:h-96"
        />
        <div className="space-y-4 p-6 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-sm font-medium text-teal-700">{experience.category}</p>
              <h1 className="text-3xl font-bold tracking-tight text-slate-900">{experience.title}</h1>
              <p className="mt-1 text-slate-600">{experience.destination}</p>
            </div>
            <button
              type="button"
              onClick={() => toggleFavorite(experience.id)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                saved
                  ? "bg-rose-100 text-rose-700 hover:bg-rose-200"
                  : "bg-slate-900 text-white hover:bg-slate-700"
              }`}
            >
              {saved ? "Saved to favorites" : "Save to favorites"}
            </button>
          </div>

          <p className="max-w-3xl text-slate-700">{experience.description}</p>

          <div className="flex flex-wrap gap-4 text-sm text-slate-700">
            <p className="rounded-lg bg-slate-100 px-3 py-2">Price: ${experience.price}</p>
            <p className="rounded-lg bg-slate-100 px-3 py-2">Rating: {experience.rating} / 5</p>
          </div>
        </div>
      </div>
    </main>
  );
}
