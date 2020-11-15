import React from 'react'
import './App.css';
import Todo from './Components/todo'
import Header from './Components/Header.js'
import AddTodo from './Components/AddTodo'

class App extends React.Component{ 
  render(){
    return(
      <div className="App">
        <div className="container">
          <Header/>
          <Todo/>
          <AddTodo/>
        </div>
      </div>
    )
  };
}

export default App;
