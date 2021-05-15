import React from "react";
import brand from "../images/brand4.png";
import { Link } from 'react-router-dom';


function Navbar() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg">
            
            <Link to="/" class="navbar-brand">
                <img src={brand} width="90" height="60"/>
            </Link>
            <button class="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
               
                <li class="nav-item">
                    <Link to="/customers" class="nav-link">View Customers</Link>
                </li>
                <li class="nav-item">
                    <Link to="/transfers" class="nav-link">Transfer</Link>
                </li>
                
                </ul>
            </div>
        </nav>
              
        </div>
    );
  }
  export default Navbar;