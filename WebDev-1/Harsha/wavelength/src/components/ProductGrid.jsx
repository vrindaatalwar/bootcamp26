import ProductCard from './ProductCard.jsx'

export default function ProductGrid({ products }) {
  if (products.length === 0) {
    return (
      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <p className="font-display text-2xl italic text-cream">
          No matches in the crate.
        </p>
        <p className="mt-2 text-sm text-smoke">
          Try a different search term or clear the category filter.
        </p>
      </section>
    )
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
