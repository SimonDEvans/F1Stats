import React, { Component } from 'react'
import './Base.css'
import Navigation from '../../components/Navigation/Navigation'
import { Link } from 'react-router'

class Base extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Link to='/DriverStandings'><div>Driver standings</div></Link>
      </div>
    )
  }
}

export default Base