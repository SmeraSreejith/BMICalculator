
import { useState } from 'react'
import './App.css'

function App() {
  const[height, setHeight]=useState("")
  const[weight,setWeight]=useState("")
  const[bmi, setBMI]=useState(null)
  const [bmistatus,setBMIStatus] = useState("")

  const calculateBMI=()=>{
    if(height && weight){
      const heightInMeters =height/100 
      const bmivalue=weight/(heightInMeters*heightInMeters).toFixed(2)
      setBMI(bmivalue)
      if(bmivalue<18.5){
        setBMIStatus("UnderWeight")
      }
      else if(bmivalue>=18.5&&bmivalue<24.9){
         setBMIStatus("Normal Weight")
      }
      else if(bmivalue>=25&&bmivalue<29.9){
        setBMIStatus("OverWeight")
      }
      else{
        setBMIStatus("Obese")
      }
      }
    else{
      setBMI(null)
      setBMIStatus("")
    }
    }
  

  return (
    <>
      <div className="bmi-calc">
        <div className="box"></div>
        <div className="data">
          <h1>BMI Calculator</h1>
          <div className="input">
            <label>Height (Cm):</label>
            <input type="number" value={height} id="height" onChange={(e)=>setHeight(e.target.value)} />
          </div>

          <div className="input">
            <label>Weight (Kg):</label>
            <input type="number" value={weight} id="weight" onChange={(e)=>setWeight(e.target.value)} />
          </div>
          <button onClick={calculateBMI}>Calculate BMI</button>
          
            {bmi!==null &&(
              <div className="result">
              <p>Your BMI is: {bmi}</p>
              <p>Status: {bmistatus}</p>
              </div>
            )}
          </div>
          
        
      </div>
    </>
  )

}
export default App
