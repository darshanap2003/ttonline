import WorldMap from "../components/WorldMap"
import CountryInfo from "../components/CountryInfo"
import { useState } from "react"

const Homepage = () => {
  const [selectedCountry, setSelectedCountry] = useState(null)

  const handleRegionClick = (event, code) => {
    setSelectedCountry(code)
  }
  return (
    <div className="bg-slate-500">
      <h1 className="text-xl pt-5 text-center font-bold text-white">
        World Map Visualization
      </h1>
      <div className="flex flex-col gap-2 pt-4 pb-2">
        <p className="text-center text-white">
          This visualization shows the gender wage gap .
        </p>
        <p className="text-center text-white">
          Learn more about the policies that enforce equal gender pay. Click on
          Each country to learn more.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="md:col-span-2 md:col-start-1 p-5">
          <WorldMap onRegionClick={handleRegionClick} />
        </div>
        <div className="md:col-span-1 md:col-start-3 pt-5 px-5 md:px-0 md:pr-5 ">
          {selectedCountry && <CountryInfo country={selectedCountry} />}
          {!selectedCountry && (
            <div className="w-full h-[90vh] pr-5 pt-5 bg-slate-300 text-xl text-center rounded-md font-bold">
              Select a country to learn more about them
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Homepage
