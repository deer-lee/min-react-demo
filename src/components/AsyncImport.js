import React, { Component } from 'react'

export default function asyncComponent (importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props)
      this.state = {comp: null}
    }

    componentDidMount() {
      /** 组件以default 抛出 取之也要以default的形式取 comp 为组件 **/
      importComponent().then(({default: comp}) => {
        this.setState({comp})
      })
    }

    componentWillUnmount() {
      this.setState = (state, callback) => {
        return;
      }
    }

    render() {
      const {comp: Comp} = this.state
      return Comp && <Comp {...this.props} />
      // return Comp ? <Comp {...this.props} /> : null
    }
  }
  return AsyncComponent
}
