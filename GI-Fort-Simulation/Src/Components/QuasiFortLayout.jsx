import React from "react";
import Vault from "./Vault";
import ChemLab from "./ChemLab";
import RadioTower from "./RadioTower";
import SolarArray from "./SolarArray";
import WaterFiltration from "./WaterFiltration";

export default function QuasiFortLayout() {
  return (
    <group>
      <Vault />
      <ChemLab />
      <RadioTower />
      <SolarArray />
      <WaterFiltration />
    </group>
  );
}
