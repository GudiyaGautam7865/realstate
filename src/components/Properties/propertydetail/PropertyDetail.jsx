import React, { useEffect, useState } from 'react';
import './propertydetail.css';
import { MdApartment, MdLocationOn } from 'react-icons/md';
import { BiBath, BiBed } from 'react-icons/bi';
import { realEstateData } from '../../../assets/data/propertyData';


function PropertyDetail({id}) {
  
  const [item, setItem] = useState(null);

  
  useEffect(() => {
    const foundItem = realEstateData.find((property) => property.id.toString() === id);
    if (foundItem) {
      setItem(foundItem);
    }
  }, [id]);

  if (!item) {
    return <p>Property not found</p>;
  }

  return (
    <div className="property-detail-container">
    {/* Full-width image */}
    <div className="property-banner">
      <img
        src={item.image} // Replace with your image URL
        alt="Property Banner"
      />
    </div>

    {/* Property Header */}
    

      {/* Main Content */}
      <div className="property-main">
        {/* Left Section */}
        <div className="project-summary">
          <div className="property-header">
        <h1 className="property-title">{item.agency}</h1>
        <span className="property-price">Starting price <strong> <br />{item.price}</strong></span>
        <p className="property-address">
        <MdLocationOn />
        {item.address}
        </p>
        <p className="property-type">
          <span><MdApartment />  Apartments | {item.area} Super Area</span>
        </p>
        <p className="property-bedrooms">
        <BiBed />{item.bedrooms} Bedrooms</p>
        <p className="property-bedrooms">
        <BiBath />{item.bathrooms} Bathrooms</p>
      </div>
          <h3>Project Summary</h3>
          
  <div class="grid-container">
    <div class="grid-item">
      <p><strong>Project Name</strong><br/>{item.agency}</p>
      <p><strong>Parking Type</strong><br/>  Covered</p>
    </div>
    <div class="grid-item">
      <p><strong>RERA No</strong><br/>  PRM/KA/RERA/1251/446/PR/250123/005687</p>
      <p><strong>Nearest Landmark</strong> <br/> Near MVJ College of Engineering</p>
    </div>
    <div class="grid-item">
      <p><strong>Developer</strong><br/>  {item.agency}</p>
      <p><strong>Phase Name</strong><br/>  Phase 1</p>
    </div>
  </div>
        </div>

        {/* Right Section (Contact Form) */}
        <div className="property-contact">
          <h2>Interested in {item.agency}?</h2>
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="First Name *" required />
              <input type="text" placeholder="Last Name *" required />
            </div>
            <input type="text" placeholder="Mobile Phone *" required />
            <input type="email" placeholder="Email Address *" required />
            <textarea placeholder="Your message" rows="4"></textarea>
           
            <button type="submit" className="contact-btn">
              Contact Us
            </button>
          </form>
        </div>
      </div>
  </div>
  );
}

export default PropertyDetail;
