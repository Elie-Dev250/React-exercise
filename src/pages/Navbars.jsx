import { Link, Outlet } from 'react-router-dom';
import '../index.css';

const Navbar = () => {
  return (
    <div>
      <nav className="navs">
        <Link to="/counter-App">Counter-App</Link>
        <Link to="/forms">Form</Link>
        <Link to="/fetch">API</Link>
        <Link to="/other">Others</Link>
        <Link to="/fetch2">Fetch2</Link>
        <Link to="/6">Task6</Link>

        
      </nav>

      <hr />
      <Outlet />
    </div>
  );
};

export default Navbar;
