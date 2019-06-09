import React from 'react'
import ReactDOM from 'react-dom'

import { HashRouter as Router} from 'react-router-dom'

import 'antd/dist/antd.css'

import MovieApp from './components/movie-app'


class App extends React.Component {
  render() {
    return (
      <Router>
        <MovieApp />
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))