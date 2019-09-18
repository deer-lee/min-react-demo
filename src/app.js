import React from 'react'
import Router from './components/Router'
import routes from './router'
import { TransitionGroup, CSSTransition } from "react-transition-group"
import './style/index.less'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount () {

  }

  render() {
    return (
      <div className="app-container" id="root">
        <div className='headerBar'>header</div>
        <TransitionGroup style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <CSSTransition timeout={300} classNames="fade">
            <Router routes={routes} />
          </CSSTransition>
        </TransitionGroup>
      </div>
    )
  }
}
