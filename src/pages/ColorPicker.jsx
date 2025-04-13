import React from 'react'
import { useState } from 'react'
function ColorPicker() {
    const [color,setcolor]=useState("white")


    const handlecolor=(e)=>{
        setcolor(e.target.value)
    }
  return (
    <div>
      

      <div className='colorp' style={{background:color}}>
        <select name="colors" value={color} onChange={handlecolor}
        >
            <option value="white">White</option>
            <option value="blue">Blue</option>
            <option value="red">Red</option>
            <option value="yellow">Yellow</option>
            
        </select>
        
      </div>
    </div>
  )
}

export default ColorPicker
