import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'

function Fetch() {

    const [input,setinput]=useState("")
    const [seachvalue,setseachvalue]=useState("")
    const [data,setdata]=useState([])
    const [error,seterror]=useState(false)

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
    seterror(error)
   })
   
}

    },[seachvalue])
    const handlesearch=()=>{
        setseachvalue(input)
    }

    console.log(data)
  return (
    <div>
    {data=="" && <p>Usernot found</p>}

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
  )
}

export default Fetch
