"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "swiper/css";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from "next/image";

const Slider = ({ images, title }) => {

  return (
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
      {images.map((image, i) => (
        <SwiperSlide key={i}>
          <Image
            src={`/products/${image}`}
            alt={title}
            width={1200}
            height={800}
            className="object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
