import React, { useState } from 'react';

const UseStateBasics = () => {

  const [title, setTitle] = useState('Random Title');

  function handleClick() {
    if(title === 'Random Title'){
      setTitle("Hello Chetonix!");
    }
    else{
      setTitle("Random Title");
    }
    
  }

  return (
  <React.Fragment>
    <h2>{title}</h2>
    <button type="button" className="btn" onClick={handleClick}>change title</button>
  </React.Fragment>);
};

export default UseStateBasics;
