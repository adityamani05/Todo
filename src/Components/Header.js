import React from 'react';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
    </header>
  )
}

const headerStyle = {
  background: '#00b300',
  color: '#fff',
  textAlign: 'center',
  padding: '5px'
}

export default Header;