import React, { useState } from 'react'

import '../styles/App.css';


const searchArray = ["Newton", "School", "Newton School", "React", "Preact", "Node", "Mongoose", "Angular", "Vue", "Apple", "Microsoft", "Netflix", "Meta"];


const App = () => {

  const [inputVal,setInputVal] = useState("");

  let temp = searchArray.filter((el)=>{
    if(inputVal !== "")
    return el.toLowerCase().includes(inputVal.toLowerCase());
  })
  let result = temp.map((el)=>{
    return <li>{el}</li>
  })
  return (

    <div id="main">
      <h4>Search</h4>
      <input id="search-input" onChange={(event)=>{
        setInputVal(event.target.value);
      }} />
      <h4>Results</h4>
      <ul>
        {result}
      </ul>
      
    </div>
  )
}


export default App;
