import React from 'react'




export type TextInputProps ={
    type:"text" | "number" | "password";
    placeholder: string;
 
    rounded: "md" | "lg" | "xl";



    
}

const radius ={
    md:"rounded-md",
    lg:"rounded-lg",
    xl:"rounded-xl"

}


const TextInput = (props : TextInputProps) => {


  return (
    <>
    <input className={`my-8 p-3 ${(radius as any)[props.rounded]} hover:shadow-xl`} 
    type={props.type}
    placeholder={props.placeholder} />
    </>
  )
}

export default TextInput