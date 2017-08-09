import React, { Component } from 'react'

const Header = () => <h1>Frontend Starter Project - React</h1>

function Main() {
  return (
    <main>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam veritatis ipsa vel aut
        corporis minus commodi temporibus voluptatem ipsum dolore?
      </p>
    </main>
  )
}

class Footer extends Component {
  render() {
    return <footer>Copyright &copy; STRV Academy 2017</footer>
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}
