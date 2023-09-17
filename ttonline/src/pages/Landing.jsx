import { Link } from "react-router-dom"
import image from "../assets/equal-pay-promotion.jpg"

const Landing = () => {
  return (
    <div className="bg-gray-100 min-h-screen md:min-h-[85vh] px-5">
      <main className="container mx-auto py-10">
        {/* Hero Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-4xl font-bold mb-4">
              Promoting Equal Gender Pay
            </h2>
            <p className="text-gray-700 mb-6">
              Discover the importance of gender equality in the workplace and
              its impact on individuals and organizations. Join us in creating a
              world with equal pay, equal opportunities, and equal outcomes.
            </p>
            <Link
              to="/about"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300"
            >
              Learn More
            </Link>
          </div>
          <div>
            <img
              src={image}
              alt="Promoting Equal Gender Pay"
              className="w-full rounded-md"
            />
          </div>
        </section>

        {/* Information Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-4">Key Information</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <li className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Global Regulations</h3>
              <p className="text-gray-700">
                Learn about gender equality regulations and policies around the
                world and how they impact organizations.
              </p>
              <div className="mt-4">
                <Link
                  to="/maps"
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300"
                >
                  Learn More
                </Link>
              </div>
            </li>
            <li className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Data Visualization</h3>
              <p className="text-gray-700">
                Explore interactive charts and graphs showcasing gender pay gaps
                across industries, countries, and job roles.
              </p>
              <div className="mt-4">
                <Link
                  to="/maps"
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300"
                >
                  Learn More
                </Link>
              </div>
            </li>
            <li className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Petition for Change</h3>
              <p className="text-gray-700">
                Sign and create virtual petitions to raise your voice against
                gender pay inequality and support equal pay for all.
              </p>
              <div className="mt-4">
                <Link
                  to="/petitions"
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300"
                >
                  Learn More
                </Link>
              </div>
            </li>
          </ul>
        </section>
      </main>
    </div>
  )
}

export default Landing
