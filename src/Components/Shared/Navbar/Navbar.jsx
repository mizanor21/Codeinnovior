import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo/logo.png";
const Navbar = () => {
  const navItem = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About Us</NavLink>
      </li>
      <li>
        <NavLink to={"/"}>Courses</NavLink>
      </li>
      <li>
        <NavLink to={"/"}>Success</NavLink>
      </li>
      <li>
        <NavLink to={"/"}>Gallery</NavLink>
      </li>
      <li>
        <NavLink to={"/"}>Tutorial</NavLink>
      </li>
      <li>
        <NavLink to={"/"}>Contact</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar container mx-auto bg-white rounded-xl shadow-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow uppercase"
          >
            {navItem}
          </ul>
        </div>
        {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
        <NavLink to={"/"}>
          <img src={logo} className="w-52" alt="logo not found!" />
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal flex gap-2 uppercase">{navItem}</ul>
      </div>
      <div className="navbar-end">
        <Link className="btn">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
