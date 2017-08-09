import React from 'react'

import TodoList from './TodoList'
import items from './data'

class Todo extends React.Component {
  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     items,
  //     text: '',
  //   }
  // }

  // vs.

  state = {
    items,
    text: '',
  }

  handleSubmit = event => {
    event.preventDefault()

    const item = {
      text: this.state.text,
      id: new Date(),
    }

    // this.setState((prevState) => ({
    //   items: prevState.items.concat(item),
    //   text: '',
    // }))
    
    this.setState({
      items: this.state.items.concat(item),
      text: '',
    })

    // this.setState({
    //   items: [
    //     ...this.state.items,
    //     item,
    //   ],
    //   text: '',
    // })
  }

  handleChange = (event) => {
    this.setState({ text: event.target.value})
  }

  render() {
    // const items = this.state.items
    // const text = this.state.text

    // vs.

    const { items, text } = this.state

    return (
      <div>
        <h1>TODO APP</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            name="todo"
            value={text}
            placeholder={this.props.placeholder}
          />
          <button type="submit">Post Todo</button>
          <TodoList todos={items} />
        </form>
      </div>
    )
  }
}

Todo.defaultProps = {
  placeholder: "Placeholder"
}

export default Todo
