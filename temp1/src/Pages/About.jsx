import React from 'react'
import Button from '../Component/Button'

export default function About() {
  return<>
  <div className="container">
        <div className="row gy-3 py-5">
                <div className="col-md-3 d-flex justify-content-center align-items-center">
                        <h1>About Me</h1>
                </div>
                <div className="col-md-9">
                       
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia vitae omnis, atque illo provident amet ipsa explicabo? Voluptas provident, soluta consectetur fugit, exercitationem, quis vitae ad officiis obcaecati at ipsum?</p>
               <Button name='Download Resume' color='btn btn-outline-dark'/>
                </div>
        </div>
  </div>
  </>
}
