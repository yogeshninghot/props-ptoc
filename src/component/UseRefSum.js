import React from 'react'
import { useRef,useState } from 'react';

const UseRefSum = () => {
const [count,setCount]=useState(0);
const ref1 = useRef(null);
const ref2 = useRef(null);

const sumHandle=()=>{
    const n1 = ref1.current.value;
    const n2 = ref2.current.value;
    const sum =Number(n1)+Number(n2);
    setCount(sum)
}

  return (

    <div>
        <div><input  ref={ref1}></input></div>

        <div><input ref={ref2}></input></div>
        
        <button onClick={sumHandle}>Sum</button>
       
       <div><p style={{color:count>100?"red":"green"}}>Sum is....{count}</p></div>

    </div>
  )
}

export default UseRefSum