import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons'; // Import Stack Overflow icon from brands

import { useEffect } from "react";
import  AOS  from "aos";
import 'aos/dist/aos.css';
function Geo(){
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
    return(
        <>
           <section className="main1">
        <div className="container  my-5 m-auto p-5">
          <h2 data-aos="flip-left" data-aos-duration="2000" className=" text-light text-center mb-2 mt-5">ZAMRYA</h2>
          <div className="div m-auto my-3 div3">
          <FontAwesomeIcon className="left" icon={faStackOverflow} size="2x" color="red"  />
          <FontAwesomeIcon className="right" icon={faStackOverflow} flip="horizontal" size="2x" color="red"  />
          </div>
          <h1 className="text-light text-center my-5">GEO<span>LOGIC</span>AL FEATURES</h1>
          <p className="text-light">Our planet has different geolohical feactures that play an important role in the life on it such as hydrothermal vents, cold ceeps and volcanic activities. </p>

        </div>
      </section>
      
    
      <section className="content p-5 cont1 px-2">
        <div className="container">
          <div className="row m-auto">
            <div className="col-lg-4 col-md-12 bgg">
              <div className="bg1 dif vents"> </div>
              <div data-aos="fade-up"  className="dif over"><p>Hydrothermal Vents</p></div>
              <div data-aos="fade-up-right" className="bg1 dif"><p>Cracks in the ocean
                floor releasing hot,
                mineral-rich water
                due to interaction
                between water and
                hot rocks beneath
                the oceanic crust</p></div>
              <div data-aos="fade-up-right" className="bg1 dif"><p>Typically found at
                depths of 2000-
                4000 meters</p></div>
              <div data-aos="fade-up-right" className="bg1 dif"><p>Very close to midocean ridges or
                subduction zones.</p>
                </div>
              <div data-aos="fade-up-right" className="bg1 dif"><p>Water
                temperatures range
                from 60°C to
                400°C (140°F to
                752°F).</p>
                </div>
              <div data-aos="fade-up-right" className="bg1 dif"><p>Rich in minerals
                such as sulfides,
                iron, manganese,
                zinc, and copper.</p></div>
              <div data-aos="fade-up-right" className="bg1 dif"><p>Formed due to
                tectonic activity
                like seafloor spreading or
                subduction of
                tectonic plates.</p>
                </div>
              <div data-aos="fade-up-right" className="bg1 dif"><p>Supports unique
                ecosystems relying
                on chemosynthesis
                and provides a rich
                environment for
                organisms like
                bacteria and sulfurdependent species.</p></div>
              <div data-aos="fade-up-right" className="bg1 dif"><p>Hydrothermal
                vents may
                influence nearby
                mineral distribution
                and gas
                composition,
                affecting adjacent
                environments.</p>
                </div>
              <div data-aos="fade-up-right" className="bg1 dif"><p>Both hydrothermal
                vents and cold
                seeps contribute to
                supporting life in
                deep-sea
                environments using
                chemical energy.</p></div>
              <div data-aos="fade-up-right" className="bg1 dif"><p>Hydrothermal
                vents rely on high
                heat and
                geothermal energy.</p></div>
            </div>
            <div className="col-lg-4 col-md-12 bgg">
            <div className="bg2 dif ceeps"></div>
            <div data-aos="fade-up" className="dif over1"><p>Cold Ceeps</p></div>
           
              <div data-aos="fade-up" className="bg2 dif"><p>Areas on the
                seafloor where
                cold, methane-rich
                fluids seep into the
                ocean, often
                without high
                temperatures.</p>
                </div>
              <div data-aos="fade-up" className="bg2 dif"><p>Depths usually
                range from 300 to
                3000 meters,
                sometimes deeper.</p></div>
              <div data-aos="fade-up" className="bg2 dif"><p>Located further
                from mid-ocean
                ridges, often in
                more geologically
                stable areas</p></div>
              <div data-aos="fade-up" className="bg2 dif"><p>Fluids range from
                4°C to 20°C (39°F
                to 68°F), much
                cooler than
                hydrothermal
                vents.</p>
                </div>
              <div data-aos="fade-up" className="bg2 dif"><p>Fluids contain
                methane, hydrogen
                sulfide, and
                hydrocarbons.</p></div>
              <div data-aos="fade-up" className="bg2 dif"><p>Often located in
                stable areas but
                can still be associated with
                mild tectonic
                activity</p></div>
              <div data-aos="fade-up" className="bg2 dif"><p>Supports
                specialized
                ecosystems that
                rely on methane
                and hydrocarbon
                energy.</p>
                </div>
              <div data-aos="fade-up" className="bg2 dif"><p>Cold seeps might
                coexist with
                hydrothermal vents
                but rely on
                different sources of
                energy and
                minerals.</p></div>
              <div data-aos="fade-up" className="bg2 dif"><p>Both cold seeps
                and vents provide
                mineral and
                chemical-rich fluids
                that sustain
                chemosynthetic
                ecosystems.</p>
                </div>
              <div data-aos="fade-up" className="bg2 dif"><p>Cold seeps are
                fueled by gases like
                methane without
                requiring high
                temperatures.</p></div>
            </div>
            <div className="col-lg-4 col-md-12 bgg ">
            <div data-aos="fade-up" className="bg3 dif volcanic"></div>
            <div data-aos="fade-up"  className="dif over2"><p>Submarine Volcanoes</p></div>
           
              <div data-aos="fade-up-left" className="bg3 dif"><p>Underwater
                volcanoes ejecting
                lava, gases, and
                minerals due to
                volcanic activity
                beneath the ocean.</p>
              </div>
              <div data-aos="fade-up-left" className="bg3 dif"><p>Can occur at any
                depth but are
                commonly found
                near tectonic
                boundaries or
                hotspots.</p>
                </div>
              <div data-aos="fade-up-left" className="bg3 dif"><p>Often near midocean ridges or at
                underwater
                hotspots where
                volcanic activity is
                present.</p>
                </div>
              <div data-aos="fade-up-left" className="bg3 dif"><p>Temperatures can
                vary based on
                eruptions but can
                reach extreme
                levels with molten
                lava release.</p>
                </div>
              <div data-aos="fade-up-left" className="bg3 dif"><p>Releases minerals
                like sulfur, iron,
                magnesium, along
                with lava and sulfur
                gases.</p></div>
              <div data-aos="fade-up-left" className="bg3 dif"><p>Directly caused by
                volcanic tectonic
                activity, such as plate subduction or
                seafloor spreading.</p></div>
              <div data-aos="fade-up-left" className="bg3 dif"><p>Can create new
                islands and
                drastically reshape
                the seafloor, but
                can also cause
                destruction to local
                ecosystems during
                eruptions.</p></div>
              <div data-aos="fade-up-left" className="bg3 dif"><p>Submarine
                volcanoes can
                create or destroy
                hydrothermal vent
                environments
                depending on their
                eruptions.</p>
                </div>
              <div data-aos="fade-up-left" className="bg3 dif"><p>Submarine
                volcanoes may
                create similar
                conditions to
                hydrothermal vents
                or cold seeps if
                located near
                tectonic
                boundaries.</p>
                </div>
              <div data-aos="fade-up-left" className="bg3 dif"><p>Submarine
                volcanoes are
                driven by volcanic
                activity and can
                drastically alter the
                seafloor landscape.</p></div>
            </div>
          </div>
        </div>
      </section>
        </>
     )
}
export default Geo;