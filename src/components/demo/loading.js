import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './app.css'

/**
 * 本组件为欢迎页（首页）
 * 由于几乎没有交互逻辑
 * 因此可以不使用类的写法
 * 
 * 实际上，ES6 的类经由 Babel 转码后
 * 其实还是返回一个类似的函数
 */
class Loading extends Component {
  render() {
    return (
      <div className="mask">content</div>
    )
  }
}
let node = null
const loading = {
  show() {
    node = document.createElement('div')
    document.body.appendChild(node)
    ReactDOM.render(<Loading />, node)

  },
  hide() {
    ReactDOM.unmountComponentAtNode(node)
    document.body.removeChild(node)
  }
}
export default class Load extends Component {
  render() {
    return (
      <div>
        <div >
          app
        </div>
      </div>
    )
  }
  componentDidMount() {
    loading.show()
    setTimeout(() => {

      loading.hide()
    }, 2000)
  }
}
