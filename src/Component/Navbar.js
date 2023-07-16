import React from 'react';
import './Navbar.css';

export default function Navbar() {
    return (
        <>
        <header>
        <nav className="navbar navbar-dark navbar-expand-lg   navbarScroll">
            <div className="container">
               <div className='d-flex justify-content-between w-100'>
               <div className="navbar-brand logo-f w-100 flex-grow-1">Portfolio</div>
            <button class="navbar-toggler text-white flex-shrink-1 border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon text-white"></span>
    </button>
               </div>

            
                    <div className="collapse navbar-collapse justify-content-lg-end" id="navbarSupportedContent">
                    
                           
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Portfolio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Contact</a>
                                </li>

                            </ul>
                    </div>
                </div>
            </nav>
        </header>
          
        </>
    )
}