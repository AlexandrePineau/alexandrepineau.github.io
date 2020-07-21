import React from 'react';

export const NavBar = () => (
    <div>
        <div className="container">
                <ul class="nav nav-fill">
                    <li class="nav-item">
                        <a class="nav-link" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/services">Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/gallery">Gallery</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/bookings">Bookings</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/contact">Contact</a>
                    </li>
                </ul>
        </div>
        <div className="container">
            <h1>
                <u>Alpha Web Design <i class="fas fa-pencil-alt"></i></u>
            </h1>
        </div>
    </div>
)