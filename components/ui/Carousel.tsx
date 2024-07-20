"use client";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "./button";

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide flex flex-col items-center justify-center pt-6">
            <p className="text-md mb-4">Latest news at Macquarie</p>
            <p className="text-sm text-center mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. slide 1
            </p>
            <Button
              type="button"
              variant={"outline"}
              className="rounded-none mb-4"
            >
              Learn more
            </Button>
          </div>
          <div className="embla__slide flex flex-col items-center justify-center pt-6">
            <p className="text-md mb-4">Latest news at Macquarie</p>
            <p className="text-sm text-center mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. slide 2
            </p>
            <Button
              type="button"
              variant={"outline"}
              className="rounded-none mb-4"
            >
              Learn more
            </Button>
          </div>
          <div className="embla__slide flex flex-col items-center justify-center pt-6">
            <p className="text-md mb-4">Latest news at Macquarie</p>
            <p className="text-sm text-center mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. sliude 3
            </p>
            <Button
              type="button"
              variant={"outline"}
              className="rounded-none mb-4"
            >
              Learn more
            </Button>
          </div>
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              type="button"
              aria-label="dots"
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
