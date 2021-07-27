
import ReactDOM from "react-dom";
import './index.css';
//import App from './App';

import React, {useState} from "react";

export const useInput = (initialValue,validator) =>{
  const [value,setValue] = useState(initialValue);
  const onChange = (event) => {
    const{
      target : {value}
    } = event;
    let willUpdate = true;
    if (typeof validator == "function"){
      willUpdate = validator(value);
    }
    if(willUpdate){
      setValue(value);
    }
  };
  return {value,onChange};

};

const content = [
  {
    tab :"Section 1",
    content : "I'm the content of the Section 1"
  },
  {
    tab :"Section 2",
    content : "I'm the content of the Section 2"
  }
];

const useTabs = (initialTab, allTabs) => {

  
  const [currentIndex,  setCurrentIndex] =useState(initialTab);
  if(!allTabs || !Array.isArray(allTabs)){
    return;
  }
  return {
    currentItem : allTabs[currentIndex],
    changeItem : setCurrentIndex
  };


  
};


const App = () => {
  const {currentItem,changeItem } = useTabs(0,content);
  const maxLen =  (value) => !value.includes("@");
  const name = useInput("Mr.",maxLen); 
  const email = useInput("@");
  const [item, setItem] = useState(1);
  const incrementItem = () =>setItem(item+1);
  const decrementItem = () =>setItem(item-1);
  return (
    <div className = "App">
      <h1>Hello Everyone</h1>
      <h2 > lets check up-down ==== {item} </h2>
      <h2>Welcome to learning react-hooks!</h2>
      <h3>from Last_SilverLight-End</h3>

      <input placeholder = "Name"  {...name} />
      <input placeholder = "Email" {...email}/>


      <button onClick = {incrementItem}>Increment</button>
      <button onClick ={decrementItem}>  Decrement </button>

     

      <div>

        
      {content.map((section,index) => (
        <button onClick = {() =>changeItem(index)}>{section.tab}</button>
      ))}
        
        {currentItem.content}</div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>,rootElement);