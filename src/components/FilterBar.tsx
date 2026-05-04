import { ExperienceCategory } from "@/types/experience";

interface FilterBarProps {
  category: "" | ExperienceCategory;
  destination: string;
  categories: ExperienceCategory[];
  destinations: string[];
  onCategoryChange: (nextCategory: "" | ExperienceCategory) => void;
  onDestinationChange: (nextDestination: string) => void;
  onReset: () => void;
}

export default function FilterBar({
  category,
  destination,
  categories,
  destinations,
  onCategoryChange,
  onDestinationChange,
  onReset,
}: FilterBarProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      <label className="block">
        <span className="mb-1 block text-sm font-medium text-slate-700">Category</span>
        <select
          value={category}
          onChange={(event) => onCategoryChange(event.target.value as "" | ExperienceCategory)}
          className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none ring-teal-500 transition focus:ring"
        >
          <option value="">All categories</option>
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="mb-1 block text-sm font-medium text-slate-700">Destination</span>
        <select
          value={destination}
          onChange={(event) => onDestinationChange(event.target.value)}
          className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none ring-teal-500 transition focus:ring"
        >
          <option value="">All destinations</option>
          {destinations.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>

      <div className="flex items-end">
        <button
          type="button"
          onClick={onReset}
          className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
        >
          Reset filters
        </button>
      </div>
    </div>
  );
}
