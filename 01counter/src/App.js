import './App.css';
import { useState } from 'react';

function App() {
  var [count, setCount]= useState(0)
  const addValue=()=>{
    count=count+1
    setCount(count)
  }
  const removeValue=()=>{
    if(count>0){
    count=count-1}
    setCount(count)
  }
  return (
    <div className="App">
      <h1>{count}</h1>
      <h2>Counter {count}</h2>
      <button onClick={addValue}
      >Increase Value {count}</button> <br />
      <button onClick={removeValue} 
      >Decrease Value {count}</button> 
    </div>
  );
}

export default App;
