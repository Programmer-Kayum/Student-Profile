import React from 'react';

import cse from '../../photos/faculty/cse.webp'
import sciene from '../../photos/faculty/science.jpg'
import fish from '../../photos/faculty/fish.jpg'
import agg from '../../photos/faculty/agg.jpg'
import business from '../../photos/faculty/business.jpg'
import dvm from '../../photos/faculty/dvm.jpg'
import social from '../../photos/faculty/social.jpg'
import engg from '../../photos/faculty/engg.jpg'

const Faculty = () => {
    return (
        <div className='lg:pt-10  pb-4 mt-8 rounded-md bg-gradient-to-r from-violet-500 to-fuchsia-500'>

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





          <div className="card lg:w-96  mb-10 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-yellow-500 hover:to-pink-500 shadow-xl">
              <figure className="px-4 pt-2">
                  <img  src={agg} alt="Shoes" className="rounded-xl " />
              </figure>
              <div className="pt-8 items-center text-center">    
           
               <div className="dropdown dropdown-hover">
                        <button tabIndex={0} className="m-1 btn btn-block font-bold bg-gradient-to-r from-green-400 to-blue-500 
                                    hover:from-pink-500 hover:to-yellow-500 subpixel-antialiased">Faculty of Agriculture </button>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 font-bold shadow bg-yellow-100 rounded-box ">
                        <h1 className='text-blue-600'>Department of :</h1>
                            <li><a>Agronomy</a></li>
                            <li><a> Horticulture </a></li>
                            <li><a> Soil Science</a></li>
                            <li><a> Entomology </a></li>
                            <li><a> Plant Pathology </a></li>
                            <li><a> Genetics & Plant Breeding </a></li>
                            <li><a> Entomology </a></li>
                        </ul>
                    </div>
              </div>
          </div>

          <div className="card lg:w-96  mb-10 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-yellow-500 hover:to-pink-500 shadow-xl">
              <figure className="px-2 pt-2">
                  <img  src={business} alt="Shoes" className="rounded-xl  " />
              </figure>
              <div className="pt-10  items-center text-center">    
           
             <div className="dropdown dropdown-hover">
                        <button tabIndex={0} className="m-1 btn btn-block font-bold bg-gradient-to-r from-green-400 to-blue-500 
                                    hover:from-pink-500 hover:to-yellow-500 subpixel-antialiased">Faculty of Business Studies</button>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 font-bold shadow bg-yellow-100 rounded-box ">
                        <h1 className='text-blue-600'>Department of :</h1>
                            <li><a>Accounting </a></li>
                            <li><a> Finance and Banking</a></li>
                            <li><a> Management</a></li>
                            <li><a> Marketing </a></li>
                        </ul>
                    </div> 
              </div>
          </div>

          <div className="card lg:w-96  mb-10 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-yellow-500 hover:to-pink-500 shadow-xl">
              <figure className="px-4 pt-2">
                  <img  src={dvm} alt="Shoes" className="rounded-xl w-[90%]  " />
              </figure>
              <div className="my-2 items-center text-center">    
              
              <div className="dropdown dropdown-hover">
                        <button tabIndex={0} className="m-1 btn btn-block font-bold bg-gradient-to-r from-green-400 to-blue-500 
                                    hover:from-pink-500 hover:to-yellow-500 subpixel-antialiased">Veterinary and Animal Sciences</button>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 font-bold shadow bg-yellow-100 rounded-box ">
                        <h1 className='text-blue-600'>Department of :</h1>
                            <li><a>Microbiology </a></li>
                            <li><a> Pathology & Parasitology</a></li>
                            <li><a> Dairy & Poultry Science</a></li>
                            <li><a> Anatomy & Histology</a></li>
                            <li><a> General Animal Science & Nutrition</a></li>
                            <li><a> Genetics & Animal Breeding</a></li>
                        </ul>
                    </div> 
              </div>
          </div>

          <div className="card lg:w-96   mb-10 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-yellow-500 hover:to-pink-500 shadow-xl">
              <figure className="px-4 pt-2">
                  <img  src={social} alt="Shoes" className="rounded-xl " />
              </figure>
              <div className="my-2 items-center text-center">    
              <div className="dropdown dropdown-hover">
                        <button tabIndex={0} className="m-1 btn btn-block font-bold bg-gradient-to-r from-green-400 to-blue-500 
                                    hover:from-pink-500 hover:to-yellow-500 subpixel-antialiased">Social Science and Humanities</button>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 font-bold shadow bg-yellow-100 rounded-box ">
                        <h1 className='text-blue-600'>Department of :</h1>
                            <li><a>English </a></li>
                            <li><a> Economics</a></li>
                            <li><a> Sociology</a></li>
                            <li><a>  Development Studies</a></li>
                            
                        </ul>
                    </div> 
              </div>
          </div>

          <div className="card lg:w-96   mb-10 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-yellow-500 hover:to-pink-500 shadow-xl">
              <figure className="px-4 pt-2">
                  <img  src={engg} alt="Shoes" className="rounded-xl " />
              </figure>
              <div className="my-2 items-center text-center">    
              <div className="dropdown dropdown-hover">
                        <button tabIndex={0} className="m-1 btn btn-block font-bold bg-gradient-to-r from-green-400 to-blue-500 
                                    hover:from-pink-500 hover:to-yellow-500 subpixel-antialiased">Faculty of Engineering</button>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 font-bold shadow bg-yellow-100 rounded-box ">
                            <h1 className='text-blue-600'>Department of :</h1>
                            <li><a>Agricultural & Industrial Engineering </a></li>
                            <li><a> Faculty of Engineering</a></li>
                            <li><a> Architecture</a></li>
                            <li><a>  Civil Engineering</a></li>
                            <li><a>  Mechanical Engineering</a></li>
                            
                        </ul>
                    </div> 
              </div>
          </div>
            </div>

        </div>
    );
};

export default Faculty;