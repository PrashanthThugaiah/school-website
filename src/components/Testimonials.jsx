import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Ramesh Kumar",
    role: "Parent of Grade 8 Student",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "The teachers are highly dedicated and the school provides an excellent learning environment.",
  },
  {
    name: "Lakshmi Devi",
    role: "Parent of Grade 5 Student",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "My child has improved tremendously in academics and confidence since joining ABC Public School.",
  },
  {
    name: "Anil Sharma",
    role: "Parent of Grade 10 Student",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    review:
      "Excellent infrastructure, caring teachers and a strong focus on values and discipline.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="testimonials-section"
    >
      <div className="section-header">
        <span className="section-tag">
          Testimonials
        </span>

        <h2>What Parents Say</h2>

        <p>
          Trusted by thousands of parents for
          academic excellence and holistic growth.
        </p>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop={true}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <img
                src={item.image}
                alt={item.name}
              />

              <p className="testimonial-review">
                "{item.review}"
              </p>

              <h3>{item.name}</h3>

              <span>{item.role}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}