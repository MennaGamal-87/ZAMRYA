import  AOS  from "aos";
import 'aos/dist/aos.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons'; // Import Stack Overflow icon from brands
import { useEffect } from "react";
function ZAMRYA(){
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
    return(
        <>
             <section className="main1 main3">
      <div  className="about m-auto mt-5 pt-5">
        <h1 className="text-center mt-5 pt-5 text-light">ZAMRYA</h1>
       
        <div className="div m-auto my-3">
        <FontAwesomeIcon className="left" icon={faStackOverflow} size="2x" color="red"  />
        <FontAwesomeIcon className="right" icon={faStackOverflow} flip="horizontal" size="2x" color="red"  />
        </div>
      </div>
      <section  className="why mt-5">
        <div className="center5 m-auto" >
        <div className="center4 m-auto">
        <div className="center2 center3 m-auto">
        <div className="center1 center2 m-auto p-3">
        <div className="center center1 py-3 m-auto">
        <div className="text-center center m-auto py-5 ">
          <h2 className="text-center mt-lg-5  mt-md-0 text-light">WHY </h2>
          <h2 className="text-center my-0 text-light"> <span className="z">Z</span><span className="a">A</span><span className="m">M</span><span className="r">R</span><span className="y">Y</span><span className="a2">A</span>??</h2>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div data-aos='fade-up-left'  className="zbox p-4 pt-md-2">
          <p className="text-light text-center m-auto">Z refers to: "Unknown Zone"</p>
        </div>
        <div data-aos='fade-up' className="abox p-4">
          <p className="text-light text-center m-auto">A refers to: "Alien Atmosphere"</p>
        </div>
        <div data-aos='fade-up-right' className="mbox p-4">
          <p className="text-light text-center m-auto">M refers to: "Marine Microbes"</p>
        </div>
        <div data-aos="zoom-in-left" className="rbox p-4 pt-md-2">
          <p className="text-light text-center m-auto ">R refers to: "River-like Waters"</p>
        </div>
        <div data-aos='fade-up' className="ybox p-4">
          <p className="text-light text-center m-auto">Y refers to: "Yield of Life"</p>
        </div>
        <div data-aos="zoom-in-right" className="a2box p-4">
          <p className="text-light text-center m-auto">A refers to: "Aqua Habitat"</p>
        </div>

      
       
        
      
        
      </section>
    </section>
    <section className="atmosphere">
      <div data-aos="fade-right" className="composition p-5">
        <h2 className="text-light text-center mb-4">Composition</h2>
        <p className="text-light text-center">The atmosphere on ZAMRYA is dense and thick with greenhouse gases like carbon dioxide (CO₂), methane (CH₄), and hydrogen sulfide (H₂S). It is lacking oxygen (O₂) because sunlight is not present to drive photosynthesis, which produces oxygen on Earth. Instead, the atmosphere also contains water vapor (H₂O) and ammonia (NH₃), which are found in the atmospheres of gas giants and moons in our solar system.</p>
      </div>
      <div data-aos="fade-left"  className="composition p-5 temperture">
        <h2 className="text-light text-center mb-4">Temperature</h2>
        <p className="text-light text-center">The thick atmosphere trap heat, maintaining a warmer environment despite the absence of sunlight. This prevents the ocean from freezing, similar to how the greenhouse effect works on Earth, and how moons like Europa and Enceladus sustain liquid water under icy crusts. The core of the planet would produce geothermal heat, fueling chemical processes and maintaining liquid oceans beneath the surface.</p>
      </div>
    </section>
    <section className="crust">
    <div data-aos="fade-up-right"  className="composition p-5 struct">
        <h2 className="text-light text-center mb-4 mt-4">Structure</h2>
        <p className="text-light text-center">The crust of ZAMRYA composed of thick layers of ice, similar to Europa's crust, or even rocky material depending on the planet's formation. Below the ice or rocky crust, vast oceans could stretch across the entire planet.</p>
      </div>
      <div data-aos="fade-up-left"  className="composition p-5 struct hydro">
        <h2 className="text-light text-center mb-2 mt-3">Hydrothermal Activity</h2>
        <p className="text-light text-center">Geothermal heat from the planet’s core could fuel hydrothermal vents on the seafloor, releasing heat and chemical-rich water into the ocean. These vents would provide the energy needed to sustain life in a world without sunlight, as seen in Earth’s deep oceans, where chemosynthetic bacteria form the base of ecosystems around vents.</p>
      </div>
    </section>
    <section className="deep">
      <div data-aos="fade-right"  className="composition p-5">
        <h2 className="text-light text-center my-4">Depth and Volume</h2>
        <p className="text-light text-center mt-5"> ZAMRYA immensely deep, potentially stretching tens or even hundreds of kilometers down. Without sunlight, photosynthetic organisms would be absent, but the lack of surface heating might reduce turbulence and keep the waters calm. Life would primarily be concentrated near geothermal sources on the ocean floor.</p>
      </div>
      <div data-aos="fade-left"  className="composition p-5 temperture">
        <h2 className="text-light text-center my-4">Chemical Composition</h2>
        <p className="text-light text-center mt-5"> ZAMRYA rich in dissolved minerals, such as sulfur compounds, methane, and hydrogen, due to volcanic and hydrothermal activity. Water might be salty, or it could contain other chemicals, depending on the planet's formation. It is possible the water could even mix with exotic materials like ammonia, which lowers the freezing point, keeping the oceans liquid at lower temperatures</p>
      </div>
    </section>
    <section className="ecosystem">
    <div data-aos="fade-right"  className="composition p-5 system">
        <h2 className="text-dark text-center my-4">Ecosystem</h2>
        <p className="text-dark text-center mt-5">In the absence of sunlight, life have to adapt to a dark, high-pressure, and cold environment. Organisms evolve bioluminescence to communicate or hunt, as seen in Earth’s deep-sea creatures. Alternatively, life forms could rely on sensory adaptations such as heightened sensitivity to chemical signals or vibrations.</p>
      </div>
      <div data-aos="fade-left"  className="composition p-5 temperture system">
        <h2 className="text-dark text-center my-4">Energy Source</h2>
        <p className="text-dark text-center mt-5">  Without sunlight, the primary energy source would be chemical reactions facilitated by hydrothermal vents. Chemosynthetic bacteria form the base of the food chain, converting chemicals like hydrogen sulfide or methane into energy.</p>
      </div>
    </section>
    <section className="planetry">
    <div data-aos="fade-right"  className="composition p-5 system1">
        <h2 className="text-light text-center my-4">Size and Volume</h2>
        <p className="text-light text-center mt-5">The size of ZAMRYA could vary, but it could potentially have a larger ocean volume than Earth. Planets with high water content are theorized to exist as "ocean worlds" or "water worlds," where the entire surface is covered by a deep global ocean.</p>
      </div>
      <div data-aos="fade-left"  className="composition p-5 temperture system1">
        <h2 className="text-light text-center my-4 mt-5">Surface Area</h2>
        <p className="text-light text-center mt-5"> it is primarily oceanic, so it lack significant landmasses or have minimal rocky islands, resulting in vast uninterrupted water coverage. Its surface area depends on its size, but if it’s similar to or larger than Earth, the area could be significantly larger.</p>
      </div>
    </section>


        </>
    )
}
export default ZAMRYA;