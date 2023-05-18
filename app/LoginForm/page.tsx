import React from 'react'
import TextInput from '../../components/TextInput'

const test = () => {
  return (
   <div className='flex min-h-screen justify-center items-center bg-amber-400 '>
    <div className='flex flex-col justify-center items-center w-96  border-none rounded-xl bg-slate-500 text-center'>
      <h2 className='mt-10 text-2xl text-gray-300 font-bold '>LOGIN</h2>
      <TextInput
      type="text"
      placeholder="email"
      rounded="xl"
      shadow="xl"
       />
      <input className='my-8 p-3 rounded-xl mb-8 hover:shadow-xl' placeholder='password'/>

          <button
            type="submit"
            className="bg-black px-5 py-2 rounded-full "
          >
            LOGIN
          </button>

      <div className="flex w-full flex-col  justify-center items-center p-2 my-2">
          <div className="flex flex-row justify-center items-center text-center align-middle">

          

            <span>Dont have an account ?</span>
            <button
              
              className="text-white font-semibold px-2 hover:text-black"
            >
              Sign Up
            </button>
          </div>
          <div className="flex flex-row justify-center items-center text-center align-middle">
            <span>Trouble signing in ? </span>
            <button
              
              className="text-white font-semibold px-2 hover:text-black"
            >
              Click here
            </button>
          </div>
        </div>

    </div>

   </div>
  )
}

export default test