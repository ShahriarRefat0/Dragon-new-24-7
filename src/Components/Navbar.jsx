import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from '../assets/user.png';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
 
  const { user, logOut } = use(AuthContext);
   const handleLogOut = () => {
     
     logOut().then(() => {
       alert('you logout successfully')
     })
       .catch((error) => {
         console.log(error)
       });
   };
  return (
    <div className="flex justify-between">
      <div>{user?.email}</div>
      <div className="nav flex gap-5 items-center text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-5 ">
        <img className='w-10 rounded-full' src={`${user ? user.photoUrl : userIcon} `} alt="" />
        {
          user ? <button onClick={handleLogOut} className="btn btn-primary px-10">Logout</button> : <Link to="/auth/login" className="btn btn-primary px-10" >Login</Link>
        } 
      </div>
    </div>
  );
};

export default Navbar;