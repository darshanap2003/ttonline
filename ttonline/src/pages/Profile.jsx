import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  const signedPetitions = [
    {
      title: "Equal Pay for Equal Work",
      timestamp: "July 1, 2022",
    },
    {
      title: "Climate Action Now",
      timestamp: "August 15, 2022",
    },
    {
      title: "Support Education Equality",
      timestamp: "September 30, 2022",
    },
  ];

  return (
    <div className="container mx-auto mt-8">
      {isAuthenticated ? (
        <div>
          <h2 className="text-3xl font-bold mb-4">Profile</h2>
          <div className="flex flex-row items-center mb-4">
            <img
              className="w-12 h-12 rounded-full mr-4"
              src={user.picture}
              alt={user.name}
            />
            <div>
              <p className="text-xl font-semibold">{user.name}</p>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-4">Petition Signed Logs</h2>
          <ul>
            {signedPetitions.map((petition, index) => (
              <li key={index} className="mb-2">
                <p className="text-lg font-bold">{petition.title}</p>
                <p className="text-gray-600">Timestamp: {petition.timestamp}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Please log in to view your profile.</p>
      )}
    </div>
  );
};

export default Profile;
