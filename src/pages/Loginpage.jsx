import React, { useState, useEffect } from 'react';

function Loginpage() {
  const [input, setInput] = useState('');
  const [textdata, setTextData] = useState([]);

  // ✅ Load saved tasks from localStorage once when the component mounts
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('myTasks'));
    if (savedTasks && Array.isArray(savedTasks)) {
      setTextData(savedTasks);
    }
  }, []);

  // ✅ Save tasks to localStorage every time textdata changes
  useEffect(() => {
    localStorage.setItem('myTasks', JSON.stringify(textdata));
  }, [textdata]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    setTextData([...textdata, input]);
    setInput('');
  };

  const handleDelete = (indexToDelete) => {
    const newTasks = textdata.filter((_, index) => index !== indexToDelete);
    setTextData(newTasks);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>To-Do List</h2>
      <input
        type="text"
        placeholder="Enter task"
        value={input}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Add Task</button>

      <div className="output">
        {textdata.map((task, index) => (
          <div key={index} className="sawab">
            <ul>
              <li>{task}</li>
            </ul>
            <button onClick={() => handleDelete(index)}>Delete Task</button>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Loginpage;
