import React from 'react'

export default function Alert(props) {
  return (
    props.alerttext && <div className={`alert alert-${props.alerttext.type}`} role="alert">
        {props.alerttext.msg}
    </div>
  )
}
