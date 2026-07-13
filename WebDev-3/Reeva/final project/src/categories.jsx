import "./App.css";
import skincare from "./assets/skincarecategory.png";
import haircare from "./assets/haircarecategory.png";
import perfume from "./assets/perfumecategory.png";

export default function Categories({ setPage }) {
  return (
    <>
      <section id="categories">
        <div>
          <h3
            className="text-[#2D261F] text-6xl font-bold tracking-wide mb-10 text-center mt-30"
            style={{ fontFamily: "'Cormorant Garamond',serif" }}
          >
            Explore Our Collection
          </h3>
        </div>

        <div className="bg-[#faf0f1] h-130 flex justify-between items-center overflow-clip  tracking-widest mb-20">
          <div
            className="text-center px-20"
            tyle={{ fontFamily: "'Manrope',sans-serif" }}
          >
            <h1
              className="text-[#C98297] text-6xl font-extrabold mb-10 tracking-[3px]"
              style={{ fontFamily: "'Cormorant Garamond',serif" }}
            >
              Radiant Skin, Naturally
            </h1>
            <h2 className="text-[#6B5A57] text-[31px] font-[350] mb-10 leading-13">
              Thoughtfully crafted skincare enriched with botanical ingredients
              to nourish, hydrate, and restore your natural glow.
            </h2>
            <button
              className="border border-[#C98297] text-[#C98297] px-8 py-3 rounded-full text-2xl flex justify-center items-center translate-x-50 gap-2 cursor-pointer hover:bg-[#C88797] hover:text-white hover:gap-4 hover:shadow-2xl"
              onClick={() => setPage("skin")}
            >
              <p>Explore Skin Care</p>
              <p>→</p>
            </button>
          </div>
          <div
            className="shrink-0"
            style={{ clipPath: "polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
          >
            <img
              src={skincare}
              alt="skincare products"
              className="h-160 -translate-y-5 translate-x-15 scale-250 hover:scale-270"
            ></img>
          </div>
        </div>

        <div className="bg-[#eefff2] h-130 flex justify-between items-center overflow-clip  tracking-widest mb-20">
          <div
            className="shrink-0"
            style={{ clipPath: "polygon(0% 0%, 70% 0%, 100% 100%, 0% 100%)" }}
          >
            <img
              src={haircare}
              alt="haircare products"
              className="h-160 -translate-x-13 scale-190 hover:scale-210"
            ></img>
          </div>
          <div
            className="text-center px-20"
            tyle={{ fontFamily: "'Manrope',sans-serif" }}
          >
            <h1
              className="text-[#7A8F6A] text-6xl font-extrabold mb-10 tracking-[3px]"
              style={{ fontFamily: "'Cormorant Garamond',serif" }}
            >
              Silky Strength, Every Day
            </h1>
            <h2 className="text-[#7A8F6A] text-[31px] font-[350] mb-10 leading-13">
              Luxurious haircare enriched with nature's finest ingredients to
              deeply nourish, repair, and leave your hair soft, healthy, and
              full of life.
            </h2>
            <button
              className="border border-[#7A8F6A] text-[#7A8F6A] px-8 py-3 rounded-full text-2xl flex justify-center items-center translate-x-50 gap-2 cursor-pointer hover:bg-[#8BAA93] hover:text-white hover:gap-4 hover:shadow-2xl"
              onClick={() => setPage("hair")}
            >
              <p>Explore Hair Care</p>
              <p>→</p>
            </button>
          </div>
        </div>

        <div className="bg-[#f3ebff] h-130 flex justify-between items-center overflow-clip  tracking-widest mb-20">
          <div
            className="text-center px-20"
            tyle={{ fontFamily: "'Manrope',sans-serif" }}
          >
            <h1
              className="text-[#8A6FA8] text-6xl font-extrabold mb-10 tracking-[3px]"
              style={{ fontFamily: "'Cormorant Garamond',serif" }}
            >
              Signature Scents, Timeless Elegance
            </h1>
            <h2 className="text-[#5F5369] text-[31px] font-[350] mb-10 leading-13">
              Refined fragrances designed to complement every moment, combining
              delicate florals, warm woods, and captivating notes into an
              unforgettable experience.
            </h2>
            <button
              className="border border-[#8A6FA8] text-[#8A6FA8] px-8 py-3 rounded-full text-2xl flex justify-center items-center translate-x-50 gap-2 cursor-pointer hover:bg-[#9B89B8] hover:text-white hover:gap-4 hover:shadow-2xl"
              onClick={() => setPage("perfume")}
            >
              <p>Explore Perfumes</p>
              <p>→</p>
            </button>
          </div>
          <div
            className="shrink-0"
            style={{ clipPath: "polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
          >
            <img
              src={perfume}
              alt="perfume products"
              className="h-160 -translate-y-15 translate-x-15 scale-200 hover:scale-220"
            ></img>
          </div>
        </div>
      </section>
    </>
  );
}
