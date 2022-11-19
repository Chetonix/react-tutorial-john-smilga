import React, { useState } from 'react';


const UseStateObject = () => {

  const [person, setPerson] = useState({name: 'Che', age: 24, message: "Hello World!"})
  const {name, age , message} = person;

  function clickHandler() {
    setPerson({...person, message: "Hello Che!"})
  }

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h4>{message}</h4>
      <button className="btn" onClick={clickHandler}>change message</button>
    </>
  );
};

export default UseStateObject;
