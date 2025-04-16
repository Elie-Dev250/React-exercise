import React from 'react'
import { useState } from 'react'




function Loginpage() {
const[users,setUsers]=useState([])
const[formdata,setformdata]=useState({
    username: '',
    email: '',
    password: ""
})

const handleChange=(e)=>{
    setformdata({...formdata,[e.target.name]:e.target.value})
}

const handleSubmit=(e)=>{
  e.preventDefault()
  setUsers([...users,formdata])
  console.log("new user added",formdata)
  console.log("total users are",[...users,formdata])


  setformdata({
    username: '',
    email: '',
    password: ''
})
}



  return (
    <div style={{ padding: '20px' }}>
      <h2>User Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <label>Username:</label><br />
        <input
          type="text"
          name="username"
          value={formdata.username}
          onChange={handleChange}
          required
        /><br /><br />

        <label>Email:</label><br />
        <input
          type="email"
          name="email"
          value={formdata.email}
          onChange={handleChange}
          required
        /><br /><br />

        <label>Password:</label><br />
        <input
          type="password"
          name="password"
          value={formdata.password}
          onChange={handleChange}
          required
        /><br /><br />

        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default Loginpage
