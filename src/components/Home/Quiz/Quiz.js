import React from 'react';
import img from '../../../photos/vector-layout-quiz-question-with-choice-text-menu-gradient-template-intellectual-competition-game-menu-tv-show-quiz-questions-quiz-with-choice-answer-screen-within-framework_516872-621.jpg'

const Quiz = () => {
    return (
        <div className='rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 py-10'>
        <h1 className='text-center font-bold text-4xl  '>Quiz Time_!!!</h1>
        <div className="divider mb-4"></div> 
       
        <div className="grid grid-cols-2 ml-10 mx-2">

        <div className="card mx-4  mb-10  bg-gradient-to-r from-cyan-500 to-blue-500 
            hover:from-yellow-500 hover:to-pink-500 shadow-xl">
              <div className='text-center'>
        <a target='_blank' href="https://helpful-choux-a08947.netlify.app/"><button className=" pt-32  font-bold text-4xl">Let's Start !!!</button></a> 
        
        </div>
         </div>
        <div className="card   mb-10  bg-gradient-to-r from-cyan-500 to-blue-500 
            hover:from-yellow-500 hover:to-pink-500 shadow-xl">
              <figure className="px-4  py-2">
                  <img src={img} alt="Shoes" className="rounded-xl" />
              </figure>
         </div>


       
       
       
        </div>

       
        </div>
    );
};

export default Quiz;