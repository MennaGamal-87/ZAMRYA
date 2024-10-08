import React from "react";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import  AOS  from "aos";
import 'aos/dist/aos.css';
function Model() {
  // Assuming the 3D model is located in the public folder const gltf = useGLTF ('/path_to_your_model/model.gltf'); return <primitive object={gltf.scene} scale={0.5} />;
  const gltf = useGLTF("/earthdesign.glb");
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return <primitive object={gltf.scene} scale={0.5} />;
}
function Home() {
 
  return (
    <Canvas style={{ height: "100vh", width: "100vw",position: 'abolute',top:'0',left:'0'}}>
      <Environment
  background={true} // Set to true to make it the scene's background
  files="../images/Stars_1K.jpg" // Path to the HDRI file
/>

      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <Model />
      <OrbitControls />
    </Canvas>
  );
}
export default Home;

