import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {

  const isOpenMenu = useSelector(store=> store.app.isOpenMenu);
  // early return
  if(!isOpenMenu) return null;
  return (
    <div className='m-2  shadow-lg w-44 rounded-lg  '>
      <ul className='border border-b-gray-400 p-2'>
        <li>🏠Home</li>
        <li>📹shorts</li>
        <li>🧲subscriptions</li>
      </ul>
      <ul className='border border-b-gray-400 p-2 '>
        <h1 className='text-lg font-bold  '>Explore</h1>
        <li>🔥trending</li>
        <li>🔴live</li>
        <li>📜News</li>
        </ul>
       <ul className=' p-2'>
        <h1 className='text-lg font-bold '>Events</h1>
        <li>🎵music</li>
        <li>🎮gaming</li>
        <li>🎙️podcasts</li>
   
      </ul>
    </div>
  )
}

export default Sidebar