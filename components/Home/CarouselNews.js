import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageText from "@/components/Home/ImageText";

const CarouselNews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="">
      <Slider {...settings}>
        <div>
          <ImageText
            imageUrl="https://example.com/image.jpg"
            text="
            पूर्व सीएम वसुंधरा राजे करने लगी ईंटों से चिनाई, जानें क्या है वजह?"
          />
        </div>
        <div>
          <ImageText
            imageUrl="https://example.com/image.jpg"
            text="
            पूर्व सीएम वसुंधरा राजे करने लगी ईंटों से चिनाई, जानें क्या है वजह?"
          />
        </div>
        <div>
          <ImageText
            imageUrl="https://example.com/image.jpg"
            text="
            पूर्व सीएम वसुंधरा राजे करने लगी ईंटों से चिनाई, जानें क्या है वजह?"
          />
        </div>
        <div>
          <ImageText
            imageUrl="https://example.com/image.jpg"
            text="
            पूर्व सीएम वसुंधरा राजे करने लगी ईंटों से चिनाई, जानें क्या है वजह?"
          />
        </div>
      </Slider>
    </div>
  );
};

export default CarouselNews;
