import { createContext, useContext, useMemo, useState, useCallback } from 'react'
import products from '../data/products.json'

const CartContext = createContext(null)

const SHIPPING_FLAT_RATE = 6.99
const FREE_SHIPPING_THRESHOLD = 75
const TAX_RATE = 0.08

export function CartProvider({ children }) {
  // quantities keyed by product id, e.g. { "wv-001": 2 }
  const [quantities, setQuantities] = useState({})
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addItem = useCallback((productId) => {
    setQuantities((prev) => ({ ...prev, [productId]: (prev[productId] ?? 0) + 1 }))
    setIsCartOpen(true)
  }, [])

  const incrementQty = useCallback((productId) => {
    setQuantities((prev) => ({ ...prev, [productId]: (prev[productId] ?? 0) + 1 }))
  }, [])

  const decrementQty = useCallback((productId) => {
    setQuantities((prev) => {
      const nextQty = (prev[productId] ?? 0) - 1
      if (nextQty <= 0) {
        const { [productId]: _removed, ...rest } = prev
        return rest
      }
      return { ...prev, [productId]: nextQty }
    })
  }, [])

  const removeItem = useCallback((productId) => {
    setQuantities((prev) => {
      const { [productId]: _removed, ...rest } = prev
      return rest
    })
  }, [])

  const openCart = useCallback(() => setIsCartOpen(true), [])
  const closeCart = useCallback(() => setIsCartOpen(false), [])

  // Join quantities with product data, and derive every total from that
  // single source so the numbers can never drift out of sync.
  const { cartItems, itemCount, subtotal } = useMemo(() => {
    const items = Object.entries(quantities)
      .map(([productId, qty]) => {
        const product = products.find((p) => p.id === productId)
        if (!product) return null
        return { ...product, qty, lineTotal: product.price * qty }
      })
      .filter(Boolean)

    const count = items.reduce((sum, item) => sum + item.qty, 0)
    const sub = items.reduce((sum, item) => sum + item.lineTotal, 0)

    return { cartItems: items, itemCount: count, subtotal: sub }
  }, [quantities])

  const shipping = subtotal === 0 || subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FLAT_RATE
  const tax = subtotal * TAX_RATE
  const total = subtotal + shipping + tax

  const value = {
    cartItems,
    itemCount,
    subtotal,
    shipping,
    tax,
    total,
    freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
    isCartOpen,
    addItem,
    incrementQty,
    decrementQty,
    removeItem,
    openCart,
    closeCart,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
