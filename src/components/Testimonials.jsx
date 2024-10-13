import React from "react";
import { TESTIMONIALS_CONTENT } from "../constants";
import Slider from "react-slick";

const Testimonials = () => {
  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="testimonials" className="mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 border-t border-indigo-800">
          <h2
            className="text-3xl lg:text-5xl mt-20 tracking-tighter
                bg-gradient-to-t from-indigo-50 via-indigo-300
                to-indigo-600 bg-clip-text text-transparent"
            style={{ lineHeight: "1.2" }}
          >
            {TESTIMONIALS_CONTENT.sectionTitle}
          </h2>
          <p className="mt-4">{TESTIMONIALS_CONTENT.sectionDescription}</p>
        </div>
        <div>
          <Slider {...settings}>
            {TESTIMONIALS_CONTENT.reviews.map((review, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center overflow-hidden
                        rounded-2xl bg-neutral-900/50 border border-neutral-900 p-10"
              >
                <p className="mb-4 text-neutral-200">{review.review}</p>
                <div className="flex items-center mt-4">
                  <img
                    src={review.image}
                    alt={review.alt}
                    className="w-16 h-16 object-cover rounded-full mr-4"
                  />
                  <div>
                    <p className="text-sm font-bold text-white">
                      {review.name}
                    </p>
                    <p className="text-sm text-gray-500">{review.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
