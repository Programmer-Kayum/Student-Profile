import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import jsPDF from 'jspdf';
import name from '../../../photos/profile/received_307491064652787.jpeg'

const Kayum = () => {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    pageStyle: `
      @page {
        size: A5;
        margin: 5mm;
      }
    `,
  });

  const generatePDF = () => {
    const pdf = new jsPDF();
    pdf.addHTML(componentRef.current, () => {
      pdf.save('generated.pdf');
    });
  };

  return (
    <div>
      <div ref={componentRef}>
        {/* Your React component content goes here */}
        <div class="lg:p-10 p-4 flex-initial lg:w-[90%]  mt-4 border-2  
        border-indigo-500 lg:mx-4 bg-indigo-500 shadow-lg shadow-indigo-500/50 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 
        hover:from-pink-500 hover:to-yellow-500 ">
        
      <div>
          <div className='text-center pb-4'>
              <h2 className='text-4xl font-bold text-white underline'> Hajee Mohammad Danesh Science & Technology University</h2>
          </div>
          <div className='flex'>
      <div className='w-[80%]'>
          <h4 className='font-semibold text-2xl'> Student Name &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  :  &nbsp;  Mohammad Kayum Islam</h4>
          <h4 className='font-semibold text-2xl'> Faculty Name  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   : &nbsp;   Computer Science and Engineering </h4>
          <h4 className='font-semibold text-2xl'> Department Name &nbsp;: &nbsp;   Electronics and Communication Engineering</h4>
          <h4 className='font-semibold text-2xl'> Student ID   &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; : &nbsp;   2002160</h4>
          <h4 className='font-semibold text-2xl'> Father's Name    &nbsp; &nbsp;  &nbsp; &nbsp; : &nbsp;  Md Nurjamal Mia</h4>
          <h4 className='font-semibold text-2xl'> Mother's Name   &nbsp;&nbsp;&nbsp;  &nbsp; : &nbsp; Mst Kahinur Begum  </h4>
      <br />
          <div className='flex'>
              <div className=''>
              <h4 className='font-semibold text-xl'> Email   &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp; : &nbsp; mohammadkayumislam@gmail.com  </h4>
              </div>
              <div className='ml-24'>
              <h4 className='font-semibold text-xl'> Mobile  &nbsp;&nbsp;  &nbsp; : &nbsp; 01890275600 </h4>
              </div>
      
          </div>
          <div className='flex'>
              <div>
              <h4 className='font-semibold text-xl'> Nationality   &nbsp;&nbsp;   &nbsp; : &nbsp; Bangladesi  </h4>
              </div>
              <div className='lg:ml-80'>
              <h4 className='font-semibold text-xl ml-2'> NID  &nbsp;&nbsp;  &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; : &nbsp; 890275600 </h4>
              </div>
      
          </div>
          <div className='flex'>
              <div>
              <h4 className='font-semibold text-xl'> Gender   &nbsp;&nbsp;  &nbsp;&nbsp; &nbsp;&nbsp;   &nbsp; : &nbsp; Male  </h4>
              </div>
              <div className='lg:ml-80'>
              <h4 className='font-semibold text-xl ml-2'> Marital Status  &nbsp;&nbsp;&nbsp; : &nbsp; Single </h4>
              </div>
      
          </div>
          <div className='flex'>
              <div>
              <h4 className='font-semibold text-xl'> Religion   &nbsp;  &nbsp;&nbsp; &nbsp;&nbsp;   &nbsp; : &nbsp; Islam  </h4>
              </div>
              <div className='lg:ml-80'>
              <h4 className='font-semibold text-xl ml-2'> Blood Group  &nbsp;&nbsp;&nbsp; : &nbsp; O+ </h4>
              </div>
      
          </div>
          <div className='flex'>
              <div>
              <h4 className='font-semibold text-xl'> Present Adress   : <p className='ml-32'>
              Baserhat, HSTU, Dinajpur</p>  </h4>
              </div>
              <div className='lg:ml-60'>
              <h4 className='font-semibold text-xl ml-2'> Permanent Adress : <p className='ml-32'>
              Kurul,Mogolhat, Lalmonirhat</p></h4>
              </div>
      
          </div>
      
      
      </div>
      
      <div className='w-[20%]'>
         <img className='rounded-full' src={name} alt="" />
      </div>
          </div>
      </div>
      <br />
       {/* table */}
      <div>
          <div className='text-center'>
              <h1 className='font-bold text-4xl underline pb-4'>Results:</h1>
          </div>
      <div className='border border-3 text-bold border-indigo-600 bg-sky-200'>
      <div className="overflow-x-auto ">
        <table className="table text-bold">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Level</th>
              <th>Semester</th>
              <th>CGPA</th>
              <th>Credit</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>1</td>
              <td>I</td>
              <td>3.52</td>
              <td>20 </td>
              
           
            </tr>
            {/* row 2 */}
            <tr>
            <th>2</th>
              <td></td>
              <td>II</td>
              <td>3.62</td>
              <td>21 </td>
              
            </tr>
            {/* row 3 */}
            <tr>
            <th>3</th>
              <td>2</td>
              <td>I</td>
              <td>3.82</td>
              <td>22 </td>
              
            </tr>
            <tr>
            <th>4</th>
              <td></td>
              <td>II</td>
              <td>3.72</td>
              <td>22.5 </td>
              
            </tr>
            <tr>
            <th>5</th>
              <td>3</td>
              <td>I</td>
              <td>3.92</td>
              <td>21.5 </td>
              
            </tr>
            <tr>
            <th>6</th>
              <td></td>
              <td>II</td>
              <td>3.99</td>
              <td>19 </td>
              
            </tr>
            <tr>
            <th>7</th>
              <td>4</td>
              <td>I</td>
              <td>4.00</td>
              <td>23.5 </td>
              
            </tr>
            <tr>
            <th>8</th>
              <td></td>
              <td>II</td>
              <td>4.00</td>
              <td>21.5</td>
              
            </tr>
            <tr>
            <th>Result</th>
              <td></td>
              <td></td>
              <td>3.99</td>
              <td>158.5</td>
              
            </tr>
          </tbody>
        </table>
      </div>
      </div>
      </div>
      
      {/* Educational Qualification */}
      
      <div >
          <div className='text-center pt-8 pb-2'>
              <h1 className='font-bold text-4xl underline pb-4'>Educational Qualification:</h1>
          </div>
      <div className='border border-3 text-bold border-indigo-600 bg-sky-200'>
      <div className="overflow-x-auto ">
        <table className="table text-bold">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Degree</th>
              <th>Name</th>
              <th>CGPA/GPA</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>SSC</td>
              <td>Itapota Adarsho High School</td>
              <td>5.00</td>
              <td>2016 </td>
              
           
            </tr>
            {/* row 2 */}
            <tr>
            <th>2</th>
              <td>HSC</td>
              <td>Lalmonirhat Govt College</td>
              <td>5.00</td>
              <td>2018 </td>
              
            </tr>
            {/* row 3 */}
            <tr>
            <th>3</th>
              <td>Honor's</td>
              <td>Hajee Mohammad Danesh Science & Technology University</td>
              <td>3.99</td>
              <td> 2023 </td>
              
            </tr>
            
           
            
          </tbody>
        </table>
      </div>
      </div>
      </div>
      
      </div>
      
      </div>
 

<div className='text-center my-8'>
<button onClick={handlePrint} className="btn btn-wide">Print</button>
    </div>

    
     
    </div>
  );
};

export default Kayum;
