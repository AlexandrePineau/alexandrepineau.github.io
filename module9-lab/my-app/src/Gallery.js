import React from 'react';

export const Gallery = () => (
    <div>
        <h1>
            <u>Alpha Web Design <i class="fas fa-pencil-alt"></i></u>
        </h1>

        <nav>
            <a href="/">Home</a> |
            <a href="/services">Our services</a> |
            <a href="/gallery">Gallery</a> |
            <a href="/bookings">Bookings</a> |
            <a href="/contact">Contact</a>
        </nav><br /><br />

        <h2 id="gallery">~Gallery~</h2>
        <h3>
            Some of our projects
                            </h3>
        <img src="sample.png" />

        <h3>
            What our custommers think
                            </h3>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/OxIDLw0M-m0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope;     picture-in-picture" allowfullscreen></iframe>
        <hr />
    </div>
)