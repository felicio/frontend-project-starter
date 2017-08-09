import React from 'react'
import PropTypes from 'prop-types'

const TodoList = ({ todos }) => (
  <ul>
    {todos.map(item =>
      <TodoListItem
        key={item.id}
        text={item.text}
      />
    )}
  </ul>
)

const TodoListItem = ({ text }) => <li>{text}</li>

TodoListItem.propTypes = {
  text: PropTypes.string.isRequired
}

TodoList.defaultProps = {
  todos: [],
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
}

export default TodoList