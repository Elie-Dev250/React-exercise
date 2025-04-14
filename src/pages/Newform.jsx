import React from 'react'
import { useState } from 'react'
function Newform() {
    const [users,setusers]=useState([])
    const [formData,setFormData]=useState({
        username: "",
        email: "",
        password: ""
    })

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()

        setusers([...users,formData])
        console.log("new user added is ",formData)
        console.log("all users are ",[...users,formData])




        setFormData({
            username:"",
            email:"",
            password:""
        })
    }

 


  return (
    <div>
        <form onSubmit={handleSubmit}>
      <p>Create an account</p>
<div className='inputs'>
    <input type="text" name="username" 
    value={formData.username}
    onChange={handleChange}
    required
    placeholder='username'
     /> <br />
     <input type="email" name="email" 
     value={formData.email}
     onChange={handleChange}
     placeholder='enter email'

      /> <br />
      <input type="password" name="password" 
      value={formData.password}
      onChange={handleChange}
      placeholder='password'
       /> <br />

       <button type='Submit'>Submit</button>

</div>
      </form>
    </div>
  )
}

export default Newform
