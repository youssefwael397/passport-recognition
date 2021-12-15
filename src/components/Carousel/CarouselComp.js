import React from 'react'
// import firstslide from './first-slide.jpg'
// import secondslide from './second-slide.jpg'
// import slide from './slide.jpg'
// import thirdslide from './third-slide.jpg


// import Carousel from 'react-bootstrap/Carousel'
import './CarouselComp.css';



function CarouselComp() {
  return (

    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <h2 class="d-block w-100 text-center">Our team create a new service.</h2>
        </div>
        <div class="carousel-item">
          <h2 class="d-block w-100 text-center">Scan any image to detect if passport or not.</h2>
        </div>
        <div class="carousel-item">
          <h2 class="d-block w-100 text-center">If it's passport, you 'll get its data.</h2>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>



  );
}

export default CarouselComp;
