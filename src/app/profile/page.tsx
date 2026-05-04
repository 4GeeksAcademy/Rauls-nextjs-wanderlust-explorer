"use client";

import { useFavorites } from "@/context/FavoritesContext";

export default function ProfilePage() {
  const { favoriteIds } = useFavorites();

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6">
      <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="bg-gradient-to-r from-teal-600 to-cyan-600 px-6 py-10 text-white sm:px-8">
          <p className="text-sm font-medium uppercase tracking-wide text-teal-100">Wanderlust Labs</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">Traveler Profile</h1>
        </div>

        <div className="space-y-4 p-6 sm:p-8">
          <div>
            <p className="text-sm text-slate-500">Name</p>
            <p className="text-lg font-semibold text-slate-900">Alex Rivera</p>
          </div>
          <div>
            <p className="text-sm text-slate-500">Membership</p>
            <p className="text-lg font-semibold text-slate-900">Explorer Plus</p>
          </div>
          <div>
            <p className="text-sm text-slate-500">Bio</p>
            <p className="text-slate-700">
              Curious about culture, food, and off-grid escapes with local experts.
            </p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <p className="text-sm text-slate-500">Saved favorites</p>
            <p className="text-2xl font-bold text-slate-900">{favoriteIds.length}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
