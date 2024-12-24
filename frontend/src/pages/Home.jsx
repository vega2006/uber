import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
    <div className='bg-cover bg-bottom bg-[url(https://images.unsplash.com/photo-1519227090-3f1402803420?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJhZmZpYyUyMGxpZ2h0c3xlbnwwfHwwfHx8MA%3D%3D)] h-screen pt-8 w-full flex justify-between flex-col bg-red-400'>
        <img className="w-12 ml-8 " src='https://www.edigitalagency.com.au/wp-content/uploads/Uber-logo-white-png-900x313.png'/>

        <div className='bg-white py-5 px-4'>
        <h2 className='text-2xl font-bold'>Get Started with Uber</h2>
        <Link to="/login" className='flex justify-center items-center bg-black text-white w-full rounded mt-2 p-3 text-xl'>Continue</Link>
        </div>

    </div>
    </div>
  )
}

export default Home