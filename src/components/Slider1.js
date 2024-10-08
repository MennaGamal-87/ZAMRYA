import React from 'react';
import OwlCarousel from 'react-owl-carousel'; // Import Owl Carousel
import 'owl.carousel/dist/assets/owl.carousel.css'; // Import Owl Carousel CSS
import 'owl.carousel/dist/assets/owl.theme.default.css'; // Import default theme



var Slider =function Slider1(){
   
        const options = {
          loop: true,
          margin: 10,
          nav: true,
          dots: true,
          responsive: {
            0: {
              items: 1,
            },
            600: {
              items: 2,
            },
            1000: {
              items: 3,
            },
          },
        };
      
        return (
          <div className="App">
            <h1>Owl Carousel in React</h1>
            <OwlCarousel className="owl-theme" {...options}>
              <div className="item">
                <img src="https://via.placeholder.com/200x150" alt="Slide 1" />
              </div>
              <div className="item">
                <img src="https://via.placeholder.com/200x150" alt="Slide 2" />
              </div>
              <div className="item">
                <img src="https://via.placeholder.com/200x150" alt="Slide 3" />
              </div>
            </OwlCarousel>
          </div>
        );
      };



  
  export default Slider;
  