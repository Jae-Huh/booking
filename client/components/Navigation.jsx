import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import Login from './Login'
import Logout from './Logout'

const Navigation = props => {
  return (
    <div>
      {!props.fullName && <Login />}
      {props.fullName && <Logout />}
      <Link to="/calendar">Bookings</Link>
      {props.admin &&
      <Link to="/admin">Admin</Link>
      }
      <Link to="/book">Book</Link>
      <Link to="/schedule">Schedule</Link>
      <Link to="/profile">profile</Link>
    </div>
  )
}

function mapStateToProps (state) {
  return state.user
}

export default connect(mapStateToProps)(Navigation)
