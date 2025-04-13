import { Link, Outlet } from 'react-router-dom';
import '../index.css';

const Layout = () => {
  return (
    <div>
      <nav className="navs">
        <Link to="/page1">TodoList&counter-App</Link>
        <Link to="/page2">Calculator-App</Link>
        <Link to="/page3">Footers</Link>
        <Link to="/page4">Signup-form</Link>
        <Link to="/page5">Post</Link>
        <Link to="/exer">Exercise</Link>

        
      </nav>

      <hr />
      <Outlet />
    </div>
  );
};

export default Layout;
