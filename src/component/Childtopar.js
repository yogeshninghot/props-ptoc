import React, { useState } from 'react'

const Childtopar = () => {
  const [name,setName]=useState("")
  const getMyData=(myData)=>{
     setName(myData)
     console.log("here is>>>>>>> mydata",myData)
  }

  return (
    <div> 
     <h1>I am parent here send me ::::{name}</h1>
     <Child fn={getMyData} />
     {/* {console.log(getMyData)} */}
    </div>
  )
}

 const Child = ({fn}) => {
      //  console.log("here is fn1",yug)
     const childData = "My child "
     const getfn =()=>{
      fn(childData)
     }
    return (
      <div>
        <button onClick={getfn} >Click me to send </button>
      </div>
    )
  }

  export default Childtopar;