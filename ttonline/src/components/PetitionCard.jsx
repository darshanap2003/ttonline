function PetitionCard({ img, title, description }) {
  return (
    <>
      <div className="p-3 w-[25rem] flex flex-col gap-4 justify-between font-poppins bg-slate-200 rounded-lg">
        <div className="flex-col flex gap-2">
          <img src={img} alt="" className="w-full rounded-md" />
          <div className="flex flex-col gap-2 pl-1">
            <h1 className="text-black text-xl font-bold">{title}</h1>
            <p className="text-md">{description}</p>
          </div>
        </div>
        <button className="bg-blue-500 py-2 rounded-md text-md font-bold text-white">
          Know More
        </button>
      </div>
    </>
  )
}

export default PetitionCard
