import React, {useState} from 'react';
import { data } from '../../../data';

const UseStateArray = () => {

  const [dataArray, setDataArray] = useState(data);

  const removeItem = id => {
    let filteredData = dataArray.filter((data)=>data.id!==id) 
    setDataArray(filteredData)   
  }

  return (
    <React.Fragment>
     {dataArray.map((data) => {

      const {id} = data;

      return ( 
      <div key={id} className="item">
        <h4>{data['name']}</h4>
        <button onClick={()=> removeItem(id)}>remove</button>
      </div>)
     })}
     <button className="btn" onClick={()=>setDataArray([])}>clear items</button>
    </React.Fragment>
  );
};

export default UseStateArray;
