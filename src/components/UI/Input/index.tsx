import React from 'react'

type propsType ={
    name: string
    className?:string
    placeholder?:string
    required?:boolean
    title:string
    type:string
}

const Input = (props:propsType) => {
    const {name,className,placeholder,required,title,type}=props
  return (
    <div className="mb-5">
          <label
            htmlFor={name}
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            {title}
          </label>
          <input
            type={type}
            name={name}
            id={name}
            className={`${className} bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2`}
            placeholder={placeholder}
            required={required}
          />
        </div>
  )
}

export default Input