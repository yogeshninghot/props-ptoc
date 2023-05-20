import React from 'react'
import Child from './Child'

const Parent = ( ) => {

    const my= "sachin"
    const plc="mumbai"
  return (
    <div>
        Parent
        <Child name={my} loc={plc}/>
    </div>
  )
}

export default Parent