import "./App.css";
import logo from "./assets/logo.png";

export default function Navbar({ setPage, cart, setIsCartOpen }) {
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <nav className="w-full h-18 fixed bg-[#EBDFCD]/90 backdrop-blur-md flex items-center z-100">
        <div className="w-full flex justify-between items-center px-16">
          <div
            className="flex justify-around items-center font-semibold text-[35px] tracking-wider cursor-pointer"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            onClick={() => setPage("home")}
          >
            <img src={logo} alt="logo" className="h-25" />
            <h1 className="text-[#4A3728]">Luméra</h1>
          </div>

          <div
            className="flex justify-around items-center gap-20 text-[#3F372F] text-[20px] font-[350] tracking-wide"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            <p
              onClick={() => setPage("skin")}
              className="cursor-pointer hover:underline"
            >
              Skin care
            </p>

            <p
              onClick={() => setPage("hair")}
              className="cursor-pointer hover:underline"
            >
              Hair care
            </p>

            <p
              onClick={() => setPage("perfume")}
              className="cursor-pointer hover:underline"
            >
              Perfume
            </p>
          </div>

          <div
            className="flex justify-around items-center gap-10 text-[#3F372F] text-[20px] font-[350] tracking-wide"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            <div
              className="relative cursor-pointer"
              onClick={() => setIsCartOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30px"
                viewBox="0 -960 960 960"
                width="30px"
                fill="#3F372F"
              >
                <path d="M223.5-103.5Q200-127 200-160t23.5-56.5Q247-240 280-240t56.5 23.5Q360-193 360-160t-23.5 56.5Q313-80 280-80t-56.5-23.5Zm400 0Q600-127 600-160t23.5-56.5Q647-240 680-240t56.5 23.5Q760-193 760-160t-23.5 56.5Q713-80 680-80t-56.5-23.5ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
              </svg>

              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#D79AA8] text-white rounded-full w-5 h-5 flex items-center justify-center text-[12px]">
                  {cartCount}
                </span>
              )}
            </div>

            <p className="cursor-pointer">Login</p>
          </div>
        </div>
      </nav>
    </>
  );
}
