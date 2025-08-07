import React from "react";
import { Box } from "@react-three/drei";

export default function WaterFiltration() {
  return (
    <Box position={[1.5, 0.25, -3]} args={[1, 0.5, 1]}>
      <meshStandardMaterial color="aqua" />
    </Box>
  );
}
