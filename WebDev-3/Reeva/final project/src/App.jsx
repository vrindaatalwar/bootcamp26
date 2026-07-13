import { useState } from "react";
import Navbar from "./navbar";
import Hero from "./hero";
import Incentives from "./incentives";
import Testimonials from "./testimonials";
import Categories from "./categories";
import SkinCare from "./skincare";
import HairCare from "./haircare";
import Perfume from "./perfumes";
import CartDrawer from "./cartdrawer";

export default function App() {
  const [page, setPage] = useState("home");

  const [cart, setCart] = useState([]);

  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <Navbar setPage={setPage} cart={cart} setIsCartOpen={setIsCartOpen} />

      <CartDrawer
        cart={cart}
        setCart={setCart}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
      />

      {page === "home" && (
        <>
          <Hero />
          <Incentives />
          <Testimonials />
          <Categories setPage={setPage} />
        </>
      )}

      {page === "skin" && <SkinCare cart={cart} setCart={setCart} />}

      {page === "hair" && <HairCare cart={cart} setCart={setCart} />}

      {page === "perfume" && <Perfume cart={cart} setCart={setCart} />}
    </>
  );
}
