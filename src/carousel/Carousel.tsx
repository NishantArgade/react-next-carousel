import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import "./Carousel.css";

interface ICarousel {
  slides: string[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
  carouselWidth?: string;
  thumbWidth?: string;
  showThumbs?: boolean;
  showControlArrow?: boolean;
  showIndicators?: boolean;
  controllArrowSize?: number;
  indicatorSize?: string;
  effect?: "fade" | "slide";
}

const Carousel = ({
  slides = [],
  autoSlide = false,
  autoSlideInterval = 2000,
  carouselWidth = "20rem",
  thumbWidth = "4rem",
  showThumbs = true,
  showControlArrow = true,
  showIndicators = true,
  controllArrowSize = 30,
  indicatorSize = "0.60rem",
  effect = "fade",
}: ICarousel) => {
  const [curr, setCurr] = useState(0);
  const activeThumbRef = useRef<HTMLDivElement | null>(null);

  const next = () => {
    setCurr((prevState) => (prevState + 1) % slides.length);
  };
  const prev = () => {
    setCurr((prevState) =>
      prevState === 0 ? slides.length - 1 : prevState - 1
    );
  };

  const handleChange = (index: number) => {
    setCurr(index);
  };

  useEffect(() => {
    if (!autoSlide) return;

    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  useEffect(() => {
    if (activeThumbRef.current) {
      activeThumbRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "center",
      });
    }
  }, [curr]);

  return (
    <div
      className={`relative bg-gray-200 m-5`}
      style={{ maxWidth: `${carouselWidth}` }}
    >
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform ease-out duration-500  max-w-full"
          style={
            effect === "fade"
              ? { transform: "" }
              : {
                  transform: `translateX(-${curr * 100}%)`,
                }
          }
        >
          {slides.map((slide: string, index: number) => {
            return (
              <span
                key={index}
                className={`${
                  effect === "fade"
                    ? `carousel-slide + ${curr === index ? "" : "hidden"}`
                    : "min-w-full"
                }`}
              >
                <img src={slide} alt="" />
              </span>
            );
          })}
        </div>

        {showControlArrow && (
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <button className="p-1 rounded-full shadow bg-white/40 text-gray-800 hover:bg-white/60">
              <ChevronLeft onClick={prev} size={controllArrowSize} />
            </button>
            <button className="p-1 rounded-full shadow bg-white/40 text-gray-800 hover:bg-white/60">
              <ChevronRight onClick={next} size={controllArrowSize} />
            </button>
          </div>
        )}
        {showIndicators && (
          <div className="absolute bottom-4 right-0 left-0">
            <div className="flex items-center justify-center gap-2">
              {slides.map((_: string, i: number) => (
                <div
                  key={i}
                  className={`transition-all bg-white/90 rounded-full cursor-pointer ${
                    curr === i ? "p-2" : "bg-white/50"
                  }`}
                  onClick={() => handleChange(i)}
                  style={{
                    width: `${indicatorSize}`,
                    height: `${indicatorSize}`,
                  }}
                ></div>
              ))}
            </div>
          </div>
        )}
      </div>
      {showThumbs && (
        <div className="mt-2  w-full overflow-x-auto flex  hide-scrollbar-webkit ">
          <div className=" flex  items-center justify-center">
            {slides.map((slide: string, i: number) => {
              return (
                <div
                  key={i}
                  id={`thumb-${i}`}
                  className={`p-1 transition-all cursor-pointer ${
                    curr === i
                      ? "opacity-100 border border-gray-900"
                      : "opacity-60"
                  }`}
                  style={{
                    width: `${thumbWidth}`,
                  }}
                  onClick={() => handleChange(i)}
                  ref={(ref) => {
                    if (curr === i) {
                      activeThumbRef.current = ref;
                    }
                  }}
                >
                  <img src={slide} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      )}{" "}
    </div>
  );
};

export default Carousel;
