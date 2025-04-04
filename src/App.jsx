import React, { useRef, useState } from 'react'

import './App.css';
import screenshot from "html2canvas"


export default function App() {

  const[tclor,setColor]=useState('000')
  const[bgcol,setBgcol]=useState('000')
  const image=useRef()

  const textColor=( colorName)=>{
    image.current.style.color=colorName;
    
  }
  const bgColor=( colorName)=>{
    image.current.style.backgroundColor=colorName
    
    
  }
  const fontFamily=(fontName)=>{
    image.current.style.fontFamily=fontName;
   

  }
  const downloadImage=()=>{
    screenshot(image.current).then(canvas =>{
      const imageData=canvas.toDataURL("image/png")
      const link=document.createElement('a')
      link.href=imageData; link.download='font-color.png'
      link.click()

    })
  }

  return (
   <>
   <div className="nav">
    <img id="img" src="https://logodix.com/logo/1799190.png" alt="logo" width={100} />
    <h1 id='heading'> Font Fusion</h1>
    <div className='nav-bt'>
    <button className='nav-btn'>Login</button>
    <button className='nav-btn'> Sign -up</button>
    </div>
   </div>

  <div className="container">
  <div className="child1">
    <h1 id='quote' contentEditable="true" ref={image}> Write your text...</h1>
    <button id='download-btn' onClick={downloadImage}>Download</button>
   </div>

  <div className="child2">
    <div id='text-color'>
      <h1>Choose your text Color</h1>
      <div className="color">
      <button id='red' onClick={() =>{ textColor('red')}}></button>
      <button id='blue' onClick={() =>{ textColor('blue')}}></button>
      <button id='green' onClick={() =>{ textColor('green')}}></button>
      <button id='yellow' onClick={() =>{ textColor('yellow')}}></button>
      <button id="orange" onClick={() =>{ textColor('orange')}}></button>
      <input type="color" 
      value={tclor} onChange={(e)=>{
        setColor(e.target.value)
        textColor(e.target.value)

      }}
      />
      </div>
      
    </div>

    <div id='bg-color'>
      <h1> Choose your bg Color</h1>
      <div className="color">
      <button id='red' onClick={() =>{ bgColor('red')}}></button>
      <button id='blue' onClick={() =>{ bgColor('blue')}}></button>
      <button id='green' onClick={() =>{ bgColor('green')}}></button>
      <button id='yellow' onClick={() =>{ bgColor('yellow')}}></button>
      <button id="orange" onClick={() =>{ bgColor('orange')}}></button>
      <input type="color"
            value={bgcol} onChange={(e)=>{
              setBgcol(e.target.value)
              bgColor(e.target.value)
      
            }}/>
      </div>

    </div>
     
    <div id='fonts'>
     
      <h1 id='f1' onClick={()=>{fontFamily('Courier New ')}}>Hello</h1>
      <h1 id='f2' onClick={()=>{fontFamily('Franklin Gothic Medium')}}>Hello</h1>
      <h1 id='f3' onClick={()=>{fontFamily('Gill Sans')}}>Hello</h1>
      <h1 id='f4' onClick={()=>{fontFamily('Arial')}}>Hello</h1>
      <h1 id='impact' onClick={()=>{fontFamily('Impact')}}>Hello</h1>
     
    </div> 
  </div>

  </div>


</>
  )
}
