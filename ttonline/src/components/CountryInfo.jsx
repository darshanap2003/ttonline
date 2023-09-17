import { countryCodes, countryDescription } from "./Countries"

const CountryInfo = ({ country }) => {
  const { description, ranking, links } = countryDescription[country]

  const renderedPoints = description.map((point, index) => {
    return (
      <li key={index} className="my-2">
        {point}
      </li>
    )
  })

  return (
    <div className="font-poppins bg-slate-300 h-[90vh] w-full px-4 py-4 rounded-md flex flex-col items-center gap-4">
      <div className="flex items-center gap-4">
        <img
          src={`https://flagsapi.com/${country}/flat/64.png`}
          alt={`Flag of ${country}`}
        />
        <p className="text-2xl pt-5 font-bold">{countryCodes[country]}</p>
      </div>
      <p className="mt-5 p-2 rounded-md  text-white bg-purple-900 max-w-max">
        Ranking : {ranking}
      </p>
      <div className="">
        <p className="font-bold text-lg pt-2">Law Description</p>
        <p className="text-md">
          <ul className="list-disc pl-4">{renderedPoints}</ul>
        </p>
      </div>
      {links && links.length > 0 && (
        <div>
          <p className="text-xl font-bold pb-2">Links</p>
          {links.map((link, index) => {
            return (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noreferrer"
                className="text-black underline block max-w-full break-all"
              >
                {link}
              </a>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default CountryInfo
