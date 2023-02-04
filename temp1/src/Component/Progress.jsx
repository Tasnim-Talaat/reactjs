import React from 'react'

export default function Progress(props) {
  return <>
  {props.name}
  <div className="progress">
  <div className="progress-bar" role="progressbar" style={{width:props.stylee}} aria-valuenow={props.aria} aria-valuemin="0" aria-valuemax="100"></div>
</div>
  </>
}
