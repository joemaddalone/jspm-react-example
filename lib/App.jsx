import React from 'react';
import Api from './api';
import List from './List.jsx!';

class App extends React.Component {
  constructor() {
    this.state = {items: [],searchString: ''};
  }


  componentWillMount(){
    /* no rejection handling here. tsk, tsk. */
    Api.load().then(data => this.setState({items: data.sort((a,b) => a.name < b.name ? -1: 1)}))
  }

  handleFilter(e){
    this.setState({searchString: e.target.value});
  }

  render(){
    var items = this.state.items;
    var searchString = this.state.searchString.toLowerCase().trim();

    if(searchString.length){
      items = items.filter(item => item.name.toLowerCase().match(searchString));
    }

    return (
      <div>
        <input type="search" placeholder="Search..." onChange={this.handleFilter} />
        <List items={items} />
      </div>
    );
  }
}

export default App