import { useState } from 'react';
import axios from 'axios';

const CreateUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/users', { name, email, password })
      .then(response => {
        console.log('User created:', response.data);
        setName('');
        setEmail('');
        setPassword('');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold mb-4">Create New User</h2>
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
        <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600">
          Create User
        </button>
      </form>
    </div>
  );
};

export default CreateUser;