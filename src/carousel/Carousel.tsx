import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import styled, { keyframes } from "styled-components"; // Import styled-components

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

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const CarouselContainer = styled.div<{ carouselWidth?: string }>`
  position: relative;
  max-width: ${(props) => props.carouselWidth || "20rem"};
  min-height: 10rem;
`;

const CarouselOverflow = styled.div`
  overflow: hidden;
  position: relative;
  min-height: 10rem;
`;

const CarouselSlides = styled.div<{ carouselWidth?: string }>`
  display: flex;
  transition: transform 0.5s ease-out;
  aspect-ratio: 16 / 9;
  background-color: rgba(0, 0, 0, 0.3);
`;

const CarouselSlide = styled.span`
  display: none;
  &.carousel-slide {
    opacity: 1;
    animation: ${fadeIn} 1.2s ease-in;
  }

  &.carousel-slide.hidden {
    opacity: 0;
  }
`;

const CarouselArrows = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const ArrowButton = styled.button`
  padding: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  border: none;
  background-color: rgba(255, 255, 255, 0.4);
  color: #333;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(
      255,
      255,
      255,
      0.8
    ); /* Replace with your desired hover background color */
  }
  &:focus {
    border: none;
  }
`;

const IndicatorsContainer = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
`;

const IndicatorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const Indicator = styled.div<{ indicatorSize?: string; isActive?: boolean }>`
  width: ${(props) => props.indicatorSize || "0.6rem"};
  height: ${(props) => props.indicatorSize || "0.6rem"};
  background-color: ${(props) =>
    props.isActive ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 0.8)"};
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: ${(props) => (props.isActive ? "0.2rem" : "")};
`;

const ThumbsContainer = styled.div`
  padding: 0.5rem;
  overflow-x: auto;
  display: flex;
  justify-content: start;
  max-width: 100%;
  background-color: #e2e2e27d !important;
  align-items: center;

  gap: 0.5rem;
  -ms-overflow-style: none; /* Hide scrollbar in IE and Edge */
  scrollbar-width: none; /* Hide scrollbar in Firefox */

  &::-webkit-scrollbar {
    width: 0.1em;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
`;

const ThumbContainer = styled.div<{ isActive?: boolean; thumbWidth?: string }>`
  cursor: pointer;
  opacity: ${(props) => (props.isActive ? "1" : "0.6")};
  transition: opacity 0.3s ease;
  border: ${(props) => (props.isActive ? "2px solid #333" : "none")};
  position: relative;
  img {
    width: ${(props) => props.thumbWidth};
  }
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.1rem;
  padding-bottom: auto;
`;

const SlideInSlide = styled.span`
  min-width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  img {
    width: 100%;
  }
`;

const VisibleSlide = styled(CarouselSlide)<{
  isActive?: boolean;
  carouselWidth?: string;
}>`
  min-width: 100%;
  display: ${(props) => (props.isActive ? "block" : "none")};
  img {
    width: 100%;
  }
`;
const Carousel = ({
  slides = [],
  autoSlide = false,
  autoSlideInterval = 2000,
  carouselWidth = "20rem",
  thumbWidth = "3rem",
  showThumbs = true,
  showControlArrow = true,
  showIndicators = true,
  controllArrowSize = 20,
  indicatorSize = "0.40rem",
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
    <>
      {slides.length > 0 && (
        <CarouselContainer carouselWidth={carouselWidth}>
          <CarouselOverflow>
            <CarouselSlides
              style={
                effect === "fade"
                  ? { transform: "" }
                  : { transform: `translateX(-${curr * 100}%)` }
              }
              carouselWidth={carouselWidth}
            >
              {effect === "fade" &&
                slides.map((slide: string, index: number) => {
                  return (
                    <VisibleSlide
                      key={index}
                      className={`carousel-slide ${
                        curr === index ? "active" : "hidden"
                      }`}
                      isActive={curr === index}
                    >
                      <img src={slide} alt="" />
                    </VisibleSlide>
                  );
                })}
              {effect === "slide" &&
                slides.map((slide: string, index: number) => {
                  return (
                    <SlideInSlide key={index}>
                      <img src={slide} alt="" />
                    </SlideInSlide>
                  );
                })}
            </CarouselSlides>

            {showControlArrow && slides.length > 1 && (
              <CarouselArrows>
                <ArrowButton onClick={prev}>
                  <ChevronLeft size={controllArrowSize} />
                </ArrowButton>
                <ArrowButton onClick={next}>
                  <ChevronRight size={controllArrowSize} />
                </ArrowButton>
              </CarouselArrows>
            )}
            {showIndicators && slides.length > 1 && (
              <IndicatorsContainer>
                <IndicatorContainer>
                  {slides.map((_: string, i: number) => (
                    <Indicator
                      key={i}
                      indicatorSize={indicatorSize}
                      isActive={curr === i}
                      onClick={() => handleChange(i)}
                    />
                  ))}
                </IndicatorContainer>
              </IndicatorsContainer>
            )}
          </CarouselOverflow>
          {showThumbs && slides.length > 1 && (
            <ThumbsContainer>
              {slides.map((slide: string, i: number) => {
                return (
                  <ThumbContainer
                    key={i}
                    isActive={curr === i}
                    onClick={() => handleChange(i)}
                    ref={(ref) => {
                      if (curr === i) {
                        activeThumbRef.current = ref;
                      }
                    }}
                    thumbWidth={thumbWidth}
                  >
                    <img src={slide} alt="" />
                  </ThumbContainer>
                );
              })}
            </ThumbsContainer>
          )}
        </CarouselContainer>
      )}
    </>
  );
};

export default Carousel;
