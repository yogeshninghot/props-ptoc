import React, { createContext, useContext } from 'react'

const ctx=createContext();
const myCtx=createContext();

const ContextApi = () => {
    const data = "hello banglore"
  return (
    <div>I am Parent:::::
        <ctx.Provider value={data}>
            <A/>
        </ctx.Provider>
        
    </div>
  )
}

export const A = () => {

    const parData=useContext(ctx)
    const myData= "My Kannur"
    return (
      <div>
        <h1>I am A :::::{parData}</h1>
        <myCtx.Provider value={myData}>
           <B/>
        </myCtx.Provider>
       
      </div>
    )
  }

  export const B= () => {
    const bData=useContext(ctx);
    const myctxData=useContext(myCtx)
    return (
      <div>
        <h1>I am B :::::{bData}:::{myctxData}</h1>
        <C/>
      </div>
    )
  }

  export const C = () => {
    const cData=useContext(ctx);
      return (
      <div>
        <h1>I am C :::::{cData}:::::::</h1>
      </div>
    )
  }

export default ContextApi