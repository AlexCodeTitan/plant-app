import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  CarouselWrapper,
  InnerCarousel,
  TestimonialsWrapper,
} from "./Testimonials.style";
import { testimonials } from "../../assets/utils";
import TestimonialItem from "../TestimonialItem/TestimonialItem";

function Testimonials() {
  const [width, setWidth] = useState(0);
  const [pageWidth, setPageWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    function handleResize() {
      setPageWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    console.log(window.outerWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [pageWidth]);

  return (
    <TestimonialsWrapper>
      <h1>What are users thinking?</h1>
      <CarouselWrapper ref={carousel} as={motion.div}>
        <InnerCarousel
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          as={motion.div}
        >
          {testimonials.map((testimonial) => (
            <TestimonialItem
              as={motion.div}
              key={testimonial.id}
              title={testimonial.title}
              text={testimonial.text}
              name={testimonial.name}
            />
          ))}
        </InnerCarousel>
      </CarouselWrapper>
    </TestimonialsWrapper>
  );
}

export default Testimonials;
