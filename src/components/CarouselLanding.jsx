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
        autoplay: false,
        autoplaySpeed: 2500,

        centerMode: true,       
        centerPadding: '60px',
      

        responsive: [
            {
                breakpoint: 768, 
                settings: {
                    centerPadding: '40px' 
                }
            }
        ]
    };

    return (
        <div className="py-10 w-full h-full m-4 "> 
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