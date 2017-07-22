import React, { Component } from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Base from './components/Base/Base'
import DriverStandings from './components/DriverStandings/DriverStandings'
import NotFound from './components/NotFound/NotFound'
import './css/App.css'

const Container = (props) => props.children

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router history={hashHistory}>
          <Route path='/' component={Container}>
            <IndexRoute component={Base} />
            <Route path='DriverStandings' component={DriverStandings} />
            <Route path='*' component={NotFound} />
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;