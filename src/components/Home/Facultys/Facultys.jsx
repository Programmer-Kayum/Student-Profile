import React from 'react';

import cse from '../../../../src/photos/faculty/cse.webp'
import sciene from '../../../../src/photos/faculty/science.jpg'
import fish from '../../../../src/photos/faculty/fish.jpg'
import agg from '../../../../src/photos/faculty/agg.jpg'
import business from '../../../../src/photos/faculty/business.jpg'
import dvm from '../../../../src/photos/faculty/dvm.jpg'
import social from '../../../../src/photos/faculty/social.jpg'
import engg from '../../../../src/photos/faculty/engg.jpg'
import { Link, NavLink } from 'react-router-dom';
const Facultys = () => {



    return (
        <div className='lg:pt-10  pb-4 rounded-md bg-gradient-to-r from-violet-500 to-fuchsia-500'>

            <div className='lg:text-4xl text-3xl  text-center hover:from-yellow-500 hover:to-pink-500 mb-8 '>
                <h1 className=' font-bold underline underline-offset-8 '>Faculty :</h1>
            </div>
            <div className="grid lg:grid-cols-3 lg:ml-10 mx-2 ">
            
            <div className="card lg:w-96  mb-10  bg-gradient-to-r from-cyan-500 to-blue-500 
            hover:from-yellow-500 hover:to-pink-500 shadow-xl">
              <figure className="px-4 pt-2">
                  <img src={cse} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="my-2  items-center text-center"> 
                     <div className="dropdown dropdown-hover">
                        <button tabIndex={0} className="  btn  m-1 btn lg:btn-block font-bold bg-gradient-to-r from-green-400 to-blue-500 
                                    hover:from-pink-500 hover:to-yellow-500 subpixel-antialiased">Computer Science & Engineering</button>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 font-bold
                         shadow bg-yellow-100 rounded-box ">
                        <h1 className='text-blue-600'>Department of :</h1>
                            <li><a>Electronics & Communication Engineering</a></li>
                            <li><a> Electrical & Electronics Engineering</a></li>
                            <li><a> Computer Science & Engineering</a></li>
                        </ul>
                    </div> 
               </div>
          </div>
         
          <div className="card lg:w-96  mb-10 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-yellow-500 hover:to-pink-500 shadow-xl">
              <figure className="px-4 pt-2">
                  <img  src={sciene} alt="Shoes" className="rounded-xl w-[90%]" />
              </figure>
              <div className="my-2 items-center text-center">    
              <div className="dropdown dropdown-hover">
                        <button tabIndex={0} className="m-1 btn btn-block font-bold bg-gradient-to-r from-green-400 to-blue-500 
                                    hover:from-pink-500 hover:to-yellow-500 subpixel-antialiased">Faculty of Science </button>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 font-bold shadow bg-yellow-100 rounded-box ">
                        <h1 className='text-blue-600'>Department of :</h1>
                            <li><a>Chemistry</a></li>
                            <li><a> Physics</a></li>
                            <li><a> Mathematics</a></li>
                            <li><a> Statistics </a></li>
                        </ul>
                    </div> 
              </div>
          </div>

          <div className="card lg:w-96  mb-10 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-yellow-500 hover:to-pink-500 shadow-xl">
              <figure className="px-4 pt-2">
                  <img  src={fish} alt="Shoes" className="rounded-xl " />
              </figure>
              <div className="my-2 items-center text-center">    
             
              <div className="dropdown dropdown-hover">
                        <button tabIndex={0} className="m-1 btn btn-block font-bold bg-gradient-to-r from-green-400 to-blue-500 
                                    hover:from-pink-500 hover:to-yellow-500 subpixel-antialiased">Faculty of Fisheries </button>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 font-bold shadow bg-yellow-100 rounded-box ">
                        <h1 className='text-blue-600'>Department of :</h1>
                            <li><a>Fisheries Biology & Genetics</a></li>
                            <li><a> Fisheries Management </a></li>
                            <li><a> Fisheries Technology</a></li>
                            <li><a> Aquaculture </a></li>
                        </ul>
                    </div>
              </div>
          </div>



            </div>

<div className='text-center'>
 <NavLink to="/faculty" className='text-yellow-500 text-xl font-bold hover:bg-yellow-200'><button className="btn btn-wide font-bold text-2xl">See All ...</button></NavLink> 

</div>

        </div>
    );
};

export default Facultys;