import hydratingcleanser from "./assets/hydratingcleanser.jpg";
import roseglowserum from "./assets/roseglowserum.jpg";
import vitaminccream from "./assets/vitaminccream.jpg";
import nightrepaircream from "./assets/nightrepaircream.jpg";
import facewash from "./assets/facewash.jpg";
import moisturizer from "./assets/moisturizer.jpg";

export default function SkinCare({ cart, setCart }) {
  const products = [
    {
      id: 1,
      name: "Hydrating Cleanser",
      price: 599,
      image: hydratingcleanser,
    },
    {
      id: 2,
      name: "Rose Glow Serum",
      price: 899,
      image: roseglowserum,
    },
    {
      id: 3,
      name: "Vitamin C Cream",
      price: 999,
      image: vitaminccream,
    },
    {
      id: 4,
      name: "Night Repair Cream",
      price: 1299,
      image: nightrepaircream,
    },
    {
      id: 5,
      name: "Face Wash",
      price: 499,
      image: facewash,
    },
    {
      id: 6,
      name: "Moisturizer",
      price: 799,
      image: moisturizer,
    },
  ];

  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);

    if (!existing) return;

    if (existing.quantity === 1) {
      setCart(cart.filter((item) => item.id !== product.id));
    } else {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        ),
      );
    }
  };

  return (
    <div className="px-30 pt-30 pb-20 bg-[#FEF7F8]">
      <div className="grid grid-cols-3 gap-20 justify-center items-center">
        {products.map((product) => {
          const quantity =
            cart.find((item) => item.id === product.id)?.quantity || 0;

          return (
            <div
              key={product.id}
              className="p-10 border border-[#EADFE3] rounded-lg flex flex-col justify-center items-center bg-[#FFFDFC] w-100 h-130"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-70 h-70 mb-5"
              />

              <div className="flex flex-col justify-center items-center gap-3 mb-5">
                <h2 className="text-[#4F4245] text-2xl font-semibold">
                  {product.name}
                </h2>

                <p className="text-[#4F4245] text-2xl">₹{product.price}</p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => removeFromCart(product)}
                  className="text-3xl font-semibold px-2 hover:text-4xl"
                >
                  -
                </button>

                <div className="bg-[#D79AA8] text-white px-6 py-3 rounded-md text-xl font-semibold">
                  Add to Cart
                </div>

                <button
                  onClick={() => addToCart(product)}
                  className="text-3xl font-semibold px-2 hover:text-4xl"
                >
                  +
                </button>
              </div>

              <p className="mt-4 text-lg text-[#8B6D76]">
                Quantity: {quantity}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
