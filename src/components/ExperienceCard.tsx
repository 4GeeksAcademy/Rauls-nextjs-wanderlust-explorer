"use client";

import Link from "next/link";
import Image from "next/image";
import { Experience } from "@/types/experience";
import { useFavorites } from "@/context/FavoritesContext";

function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        d="M12 21s-7.2-4.6-9.6-8.6C.8 9.8 2 5.9 5.6 4.8c2.1-.7 4.5.1 6.4 2.2 1.9-2.1 4.3-2.9 6.4-2.2 3.6 1.1 4.8 5 3.2 7.6C19.2 16.4 12 21 12 21z"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const saved = isFavorite(experience.id);

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="relative">
        <Image
          src={experience.imageUrl}
          alt={experience.title}
          width={800}
          height={500}
          className="h-48 w-full object-cover"
        />
        <button
          type="button"
          onClick={() => toggleFavorite(experience.id)}
          aria-label={saved ? "Remove from favorites" : "Add to favorites"}
          className={`absolute right-3 top-3 rounded-full border p-2 transition ${
            saved
              ? "border-rose-300 bg-rose-100 text-rose-600"
              : "border-white/80 bg-white/90 text-slate-700 hover:bg-white"
          }`}
        >
          <HeartIcon filled={saved} />
        </button>
      </div>

      <div className="space-y-3 p-4">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-teal-50 px-2.5 py-1 text-xs font-semibold text-teal-700">
            {experience.category}
          </span>
          <span className="text-sm font-medium text-amber-600">{experience.rating} / 5</span>
        </div>

        <div>
          <h3 className="line-clamp-1 text-lg font-semibold text-slate-900">{experience.title}</h3>
          <p className="line-clamp-2 text-sm text-slate-600">{experience.description}</p>
        </div>

        <div className="flex items-center justify-between gap-3">
          <p className="text-sm text-slate-700">{experience.destination}</p>
          <p className="text-sm font-semibold text-slate-900">${experience.price}</p>
        </div>

        <Link
          href={`/experiences/${experience.id}`}
          className="inline-flex rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
        >
          View details
        </Link>
      </div>
    </article>
  );
}
