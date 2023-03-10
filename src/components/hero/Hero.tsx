import React from "react";
import "./Hero.css";
import banner1 from "../../assets/hero/banner1.png";
import banner2 from "../../assets/gallery/Photo_1.png"
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../common/button/Button";

import "swiper/css";
import "swiper/css/navigation";

interface IHeroSlide {
  title: string;
  text: string;
  link: string;
  imgHref: string;
}

const heroSlides: IHeroSlide[] = [
  {
    title: "Grow your brand through digital",
    text: "If the path is beautiful, let us not ask where it leads. my religion is very simple. my religion is kindness. each of us has within our power the ability to disrupt",
    link: "#",
    imgHref: banner1,
  },
  {
    title: "Leave your product fear",
    text: "Saturday found him for the first time strolling alone through zurich, breathing in the heady smell of his freedom. new adventures hid around each corner. The future was again a secret. now, what was tiring",
    link: "#",
    imgHref: banner2,
  },
];

const Hero = () => {
  return (
    <section className="hero">
      <Swiper
        className="hero__slider"
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
      >
        {heroSlides.map(({ title, text, link, imgHref }) => (
          <SwiperSlide className="hero__slider-slide">
            <div className="hero__slider-text">
              <h1>{title}</h1>
              <p>{text}</p>
              <Button link={link} type={"black"}>
                Learn more
              </Button>
            </div>
            <img src={imgHref} alt={imgHref} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
