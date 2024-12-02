import { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = ({ setCurrentUser }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then(response => setUsers(response.data))
      .catch(err => console.log(err));
  }, []);

  const handleEdit = (user) => {
    setCurrentUser(user);
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/users/${id}`)
      .then(() => {
        setUsers(users.filter(user => user._id !== id));
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-purple-400 to-pink-500 p-6">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">User List</h2>
        {users.length > 0 ? (
          <ul className="space-y-4">
            {users.map(user => (
              <li
                key={user._id}
                className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-sm transition-transform transform hover:scale-105"
              >
                <span className="text-gray-700 font-medium">
                  {user.name} <span className="text-gray-500">({user.email})</span>
                </span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(user)}
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 shadow-md"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 shadow-md"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600 text-center">No users found. Please add some users!</p>
        )}
      </div>
    </div>
  );
};

export default UserList;
