import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./propertySlider.css";
import PropertyCard from "../../Properties/propertycard/PropertyCard";
import { realEstateData } from '../../../assets/data/propertyData';

function PropertySlider() {
  

  return (
    <section className="section property" aria-labelledby="property-label">
      <div className="container">
        <h2 className="section-title headline-small">Best home in your city</h2>
       
        <div className="property-list-wrapper">
          <Swiper
            modules={[Navigation]}
            navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            className="property-list"
          >
            {realEstateData.map((item, index) => (
              <SwiperSlide key={index}>
                <PropertyCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
    </section>
  );
}

export default PropertySlider;
