import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import FilterBar from './components/FilterBar.jsx'
import ProductGrid from './components/ProductGrid.jsx'
import CartDrawer from './components/CartDrawer.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { useProductFilters } from './hooks/useProductFilters.js'

export default function App() {
  const {
    searchQuery,
    setSearchQuery,
    category,
    setCategory,
    sortOption,
    setSortOption,
    filteredProducts,
  } = useProductFilters()

  return (
    <CartProvider>
      <div className="min-h-screen bg-vinyl-black">
        <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
        <Hero />
        <FilterBar
          category={category}
          onCategoryChange={setCategory}
          sortOption={sortOption}
          onSortChange={setSortOption}
          resultCount={filteredProducts.length}
        />
        <ProductGrid products={filteredProducts} />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
