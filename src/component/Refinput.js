import React, { Component, createRef } from 'react'

export default class Refinput extends Component {
    constructor(){
        super();
            this.n1Ref=createRef(null);
            this.n2Ref=createRef(null);
            this.state={
                sum:0
            }
        
            
    }
   
    handleSum=()=> {
    const n1 = this.n1Ref.current.value;
    const n2 = this.n2Ref.current.value;
    const sum = Number(n1)+Number(n2);
    this.setState({
        sum
    });
    }

    

  render() {
    return (
      <div>
        <input type='number'ref={this.n1Ref}></input>
        <input type='number'ref={this.n2Ref}></input>
        <button onClick={this.handleSum}>ADD Now</button>
        <div><h1>Got this....{this.state.sum}</h1></div>
      </div>
    )
  }
}
