import { Link, Outlet } from 'react-router-dom';
import { useState,useEffect } from 'react';
function Page2() {
    const [input,setInput]=useState("")
    const handleinput=(inputvalue)=>{
        setInput((previousinput)=>previousinput+inputvalue)
    }

    const handleclear=()=>{
        setInput("")
    }

    const calculate=()=>{
        try{
            setInput(eval(input).toString())
        }catch{
            setInput("Error& 😂😂🤦‍♀️")
        }
    }
  return (
    <div>
      <div className='calculator'>
        <input type="text" value={input}  disabled/>

        <div className='buttonss'>
            <button onClick={handleclear}>C</button>
            <button onClick={()=>handleinput("/")}>/</button>
            <button onClick={()=>handleinput("*")}>*</button>
            <button onClick={()=>handleinput("-")}>-</button>

            <button onClick={()=>handleinput("7")}>7</button>
            <button onClick={()=>handleinput("8")}>8</button>
            <button onClick={()=>handleinput("9")}>9</button>
            <button onClick={()=>handleinput("+")}>+</button>


            <button onClick={()=>handleinput("4")}>4</button>
            <button onClick={()=>handleinput("5")}>5</button>
            <button onClick={()=>handleinput("6")}>6</button>
            <button onClick={calculate}>=</button>


            <button onClick={()=>handleinput("1")}>1</button>
            <button onClick={()=>handleinput("2")}>2</button>
            <button onClick={()=>handleinput("3")}>3</button>
            <button onClick={()=>handleinput("0")}>0</button>
        </div>
      </div>
    </div>
  )
}

export default Page2;
