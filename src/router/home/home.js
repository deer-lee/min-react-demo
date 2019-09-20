import React from 'react';

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      password: ''
    }
	}
  async componentDidMount () {}
  handleToLogin () {
    this.props.history.push('/')
  }
  render() {
    return (
      <div className="container" onClick={() => this.handleToLogin()}>
        home
      </div>
    )
  }
}
