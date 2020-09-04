import React from 'react'
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      counter: 123,
      posts: [],
      comments: []
    }
  }
  render() {
    return (
      <div>
        <h1>lalala</h1>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
  componentDidMount() {
    this.timer = setInterval(()=>{this.tick()},1000)
    // fetchPosts().then(res => {
    //   this.setState({
    //     posts:res.posts
    //   })
    // })
  }

  componentWillUnmount() {
if(this.timer)clearInterval(this.timer)
  }
  tick() {
    this.setState({
      date:new Date()
    })
    this.setState((state, props)=>({
      counter:state.counter + props.increment
    }))
    this.setState(function (state,props){
      return {
        counter:state.counter+props.increment
      }
    })
  }

}

export default Clock