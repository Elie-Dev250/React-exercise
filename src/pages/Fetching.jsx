


import React from 'react'
import { useState,useEffect } from 'react'

function Fetching() {

  const [posts,setPosts]=useState([])
  const [loading,setLoading]=useState(true)
  const [error,setError]=useState(null)

  useEffect(()=>{
    const fetchPosts= async()=>{
      try{
        const response=await fetch('https://jsonplaceholder.typicode.com/posts')
        if(!response.ok){
          throw new Error("error fetch failed")
        }

        const data=await response.json()
        setPosts(data)
        console.log(data)
        
      }
      catch(error){
        setError(error,{Error})
      }
      finally{
        setLoading(false)
      }
    }

    fetchPosts()
  },[])

  if(loading){
    return <div>Loading data hereeee...</div>
  }
  if(error){
    return <div>Error:{error.message}</div>
  }
  return (
    <div>
     <h1>Posts</h1>
     <div className="post-list">
     {posts.slice(0,80).map((post) => (
        <div key={post.id} className="post-item">
          <h3>{post.id}</h3>
          <p>{post.title}</p>
          <p>{post.body}</p>
          
        
        </div>
      ))}
    </div>
  </div>
  )
}

export default Fetching

