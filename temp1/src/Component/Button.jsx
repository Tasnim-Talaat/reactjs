import React from 'react'

export default function Button(title) {
        
  return <>
  <button className={title.color} >{title.name}</button>
  </>
}
