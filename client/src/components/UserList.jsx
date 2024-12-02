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
    <div>
      <h2 className="text-2xl font-semibold mb-4">User List</h2>
      <ul className="space-y-4">
        {users.map(user => (
          <li key={user._id} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-sm">
            <span>{user.name} ({user.email})</span>
            <div className="space-x-2">
              <button
                onClick={() => handleEdit(user)}
                className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(user._id)}
                className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;