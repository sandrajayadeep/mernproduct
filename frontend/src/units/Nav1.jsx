
import React from 'react'
import { Link } from 'react-router-dom';

export default function Nav1() {
    return (
      <div>
          
          <nav>
         <ul classname='d=flex justify-content-around list-unstyled mt-5 text-decoration-none'>
            <li>
               <Link to="/">Home</Link>
            </li>
            <li>
               <Link to="/about">About</Link>
            </li>
            <li>
               <Link to="/additem">Additem</Link>
            </li>
         </ul>
   </nav>
  
      </div>
    )
  }
