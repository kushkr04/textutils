import React from 'react'

export default function Alert(props) {
  return (
    <div style={{height: '50px'}}>
    {props.alerttext && <div className={`alert alert-${props.alerttext.type}`} role="alert">
        {props.alerttext.msg}
    </div>}
    </div>
  )
}
