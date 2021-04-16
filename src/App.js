import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
import { NumberList } from './Demo';
import Game from './chess/Game';
import Reservation from './Reservation';
import Calculator from './Calculator';

function App() {
  return (
    <div>
      {/* <Clock date={new Date()}/>
      <NumberList numbers={numbers}/> */}
      {/* <div className="game-box">{<Game />
      }</div> */}
      <Blog posts={posts} />,{/* <Reservation />, */}
      <Calculator />
    </div>
  );
}
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar" src={props.author.avatarUrl} alt={props.author.name} />
        <div className="UserInfo-name">{props.author.name}</div>
      </div>
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{props.date}</div>
    </div>
  );
}

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => <li key={number.toString()}>{number}</li>);
function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
  const content = props.posts.map((post) => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  ));
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

const posts = [
  { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
  { id: 2, title: 'Installation', content: 'You can install React from npm.' },
];
export default App;
