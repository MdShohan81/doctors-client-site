import React from 'react';
import { Link } from 'react-router-dom';

const Menubar = () => {
  let menuItem = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/appointment'>Appointment</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/review'>Review</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/signin'>SignIn</Link></li>
  </>
    return (
        <div class="navbar text-slate-100 bg-gradient-to-r from-cyan-600 via-cyan-500 to-cyan-400">
      <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2shadow text-slate-100 bg-gradient-to-r from-cyan-600 via-cyan-500 to-cyan-400 rounded-box w-52 font-semibold">
        {menuItem}
      </ul>
    </div>
    <Link to='/' class="btn btn-ghost normal-case text-xl">Doctors Portal</Link>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0 ">
      {menuItem}
    </ul>
  </div>
</div>
    );
};

export default Menubar;