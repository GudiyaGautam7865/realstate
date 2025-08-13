import React from "react";
import { Link } from "react-router-dom";
import "./property.css";
import PropertyCard from "../../Properties/propertycard/PropertyCard";
import { realEstateData } from '../../../assets/data/propertyData';

function Property() {
  // Get the first six items from the realEstateData array
  const displayedProperties = realEstateData.slice(0, 6);

  return (
    <section className="section property" aria-labelledby="property-label">
      <div className="container">
        <h2 className="section-title headline-small">Best home in your city</h2>
        <div className="title-wrapper">
          <p className="section-text body-large">
            Lorem ipsum dolor sit amet consectetur. In quisque scelerisque eget id facilisis. Aliquam in libero egestas at.
          </p>
          <Link to={'/allproperty'} className="btn btn-outline">
            <span className="label-medium">Explore more</span>
            <span className="material-symbols-rounded" aria-hidden="true">
              arrow_outward
            </span>
          </Link>
        </div>
      
        <div class="property-list">
          {displayedProperties.map((item, index) => (
           
              <PropertyCard item={item} key={index}/>
           
          ))}
        </div>
      </div>
    </section>
  );
}

export default Property;
