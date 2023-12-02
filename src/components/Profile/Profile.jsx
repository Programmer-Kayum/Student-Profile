import React from 'react';
import name from '../../photos/profile/received_307491064652787.jpeg'
import name1 from '../../photos/profile/sathy.jpg'
import name2 from '../../photos/profile/zim.jpg'

import { Link } from 'react-router-dom';

const Profile = () => {
  return (

     
    <div className='lg:my-10 my-2'>
   
      

  
  


    
  
 
  <Link to="/sathy" className='text-yellow-500 text-xl font-bold hover:bg-yellow-200'>sathy</Link> 
  <Link to="/zim" className='text-yellow-500 text-xl font-bold hover:bg-yellow-200'>zim</Link> 

<div>
<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Department</th>
        <th>Faculty</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={name} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Md Kayum Islam</div>
              <div className="text-sm opacity-50">Lalmonirhat</div>
            </div>
          </div>
        </td>
        <td>
          Electronics and Communication Enginnering
          <br/>
          <span className="badge badge-ghost badge-sm">Level: 3, Semester- II</span>
        </td>
        <td>Computer Science & Engineering</td>
        <th>
          <Link to="/kayum" >Details</Link> 
        </th>
      </tr>
      {/* row 2 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={name1} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Sharmin Maliha Sathy</div>
              <div className="text-sm opacity-50">Dinajpur</div>
            </div>
          </div>
        </td>
        <td>
          Electronics and Communication Enginnering
          <br/>
          <span className="badge badge-ghost badge-sm">Level: 3, Semester- II</span>
        </td>
        <td>Computer Science & Engineering</td>
        <th>
          <Link to="/sathy" >Details</Link> 
        </th>
      </tr>
      {/* row 3 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={name2} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Khalid Hasan Zim</div>
              <div className="text-sm opacity-50">Lalmonirhat</div>
            </div>
          </div>
        </td>
        <td>
          Electronics and Communication Enginnering
          <br/>
          <span className="badge badge-ghost badge-sm">Level: 3, Semester- II</span>
        </td>
        <td>Computer Science & Engineering</td>
        <th>
          <Link to="/zim" >Details</Link> 
        </th>
      </tr>
   
   
    </tbody>
    {/* foot */}
    <tfoot>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </tfoot>
    
  </table>
</div>
</div>



</div>

  )
};

export default Profile;