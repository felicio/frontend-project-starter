import React, { Component } from 'react'

const Header = (props) => <h1>Frontend Starter Project - {props.name}</h1>

function Main(props) {
  console.log(props)
  return (
    <main>
      <p>
        {props.children}
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
        <Header name="React Blabla" />
        <Main>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam veritatis ipsa vel aut
        corporis minus commodi temporibus voluptatem ipsum dolore?
        </Main>
        <Footer />
      </div>
    )
  }
}
