import React from 'react'
import PropTypes from 'prop-types'

class TodoItem extends React.Component{
  gettStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }
  render(){
    const { id, title} = this.props.todo;
    return(
      <div style={this.gettStyle()}>
        <p>
        <input type='checkbox' onChange={this.props.markComplete.bind(this, id)}/>{' '}
        {title}
        <button onClick={this.props.deleteTodo.bind(this,id)} style={buttonStyle}>x</button>
        </p>
      </div>
    )
  };
}


// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

const buttonStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  cursor: 'pointer',
  float: 'right'
}
export default TodoItem;