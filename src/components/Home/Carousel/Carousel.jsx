import React from 'react';
import p4 from '../../../photos/carousel/p4.jpg'
import p5 from '../../../photos/carousel/p5.jpg'
import p6 from '../../../photos/carousel/p6.jpg'
import p7 from '../../../photos/carousel/p7.jpg'

const Carousel = () => {
    return (
        <div>
             <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={p7} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={p6} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={p5} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={p4} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>

<div className="flex justify-center w-full py-2 gap-2">
  <a href="#slide1" className="btn btn-xs">1</a> 
  <a href="#slide2" className="btn btn-xs">2</a> 
  <a href="#slide3" className="btn btn-xs">3</a> 
  <a href="#slide4" className="btn btn-xs">4</a>
</div>
        </div>
    );
};

export default Carousel;