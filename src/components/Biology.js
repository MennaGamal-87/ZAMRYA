import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons'; // Import Stack Overflow icon from brands


import { useEffect } from "react";
import  AOS  from "aos";
import 'aos/dist/aos.css';
function Biology(){
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
          <div className="div m-auto my-3 div4">
          <FontAwesomeIcon className="left" icon={faStackOverflow} size="2x" color="red"  />
          <FontAwesomeIcon className="right" icon={faStackOverflow} flip="horizontal" size="2x" color="red"  />
          </div>
          <h1 className="text-light text-center my-5">BIO<span>DIVER</span>SITY</h1>
          <p className="text-light text-center">In this section, we will discuss fooed chain and ecosystem on ZAMRYA</p>

        </div>
      </section>
    
      <section className="chain">
        <div className="titlechain p-4">
          <h2 className="text-light text-center m-auto">Life Cycle</h2>
        </div>
        <div className="org org1">
          
        <img className="img-fluid"  src="../images/WhatsApp Image 2024-10-05 at 08.06.02 (1).jpeg"></img>
        <div className="details">
          <h3 className='text-light'>Gallionella</h3>
          <p className='text-light'>classification : Gallionella is a genus of iron-oxidizing bacteria , it considered as praimary producer . Gallionella is a chemolithoautotroph, meaning it uses inorganic compounds as an energy source and fixes carbon dioxide to produce organic material. Specifically, it oxidizes ferrous iron (Fe²⁺) to ferric iron (Fe³⁺) and derives energy from this reaction. This process makes Gallionella a key player in the cycling of iron in aquatic environments, particularly in areas where iron-rich waters are prevalent, such as hydrothermal vents .</p>
        </div>
        </div>
       
        <div className="arow arow1">
          
        <img className="img-fluid" src="../images/har.png"></img>
        </div>
        <div className="org org2">
        <img className="img-fluid" src="../images/TubeWorms.jpg"></img>
        <div className="details">
          <h3 className='text-light'> Lamellibrachia luymesia</h3>
          <p className='text-light'>
         
          classification : is a species of tubeworms , belong to the family Siboglinidae, is considered a primary consumer. Lamellibrachia luymesi is a species of deep-sea tube worm that thrives in extreme environments, particularly around cold seeps rather than hydrothermal vents . These tube worms form symbiotic relationships with bacteria that live inside them.
          </p>
        </div>
        </div>
        <div className="arow arow2">
        <img className="img-fluid" src="../images/har.png"></img>
        </div>
        <div className="org org3">
          <img className="img-fluid" src="../images/WhatsApp Image 2024-10-05 at 08.05.28.jpeg"></img>
          <div className="details">
            <h3 className='text-light'>Pathymunida Spp</h3>
            <p className='text-light'>
Classification: it is a Predators and it is defined as Secondary Consumer.
They are carnivorous and opportunistic feeders, consuming small crustaceans, mollusks, and other benthic organisms.</p>
          </div>
        </div>
        <div className="arow arow3">
        <img className="img-fluid" src="../images/har.png"></img>
        </div>
       <div className="org org4">
       <img className="img-fluid" src="../images/file-ZFvgiyUEMIKhYBUmDyjDR2Gv.webp"></img>
       <div className="details">
        <h3 className='text-light'>Fangtooth</h3>
        <p className='text-light'>
Classification: it is a High Predator and it is defined as Tertiary Consumer.
It is a deep-sea fish that is well-known for its fierce appearance, large teeth, and ability to survive. Despite its terrifying look, it's relatively small and is a fascinating example of deep-sea adaptation. It adapts with deep-sea by large teeth, compact body, small eyes, and lateral line system.</p>
       </div>
       </div>
       <div className="arow arow4">
        <img className="img-fluid" src="../images/har.png"></img>
        </div>
        <div className="org org5">
       <img className="img-fluid" src="../images/file-RUEJS5J114j6Sz8soYAEe1XY (1).jpg"></img>
       <div className="details">
        <h3 className='text-light'>Decomposer Bacteria</h3>
        <p className='text-light'>play a crucial role in recycling nutrients within the ecosystem. After organisms like worms or fish die, decomposer bacteria break down the dead organic matter and convert it into simpler compounds such as:

Carbon: Released into the environment from the decomposition of organic matter, making it available for other organisms, including chemosynthetic bacteria.
Sulfur: Decomposer bacteria can also break down sulfur-rich proteins, converting them into simpler compounds like hydrogen sulfide (H₂S), which can then be used again by chemosynthetic bacteria for energy production.</p>
       </div>
       </div>
       <div className="arow arow5">
        <img className="img-fluid" src="../images/har.png"></img>
        </div>

      
        
      </section>
        </>
 )
}
export default Biology;