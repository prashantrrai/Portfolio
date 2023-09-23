// components/Header.js

import React from 'react';
import Link from 'next/link';
import classes  from  './header.module.css'

const Header = () => {
    return (
        <header className="text-white p-4">
            <nav className="container mx-auto flex justify-between items-center">
            <div style={{ cursor: "pointer" }} className={`${classes.logo}`}>
                <Link aria-label="Home Page" href="/">
                    <h1>
                        <span>P</span>rashant <span>R</span>ai
                    </h1>
                </Link>
            </div>
                <button className="lg:hidden text-white focus:outline-none">
                    ☰
                </button>
                <ul className="hidden lg:flex lg:space-x-4">
                    <li>
                        <a href="/about" className="text-white hover:text-gray-300">About</a>
                    </li>
                    <li>
                        <a href="/projects" className="text-white hover:text-gray-300">Projects</a>
                    </li>
                    <li>
                        <a href="/contact" className="text-white hover:text-gray-300">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
