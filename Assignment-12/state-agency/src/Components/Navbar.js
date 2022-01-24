import React from 'react';
import "../App.css"
import logo from '../img/logo.png'
export const Navbar = () => {
  return <nav class="navbar navbar-expand-lg  navbar-light">
  <div class="container">
    <a class="navbar-brand" href="#"><img src = {logo} ></img></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
        <button className='btn btn-primary Navbar-btn-1'>Sign in</button>
        </li>
        <li class="nav-item">
          <button className='btn btn-primary Navbar-btn-2'>Sign up</button>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
};
