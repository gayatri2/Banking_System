import React from "react";
import brand from "../images/brand4.png";


function Navbar() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <img src={brand} class="navbar-brand brandlogo" />
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
               
                <li class="nav-item">
                    <a class="nav-link" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">View Customers</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Transfer</a>
                </li>
                
                </ul>
            </div>
        </nav>
              
        </div>
    );
  }
  export default Navbar;