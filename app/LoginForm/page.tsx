import React from 'react'

const test = () => {
  return (
   <div className='flex min-h-screen justify-center items-center bg-amber-400 '>
    <div className='flex flex-col justify-center items-center w-96  border-none rounded-xl bg-slate-500'>
      <h2 className='mt-10 text-2xl text-gray-300 font-bold '>LOGIN</h2>
      <input className='my-8 p-3 rounded-xl hover:shadow-xl' placeholder='username'/>
      <input className='my-8 p-3 rounded-xl mb-20 hover:shadow-xl' placeholder='password'/>
      

    </div>

   </div>
  )
}

export default test