import { Link, Outlet } from 'react-router-dom';
import '../index.css';

const Layout = () => {
  return (
    <div>
      <nav className="navs">
        <Link to="/page1">Page 1</Link>
        <Link to="/page2">Page 2</Link>
        <Link to="/page3">Page 3</Link>
        <Link to="/page4">Page 4</Link>
        <Link to="/page5">Page 5</Link>
        
      </nav>

      <hr />
      <Outlet />
    </div>
  );
};

export default Layout;
