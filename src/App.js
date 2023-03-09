import './App.css';
import { TextField,Stack,Button } from '@mui/material';
import { useState } from 'react';

function App() {
  const [amount,setamount]=useState(0)
  const [intrest,setIntrest]=useState(0)
  const [year,setYear]=useState(0)
  const [result,setresult]=useState(0)

  const handleSubmit =(e) =>{
    e.preventDefault()
    if (amount==0|| intrest==0|| year==0){
      alert("Please enter valid Input")
    }
    else{
      let output =parseInt(amount)*parseInt(intrest)*parseInt(year)/100
       setresult(output)
    }
  }

  const handleReset= ()=>{
    setresult(0)
    window.location.reload()
  }

  return (
    <div className="app">
     <div className='container'>
      <div className='title_heading'>
        <h1 className='title'>Simple Calculator</h1>
        <p className='title_para'>Calculate your simple intrest Easily</p>
      </div>
      <div className='amount_card'>
        <div className='card_text'>
          <h3 className='total_amount'>₹ {result}</h3>
          <p className='total_para'>Total simple Interest</p>
        </div>
      </div>
      <form onSubmit={e=>handleSubmit(e)}>
      <div className='text_area'>
          <div className="input_box">
          <TextField className="outlined-basic" label="₹ Principal amount" variant="outlined"
          onChange={e=>setamount(e.target.value)} 
           />
          </div>
  
          <div className="input_box">
          <TextField className="outlined-basic" label="Rate of intrest (p.a) %" variant="outlined" 
          onChange={e=>setIntrest(e.target.value)} 

          />
          </div>
  
          <div className="input_box">
          <TextField className="outlined-basic" label="Time period (yr)" variant="outlined" 
          onChange={e=>setYear(e.target.value)} 

          />
          </div>

      </div>
      <div className='btn_group'>
      <Stack direction="row" spacing={2}>
          <Button type='submt' className='btn' style={{backgroundColor:'#8bc34a',color:'black'}} variant="contained">Calculate</Button>
          <Button onClick={handleReset} className='btn' style={{backgroundColor:'#ff3d00',color:'black'}} variant="outlined">Reset</Button>
      </Stack>
      </div>
      </form>

     </div>
    </div>
  );
}

export default App;
