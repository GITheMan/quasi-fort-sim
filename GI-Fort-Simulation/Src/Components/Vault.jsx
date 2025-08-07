import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Box } from "@react-three/drei";

export default function Vault() {
  const vaultRef = useRef();

  useFrame(() => {
    if (vaultRef.current) {
      vaultRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Box ref={vaultRef} position={[-3, 0.5, 0]} args={[1.5, 1, 1.5]}>
      <meshStandardMaterial color="gray" />
    </Box>
  );
}
