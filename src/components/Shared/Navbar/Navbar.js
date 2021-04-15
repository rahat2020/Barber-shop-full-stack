import React from 'react';
import logo from '../../../img/logo.png'
const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
        <div class="container-fluid">
           <div>
               <img src={logo} alt=""  width="130" height="30" class="d-inline-block align-text-top"/>
           </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                <div className="text-white">
                    <ul class= "nav justify-content-end mx-5">
                        <li class="nav-item ">
                            <a class="nav-link text-white" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#C-Backpack"> C-Backpack</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#M-Backpack">M-Backpack</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#" tabindex="-1" aria-disabled="true">About us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    );
};

export default Navbar;