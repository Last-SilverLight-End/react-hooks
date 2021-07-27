
import ReactDOM from "react-dom";
import './index.css';
//import App from './App';

import React, {useState} from "react";


function App(){
  const [item, setItem] = useState(1);
  const incrementItem = () =>setItem(item+1);
  const decrementItem = () =>setItem(item-1);
  return (
    <div className = "App">
      <h1>Hello Everyone</h1>
      <h2 > lets check up-down ====> {item} </h2>
      <h2>Welcome to learning react-hooks!</h2>
      <h3>from Last_SilverLight-End</h3>

      <button onClick = {incrementItem}>Increment</button>
      <button onClick ={decrementItem}>  Decrement </button>

    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>,rootElement);