import React, { useState } from 'react'

const Calc = () => {
    
    const [result,setResult]=useState("");

    const clickhandler=(e)=>{
        e.preventDefault();
        //setResult(result || "");
        setResult(result.concat(e.target.value));
    }

    const clear=()=>{
        setResult("");
    }

    const calculate=()=>{
        setResult(eval(result))
    }

  return (
    <>
    <div className='container'>
    <div>
        <input className='upperbox' type='text' value={result}/><br/>
    </div>
    <div className='row'>
        <input type='button' value="(" className='btn' onClick={clickhandler}/>
        <input type='button' value=")" className='btn' onClick={clickhandler}/>
        <input type='button' value="%" className='btn' onClick={clickhandler}/>
        <input type='button' value="AC" className='btn' onClick={clear}/>
    </div>
    <div className='row'>
        <input type='button' value="7" className='btn' onClick={clickhandler}/>
        <input type='button' value="8" className='btn' onClick={clickhandler}/>
        <input type='button' value="9" className='btn' onClick={clickhandler}/>
        <input type='button' value="/" className='btn' onClick={clickhandler}/>
    </div>
    <div className='row'>
        <input type='button' value="4" className='btn' onClick={clickhandler}/>
        <input type='button' value="5" className='btn' onClick={clickhandler}/>
        <input type='button' value="6" className='btn' onClick={clickhandler}/>
        <input type='button' value="*" className='btn' onClick={clickhandler}/>
    </div>
    <div className='row'>
        <input type='button' value="1" className='btn' onClick={clickhandler}/>
        <input type='button' value="2" className='btn' onClick={clickhandler}/>
        <input type='button' value="3" className='btn' onClick={clickhandler}/>
        <input type='button' value="-" className='btn' onClick={clickhandler}/>
    </div>
    <div className='lastrow'>
        <input type='button' value="0" className='btn' onClick={clickhandler}/>
        <input type='button' value="." className='btn' onClick={clickhandler}/>
        <input type='button' value="=" className='btn' onClick={calculate}/>
        <input type='button' value="+" className='btn' onClick={clickhandler}/>
    </div>

    </div>
    </>
  )
}

export default Calc
