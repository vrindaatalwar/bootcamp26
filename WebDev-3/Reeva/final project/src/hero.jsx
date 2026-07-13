import "./App.css";
import hero from "./assets/hero-img.jpg";

export default function Hero() {
  return (
    <>
      <div className="relative h-screen w-full">
        <img
          src={hero}
          alt="heroimg"
          className="absolute inset-0 w-full h-full z-0"
        ></img>
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
          <h1
            className="text-[#2D261F] text-[60px] tracking-wide font-medium"
            style={{ fontFamily: "'Cormorant Garmond',serif" }}
          >
            Radiance Begins Here
          </h1>
          <h2
            className="text-[#5E5349] text-[27px] font-normal ml-110 mr-110 mt-4 mb-10 tracking-wider"
            style={{ fontFamily: "'Manrope',sans-serif" }}
          >
            Nourish your skin with botanical ingredients crafted for timeless
            beauty.
          </h2>
          <button
            className="z-20 bg-[#12385A]/80 text-white rounded-full text-[23px] font-medium px-10 py-4 tracking-wider cursor-pointer hover:bg-[#12385A]"
            style={{ fontFamily: "'Manrope',sans-serif" }}
          >
            <a href="#categories">Shop Now</a>
          </button>
        </div>
      </div>
    </>
  );
}
