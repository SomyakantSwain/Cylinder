import React from "react";
import { Canvas } from "@react-three/fiber";
import "./style.css";
import { OrbitControls } from "@react-three/drei";

import Cyl from "./Cyl";
import {
  Bloom,
  EffectComposer,
  ToneMapping,
} from "@react-three/postprocessing";

const Canva = () => {
  return (
    <div className="h-[70vh] relative    ">
      <Canvas className=" absolute top-22    " flat camera={{ fov: 22 }}>
        <ambientLight />

        <Cyl />
        <EffectComposer>
          <Bloom
            mipmapBlur={true}
            intensity={0}
            luminanceThreshold={0}
            luminanceSmoothing={0}
          />
        </EffectComposer>
      </Canvas>
    
    </div>
  );
};

export default Canva;
