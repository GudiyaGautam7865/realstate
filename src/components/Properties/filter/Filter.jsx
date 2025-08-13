import React, { useEffect, useState } from "react";
import { realEstateData } from "../../../assets/data/propertyData";
import "./filter.css";

function Filter({ setdata }) {
  const [filters, setFilters] = useState({
    address: "",
    propertyType: "",
    bhk: "",
    constructionStage: "",
    features: "",
    priceRange: [0, 1000],
  });

  useEffect(() => {
    setdata(realEstateData);
  }, []);

  useEffect(() => {
    const filteredProperties = realEstateData.filter((property) => {
      const price = parseFloat(property.price.replace("$", ""));
      const [minPrice, maxPrice] = filters.priceRange;
  
      return (
        // Check if the address contains the filter value (case insensitive)
        (filters.address ? property.address.toLowerCase().includes(filters.address.toLowerCase()) : true) &&
        (filters.propertyType ? property.propertyType === filters.propertyType : true) &&
        (filters.bhk ? property.bhk === parseInt(filters.bhk) : true) &&
        (filters.constructionStage
          ? property.constructionStage === filters.constructionStage
          : true) &&
        (filters.features ? property.features.includes(filters.features) : true) &&
        price >= minPrice &&
        price <= maxPrice
      );
    });
  
    setdata(filteredProperties);
  }, [filters]);
  
  

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div className="filter-container">
      <div className="filters">
        {/* Location Filter */}
        <div className="filter">
          <label htmlFor="address">Location</label>
          <select
            name="address"
            id="address"
            value={filters.address}
            onChange={handleFilterChange}
          >
            <option value="">Select Location</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Ghaziabad">Ghaziabad</option>
          </select>
        </div>

        {/* Property Type Filter */}
        <div className="filter">
          <label htmlFor="propertyType">Property Types</label>
          <select
            name="propertyType"
            id="propertyType"
            value={filters.propertyType}
            onChange={handleFilterChange}
          >
            <option value="">Any</option>
            <option value="Apartment">Apartment</option>
            <option value="Villa">Villa</option>
            <option value="Independent House">Independent House</option>
          </select>
        </div>

        {/* BHK Filter */}
        <div className="filter">
          <label htmlFor="bhk">BHK</label>
          <select
            name="bhk"
            id="bhk"
            value={filters.bhk}
            onChange={handleFilterChange}
          >
            <option value="">Any</option>
            <option value="1">1 BHK</option>
            <option value="2">2 BHK</option>
            <option value="3">3 BHK</option>
            <option value="4">4 BHK+</option>
          </select>
        </div>

        {/* Stages of Construction Filter */}
        <div className="filter">
          <label htmlFor="constructionStage">Construction Stages</label>
          <select
            name="constructionStage"
            id="constructionStage"
            value={filters.constructionStage}
            onChange={handleFilterChange}
          >
            <option value="">Any</option>
            <option value="Ready to Move">Ready to Move</option>
            <option value="Under Construction">Under Construction</option>
          </select>
        </div>

        {/* Features Filter */}
        <div className="filter">
          <label htmlFor="features">Features</label>
          <select
            name="features"
            id="features"
            value={filters.features}
            onChange={handleFilterChange}
          >
            <option value="">Any</option>
            <option value="Swimming Pool">Swimming Pool</option>
            <option value="Gym">Gym</option>
            <option value="Garden">Garden</option>
            <option value="Parking">Parking</option>
          </select>
        </div>

        {/* Price Range Filter */}
        <div className="filter">
          <label htmlFor="priceRange">Price Range</label>
          <input
            type="range"
            id="priceRange"
            name="priceRange"
            min="0"
            max="1000"
            step="10"
            value={filters.priceRange[1]}
            onChange={(e) =>
              setFilters({ ...filters, priceRange: [filters.priceRange[0], e.target.value] })
            }
          />
          <div className="price-range">
            <span>${filters.priceRange[0]}</span> - <span>${filters.priceRange[1]}</span>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default Filter;
