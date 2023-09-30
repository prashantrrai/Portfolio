"use client"
import React from 'react'
import Child from './Child'

const Parent = () => {
  const data = 'Prashant Rai'
  function getData(data: any){
    console.log(data)
  }
  return (
    <div>
      <Child info={data} mydata={getData}/>
    </div>
  )
}

export default Parent
