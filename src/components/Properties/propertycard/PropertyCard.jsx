import React, { useEffect } from "react";

import { Link } from "react-router-dom";

function PropertyCard({ item }) {
  useEffect(() => {
    const $toggleBtns = document.querySelectorAll("[data-toggle-btn]");
    
    const handleClick = (e) => {
      e.target.classList.add("active");
      setTimeout(() => {
        e.target.classList.remove("active");
      }, 2000);
    };

    $toggleBtns.forEach(($toggleBtn) => {
      $toggleBtn.addEventListener("click", handleClick);
    });

    return () => {
      $toggleBtns.forEach(($toggleBtn) => {
        $toggleBtn.removeEventListener("click", handleClick);
      });
    };
  }, []);

  return (
    <div>
    <Link to={`/property/${item.id}`} className="card">
      <div className="card-banner">
        <figure
          className="img-holder"
          style={{ width: "585px", height: "200px" }}
        >
          <img
            src={item.image}
            width="585"
            height="390"
            alt={item.agency}
            className="img-cover"
          />
        </figure>
        <span className="badge label-medium">New</span>
        <button
          className="icon-btn fav-btn"
          aria-label="add to favorite"
          data-toggle-btn
        >
          <span className="material-symbols-rounded" aria-hidden="true">
            favorite
          </span>
        </button>
      </div>
      <div className="card-content">
        <span className="title-large">{item.price}</span>
        <h3>
          <a href="#" className="title-small card-title">
            {item.agency}
          </a>
        </h3>
        <address className="body-medium card-text">{item.address}</address>
        <div className="card-meta-list">
          <div className="meta-item">
            <span
              className="material-symbols-rounded meta-icon"
              aria-hidden="true"
            >
              bed
            </span>
            <span className="meta-text label-medium">{item.bedrooms}</span>
          </div>
          <div className="meta-item">
            <span
              className="material-symbols-rounded meta-icon"
              aria-hidden="true"
            >
              bathtub
            </span>
            <span className="meta-text label-medium">{item.bathrooms}</span>
          </div>
          <div className="meta-item">
            <span
              className="material-symbols-rounded meta-icon"
              aria-hidden="true"
            >
              straighten
            </span>
            <span className="meta-text label-medium">{item.area}</span>
          </div>
        </div>
      </div>
    </Link>
    </div>
  );
}

export default PropertyCard;
