import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <img src='./Assets/TodoIcon.jpeg' alt='TodoIcon'></img>
        <Link to={'/'}>
        <button >Todos</button>
        </Link>
        <Link to={'/settings'}>
        <button >Settings</button>
        </Link>
    </div>
  )
}

export default Navbar