import React, { useState } from 'react';

function UserList () {
  // State to store users array
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Function to handle adding a new user
  const handleAddUser = () => {
    if (name && email) {
      const newUser = {
        id: users.length + 1, // Unique ID based on the current length
        name: name,
        email: email,
      };

      // Add the new user to the array
      setUsers([...users, newUser]);

      // Clear input fields
      setName('');
      setEmail('');
    }
  };

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleAddUser}>Add New</button>
    </div>
  );
};

export default UserList;
