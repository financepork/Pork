import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardCarousel from "./CardCarousel";

function CarouselLandingMobile() {

  const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2, // padrão para telas grandes
  slidesToScroll: 1,
  centerPadding: "80px",
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "100px"
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "50px"
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "60px"
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "20px"
      }
    }
  ]
}

  return (
    <div className="py-10 w-full h-full m-4 mx-auto max-w-carousel ">
      <Slider {...settings}>
        <div className="px-7 lg:p-10 xl:px-0">
          <CardCarousel titleText="Plano de Economia" imgSrc='/icons/3dIcons/planEco3d.png' contentText='Faça da economia parte de sua rotina, com a ajuda dos nossos planos personalizados ' />
        </div>
        <div className="px-7 lg:p-10 xl:px-0">
          <CardCarousel titleText="Registro de Gastos" imgSrc='/icons/3dIcons/registroGastos3d.png' contentText='Registre suas despesas e as organize como quiser' />
        </div>
        <div className="px-7 lg:p-10 xl:px-0">
          <CardCarousel titleText="Metas de Economia" imgSrc='/icons/3dIcons/metas3d.png' contentText='Defina objetivos que te motivem a se manter economizando' />
        </div>
      </Slider>
    </div>
  );
}

export default CarouselLandingMobile;