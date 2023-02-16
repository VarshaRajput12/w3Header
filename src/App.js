import { useState } from "react";
import "./App.css";
import Header from "./Component/Header"
import Form2 from "./Component/LogIn";


function App() {
  const[status, setStatus] = useState(false)

  const clickHandler = () =>{
    setStatus(!status)
  }
  return (
    <div className="App">
      {status ? (
        <Form2 handleLogin={clickHandler} />
      ) : (
        <Header handleLogin={clickHandler} />
      )}
    </div>
  );
}

export default App;

// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(props){
//     super(props)
//     this.state={
//       status: false
//     }
    
    
//   }
//   clickHandler = () =>{
//     this.setState({
//       status: !false
//     })
// }
  
//   render() {
//      return (
//        <div className="App">
//          {this.status ? (
//            <Form2 handleLogin={this.clickHandler} />
//          ) : (
//            <Header handleLogin={this.clickHandler} />
//          )}
//        </div>
//      );
//   }
// }
