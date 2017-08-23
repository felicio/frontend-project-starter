import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addTodo } from '../../data/todo/actions'


class App extends PureComponent {
  constructor() {
    super()

    this.state = {
      value: '',
    }
  }

  handleInputChange = event =>
    this.setState({ value: event.target.value })

  handleSubmit = event => {
    event.preventDefault()
    this.props.addTodo(this.state.value)
  }

  render() {
    const { todos } = this.props

    return (
      <div>
        <ul>
          {todos.map((todo, index) =>
            <li key={index}>{todo}</li>
          )}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.value} onChange={this.handleInputChange} />
          <button>add todo</button>
        </form>
      </div>
    )
  }
}

App.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.string).isRequired,
}

const mapStateToProps = state => ({
  todos: state,
})

const mapDispatchToProps = {
  addTodo,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
