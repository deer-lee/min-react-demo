import React from 'react'
import './login.less'

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      aaa: 1
    }
	}
  async componentDidMount () {}
  handleToHome () {
    console.log(this.props)
    this.props.history.push('/home')
  }

  render() {
    let { aaa } = this.state
    return (
      <div className="container login" onClick={() => this.handleToHome()}>
        login
        {aaa ? '1' : 2}
      </div>
    )
  }
}
