import React, { useEffect, useState } from "react";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleUserDelete = (id) => {
    const proceed = window.confirm("are you sure?");
    if (proceed) {
      console.log(`deleting user with ${id}`);
    }
  };

  return (
    <div>
      <h2>Available user: {users.length} </h2>
      <div>
        {users.map((user) => (
          <div key={user._id}>
            Name: {user.name}{" "}
            <span style={{ color: "green" }}>email: {user.email}</span>
            <button onClick={() => handleUserDelete(user._id)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
