import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons'; // Import Stack Overflow icon from brands
import React from 'react';
import OwlCarousel from 'react-owl-carousel'; // Import Owl Carousel
import 'owl.carousel/dist/assets/owl.carousel.css'; // Owl Carousel CSS
import 'owl.carousel/dist/assets/owl.theme.default.css'; // Owl Carousel Default Theme CSS

import { useEffect } from "react";
import  AOS  from "aos";
import 'aos/dist/aos.css';

function Env(){
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  const options = {
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000, // 3 seconds
    items: 1, // Number of items per slide
  };
    return(
        <>
             <section className="main1 main4">
        <div className="container  my-5 m-auto p-5">
          <h2 data-aos="flip-left" data-aos-duration="2000" className=" text-light text-center mb-2 mt-5">ZAMRYA</h2>
          <div className="div m-auto my-3 div4">
          <FontAwesomeIcon className="left" icon={faStackOverflow} size="2x" color="red"  />
          <FontAwesomeIcon className="right" icon={faStackOverflow} flip="horizontal" size="2x" color="red"  />
          </div>
          <h1 className="text-light text-center my-5">OCEANIC ENV<span>IRON</span>MENT</h1>

        </div>
      </section>
      <section className="ocean">
        <div data-aos="flip-right"  className="temp p-4">
          <h3 className="text-light text-center my-3">Temperature</h3>
          <p className="text-light ">Even at very deep depths, such as the Mariana Trench, the ocean's temperature never falls below freezing (0°C or 32°F). This is because the extreme pressure keeps water at such depths from freezing and keeps it in a liquid form. The updated distribution of deep ocean temperatures is as follows:</p>
        <div className="image3 m-auto">
        <img className="img-fluid " src="../images/WhatsApp Image 2024-10-04 at 21.31.13.jpeg"></img>
        </div>
        
        </div>
        <div data-aos="flip-left"  className="temp pressure p-4">
          <h3 className="text-light text-center my-3">pressure</h3>
          <p className="text-light ">a one-meter (three-foot) column of seawater produces a pressure of about one decibar (0.1 atmosphere), the pressure in decibars is approximately equal to the depth in meters. (One decibar is one-tenth of a bar, which in turn is equal to 105 newtons per square meter.)</p>
          <div className="image">
            <img className="img-fluid" src="../images/Picture1.png"></img>

          </div>
        </div>
        
 

  
  


         
       
      </section>
    
        </>
 )
}
export default Env;