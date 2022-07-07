import React from 'react'
import { useNavigate } from 'react-router-dom'
const Error = () => {

    let navigate = useNavigate();
  return (
    <div style={{color: 'white', display: 'flex', justifyContent: 'center'}}>Error</div>
  )
}

export default Error