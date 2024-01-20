import { NavLink } from "react-router-dom";
import '../../App.css';

const Header = () => {
  const links = <p>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/jobs'>Jobs</NavLink></li>
    <li><NavLink to='/statistics'>Statistics</NavLink></li>
    <li><NavLink to='/applied'>Applied Jobs</NavLink></li>
    <li><NavLink to='/blogs'>Blogs</NavLink></li>
  </p>
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-3xl md:text-4xl font-extrabold">Career Hub</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>{links}</li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="button text-sm ">Start Applying</a>
      </div>
    </div>
  );
};

export default Header;