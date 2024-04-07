import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {


    const activeLinkStyle = {
        color: 'blue', 
        fontWeight: 'bold' 
        
      };
  return (
    <nav className="flex justify-center mt-6">
        <div className="">
            <ul className="flex gap-7 font-medium">
                <li>
                    <NavLink exact="true" to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/displayemployer">DisplayEmployees</NavLink>
                </li>
                <li>
                    <NavLink to="/addemployer">AddEmployee</NavLink>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav;