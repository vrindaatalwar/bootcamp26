import { useMemo, useState } from 'react'
import products from '../data/products.json'

export const CATEGORIES = ['All', 'Vinyl', 'Turntables', 'Headphones', 'Accessories']

export const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
]

export function useProductFilters() {
  const [searchQuery, setSearchQuery] = useState('')
  const [category, setCategory] = useState('All')
  const [sortOption, setSortOption] = useState('featured')

  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()

    let result = products.filter((product) => {
      const matchesCategory = category === 'All' || product.category === category

      const matchesQuery =
        query === '' ||
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        (product.artist ?? '').toLowerCase().includes(query)

      return matchesCategory && matchesQuery
    })

    if (sortOption === 'price-asc') {
      result = [...result].sort((a, b) => a.price - b.price)
    } else if (sortOption === 'price-desc') {
      result = [...result].sort((a, b) => b.price - a.price)
    }

    return result
  }, [searchQuery, category, sortOption])

  return {
    searchQuery,
    setSearchQuery,
    category,
    setCategory,
    sortOption,
    setSortOption,
    filteredProducts,
  }
}
