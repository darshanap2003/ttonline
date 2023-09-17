import WorldMap from "../components/WorldMap"
import CountryInfo from "../components/CountryInfo"
import { useState } from "react"

const Homepage = () => {
  const [selectedCountry, setSelectedCountry] = useState(null)

  const handleRegionClick = (event, code) => {
    setSelectedCountry(code)
  }
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 bg-slate-500">
        <div className="md:col-span-2 md:col-start-1 p-5">
          <WorldMap onRegionClick={handleRegionClick} />
        </div>
        <div className="md:col-span-1 md:col-start-3 pt-5 px-5 md:px-0 md:pr-5 ">
          {selectedCountry && <CountryInfo country={selectedCountry} />}
        </div>
      </div>
    </div>
  )
}

export default Homepage
