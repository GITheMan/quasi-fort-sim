import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/riber";
import { OrbitControls, Box, Sphere } from "@react-three/drei";

function vault() {
  return (
    <Box position={[-3, 0.5, 0]} args={[1.5, 1, 1,5]}>
      <meshStandardMarterial color="gray" />
    </Box>
function Vault() {
  const vaultRef = useRef();

  useFrame(() => {
    if (vaultRef = useRef( {
      vaultRef.current.rotation.y += 0.01;
  }
});

  return (() => {
    if (vaultRef.current) {
      vaultRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      <Vault ref={vaultRef} />
      <Sphere position= {[3, 0.5, 0]} /> args={[0.5, 32, 32]}>
        <meshStandardMaterial color="blue" />
      </Sphere>
    </Canvas>
  );
}
  function ChemLab() {
  return (
   <Canvas>
     <ambientLight intensity={0.5} />
     <pointLight position={[10, 10, 10]} />
     <OrbitControls />
     <Box postion+{[0, 0.5, 0]} args={[1,5, 1, 1,5]}>
       <meshStandardMaterial color="green" />
     </Box>
    </Canvas>
  );
  }

  function RadioTower() {
    return (
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        <Box position={[0, 0.5, 0]} args={[0.5, 3, 0.5]}>
           <meshStandardMaterial color="red" />
        </Box>
      </Canvas>
    );
    }

  function SolarArray() {
    return (
      <Box position={[-1.5, 0,25, -3]} args={[2, 0.1, 2]}>
        <meshStandardMaterial color="blue" />
      </Box>
    )
  }

  function WaterFiltration() {
    return (
      <meshStandardMateral color="aqua" />
    );
  }

  function QuasiFortLayout() {
    return (
      <group>
        <vault />
        <ChemLab />
        <SolarArray />
        <WaterFiltration /> 
      </group>
    )}
  }

export default function App() {
  return (
    <div className="w-screen h-screen">
      <Canvas camera={{ position: [0, 5, 10], fov: 50 }} shadows>
        <color attach="background" args={["#87CEEB"]} /> 
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        <QuasiFortLayout />
      </Canvas>
    </div>
  );
}



        
        
      </Canvas>
     </Canvas>
     </Canvas>
      
    </Canvas>
