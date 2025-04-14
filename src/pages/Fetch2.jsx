import axios from 'axios'
import React from 'react'
import { useState,useEffect } from 'react'
function Fetch2() {
    const [input,setinput]=useState("")
    const [seachvalue,setseachvalue]=useState("")
    const [error,seterror]=useState("")
    const [data,setdata]=useState([])


 useEffect(()=>{
    if(seachvalue!==""){
        axios.get(`https://jsonplaceholder.typicode.com/users/?username=${seachvalue}`)
        .then(response=>{ 
            console.log(response)
            let result=response.data   
            setdata(result)
            console.log(result)
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
    <div>
      <h1>hello</h1>

      <div className='seach'>

        
        <input type="text"
        value={input} 
        onChange={(e)=>setinput(e.target.value)}/>
        <button onClick={handlesearch}>Get</button>

        {data&& data.map((user)=>(
            <div key={user.id}>

<img src={`https://ui-avatars.com/api/?name=${user.username}&background=00bcff&color=fff`} alt="" />
                <p>username: {user.username}</p>
                <p>email: {user.email}</p>
                <p>website: {user.website}</p>
                <p>company: {user.company.name}</p>
                <p>Phone: {user.phone}</p>

            </div>
        ))}

        
      </div>
    </div>
  )
}

export default Fetch2
