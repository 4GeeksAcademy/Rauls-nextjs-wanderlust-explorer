import Link from "next/link";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_15%,#99f6e4_0%,transparent_35%),radial-gradient(circle_at_85%_0%,#67e8f9_0%,transparent_30%),linear-gradient(180deg,#f8fafc,#e2e8f0)]" />

      <section className="mx-auto flex min-h-[78vh] w-full max-w-6xl flex-col items-start justify-center px-4 py-16 sm:px-6">
        <p className="rounded-full border border-teal-200 bg-teal-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">
          Wanderlust Labs MVP
        </p>
        <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          Find your next unforgettable travel experience.
        </h1>
        <p className="mt-5 max-w-2xl text-base text-slate-700 sm:text-lg">
          Discover curated adventures, cultural deep-dives, food trails, and nature escapes in destinations around the world.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/experiences"
            className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 sm:text-base"
          >
            Explore experiences
          </Link>
          <Link
            href="/favorites"
            className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 sm:text-base"
          >
            View favorites
          </Link>
        </div>
      </section>
    </main>
  );
}
