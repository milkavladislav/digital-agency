import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Photo_1 from "../../assets/gallery/Photo_1.png";
import Photo_2 from "../../assets/gallery/Photo_2.png";
import Photo_3 from "../../assets/gallery/Photo_3.png";
import "./Gallery.css";

import "swiper/css";
import "swiper/css/pagination";

interface IGallerySlide {
  photoUrl: [string, string?, string?];
}

const gallerySlides: IGallerySlide[] = [
  { photoUrl: [Photo_1, Photo_2, Photo_3] },
  { photoUrl: [Photo_1, Photo_2, Photo_3] },
  { photoUrl: [Photo_1, Photo_2, Photo_3] },
  { photoUrl: [Photo_1] },
];

const Gallery = () => {
  return (
    <section className="gallery">
      <h2>
        Our recent <span>projects</span>
      </h2>
      <div className="gallery__text">
        <h3>Website development for Digital Company</h3>
        <p>
          My first thought about art, as a child, was that the artist brings
          something into the world that didn't exist before, and that he does it
          without destroying something else
        </p>
      </div>
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="gallery__swiper"
      >
        {gallerySlides.map(({ photoUrl }) => (
          <SwiperSlide className="gallery__swiper-slide">
            {photoUrl &&
              photoUrl.map(
                // eslint-disable-next-line jsx-a11y/alt-text
                (url: string | undefined) => url && <img src={url} />
              )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Gallery;
