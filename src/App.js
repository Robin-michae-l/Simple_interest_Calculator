
import './App.css';
import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import { useState } from 'react';


function App() {
  //js code
  const [interest,setInterest]=useState(0)
  const [principle,setPrinciple]=useState(0)
  const [rate,setRate]=useState(0)
  const [year,setYear]=useState(0)
  const[isPrinciple,setIsprinciple]=useState(true)
  const[isRate,setIsrate]=useState(true)
  const[isyear,setisYear]=useState(true)

  const getValidate=(e)=>{
    const {name,value}=e.target
    /* console.log(name,value); */
    /* console.log(typeof(value)); */
    /* console.log(!!value.match(/^[0-9]+$/)); *///!!to convert into boolean
    if(!!value.match(/^[0-9]*.?[0-9]+$/)){
      if(name==='principle')
      {
      setPrinciple(value)
      setIsprinciple(true)
      }
      else if(name==='rate'){
       setRate(value)
       setIsrate(true)
      }
      else{
        setYear(value)
        setisYear(true)
      }
    }
    else{
      if(name==='principle')
      { setPrinciple(value)
    setIsprinciple(false)}
    else if(name==='rate')
    {
      setRate(value)
      setIsrate(false)
    }
    else{
      setYear(value)
      setisYear(false)
    }
     
    }
    
  }

  const handleCalculate=(e)=>{
    e.preventDefault()
    if(!principle || !rate || !year){
      alert('Please fill the form')
    }
    else{
      
      setInterest(principle*rate*year/100)
    }
  }

  const handleReset=(e)=>{
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setIsprinciple(true)
    setIsrate(true)
    setisYear(true)
  }
  return (
    <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center w-100 bg-dark'>
      <div className='bg-light p-5 rounded'>
        <h1>Simple Interest App</h1>
        <p>Calculate Simple Interest Easily</p>
        <div className='bg-info d-flex justify-content-center align-items-center w-100 p-3 flex-column rounded mt-4 shadow'>{/* flex-column to move the content down. */}
          <h2>₹{' '}{interest}</h2>
          <p style={{fontWeight:'bold'}}>Total Simple Interest</p>
        </div>
        <form className='mt-3' onSubmit={handleCalculate}>
          <div className='mb-3'>
          <TextField name='principle' value={principle || ""} onChange={(e)=>getValidate(e)} className='w-100 mt-3' id="filled-basic" label="₹ Principle Amount" variant="filled" />
          </div>
         {!isPrinciple &&
          <div>
            <p className='text-danger fw-bolder'>Invalid input</p>
          </div>
           }

          <div className='mb-3'>
          <TextField name='rate' value={rate|| ""} onChange={(e)=>getValidate(e)} className='w-100 mt-3' id="filled-basic" label="Rate Of Interest (p.a) %" variant="filled" />
          </div>

          {!isRate &&
          <div>
            <p className='text-danger fw-bolder'>Invalid input</p>
          </div>
           }
          <div className='mb-3'>
          <TextField name='year' onChange={(e)=>getValidate(e)} value={year|| ""} className='w-100 mt-3' id="filled-basic" label="Year (Yr)" variant="filled" />
          </div>

          {!isyear &&
          <div>
            <p className='text-danger fw-bolder'>Invalid input</p>
          </div>
           }

          <Stack direction='row' spacing={2} className='mt-5'>
          <Button type='submit' disabled={isPrinciple && isRate && isyear?false:true} className=  'bg-success' style={{width:'200px',height:'50px'}} variant="contained">Calculate</Button>
          <Button onClick={handleReset} variant="outlined" style={{width:'200px',height:'50px'}}>Reset</Button>
          </Stack>
        </form>
      </div>
      
    </div>
  );
}

export default App;
