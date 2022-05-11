import React from 'react';
import slide_1 from './img/slide_1.jpg';
import slide_2 from './img/slide_2.jpg';
import slide_3 from './img/slide_3.jpg';

export default function Carousel() {
  return (
    <>
        <div id="demo" className="carousel slide" data-ride="carousel">
            <ul className="carousel-indicators">
                <li data-target="#demo" data-slide-to={0} className="active" />
                <li data-target="#demo" data-slide-to={1} />
                <li data-target="#demo" data-slide-to={2} />
            </ul>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={slide_1} alt="Los Angeles" width="100%" height={500} />
                </div>
                <div className="carousel-item">
                <img src={slide_2} alt="Chicago" width="100%" height={500} />
                </div>
                <div className="carousel-item">
                <img src={slide_3} alt="New York" width="100%" height={500} />
                </div>
            </div>
            <a className="carousel-control-prev" href="#demo" data-slide="prev">
                <span className="carousel-control-prev-icon" />
            </a>
            <a className="carousel-control-next" href="#demo" data-slide="next">
                <span className="carousel-control-next-icon" />
            </a>
        </div>
    </>
  )
}
