// import image1 from "../assets/images/image1.jpg"
// import image2 from "../assets/images/image2.jpg"
// import image3 from "../assets/images/image3.jpg"
// import image4 from "../assets/images/image4.jpg"
// import image5 from "../assets/images/image5.jpg"
import { petitions } from "./data"
import { countryDropdown } from "../components/Countries"
import PetitionCard from "../components/PetitionCard"
import { useState, useEffect } from "react"
import Select from "react-dropdown-select"

function PetitionPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [countryCode, setCountryCode] = useState("null")
  const filteredPetitions = petitions.filter((petition) => {
    return countryCode !== "null" ? petition.countryCode === countryCode : true
  })

  const renderedPetitions = filteredPetitions.map((petition) => {
    return (
      <PetitionCard
        key={petition.id}
        img={petition.img}
        title={petition.title}
        description={petition.description}
        id={petition.id}
      />
    )
  })
  const handleChange = (values) => {
    setCountryCode(values[0].value)
    console.log(values[0].value)
  }

  return (
    <>
      <div className="p-5 bg-slate-500 min-h-[90vh]">
        <div className="text-center pb-5">
          <h1 className="text-2xl text-white font-poppins font-bold">
            Petitions for Change
          </h1>
        </div>{" "}
        <div className="pb-4 mx-5">
          <Select
            options={countryDropdown}
            onChange={(values) => handleChange(values)}
            className="font-poppins text-lg bg-white"
            placeholder="Select Country"
          />
        </div>
        <div className="flex gap-4 flex-wrap items-stretch justify-center">
          {renderedPetitions}
        </div>
      </div>
    </>
  )
}

export default PetitionPage
