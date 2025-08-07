import React from "react";
import { Box } from "@react-three/drei";

export default function SolarArray() {
  return (
    <Box position={[-1.5, 0.25, -3]} args={[2, 0.1, 2]}>
      <meshStandardMaterial color="blue" />
    </Box>
  );
}
