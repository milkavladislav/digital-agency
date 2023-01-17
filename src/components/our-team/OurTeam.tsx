import React, { ReactElement } from "react";
import "./OurTeam.css";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

import "swiper/css";
import "swiper/css/navigation";

import Photo1 from "../../assets/our-team/Photo1.png";
import Photo2 from "../../assets/our-team/Photo2.png";
import Photo3 from "../../assets/our-team/Photo3.png";
import Photo4 from "../../assets/our-team/Photo4.png";

interface IPeople {
  fullName: string;
  position: string;
  socialMedia: { icon: ReactElement; link: string }[];
  about: string;
  photos: [string, string, string, string];
}

const people: IPeople[] = [
  {
    fullName: "Tiara Lyodra",
    position: "Head of Product",
    socialMedia: [
      { icon: <BsTwitter />, link: "https://twitter.com" },
      { icon: <BsInstagram />, link: "https://www.instagram.com" },
      { icon: <BsYoutube />, link: "https://www.youtube.com" },
    ],
    about:
      "Saturday found him for the first time strolling alone through zurich, breathing in the heady smell of his freedom. new adventures hid around each corner. The future was again a secret. now, what was tiring had disappeared and only the beauty remained.",
    photos: [Photo1, Photo2, Photo3, Photo4],
  },
  {
    fullName: "Stiven Hoking",
    position: "SEO",
    socialMedia: [
      { icon: <BsTwitter />, link: "https://twitter.com" },
      { icon: <BsInstagram />, link: "https://www.instagram.com" },
      { icon: <BsYoutube />, link: "https://www.youtube.com" },
    ],
    about:
      "Saturday found him for the first time strolling alone through zurich, breathing in the heady smell of his freedom. new adventures hid around each corner. The future was again a secret. now, what was tiring had disappeared and only the beauty remained.",
    photos: [Photo2, Photo3, Photo1, Photo4],
  },
  {
    fullName: "Den Braun",
    position: "Team Lead",
    socialMedia: [
      { icon: <BsTwitter />, link: "https://twitter.com" },
      { icon: <BsInstagram />, link: "https://www.instagram.com" },
      { icon: <BsYoutube />, link: "https://www.youtube.com" },
    ],
    about:
      "Saturday found him for the first time strolling alone through zurich, breathing in the heady smell of his freedom. new adventures hid around each corner. The future was again a secret. now, what was tiring had disappeared and only the beauty remained.",
    photos: [Photo4, Photo3, Photo1, Photo2],
  },
];

const OurTeam = () => {
  return (
    <section className="team">
      <h2>
        <span>People</span> behind the scenes
      </h2>
      <Swiper
        className="team__slider"
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
      >
        {people.map(({ fullName, position, socialMedia, about, photos }) => (
          <SwiperSlide className="people__slider-slide">
            <div className="people__slide-text">
              <h3>{fullName}</h3>
              <h4>{position}</h4>
              <div className="social__media-wrapper">
                {socialMedia.map(({ link, icon }) => (
                  <a href={link} target="_blank" rel="noreferrer">
                    {icon}
                  </a>
                ))}
              </div>
              <p>{about}</p>
            </div>
            <div className="people__slide-photos">
              {photos.map((imgHref) => (
                <img src={imgHref} alt={imgHref} />
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default OurTeam;
