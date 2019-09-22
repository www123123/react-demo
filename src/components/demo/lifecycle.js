import React, { Component } from 'react'

class Son extends Component {
  render() {
    return (
      <div>
        {this.props.name + 'son'}
        {this.state.value && <GrandSon name={this.props.name} />}
      </div>
    )
  }
  componentDidMount() {
    console.log('son mount')
  }
  componentWillUpdate() {
    console.log('son update')
  }
  componentWillUnmount() {
    console.log('son unmount')
  }
}

class GrandSon extends Component {
  render() {
    return (
      <div>
        {this.props.name + 'grandson'}
      </div>
    )
  }
  componentDidMount() {
    console.log('grandson mount')
  }
  componentWillUpdate() {
    console.log('grandson update')
  }
  componentWillUnmount() {
    console.log('grandson unmount')
  }
}

export default class Welcome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 'react'
    }

  }
  render() {
    return (
      <div>
        <div className="jumbotron">
          {this.state.value}
          {this.state.value && <Son name={this.state.value} />}
        </div>
      </div>
    )
  }
  componentDidMount() {
    window.app = this
    console.log('app mount')
  }
  componentWillUpdate() {
    console.log('app update')
  }
  componentWillUnmount() {
    console.log('app unmount')
  }
}
