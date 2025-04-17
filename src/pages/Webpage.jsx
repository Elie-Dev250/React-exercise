import React, { useState } from "react";
import { Link } from "react-router-dom";


const WebPage = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="webpage-container">
      <button className="toggle-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
        {sidebarOpen ? "Hidesidebar" : "Open sidebar"}
      </button>

      <div className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
        <ul>
          <li><Link to="/event">Events</Link></li>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/work">Collaboration</Link></li>
          <li><Link to="/resource">Resources</Link></li>
        </ul>
      </div>

      

     

      <div className="content">
        {children}
      </div>
     
    </div>
  );
};

export default WebPage;
