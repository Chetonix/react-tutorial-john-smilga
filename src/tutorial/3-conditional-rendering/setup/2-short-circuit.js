import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  
  const [text, setText] = useState('');
  
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';


  const [isError, setIsError] = useState(false);
  return (
    <div className="container">
      <h1>{text || 'Che Tonix'}</h1>
      <h1>{text && 'Hello World!'}</h1>
      <button className="btn" onClick={()=> setIsError(!isError)}>toggle error</button>
      <div>
        <h2>{isError ? <p>There is an error...</p> : <p>There is no error</p>}</h2>
      </div>
    </div>
  )
};

export default ShortCircuit;
