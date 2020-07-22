import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export const Gallery = () => (
    <div>
        <div className="container">
            <h2>
                Some of our projects
            </h2>

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="1.png"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="2.png"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="3.png"
                    />
                </Carousel.Item>
            </Carousel><br />

            <h2>
                What our custommers think
            </h2>
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/OxIDLw0M-m0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope;     picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    </div>
)