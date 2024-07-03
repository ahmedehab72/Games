import React, { useState } from 'react'

import wraper from '../../assets/images/wraper.png'
import logo from '../../assets/images/logo-sm.png'
import { NavLink } from 'react-router-dom';
export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };
  return <>

<section className="games">
      <header>
        <img src={wraper} className="w-full" alt="game photo" />
      </header>

      <nav className="bg-gray-800  w-full top-0  z-30  md:w-2/3 lg:w-3/4 mx-auto ">
        <div className="container mx-auto flex flex-wrap items-center justify-between p-5">
          <NavLink to=''>
          <h5 className=" text-uppercase mb-0 flex items-center">
            <img src={logo} alt="logo photo" className="max-w-xs" style={{ maxWidth: '40px' }} /> Game Reviews
          </h5>
          </NavLink>
          <button
            className=" md:hidden"
            type="button"
            onClick={toggleNavbar}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
          <div className={`${isOpen ? "block" : "hidden"} w-full md:flex md:items-center md:w-auto`} id="navbarSupportedContent">
            <ul className="flex flex-col md:flex-row md:ml-auto space-y-2 md:space-y-0 md:space-x-4">
              <NavLink to='Mmorpg'>
                <button className="nav-link active text-uppercase" aria-current="page" data-category="mmorpg">
                  mmorpg
                </button>
              </NavLink>
              <NavLink to='Shooter'>
                <button className="nav-link text-uppercase" data-category="shooter">
                  shooter
                </button>
              </NavLink>
              <NavLink to='Sailing'>
                <button className="nav-link text-uppercase" data-category="sailing">
                  sailing
                </button>
              </NavLink>
              <NavLink to='Permadeath'>
                <button className="nav-link text-uppercase" data-category="permadeath">
                  permadeath
                </button>
              </NavLink>
              <NavLink to='Superhero'>
                <button className="nav-link text-uppercase" data-category="superhero">
                  superhero
                </button>
              </NavLink>
              <NavLink to='Pixel'>
                <button className="nav-link text-uppercase" data-category="pixel">
                  pixel
                </button>
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>

      <main className="container mx-auto my-5">
        <section className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" id="gameData"></div>
        </section>
      </main>
    </section>
  
  </>
}
