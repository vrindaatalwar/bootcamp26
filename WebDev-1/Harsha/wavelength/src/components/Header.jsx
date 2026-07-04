import { useCart } from '../context/CartContext.jsx'

export default function Header({ searchQuery, onSearchChange }) {
  const { itemCount, openCart } = useCart()

  return (
    <header className="sticky top-0 z-40 border-b border-vinyl-groove bg-vinyl-black/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <a href="#top" className="font-display text-2xl italic text-cream">
          Wavelength
        </a>

        <div className="hidden flex-1 max-w-md md:block">
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search records, gear, artists…"
            aria-label="Search products"
            className="w-full rounded-sleeve border border-vinyl-groove bg-vinyl-panel px-4 py-2 font-mono text-sm text-cream placeholder:text-smoke focus:border-copper focus:outline-none"
          />
        </div>

        <button
          type="button"
          onClick={openCart}
          className="flex items-center gap-2 rounded-sleeve border border-vinyl-groove px-4 py-2 font-mono text-sm text-cream transition-colors hover:border-copper hover:text-copper-bright"
        >
          Cart
          <span className="rounded-full bg-copper px-2 py-0.5 text-xs text-vinyl-black">
            {itemCount}
          </span>
        </button>
      </div>

      {/* Mobile search — same state, just a second input for narrow screens */}
      <div className="px-6 pb-4 md:hidden">
        <input
          type="search"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search records, gear, artists…"
          aria-label="Search products"
          className="w-full rounded-sleeve border border-vinyl-groove bg-vinyl-panel px-4 py-2 font-mono text-sm text-cream placeholder:text-smoke focus:border-copper focus:outline-none"
        />
      </div>
    </header>
  )
}
