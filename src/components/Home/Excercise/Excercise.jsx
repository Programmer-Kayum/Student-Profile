import React from 'react';
import pic1 from '../../../photos/Excercise/benefits-of-exercise-on-mental-health-min.jpg'
import pic2 from '../../../photos/Excercise/nia-exercie-four-types.png'
import pic3 from '../../../photos/Excercise/pic3.jpg'

const Excercise = () => {
    return (
        <div className='rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 py-10'>
        <h1 className='text-center font-bold text-4xl  '>edX Physical Tips</h1>
        <div className="divider mb-4"></div> 
       
        <div className="grid lg:grid-cols-3 lg:ml-10 mx-2 ">
        <div className="card lg:w-96  mb-10  bg-gradient-to-r from-cyan-500 to-blue-500 
            hover:from-yellow-500 hover:to-pink-500 shadow-xl">
              <figure className="px-4 pt-2">
                  <img src={pic1} alt="Shoes" className="rounded-xl" />
              </figure>
         </div>
        <div className="card lg:w-96  mb-10  bg-gradient-to-r from-cyan-500 to-blue-500 
            hover:from-yellow-500 hover:to-pink-500 shadow-xl">
              <figure className="px-4 pt-2">
                  <img src={pic2} alt="Shoes" className="rounded-xl" />
              </figure>
         </div>
        <div className="card lg:w-96  mb-10  bg-gradient-to-r from-cyan-500 to-blue-500 
            hover:from-yellow-500 hover:to-pink-500 shadow-xl">
              <figure className="px-4 pt-2">
                  <img src={pic3} alt="Shoes" className="rounded-xl" />
              </figure>
         </div>
        </div>

        <div className='text-center'>
        <a target='_blank' href="https://admirable-figolla-90db30.netlify.app/"><button className="btn btn-warning hover:to-pink-500 font-bold text-4xl">See All</button></a> 
        
        </div>
        </div>
    );
};

export default Excercise;