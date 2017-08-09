import React from 'react'

class Clocks extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      date: new Date(),
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => this.updateTime(), 1000)
  }

  updateTime() {
    this.setState({ date: new Date() })
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  handleClick() {
    alert("Hello")
  }

  render() {
    return (
      <div>
        Current time is: {this.state.date.toLocaleTimeString()}
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    )
  }
}

export default Clocks
