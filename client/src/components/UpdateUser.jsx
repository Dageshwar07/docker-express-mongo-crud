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
    <div>
      <h2 className="text-2xl font-semibold mb-4">Update User</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md"
          required
        />
        <button type="submit" className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600">
          Update User
        </button>
      </form>
    </div>
  );
};

export default UpdateUser;