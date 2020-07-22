import React from 'react';

export const NavBar = () => (
    <div>
        <div className="container">
                <ul className="nav nav-fill">
                <li className="nav-item">
                    <a className="nav-link" href="/">Home</a>
                    </li>
                <li className="nav-item">
                    <a className="nav-link" href="/services">Services</a>
                    </li>
                <li className="nav-item">
                    <a className="nav-link" href="/gallery">Gallery</a>
                    </li>
                <li className="nav-item">
                    <a className="nav-link" href="/bookings">Bookings</a>
                    </li>
                <li className="nav-item">
                    <a className="nav-link" href="/contact">Contact</a>
                    </li>
                </ul>
        </div>
        <div className="container">
            <h1>
                <u>Alpha Web Design <i className="fas fa-pencil-alt"></i></u>
            </h1>
        </div>
    </div>
)