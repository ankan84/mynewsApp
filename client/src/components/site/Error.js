import React from 'react'
import { useHistory } from 'react-router-dom'

export default function(){
    const  history=useHistory();
  return (
    <div style={{
        height:"100vh",
        width:"100vw",
        display:"grid",
        placeItems:"center"
    }}>
        <h2 style={{
            fontSize:"8rem"
        }}>404 not found</h2>
        <a href='/'>back to home</a>
    </div>
  )
}
