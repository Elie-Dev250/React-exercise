import { Link, Outlet } from 'react-router-dom';
import { useState,useEffect } from 'react';

function Page1() {
  const [timer,settime]=useState(new Date())
  useEffect(()=>{
    const interval=setInterval(() => {
      settime(new Date())
      
    }, 1000);
    return()=>{
      clearInterval(interval)
    }
  },[]);

  const [count,setcount]=useState(0)
  const handledecrease=()=>{
    if(count>0){
      setcount(count-1)
    }
  }
  useEffect(()=>{
console.log("count changed ",count)
  },[])

  function formatTimer(){
    let hours=timer.getHours()
    const minutes=timer.getMinutes()
    const seconds=timer.getMinutes()
    const meridium=hours>12?"PM":"AM"

    return `${padzero(hours)}:${padzero(minutes)}:${padzero(seconds)}:${meridium}`
  }
  const padzero=(numbers)=>{
   return (numbers>10?"0":"")+numbers
  }

  
  const [tasks, settask] = useState(() => {
   
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : ["task1", "task2", "task3"];
  });

  const [newtask, setnewtask] = useState("");


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleChange(event) {
    setnewtask(event.target.value);
  }

  function addtask() {
    if (newtask.trim() !== "") {
      settask((prevTasks) => [...prevTasks, newtask]);
      setnewtask("");
    }
  }

  function removetask(index) {
    const updatedtask = tasks.filter((_, i) => i !== index);
    settask(updatedtask);
  }

  return (
    <>
      <div className='task5'>
        <h1>TodoList App</h1>
        <input
          type="text"
          placeholder='Add tasks here...'
          value={newtask}
          onChange={handleChange}
        />
        <button className='add-button' onClick={addtask}>
          Add
        </button>
      </div>

      <ol className='task5'>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className='task2'>{task}</span>
            <button className='delete' onClick={() => removetask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ol>

      <div className='but'>
<h2>COUNTER APP</h2>
        <h4 > count:{count}</h4>
        <button onClick={()=>setcount(count+1)}>Add1</button><br />
        <button onClick={handledecrease}>Decrease1</button>

        <button onClick={()=>setcount(count+10)}>Add10</button><br />
        <button onClick={()=>setcount(count-10)}>decreaseby10</button><br />
        <button onClick={()=>setcount(0)}>Reset</button>
      </div>

      <div className='timers'>
<p>{formatTimer()}</p>
      </div>

      <Link to="/fetch">
          <button type="button">Gotofetch api</button>
        </Link>
  
    </>
  );
}

export default Page1;
