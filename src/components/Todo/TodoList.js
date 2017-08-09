import React from 'react'

const TodoList = ({ todos }) => (
  <ul>
    {todos.map(val => <li key={val.id}>{val.text}</li>)}
  </ul>
)

export default TodoList