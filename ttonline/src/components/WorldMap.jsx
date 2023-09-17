// src/WorldMap.js

import React from "react"
import { VectorMap } from "@react-jvectormap/core"
import { worldMill } from "@react-jvectormap/world"
import { colorScale, countries, missingCountries } from "./Countries"

const WorldMap = ({ onRegionClick }) => {
  return (
    <div className="w-full rounded-xl h-[90vh] ">
      <VectorMap
        map={worldMill}
        backgroundColor="#e5e5e5"
        onRegionClick={onRegionClick}
        series={{
          regions: [
            {
              scale: colorScale,
              values: countries,
              min: 0,
              max: 200,
            },
          ],
        }}
      />
    </div>
  )
}

export default WorldMap
