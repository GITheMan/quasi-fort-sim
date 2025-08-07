import React from "react";
import { Box } from "@react-three/drei";

export default function RadioTower() {
  return (
    <Box position={[0, 0.5, 0]} args={[0.5, 3, 0.5]}>
      <meshStandardMaterial color="red" />
    </Box>
  );
}
