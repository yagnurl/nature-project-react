import React from "react";
export default function Carousel() {
  return (
    <div>
      <div className="row">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://picsum.photos/id/227/1900/1200?grayscale"
                className="d-block"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://picsum.photos/id/437/1900/1200?grayscale"
                className="d-block "
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://picsum.photos/id/8/1900/1200?grayscale"
                className="d-block "
                alt="..."
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
}
