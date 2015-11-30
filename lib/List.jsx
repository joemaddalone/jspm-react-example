import React from 'react';


const List = (props) => {
  return (
      <ul>
        {props.items.map((item, i) => <li key={i}>{item.name}</li> ) }
      </ul>
    );
}

export default List
