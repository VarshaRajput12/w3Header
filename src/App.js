import { useState } from "react";
import "./App.css";
import Header from "./Component/Header"
import Form2 from "./Component/LogIn";


function App() {
  const[status, setStatus] = useState(false)

  // const clickHandler = () =>{
  //   setStatus(!status)
  // }
 
  return (
    <div className="App">
      {status ? <Form2 /> : <Header />}
      {/* <button className="clickHandler" onClick={clickHandler}>
        click
      </button> */}
    </div>
  );
}

export default App;
