import React from 'react';
class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>shopping-list for {this.props.name}</h1>
        <ul>
          <li>ins</li>
          <li>whatsapp</li>
          <li>oculus</li>
        </ul>
      </div>
    );
  }
}
