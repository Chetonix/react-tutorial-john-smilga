// import React, { useState, useReducer, useEffect } from 'react';
// import Modal from './Modal';
// import { data } from '../../../data';
// // reducer function

// const Index = () => {

//   const [name, setName] = useState("");
//   const [itemList, setItemList] = useState([]);

//   const inputButtonRef = useReducer(null);

//   useEffect(()=>{
//     inputButtonRef.current.focus();
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if(name) {
//       const newItem = { id: new Date().getTime().toString(), name};

//       setItemList([...itemList, newItem]);
//       setName("");
//     } else {
//       return;
//     }
    
//   }

//   const removeItem = id => {
    
//     const newList = itemList.filter(item => {return item.id !== id});
//     setItemList(newList);
//   }

//   return (
//     <>
//       <form className="form" onSubmit={handleSubmit}>
//         <div>
//           <input type="text" value={name} onChange={(e)=>setName(e.target.value)} ref={inputButtonRef}/>
//         </div>
//         <button type="submit">add </button>
//       </form>
//       {
//         itemList.map((item) => {
//           return (
//           <div key={item.id} className="item">
//             <h4>{item.name}</h4>
//             <button onClick={()=>removeItem(item.id)}>remove</button>
//           </div>
//           )
//         })
//       }
//     </>
//   )
// };

// export default Index;


