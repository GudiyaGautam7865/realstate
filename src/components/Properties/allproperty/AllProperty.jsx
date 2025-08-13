import React, { useState } from "react";
import "./allproperty.css";
import PropertyCard from "../../Properties/propertycard/PropertyCard";

function AllProperty({ data }) {
  // Define the items per page and initial page state
  const itemsPerPage = 16;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the starting and ending index for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  // Handle Next button click
  const handleNext = () => {
    if (currentPage < Math.ceil(data.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Handle Previous button click
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section className="section property" aria-labelledby="property-label">
      <div className="container">
        <div className="property-list">
          {currentData.map((item, index) => (
            <PropertyCard item={item} key={index} />
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="pagination-controls">
          <button
            className="btn btn-outline"
            onClick={handlePrevious}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <span className="pagination-info">
            Page {currentPage} of {Math.ceil(data.length / itemsPerPage)}
          </span>
          <button
            className="btn btn-outline"
            onClick={handleNext}
            disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}

export default AllProperty;
