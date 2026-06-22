import config from "../config/schoolConfig";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  "https://images.unsplash.com/photo-1509062522246-3755977927d7",
  "https://images.unsplash.com/photo-1588072432836-e10032774350",
  "https://images.unsplash.com/photo-1577896851231-70ef18881754",
];

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop={true}
      >
        {slides.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="slide"
              style={{
                backgroundImage: `url(${image})`,
              }}
            >
              <div className="hero-overlay">
                <div className="hero-content">
                  <h1>{config.schoolName}</h1>

                  <p>{config.tagline}</p>

                  {config.admissionOpen && (
                    <div className="admission-badge">
                      Admissions Open 2026-27
                    </div>
                  )}

                  <div className="hero-buttons">
                    <a
                      href={`tel:${config.phone}`}
                      className="btn primary-btn"
                    >
                      Call Now
                    </a>

                    <a
                      href={`https://wa.me/${config.whatsapp}`}
                      className="btn whatsapp-btn"
                    >
                      WhatsApp
                    </a>

                    <button className="btn secondary-btn">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}