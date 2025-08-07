import React from "react";
import { Box } from "@react-three/drei";

export default function ChemLab() {
  return (
    <Box position={[0, 0.5, 0]} args={[1.5, 1, 1.5]}>
      <meshStandardMaterial color="green" />
    </Box>
  );
}
