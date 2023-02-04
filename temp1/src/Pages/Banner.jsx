import React from 'react'
import Button from '../Component/Button'
import './Banner.css';
import './bb.css';

export default function Banner() {
  return <>
  <div className="banner  ">
  <div className="overlay d-flex align-items-center  justify-content-start text-info ">
  <div className="container">
        <div className="caption">
        <h1 className=''>Tasnim Talaat</h1>
        <h4>Web Developer</h4>
       
        <Button name='Contact Me' color='btn btn-outline-info'/>
        </div>
        </div>
        </div>
  </div>
  </>
}
