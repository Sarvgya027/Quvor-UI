'use client';

import React from 'react';
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";



import 'swiper/css';
import 'swiper/css/pagination';

const GetQualityEducation = () => {
  const carouselData = [
    {
      pic: "/user-cover-1.png",
      name: "John Doe",
      profession: "Software Engineer"
    },
    {
      pic: "/user-cover-2.png",
      name: "Jane Smith",
      profession: "Graphic Designer"
    },
    {
      pic: "/user-cover-3.png",
      name: "Robert Brown",
      profession: "Data Scientist"
    },
    {
      pic: "/user-cover-4.png",
      name: "Emily Johnson",
      profession: "Product Manager"
    }
  ];

  return (
    <div className="py-20">
      <div className="flex flex-col justify-center items-center px-4 gap-y-4 lg:justify-start lg:items-start lg:px-28">
        <p className="text-primary font-bold lg:text-[14px]">Team</p>
        <h1 className="text-[24px] text-neutral font-bold">Get Quality Education</h1>
        <p className="text-[#737373] text-[14px] lg:max-w-[500px] lg:text-left text-center">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      <div className="px-4 lg:px-28 mt-8 lg:mt-32">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            '@0.00': {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            '@0.75': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '@1.00': {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            '@1.50': {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {carouselData.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white w-full max-w-[238px] drop-shadow-md h-[375px] mb-12 rounded-lg mx-auto overflow-hidden flex flex-col">
                <div className="relative w-full h-[238px]">
                  <Image 
                    src={item.pic} 
                    alt="user profile image" 
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
                <div className="flex flex-col flex-grow justify-between p-4">
                  <div>
                    <h1 className="text-center font-bold">{item.name}</h1>
                    <p className="text-center text-gray-600">{item.profession}</p>
                  </div>
                  <div className="flex justify-center items-center space-x-4">
                    <FaFacebook className="text-primary h-6 w-6" />
                    <FaInstagram className="text-primary h-6 w-6" />
                    <FaTwitter className="text-primary h-6 w-6" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default GetQualityEducation;