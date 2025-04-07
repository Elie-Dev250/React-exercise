import React from 'react'
import { useState,useEffect } from 'react'
function Fetching() {
    const [posts,setPosts]=useState([])
    const[loading,setLoading]=useState(true)
    const [error,setError]=useState(null)

    useEffect(()=>{
        const fetchPosts=async()=>{
            try{
                const response=await fetch('https://jsonplaceholder.typicode.com/users');
                if(!response.ok){
                    throw new Error("failed")
                }
                const posts= await response.json()
            setPosts(posts)
            }
            catch(error){
                setError(error.message)
            }
            finally{
                setLoading(false)
            }
            
            
        }

        fetchPosts()
        
    },[])

    if (loading) {
        return <div>Loading data...</div>; 
      }
    
      if (error) {
        return <div>Error: {error}</div>;
      }
      console.log(posts)
  return (
    <div>
    <h1>Posts</h1>
    <div className="post-list">
      {posts.map((posts) => (
        <div key={posts.id} className="post-item">
          <h3>{posts.name}</h3>
          <p>{posts.email}</p>
          <p>{posts.username}</p>
        
        </div>
      ))}
    </div>
  </div>
  )
}

export default Fetching
