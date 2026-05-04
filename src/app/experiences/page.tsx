import { Suspense } from "react";
import ExperiencesClient from "./ExperiencesClient";

export default function ExperiencesPage() {
  return (
    <Suspense
      fallback={
        <main className="mx-auto w-full max-w-6xl px-4 py-8 text-slate-600 sm:px-6">
          Loading experiences...
        </main>
      }
    >
      <ExperiencesClient />
    </Suspense>
  );
}
