import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const { isAuthenticated, loginWithPopup, logout } = useAuth0();
  return (
    <header className="bg-primary-500 py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-white text-2xl font-bold">Pay Parity Hub</h1>
        </Link>
        {/* Navigation */}
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/about"
                className="text-white hover:text-gray-200 transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/petition"
                className="text-white hover:text-gray-200 transition duration-300"
              >
                Sign Petition
              </Link>
            </li>
            <li>
              <Link
                to="/resources"
                className="text-white hover:text-gray-200 transition duration-300"
              >
                Resources
              </Link>
            </li>
            {/* Auth0 */}
            {isAuthenticated ? (
              <ul className="flex space-x-4">
                <li>
                  <Link
                    to="/profile"
                    className="text-white hover:text-gray-200 transition duration-300"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <button className="text-white hover:text-gray-200 transition duration-300" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                    Logout
                  </button>
                </li>
              </ul>
            ) : (
              <li>
                <button className="text-white hover:text-gray-200 transition duration-300" onClick={loginWithPopup}>
                  Login
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;