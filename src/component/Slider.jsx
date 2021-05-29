import React from "react";
import "../style/slide.css";

const Slider = () => {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://cdn.pixabay.com/photo/2020/08/08/17/44/cockle-5473563__340.jpg"
              className="d-block w-100"
              alt="slide"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
              <a href="#/">Read more!</a>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://cdn.pixabay.com/photo/2021/05/24/12/18/lighthouse-6278951_960_720.jpg"
              className="d-block w-100"
              alt="slide"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
              <a href="#/">Read more!</a>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://cdn.pixabay.com/photo/2021/05/23/06/39/zebra-6275284__340.jpg"
              className="d-block w-100"
              alt="slide"
            />
            <div className="carousel-caption d-none d-md-block my-auto">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
              <a href="#/">Read more!</a>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Slider;
