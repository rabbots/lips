import React from 'react'
import { Provider } from 'react-redux'
import { reducer, initStore, startClock } from '../store'
import Clock from '../components/Clock'
import App from '../components/App'

export default class Counter extends React.Component {
  static getInitialProps ({ req }) {
    const isServer = !!req
    const store = initStore(reducer, null, isServer)
    store.dispatch({ type: 'CHAT', data: []})
    return  { initialState: store.getState(), isServer }
  }

  constructor (props) {
    super(props)
    this.store = initStore(reducer, props.initialState, props.isServer)
  }

  componentDidMount () {
    this.timer = this.store.dispatch(startClock())
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return (
      <Provider store={this.store}>
        <App/>
      </Provider>
    )
  }
}