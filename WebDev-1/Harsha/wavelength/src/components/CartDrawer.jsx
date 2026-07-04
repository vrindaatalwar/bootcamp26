import { useCart } from '../context/CartContext.jsx'

export default function CartDrawer() {
  const {
    cartItems,
    subtotal,
    shipping,
    tax,
    total,
    freeShippingThreshold,
    isCartOpen,
    incrementQty,
    decrementQty,
    removeItem,
    closeCart,
  } = useCart()

  const remainingForFreeShipping = Math.max(freeShippingThreshold - subtotal, 0)

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={closeCart}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-vinyl-black/70 transition-opacity ${
          isCartOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col border-l border-vinyl-groove bg-vinyl-panel transition-transform duration-300 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-vinyl-groove p-6">
          <h2 className="font-display text-2xl italic text-cream">Your cart</h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="rounded-sleeve border border-vinyl-groove px-2 py-1 font-mono text-xs text-smoke transition-colors hover:border-copper hover:text-cream"
          >
            Close
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-2 p-6 text-center">
            <p className="font-display text-xl italic text-cream">Your crate is empty.</p>
            <p className="text-sm text-smoke">Add something from the shelf to get started.</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-6">
              {remainingForFreeShipping > 0 ? (
                <p className="mb-4 font-mono text-xs text-copper-bright">
                  Add ${remainingForFreeShipping.toFixed(2)} more for free shipping
                </p>
              ) : (
                <p className="mb-4 font-mono text-xs text-felt">
                  You've unlocked free shipping
                </p>
              )}

              <ul className="flex flex-col gap-5">
                {cartItems.map((item) => (
                  <li key={item.id} className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-20 w-20 flex-shrink-0 rounded-sleeve object-cover"
                    />
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="font-display text-lg italic leading-tight text-cream">
                            {item.name}
                          </p>
                          {item.artist && (
                            <p className="text-xs text-smoke">{item.artist}</p>
                          )}
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          aria-label={`Remove ${item.name} from cart`}
                          className="font-mono text-xs text-smoke transition-colors hover:text-copper-bright"
                        >
                          Remove
                        </button>
                      </div>

                      <div className="mt-auto flex items-center justify-between pt-2">
                        <div className="flex items-center gap-3 rounded-sleeve border border-vinyl-groove px-2 py-1">
                          <button
                            type="button"
                            onClick={() => decrementQty(item.id)}
                            aria-label={`Decrease quantity of ${item.name}`}
                            className="font-mono text-cream hover:text-copper-bright"
                          >
                            −
                          </button>
                          <span className="w-4 text-center font-mono text-sm text-cream">
                            {item.qty}
                          </span>
                          <button
                            type="button"
                            onClick={() => incrementQty(item.id)}
                            aria-label={`Increase quantity of ${item.name}`}
                            className="font-mono text-cream hover:text-copper-bright"
                          >
                            +
                          </button>
                        </div>
                        <span className="font-mono text-sm text-cream">
                          ${item.lineTotal.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-vinyl-groove p-6">
              <dl className="flex flex-col gap-2 font-mono text-sm">
                <div className="flex justify-between text-smoke">
                  <dt>Subtotal</dt>
                  <dd>${subtotal.toFixed(2)}</dd>
                </div>
                <div className="flex justify-between text-smoke">
                  <dt>Shipping</dt>
                  <dd>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</dd>
                </div>
                <div className="flex justify-between text-smoke">
                  <dt>Estimated tax</dt>
                  <dd>${tax.toFixed(2)}</dd>
                </div>
                <div className="mt-2 flex justify-between border-t border-vinyl-groove pt-2 text-base text-cream">
                  <dt>Total</dt>
                  <dd>${total.toFixed(2)}</dd>
                </div>
              </dl>

              <button
                type="button"
                className="mt-4 w-full rounded-sleeve bg-copper py-3 font-mono text-sm text-vinyl-black transition-colors hover:bg-copper-bright"
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
