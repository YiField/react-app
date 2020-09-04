import React from 'react'
import ReactDom from 'react-dom'
class Demo extends React.Component {
  constructor(props) {
    super(props);
  }
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => 
    <li key={number.toString()}>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  )
}

function ListItem(props) {
  return <li>{props.value}</li>
}

function NumberList2(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => 
  <ListItem key={number.toString()} value={number}/>
  );
  return (
    <ul>
      {listItems}
    </ul>
  )
}


export  {NumberList,NumberList2}