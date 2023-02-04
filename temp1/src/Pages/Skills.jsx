import React from 'react'
import Progress from '../Component/Progress'

export default function Skills() {
        let x=['90%','80%','70%','60%','50%','40%','60%','80%']
        let names=['HTML','CSS','JS','JQUERY','BOOTSTRAP','REACTJS','DJANGO','Photoshop']
  return <>
  <div className="skills bg-dark text-white py-5">
  <div className="container">
        <div className="skill-caption d-flex justify-content-center align-items-center flex-column">
                <h1>Skills</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit maxime blanditiis accusamus repellat cupiditate consectetur cum vitae ullam quis non.</p>
        </div>
        <div className="row">
                <div className="col-md-6">
                        <div className="caption d-flex justify-content-center align-items-center ">
                        <h2 className='border-bottom py-5'>My Focus</h2>
                        </div>
                        <div className="list d-flex justify-content-center align-items-center flex-column py-3">
                                <div>Web Development</div>
                                <div>Web Development</div>
                                <div>Web Development</div>
                                <div>Web Development</div>
                                </div>
                </div>
                <div className="col-md-6">
      { x.map((p,index)=>
                <Progress name={names[index]} stylee={p} aria={p}/>
        )
      }
                      
                </div>
        </div>
  </div>
  </div>
  </>
}
