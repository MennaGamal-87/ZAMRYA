
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons'; // Import Stack Overflow icon from brands
import { useEffect } from "react";
import  AOS  from "aos";
import 'aos/dist/aos.css';
function Energy(){
useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

    return(
        <>
         <section className="main1 main2">
        <div className="container  my-5 m-auto p-5 px-1">
          <h2 data-aos="flip-left" data-aos-duration="2000" className=" text-light text-center mb-2 mt-5">Energy Source</h2>
          <div className="div m-auto my-3 div2">
            <FontAwesomeIcon className="left" icon={faStackOverflow} size="2x" color="red"  />
            <FontAwesomeIcon className="right" icon={faStackOverflow} flip="horizontal" size="2x" color="red"  />
          </div>
          <h1 className="text-light text-center my-5">CHEMO<span>SYNTHETIC</span> PROCESS</h1>
          <p data-aos="fade-up" className="text-light pe text-center m-auto">Is the conversion of carbon (usually carbon dioxide or methane) into organic matter using
            inorganic molecules (hydrogen or hydrogen sulfide) or methane as an energy source in the
            absence of sunlight</p>
            <p data-aos="fade-up"  className="text-light pe text-center m-auto">Prokaryotic microorganisms, principally bacteria and archaea (referred to as “bacteria” in the
                following), carry out chemosynthetic reactions. Energy is produced in chemosynthetic
                reactions from oxidizing reduced compounds. There are a variety of chemosynthetic bacteria
                that carry out these reactions, including nitrifying bacteria (oxidizing NH4 or NO2), sulfur
                bacteria (oxidizing H2S, S, and other sulfur compounds), hydrogen bacteria (oxidizing H2),
                methane bacteria (oxidizing CH4), iron and manganese bacteria (oxidizing reduced iron and
                manganese compounds), and carbon monoxide bacteria (oxidizing CO). This is not an
                exhaustive list, and new modes of chemosynthesis as well as new chemosynthetic bacteria
                are still being discovered.</p>
                <p data-aos="fade-up"  className="text-light pe text-center m-auto">Chemosynthesis is usually found in places that are high in methane and low in oxygen, where
                    bacteria can use these conditions to make energy. Some very specialized marine animals have
                    bacteria in their tissues, which use the methane and/or sulfides to make energy that feeds the
                    host, generally a type of clam, mussel or worm .</p>
            <p data-aos="fade-up"  className="text-light pe text-center m-auto">These places are found in specific areas in the depths of the ocean, such as hydrothermal
                vents and cold seeps, which will be detailed under another heading.</p>


                <p data-aos="fade-up"  className="text-light pe text-center m-auto">To see more details about how this process happen in deep oceans Tap to <a className="a1" href="/biology">Biodiversity </a> </p>
        </div>
      </section>
     
        </>
    )
}
export default Energy;