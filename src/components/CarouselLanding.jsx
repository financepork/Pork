import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CardCarousel from "./CardCarousel"; 

function CarouselLanding() {

    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, 
    slidesToScroll: 1,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: true,
          centerPadding: '0px', 
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: true,
        },
      },
    ],
  };
    return (
        <div className="py-10 w-full h-full m-4 mx-auto max-w-carousel "> 
            <Slider {...settings}>
                <div className="px-3"> 
                    <CardCarousel titleText="Plano de Economia" imgSrc='planEco.png' />
                </div>
                <div className="px-3">
                    <CardCarousel titleText="Registro de Gastos" imgSrc='registroGastos.png' />
                </div>
                <div className="px-3">
                    <CardCarousel titleText="Metas de Economia" imgSrc='metas.png' />
                </div>
            </Slider>
        </div>
    );
}

export default CarouselLanding;