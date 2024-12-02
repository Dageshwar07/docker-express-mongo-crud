import { useState } from 'react';
import axios from 'axios';

const UpdateUser = ({ user, setCurrentUser }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/users/${user._id}`, { name, email, password })
      .then(response => {
        console.log('User updated:', response.data);
        setCurrentUser(null); // Clear the current user state after update
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-teal-500 p-6">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Update User</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            required
          />
          <button
            type="submit"
            className="w-full py-3 text-white bg-green-600 rounded-lg font-medium hover:bg-green-700 shadow-lg transform hover:scale-105 transition-transform duration-200"
          >
            Update User
          </button>
          <button
            type="button"
            onClick={() => setCurrentUser(null)}
            className="w-full py-3 text-gray-700 bg-gray-200 rounded-lg font-medium hover:bg-gray-300 shadow transform hover:scale-105 transition-transform duration-200"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
