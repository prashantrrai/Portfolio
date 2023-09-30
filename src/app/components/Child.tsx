"use client"
import React, { useState } from 'react'

const Child = (props: any) => {

  const [name, setName] = useState("")

  const handleChange = (e: any) => {
    let result = e.target.value
    // console.log(result)
    setName(result)
  }
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // console.log(name)
    props.mydata(name)
  }
  return (
    <div>
      <div className="text-center mt-8">
        <h1 className="text-2xl font-bold text-blue-500">Hello {props.info},</h1>
        <p className="text-gray-600">Welcome to NeoG Coding</p>
      </div>


      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-4 p-4">
        <input
          type='text'
          placeholder='Write your message here....'
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
        />
        <button
          type='submit'
          className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-400"
        >
          Submit
        </button>
      </form>

    </div>
  )
}

export default Child;
