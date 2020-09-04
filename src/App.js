import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock'
import {NumberList} from './Demo' 

const numbers = [1, 2, 3, 4, 5];

function App() {
 return  (
    <div>
      <Clock date={new Date()}/>
      <NumberList numbers={numbers}/>
    </div>
  );
}

export default App;
