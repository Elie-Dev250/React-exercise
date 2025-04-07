import React from 'react'
import { Link,Outlet } from 'react-router-dom'

function Page3() {
    return (
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
      );
}

export default Page3
