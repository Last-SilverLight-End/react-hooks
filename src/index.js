
import ReactDOM from "react-dom";
import './index.css';
//import App from './App';

import React, {useEffect, useRef, useState} from "react";

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

const useTitle = (initialTitle) => {
  const [title,setTitle] = useState(initialTitle);
  const updateTitle = () =>{
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText= title;
  };
  useEffect(updateTitle,[title]);
  return setTitle;
};

const useClick = (onClick) => {
  
  const element = useRef();
  useEffect(() => {
    if(element.current){
      element.current.addEventListener("click",onClick);
    } 
    return () => { 
      if(element.current){
        element.current.removeEventListener("click",onClick);
      }
    };
  }, []);
  return element;
}



const App = () => {
  const saidHello = () => console.log("said hello");
  const title = useClick(saidHello);
const potato = useRef();
setTimeout(() => potato.current.focus(),5000);
  const titleUpdator = useTitle("Loading...");
  setTimeout(() => titleUpdator("home"),5000);
  const sayHello = () => console.log("hello");
 // useEffect(sayHello,[number]);
  const [number, setNumber] = useState(0);
  const [aNumber,setAnumber] = useState(0);
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
        <div>Hi
        
        <button onClick = {() => setNumber (number+1)} >{number}</button>
        <button onClick = {() => setAnumber (aNumber+1)}>{aNumber}</button>
        </div>

        <div>Hi222222
          <input ref = {potato} placeholder = "la"/>
          </div>

          <div> 
            <h1 ref = {title} >Hi reference! </h1>
            
          </div>


    </div>
    
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>,rootElement);