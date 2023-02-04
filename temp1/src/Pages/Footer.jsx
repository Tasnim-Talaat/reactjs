import React from 'react'
import Button from '../Component/Button'

export default function Footer() {
  return <>
  <div className="footer bg-dark text-info pb-5">
        <div className="container">
                <div className="row g-5">
                        <div className="col-md-4">
                                <div className="caption">
                                        <h3>Get In Touch</h3>
                                </div>
                                <div className="icon-contact">
                                        <i className='fa-regular fa-envelope  fs-5'></i><span>  tasnim@gmail.com</span> <br/>
                                        <i className='fa-regular fa-address-card fs-5'></i><span>  tasnim@gmail.com</span> <br/>
                                </div>
                        </div>
                        <div className="col-md-4 d-flex justify-content-center align-items-center">
                <Button name='Contact Me' color='btn btn-outline-info'/>
                        </div>
                        <div className="col-md-4 d-flex justify-content-center align-items-center flex-column">
                                <div className="icon-contact">
                                        <i className='fa-brands fa-facebook  fs-5 pe-3'></i>
                                        <i className='fa-brands fa-twitter fs-5 pe-3'></i>
                                        <i className='fa-brands fa-github fs-5'></i>
                                </div>
                                <div className="caption">
                                        <p>copyright ©Reserved <span class="active">Tasnim Talaat</span> </p>
                                </div>
                        </div>
                </div>
        </div>
  </div>
  </>
}
