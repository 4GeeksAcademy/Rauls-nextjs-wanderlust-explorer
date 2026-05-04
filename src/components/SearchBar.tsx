interface SearchBarProps {
  value: string;
  onChange: (nextValue: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <label className="block w-full">
      <span className="mb-1 block text-sm font-medium text-slate-700">Search by title</span>
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Try: sunrise, hidden, coastal..."
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none ring-teal-500 transition placeholder:text-slate-400 focus:ring"
      />
    </label>
  );
}
