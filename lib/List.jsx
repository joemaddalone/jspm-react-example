import React from 'react';

class List extends React.Component {
  render(){
    return (
      <ul>
        {this.props.items.map((item, i) => <li key={i}>{item.name}</li> ) }
      </ul>
    );
  }
}

export default List
