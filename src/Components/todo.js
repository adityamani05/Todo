import React from 'react'
import TodoItem from './TodoItem.js'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../constants'

class Todo extends React.Component{
  markComplete = (id) => {
    this.props.markComplete(id);
  } 

  deleteTodo = (id) => {
    this.props.deleteTodo(id);
  }
  
  render(){
    return this.props.todos.map((todo)=>(
      <TodoItem key={todo.id} todo={todo} 
      markComplete={this.markComplete}
      deleteTodo={this.deleteTodo}/>
    ));
  };
}

// Proptype
Todo.propTypes = {
  todos: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
  return {
    todos: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (id) => {dispatch({type: actions.REMOVE_TODO, id:id } )},
    markComplete: (id) => {dispatch({type: actions.UPDATE_TODO, id:id} )}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Todo);