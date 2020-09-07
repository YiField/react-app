import React from 'react'
import './square.css'

class Square extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: null
    }
    console.log(props)
  }
  render() {
    return (
      <button className="square" onClick={()=> {
        this.setState({value: 'X'})
      }}>
        {this.state.value}
      </button>
    )
  }
}
export default Square