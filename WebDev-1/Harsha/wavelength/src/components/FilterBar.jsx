import { CATEGORIES, SORT_OPTIONS } from '../hooks/useProductFilters.js'

export default function FilterBar({ category, onCategoryChange, sortOption, onSortChange, resultCount }) {
  return (
    <div className="sticky top-[73px] z-30 border-b border-vinyl-groove bg-vinyl-black/95 px-6 py-4 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => onCategoryChange(c)}
              aria-selected={c === category}
              className="rounded-full border border-vinyl-groove px-4 py-1.5 font-mono text-xs uppercase tracking-wide text-smoke transition-colors hover:border-copper hover:text-cream aria-selected:border-copper aria-selected:bg-copper aria-selected:text-vinyl-black"
            >
              {c}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <span className="font-mono text-xs text-smoke">
            {resultCount} {resultCount === 1 ? 'item' : 'items'}
          </span>
          <select
            value={sortOption}
            onChange={(e) => onSortChange(e.target.value)}
            aria-label="Sort products"
            className="rounded-sleeve border border-vinyl-groove bg-vinyl-panel px-3 py-1.5 font-mono text-xs text-cream focus:border-copper focus:outline-none"
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}
