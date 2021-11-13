import React, { Component } from 'react';
import { CardList } from './components/card-list';
import { SearchBox } from './components/search-box';
import './App.css'

class App extends Component{
  constructor(){
  super();
  this.state={
    monsters:[],
    searchField:""
  }
}

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json())
  .then(user=>this.setState({monsters:user}));
}

render(){
  const {monsters,searchField} =this.state;
  const filteredList=monsters.filter(monster=>
    monster.name.toLowerCase().includes(searchField.toLowerCase()));

  return (
    <div className="App">
    <h1>Monsters Collection</h1>
    <SearchBox placeholder="Search the Monster" 
    handleChange={e=>this.setState({searchField:e.target.value})}/>
    <CardList monsters={filteredList} />
  </div>
  
  );
}
}

export default App;