import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const isOpenMenu = useSelector(store=> store.app.isOpenMenu);
  // early return
  if (!isOpenMenu) return null;
  return (
    <div className='m-3 shadow-lg  h-80 rounded-lg  '>
      <ul className='border border-b-gray-400 w-40  py-2 px-5 '>
        <li className='bg-gray-100 rounded-lg' ><Link to="/">🏠Home</Link></li>
        <li>📹shorts</li>
        <li>🧲subscriptions</li>
      </ul>
      <ul className='border border-b-gray-400 py-2 px-5 '>
        <h1 className='text-lg font-bold  '>Explore</h1>
        <li>🔥trending</li>
        <li>🔴live</li>
        <li>📜News</li>
        </ul>
       <ul className=' py-2 px-5'>
        <h1 className='text-lg font-bold '>Events</h1>
        <li>🎵music</li>
        <li>🎮gaming</li>
        <li>🎙️podcasts</li>
   
      </ul>
    </div>
  )
}

export default Sidebar