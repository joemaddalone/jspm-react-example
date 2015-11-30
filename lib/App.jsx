import React from 'react';
import Api from './api';
import List from './List.jsx!';

class App extends React.Component {
  constructor() {
    super();
    this.state = {items: [],searchString: ''};
    this.handleFilter = (e) => this.setState({searchString: e.target.value});
  }

  componentWillMount(){
    /* no rejection handling here. tsk, tsk. */
    Api.load().then(data => this.setState({items: data.sort((a,b) => a.name < b.name ? -1: 1)}))
  }

  render(){
    let items = this.state.items;
    let searchString = this.state.searchString.toLowerCase().trim();

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
