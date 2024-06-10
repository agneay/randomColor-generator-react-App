import { useEffect } from "react";
import { useState } from "react"

const App = () => {
  const [colorType,setColorType] = useState('hex');
  const [color,setColor] = useState('#000000');

  const generateColorHex = () => {
    let tempColor = "#";
    let arr = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    for (let i=0;i<6;i++){
      tempColor += arr[Math.floor(Math.random()*arr.length)]
    }
    setColor(tempColor);
  }
  const generateColorRgb = () => {
    let  tempColor1 = Math.floor(Math.random()*255)
    let  tempColor2 = Math.floor(Math.random()*255)
    let  tempColor3 = Math.floor(Math.random()*255)
    setColor(`rgb(${tempColor1},${tempColor2},${tempColor3})`);
  }
  useEffect(()=>{
    if(colorType === 'hex'){
      generateColorHex()
    }else{
      generateColorRgb()
    }
  })
  const generateColor = () =>{
    if (colorType === 'hex'){
      generateColorHex()
    }else{
      generateColorRgb()
    }
  }
  return (
    <div className="app" style={{backgroundColor: color}}>
      <div className="row align-items-center">

        <div className="col">
          <div className="dropdown">
            <button href="" type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              Pick a type
            </button>

            <ul className="dropdown-menu">

              <li><a href="#" className="dropdown-item" onClick={()=>setColorType('hex')}>Hex Color</a></li>
              <li><a href="#" className="dropdown-item" onClick={()=>setColorType('rgb')}>RGB Value</a></li>

            </ul>
          </div>
        </div>

        <div className="col">
          <button className="btn btn-primary" onClick={generateColor()}>Generate Random Color</button>
        </div>

      </div>
    </div>
  )
}

export default App