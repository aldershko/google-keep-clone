import React from 'react'

const test = () => {
  return (
    <div className="min-h-screen flex">
        <div className="flex-1 ...">
          <div className="flex flex-row min-h-screen shadow-inner bg-slate-500 justify-center items-center">
            <div className="flex flex-col h-128 w-128 p-10 md:w-128 sm:w-96 m-10  justify-between rounded-lg shadow-xl items-center bg-gray-200 text-black">
              <h2 className='text-3xl font-bold
              mb-5'>Login</h2>
             <input className='m-5 p-5 rounded-lg' type='text' placeholder='username'/>
             <input className='m-5 p-5 rounded-lg' type='password' placeholder="password"/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default test