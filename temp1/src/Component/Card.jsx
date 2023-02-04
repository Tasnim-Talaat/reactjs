import React from 'react'

export default function Card (props) {
  return <>
  <div className='col-md-4 '>
    <div className="caption d-flex justify-content-center align-items-center  shadow rounded bg-dark">
        <h1 className='border-bottom text-white'>{props.name}</h1>
        </div>
  </div>
  </>
}
