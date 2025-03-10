'use client'; // Required for Swiper's interactivity
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const HeroCarousel = () => {
  const schoolImages = [
    '/images/school1.jpg',
    '/images/school2.jpg',
    '/images/school3.jpg',
  ];

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ delay: 5000 }}
      pagination={{ clickable: true }}
      loop={true}
      className="h-[600px]"
    >
      {schoolImages.map((src, index) => (
        <SwiperSlide key={index}>
          <div className="relative h-full w-full">
            <Image
              src={src}
              alt={`MuzienBerg High School Activity ${index + 1}`}
              fill
              className="object-cover"
              priority
            />
            {/* Image Overlay */}
            <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                
                </h1>
                <p className="text-xl md:text-2xl">
                  
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroCarousel;