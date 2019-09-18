import React from 'react'
import './login.less'

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      password: ''
    }
	}
  async componentDidMount () {}
  handleToHome () {
    console.log(this.props)
    this.props.history.push('/home')
  }

  render() {
    return (
      <div className="container login" onClick={() => this.handleToHome()}>
        login
      </div>
    )
  }
}
