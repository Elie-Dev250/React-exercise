import React from 'react'
import './Data.css';
import { Link,Outlet } from 'react-router-dom'
import { useState,useEffect } from 'react';
import axios from 'axios';
import ColorPicker from './ColorPicker';

function Page3() {

  const [input,setinput]=useState("")
  const[seachvalue,setseachvalue]=useState("")
  const[error,seterror]=useState(false)
  const [data,setdata]=useState([])
  useEffect(()=>{
if(seachvalue!==""){
  axios.get(`https://jsonplaceholder.typicode.com/users/?username=${seachvalue}`)
  .then(response=>{
    let result=response.data
    console.log(result)
    setdata(result)
  })
  .catch(error=>{
    seterror(!error)
  })
}
  },[seachvalue])

  const handlesearch=()=>{
    setseachvalue(input)
  }
console.log(data)

    return (

<>
<div className='conter'>
  <input type="text" placeholder='enter usernam'
  value={input} onChange={(e)=>setinput(e.target.value)}
   />
   <button onClick={handlesearch}>Search</button>

   <div className='all'>



   

    {data&& data.map((user)=>(




      <div key={user.id}>


<div className="avatar-img">
                            <img src={`https://ui-avatars.com/api/?name=${user.username}&background=00bcff&color=fff`} alt="" />
                        </div>
        <p className='hey'> Name:{user.name}</p>
        <p className='hey'> email:{user.email}</p>
        <p className='hey'> company:{user.company.name}</p>
        <p className='hey'> website:{user.website}</p>
        <p className='hey'> username:{user.username}</p>
        <p className='hey'> phone:{user.phone}</p>

      </div>
    ))}
   </div>
</div>

<ColorPicker/>



<footer className="footer">
          <div className="footer-container">
            <div className="footer-links">
              <Link to="/page1">Home</Link>
              <Link to="/page2">About</Link>
              <Link to="/page3">Contact</Link>
              <Link to="/page4">Services</Link>
              <Link to="/page5">Privacy Policy</Link>
              
            </div>
            <p className="footer-text">&copy; {new Date().getFullYear()} Elie tech. All rights reserved.</p>
          </div>
        </footer>

</>







      
      );
}

export default Page3
