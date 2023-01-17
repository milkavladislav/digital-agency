import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Testimony.css";

interface ITestimony {
  fullName: string;
  position: string;
  text: string;
}

const testimonies: ITestimony[] = [
  {
    fullName: "Anna Karenina",
    position: "UI Designer",
    text: "The future was again a secret. now, what was tiring. Saturday found him for the first time strolling alone through zurich, breathing in the heady smell of his freedom. new adventures hid around each corner.",
  },
  {
    fullName: "Tiara Lyodra",
    position: "Head of Product",
    text: "Saturday found him for the first time strolling alone through zurich, breathing in the heady smell of his freedom. new adventures hid around each corner. The future was again a secret. now, what was tiring",
  },
];

const Testimony = () => {
  return (
    <div className="testimony">
      <Swiper
        className="testimony__slider"
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
      >
        {testimonies.map(({ text, fullName, position }) => (
          <SwiperSlide className="testimony__slider-slide">
            <p>{text}</p>
            <h3>{fullName}</h3>
            <h4>{position}</h4>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimony;
