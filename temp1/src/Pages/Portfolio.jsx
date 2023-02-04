import React from 'react'
import Card from '../Component/Card'


export default function Portfolio() {
        let skil=['mobile','web','design','logo','web','design']
  return <>
  <div className="container px-3 pb-5">
        <div className="caption py-5">
                <h1>Portfolio</h1>
        </div>
        <div className="row g-5 py-5">
                {skil.map((skill,index)=>
                       <Card name={skill} /> 
                       )}
        
        </div>
  </div>
  </>
}
