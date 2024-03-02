import React, { useState } from 'react'
import { IoSunnyOutline } from "react-icons/io5";
import './App.css'


function Products() {
  const [mode,setmode]=useState('light');

  const toggle=()=>{
    if(mode ==='light'){
      setmode('dark')
      document.body.style.backgroundColor='rgb(17,24,39)'
      document.body.style.color='white'
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white';
      document.body.style.color='rgb(17,24,39)'
    }
  }
  return (
    <div>
        <h1>This is light and dark mode button</h1>
        <button onClick={toggle} className='btn'>
        <IoSunnyOutline className='bigIcon'/>
        </button>
    </div>
  )
}

export default Products