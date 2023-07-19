import React from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const Partners = () => {
  return (
    <div>
      <Splide
        options={{
          rewind: true,
          gap: "1rem",
          perPage: 4,
          height: 150,
          type: "loop",
          arrows: false,
          pagination: false,
          breakpoints: {
            1024: {
              perPage: 2,
            },
            640: {
              perPage: 1,
            },
          },
          autoScroll: {
            pauseOnFocus: true,
            type: "loop",
            speed: 0.5,
          },
        }}
        extensions={{ AutoScroll }}
        aria-label="My Favorite Images"
      >
        <SplideSlide>
          <Image src="/../public/partners/hooli.png" width="125" height="125" />
        </SplideSlide>
        <SplideSlide>
          <Image src="/../public/partners/lyft.png" width="80" height="125" />
        </SplideSlide>
        <SplideSlide>
          <Image src="/../public/partners/leaf.png" width="80" height="125" />
        </SplideSlide>
        <SplideSlide>
          <Image
            src="/../public/partners/stripe.png"
            width="125"
            height="125"
          />
        </SplideSlide>
        <SplideSlide>
          <Image src="/../public/partners/aws.png" width="125" height="125" />
        </SplideSlide>
        <SplideSlide>
          <Image src="/../public/partners/reddit.png" width="80" height="80" />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Partners;
