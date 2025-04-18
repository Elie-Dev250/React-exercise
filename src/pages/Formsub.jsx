import { useState } from "react";

function Formsub() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setUsers([...users, formData]);
    console.log("New user added:", formData);
    console.log("All users:", [...users, formData]);

    setFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <br />
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label>Email:</label>
        <br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label>Password:</label>
        <br />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default Formsub;
