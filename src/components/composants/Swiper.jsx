"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import bernard from "../../../public/barber-swip/1.png"
import elise from "../../../public/barber-swip/2.png"
import bertrand from "../../../public/barber-swip/3.png"
import okalise from "../../../public/barber-swip/4.png"
import pheni from "../../../public/barber-swip/5.png"
import bala from "../../../public/barber-swip/6.png"
import penom from "../../../public/barber-swip/7.png"
import phali from "../../../public/barber-swip/8.png"


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

//import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Image from 'next/image';

const images = [
  {
    id: 1,
    title: "Montagne",
    url: bernard,
    alt: "Montagne enneigée"
  },
  {
    id: 2,
    title: "Plage",
    url: elise,
    alt: "Plage tropicale"
  },
  {
    id: 3,
    title: "Forêt",
    url: bertrand,
    alt: "Forêt verdoyante"
  },
  {
    id: 4,
    title: "Ville",
    url: okalise,
    alt: "Skyline urbain"
  },
  {
    id: 5,
    title: "Desert",
    url: phali,
    alt: "Dunes de sable"
  },
  {
    id: 6,
    title: "Lac",
    url: penom,
    alt: "Lac tranquille"
  },
  {
    id: 7,
    title: "Chien",
    url: bala,
    alt: "Chien mignon"
  },
  {
    id: 8,
    title: "Chat",
    url: phali,
    alt: "Chat curieux"
  },
  {
    id: 9,
    title: "Café",
    url: pheni,
    alt: "Tasse de café"
  }
];

export default function App() {
  return (
    <>
   <h1 className="text-2xl sm:text-4xl text-center font-bold text-gray-900 mt-6 ">
            Nos Prestations
          </h1>
     <h2 className=" text-2xl sm:text-4xl text-center  font-light text-gray-900 mt-6">
           Des professionnelles qualifiés pour toutes vos coiffures adaptées à tout type de cheveux
          </h2>
    <div className="py-12 bg-gray-50 container">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {images.map((image) => (
          <SwiperSlide 
            key={image.id}
            className="!w-[300px] !h-[400px] rounded-lg overflow-hidden shadow-xl"
          >
            <Image 
              src={image.url} 
              alt={image.alt}
              className="w-full h-full object-cover"
              width={400}
              height={600}
            />
          
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </>
  );
}
