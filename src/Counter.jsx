import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incremet, decrement, reset, incrementByAmount} from './Redux/Slice/Counterslice'


function Counter() {


  const count = useSelector((state)=>state.counterReducer.count)
  const dispatch = useDispatch()
  const[amount,setAmount]= useState("")
  console.log(amount);
  const handleIncrement=()=>{
    if (amount=="") {
      alert("Please provide values") 
    } else {
      dispatch(incrementByAmount(Number(amount)))
      setAmount("")
    }
  }
  

  return (
    <>

      <h1 className='text-center text-danger fw-bolder mt-5'>Counter-Application</h1>
      <div className='container border mt-3 p-3 w-50 bg-dark'>
        <h1 className='fw-bolder text-center mt-5' style={{fontSize:'50px'}}>{count}</h1>
          <div className="d-flex justify-content-evenly align-items-center mt-5">
            <button className='btn btn-success' onClick={()=>dispatch(incremet())}>Increment</button>
            <button className='btn btn-danger' onClick={()=>dispatch(reset())}>Reset</button>
            <button className='btn btn-warning' onClick={()=>dispatch(decrement())}>Decrement</button>
          </div>
            <div className="d-flex mt-5 mb-5">
               <input type="text" className='form-control' onChange={e=>setAmount(e.target.value)}  placeholder='enter amount to be incremented' value={amount||""}/>
               <button className='btn btn-primary ms-3' onClick={handleIncrement}>Increment Amount</button>
            </div>
      </div>


    </>
  )
}

export default Counter
