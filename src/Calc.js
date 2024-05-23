import React, { useState } from 'react';

const Calc = () => {
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const clickhandler = (e) => {
    e.preventDefault();
    const value = e.target.value;

    
    if (
      /[+\-*/%]/.test(result.slice(-1)) && 
      /[+\-*/%]/.test(value)
    ) {
      setError("Syntax Error");
      return;
    }

    setError("");
    setResult(result.concat(value));
  };

  const clear = () => {
    setResult("");
    setError("");
  };

  const del = () => {
    setResult(result.slice(0, -1));
  };

  const calculate = () => {
    try {
      setError("");
      const sanitizedResult = result.replace(/(^|[\+\-\*\/\(\)])0+(\d)/g, '$1$2');
      setResult(eval(sanitizedResult).toString());
    } catch {
      setError("Syntax Error");
    }
  };
  
  

  return (
    <>
      <div className='container'>
        <div>
          <input className='upperbox' type='text' value={result} readOnly /><br />
          {error && <div className='error'>{error}</div>}
        </div>
        <div className='row'>
          <input type='button' value="(" className='btn' onClick={clickhandler} />
          <input type='button' value=")" className='btn' onClick={clickhandler} />
          <input type='button' value="%" className='btn' onClick={clickhandler} />
          <input type='button' value="AC" className='btn' onClick={clear} />
        </div>
        <div className='row'>
          <input type='button' value="7" className='btn' onClick={clickhandler} />
          <input type='button' value="8" className='btn' onClick={clickhandler} />
          <input type='button' value="9" className='btn' onClick={clickhandler} />
          <input type='button' value="/" className='btn' onClick={clickhandler} />
        </div>
        <div className='row'>
          <input type='button' value="4" className='btn' onClick={clickhandler} />
          <input type='button' value="5" className='btn' onClick={clickhandler} />
          <input type='button' value="6" className='btn' onClick={clickhandler} />
          <input type='button' value="*" className='btn' onClick={clickhandler} />
        </div>
        <div className='row'>
          <input type='button' value="1" className='btn' onClick={clickhandler} />
          <input type='button' value="2" className='btn' onClick={clickhandler} />
          <input type='button' value="3" className='btn' onClick={clickhandler} />
          <input type='button' value="-" className='btn' onClick={clickhandler} />
        </div>
        <div className='lastrow'>
          <input type='button' value="0" className='btn' onClick={clickhandler} />
          <input type='button' value="." className='btn' onClick={clickhandler} />
          <input type='button' value="=" className='btn' onClick={calculate} />
          <input type='button' value="+" className='btn' onClick={clickhandler} />
          <input type='button' value="DEL" className='btn' onClick={del} />
        </div>
      </div>
    </>
  );
}

export default Calc;
