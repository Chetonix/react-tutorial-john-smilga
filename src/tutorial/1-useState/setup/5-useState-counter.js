import React, { useState } from 'react';

const UseStateCounter = () => {

  const [count, setCount] = useState(0);

  function complexIncrease(){
    setTimeout(()=>{
      setCount((prevCount) => {
        return (prevCount + 1)
      })
    }, 1000)
  }

  return (
    <>
    <section style={{ margin: '4rem 0' }}>
      <h2>regular counter</h2>
      <h1>{count}</h1>
      <button className="btn" onClick={() => setCount(count-1)}>decrease</button>
      <button className="btn" onClick={() => setCount(0)}>reset</button>
      <button className="btn" onClick={() => setCount(count+1)}>increase</button>
    </section>
    <section style={{margin: '4rem 0'}}>
      <h2>more complex counter</h2>
      <h1>{count}</h1>
      <button className="btn" onClick={complexIncrease}>increase later</button>
    </section>
    </>
  );
};

export default UseStateCounter;
