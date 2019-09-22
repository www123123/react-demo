import React, { Component } from 'react'

class Action extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }
  render() {
    let { value } = this.state
    let { add } = this.props
    return (
      <div>
        <input value={value} onKeyUp={e => {
          e.keyCode === 13 && (
            add(value),
            this.setState({ value: '' })
          )
        }}
          onChange={e => {
            this.setState({
              value: e.target.value
            })
          }}
        />
        <button onClick={() => {
          add(value)
          this.setState({ value: '' })
        }}>add</button>

      </div>
    )
  }
}

class TodoList extends Component {

  render() {
    let { list = [] } = this.props
    return (
      <div>
        {list.map(item => <p key={Math.random()}>{item}</p>)}
      </div>
    )
  }
}

export default class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: ['a', 'b', 'c']
    }
  }
  render() {
    let { list } = this.state
    return (
      <div>
        <Action add={item => {
          this.setState({
            list: [...list, item]
          })
        }} />
        <TodoList list={list} />
      </div>
    )
  }
}
