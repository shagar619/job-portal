import { Link, NavLink } from "react-router-dom";
import logo from './../assets/logo/logo.webp'
import { useContext } from "react";
import AuthContext from "../Context/AuthContext/AuthContext";
import Swal from "sweetalert2";


const Navbar = () => {

  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
    .then(result => {
        Swal.fire({
          icon: "success",
          title: "Congratulation",
          text: "Successfully Sign Out!",
        });
    })
    .catch(error => {
      alert('Something went wrong!');
    })
  }

    const links = <>

    <NavLink to="/">Home</NavLink>
    <NavLink to="/">Find a Job</NavLink>
    <NavLink to="/addJob">Add Job</NavLink>
    <NavLink to="/myApplications">My Applications</NavLink>
    <NavLink to="/myPostedJobs">My Posted Jobs</NavLink>
    <NavLink to="/">Contact</NavLink>
    

    </>

    return (
<div className="navbar my-6">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-y-4">
        {links}
      </ul>
    </div>
    <img className="w-14 h-12 rounded-md" src={logo} alt="" />
    <h3 className="text-3xl font-bold text-blue-600 ml-4">JobPortal</h3>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 space-x-8 text-base font-medium">
    {links}
    </ul>
  </div>
  <div className="navbar-end space-x-4">

    {
      user ? 
      <div className="flex items-center gap-6 ">
        <h3 className="text-xl font-medium">{user.email}</h3>
      <button onClick={handleSignOut} className="btn bg-blue-600 text-white">Sign Out</button>
      </div>
      : 
      <>
      <Link className="underline text-lg font-semibold" to="/register">Register</Link>
      <Link to="/signin"><button className="btn bg-blue-600 text-white">Sign In</button></Link>
      </>
    }


  </div>
</div>
    );
};

export default Navbar;