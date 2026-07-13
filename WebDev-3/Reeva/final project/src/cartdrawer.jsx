export default function CartDrawer({
  cart,
  setCart,
  isCartOpen,
  setIsCartOpen,
}) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isCartOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
        onClick={() => setIsCartOpen(false)}
      ></div>

      <div className="fixed top-0 right-0 h-160 w-[30%] bg-[#FFFDFC] shadow-2xl z-50 rounded-l-3xl p-8 flex flex-col mt-20">
        {/* Heading */}
        <div className="flex justify-between items-center border-b border-gray-200 pb-5">
          <h1 className="font-cormorant text-4xl text-[#4F4245]">Your Bag</h1>

          <button
            onClick={() => setIsCartOpen(false)}
            className="text-3xl text-gray-500 hover:text-black"
          >
            ×
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col justify-center items-center text-center">
              <h2 className="font-cormorant text-3xl text-[#4F4245]">
                Your bag is empty
              </h2>

              <p className="font-manrope text-gray-500 mt-3">
                Discover products you'll love.
              </p>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 border-b border-gray-200 py-5"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-xl"
                />

                <div className="flex-1">
                  <h3 className="font-cormorant text-2xl text-[#4F4245]">
                    {item.name}
                  </h3>

                  <p className="font-manrope text-[#8B6D76]">₹{item.price}</p>

                  <p className="font-manrope text-gray-500 mt-2">
                    Qty : {item.quantity}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="border-t border-gray-200 pt-6">
          <div className="flex justify-between mb-6">
            <span className="font-manrope text-xl text-[#4F4245]">Total</span>

            <span className="font-manrope text-xl font-semibold text-[#4F4245]">
              ₹{total}
            </span>
          </div>

          <button className="w-full py-4 rounded-full bg-[#D79AA8] text-white font-manrope hover:bg-[#C88797] transition">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}
