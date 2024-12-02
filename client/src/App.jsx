import { useState } from 'react';
import UserList from './components/UserList';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-6">React CRUD App with MongoDB</h1>
      
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <CreateUser />
        {currentUser ? (
          <UpdateUser user={currentUser} setCurrentUser={setCurrentUser} />
        ) : (
          <UserList setCurrentUser={setCurrentUser} />
        )}
      </div>
    </div>
  );
}

export default App;