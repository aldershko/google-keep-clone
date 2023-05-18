import React from 'react'
import TextInput from '../../components/TextInput'

const page = () => {
  return (
   <div className='flex min-h-screen justify-center items-center bg-amber-400 '>
    <div className='flex flex-col justify-center items-center w-96  border-none rounded-xl bg-slate-500'>
      <h2 className='mt-10 text-2xl text-gray- font-bold '>Sign Up</h2>
      <TextInput
      type="text"
      placeholder="email"
      rounded="xl"
      shadow="xl"
       />
      <input className='my-5 p-3 rounded-xl  hover:shadow-xl' placeholder='password'/>

      <button className='bg-black px-5 py-2 rounded-full my-5 mb-10  '>Register</button>
      

    </div>

   </div>
  )
}

export default page