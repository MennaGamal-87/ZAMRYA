import { BrowserRouter, Route, Routes } from "react-router-dom";
import Energy from "./components/Energy";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Geo from "./components/Geo";
import ZAMRYA from "./components/ZAMRYA";
import Biology from "./components/Biology";

import Env from "./components/Env";


function App() {
  return (
    <>
    <BrowserRouter>
         <Navbar/>
         <Routes>
         <Route path="/" element={<Home/>}/>
             <Route path="/home" element={<Home/>}/>
            <Route path="/energy" element={<Energy/>}/>
            <Route path="/geologicalfeatures" element={<Geo/>}/>
            <Route path="/zamrya" element={<ZAMRYA/>}/>
            <Route path="/environment" element={<Env/>}/>
            <Route path="/biology" element={<Biology/>}/>
            <Route path="*" element={<Home/>}/>

         </Routes>
    </BrowserRouter>
    
   
    </>
   
  );
}
export default App;

