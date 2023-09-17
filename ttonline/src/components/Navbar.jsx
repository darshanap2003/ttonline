import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <>
      <nav className="flex font-poppins justify-between items-center p-5">
        <p className="font-bold text-2xl">EmpowerHer</p>
        <div className="flex gap-8 text-sm font-medium items-stretch">
          <NavLink
            to="/"
            style={({ isActive }) => ({
              borderBottom: isActive ? "2px solid black" : "none",
            })}
          >
            Wage Gap Visualization
          </NavLink>
          <NavLink
            to="/petitions"
            style={({ isActive }) => ({
              borderBottom: isActive ? "2px solid black" : "none",
            })}
          >
            Petitions
          </NavLink>
        </div>
        <button className="bg-gray-500 text-white text-md px-3 py-2 rounded-md">
          Sign In
        </button>
      </nav>
    </>
  )
}

export default Navbar
