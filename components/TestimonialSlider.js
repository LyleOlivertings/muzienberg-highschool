// Create components/TestimonialSlider.js
'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

export default function TestimonialSlider() {
  const testimonials = [
    {
      text: "MuzienBerg shaped me into a confident leader. The teachers truly care!",
      author: "Lerato M., Class of 2022",
    },
    // Add more testimonials...
  ];

  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 7000 }}
      className="bg-blue-900 text-white py-16"
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index}>
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <p className="text-xl italic mb-6">"{testimonial.text}"</p>
            <p className="font-semibold">– {testimonial.author}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}