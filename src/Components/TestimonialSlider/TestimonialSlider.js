import React from 'react';
import Slider from 'react-slick';
import './Testimonial.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonialSlider = ({ testimonials }) => {
  const backgroundColors = ['#f8f8f8', '#e0e0e0', '#dcdcdc'];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Adjust as needed
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {testimonials.map((testimonial, index) => (
        <div key={index} className="testimonial-card" style={{ backgroundColor: backgroundColors[index % backgroundColors.length] }}>
          <h3>{testimonial.author}</h3>
          <p>{testimonial.quote}</p>
        </div>
      ))}
    </Slider>
  );
};

export default TestimonialSlider;
