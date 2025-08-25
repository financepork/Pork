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
     centerPadding: "20px",

    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: true,
          centerPadding:"20px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: true,
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: true,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: true,
          centerPadding: "100px" 
        },
      },
      {
        breakpoint: 2560, 
        settings: {
          slidesToShow: 2, 
          slidesToScroll: 1,
          centerPadding: "80px"
        }
      },
    ]
  }

  return (
    <div className="py-10 w-full h-full m-4 mx-auto max-w-carousel ">
      <Slider {...settings}>
        <div className="px-7 lg:p-10 xl:px-0">
          <CardCarousel titleText="Plano de Economia" imgSrc='/icons/planEco.png' contentText='Faça da economia parte de sua rotina, com a ajuda dos nossos planos personalizados ' />
        </div>
        <div className="px-7 lg:p-10 xl:px-0">
          <CardCarousel titleText="Registro de Gastos" imgSrc='/icons/registroGastos.png' contentText='Registre suas despesas e as organize como quiser' />
        </div>
        <div className="px-7 lg:p-10 xl:px-0">
          <CardCarousel titleText="Metas de Economia" imgSrc='/icons/metas.png' contentText='Defina objetivos que te motivem a se manter economizando' />
        </div>
      </Slider>
    </div>
  );
}

export default CarouselLanding;