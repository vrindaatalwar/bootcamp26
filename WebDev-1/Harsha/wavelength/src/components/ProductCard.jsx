import { useCart } from '../context/CartContext.jsx'

export default function ProductCard({ product }) {
  const { addItem } = useCart()

  return (
    <article className="group overflow-hidden rounded-sleeve border border-vinyl-groove bg-vinyl-panel transition-colors hover:border-copper">
      <div className="aspect-square overflow-hidden bg-vinyl-groove">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <p className="font-mono text-[11px] uppercase tracking-wide text-copper-bright">
          {product.category}
        </p>
        <h3 className="mt-1 font-display text-xl italic text-cream">
          {product.name}
        </h3>
        {product.artist && (
          <p className="text-sm text-smoke">{product.artist}</p>
        )}
        <div className="mt-4 flex items-center justify-between">
          <span className="font-mono text-sm text-cream">
            ${product.price.toFixed(2)}
          </span>
          <button
            type="button"
            onClick={() => addItem(product.id)}
            className="rounded-sleeve border border-vinyl-groove px-3 py-1.5 font-mono text-xs text-cream transition-colors hover:border-copper hover:text-copper-bright"
          >
            Add
          </button>
        </div>
      </div>
    </article>
  )
}
