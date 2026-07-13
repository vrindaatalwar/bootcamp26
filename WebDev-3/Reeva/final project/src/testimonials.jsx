import "./App.css";
import { useEffect, useState } from "react";
import priya from "./assets/p-icon.jpg";
import ananya from "./assets/a-icon.jpg";
import riya from "./assets/r-icon.jpg";
import neha from "./assets/n-icon.jpg";
import aarushi from "./assets/a-icon2.jpg";

const testimonials = [
  {
    name: "Priya M.",
    username: "priyam",
    review:
      "Luméra completely transformed my skincare routine. My skin feels softer and healthier than ever.",
    photo: priya,
  },
  {
    name: "Ananya S.",
    username: "ananyas",
    review:
      "Beautiful packaging and incredible results. It feels like a luxury experience.",
    photo: ananya,
  },
  {
    name: "Riya P.",
    username: "riyap",
    review: "I've finally found products that work for my sensitive skin.",
    photo: riya,
  },
  {
    name: "Neha K.",
    username: "nehak",
    review:
      "Every product feels thoughtfully made. I can't imagine my routine without Luméra.",
    photo: neha,
  },
  {
    name: "Aarushi T.",
    username: "arushit",
    review: "The quality is exceptional and the fragrances are beautiful.",
    photo: aarushi,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0));
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white mt-35 mb-50">
      <h3
        className="text-[#2D261F] text-6xl font-bold tracking-wide mb-20 text-center"
        style={{ fontFamily: "'Cormorant Garamond',serif" }}
      >
        What Our Customers Say
      </h3>

      <div className="w-5xl mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {testimonials.map((item, index) => (
            <div key={index} className="min-w-full px-4">
              <div className="transition duration-300 flex gap-10 items-start">
                <div className="flex flex-col items-center gap-5">
                  <img
                    src={item.photo}
                    alt={item.name}
                    className="w-15 rounded-full object-cover z-10"
                  />

                  <div className="w-1 h-30 bg-[#D8CEC2] rounded-full mt-3"></div>
                </div>

                <div>
                  <h3 className="text-[#2D261F] font-semibold text-xl">
                    {item.name}
                  </h3>

                  <h2 className="text-[#7A7268] text-[18px] mb-8">
                    @{item.username}
                  </h2>

                  <p className="text-[#deac50] text-3xl mb-5 align-middle">
                    ★★★★★
                  </p>

                  <p className="text-[#5E5349] text-[25px] leading-8 align-middle">
                    "{item.review}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-5 gap-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              current === index ? "bg-[#12385A]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
