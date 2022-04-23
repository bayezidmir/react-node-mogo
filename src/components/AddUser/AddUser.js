import React from "react";

const AddUser = () => {
  const handleAddUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const user = { name, email };

    //search by MDN fetch POST
    //POST user : adding a new user
    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log("success", data));
    alert("user added successfully");
    e.target.reset();
  };

  return (
    <div>
      <h1>Add users from here</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <input type="submit" value="Add User" />
      </form>
    </div>
  );
};

export default AddUser;
