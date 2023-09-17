import { useAuth0 } from "@auth0/auth0-react"
import { NavLink } from "react-router-dom"

const Header = () => {
  const { isAuthenticated, loginWithPopup, logout } = useAuth0()
  return (
    <header className="bg-primary-500 py-4 px-5">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/">
          <h1 className="text-white text-2xl font-bold">Pay Parity Hub</h1>
        </NavLink>
        {/* Navigation */}
        <nav>
          <ul className="flex space-x-4">
            <li>
              <NavLink
                to="/"
                className="text-white hover:text-gray-200 transition duration-300 pb-0.5"
                style={({ isActive }) => ({
                  borderBottom: isActive ? "2px solid white" : "none",
                })}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="text-white hover:text-gray-200 transition duration-300 pb-0.5"
                style={({ isActive }) => ({
                  borderBottom: isActive ? "2px solid white" : "none",
                })}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/petition"
                className="text-white hover:text-gray-200 transition duration-300 pb-0.5"
                style={({ isActive }) => ({
                  borderBottom: isActive ? "2px solid white" : "none",
                })}
              >
                Sign Petition
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resources"
                className="text-white hover:text-gray-200 transition duration-300 pb-0.5"
                style={({ isActive }) => ({
                  borderBottom: isActive ? "2px solid white" : "none",
                })}
              >
                Resources
              </NavLink>
            </li>
            {/* Auth0 */}
            {isAuthenticated ? (
              <ul className="flex space-x-4">
                <li>
                  <NavLink
                    to="/profile"
                    className="text-white hover:text-gray-200 transition duration-300 pb-0.5"
                  >
                    Profile
                  </NavLink>
                </li>
                <li>
                  <button
                    className="text-white hover:text-gray-200 transition duration-300 pb-0.5"
                    onClick={() =>
                      logout({
                        logoutParams: { returnTo: window.location.origin },
                      })
                    }
                  >
                    Logout
                  </button>
                </li>
              </ul>
            ) : (
              <li>
                <button
                  className="text-white hover:text-gray-200 transition duration-300"
                  onClick={loginWithPopup}
                >
                  Login
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
