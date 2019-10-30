import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import {signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/placeorder'>Place order</NavLink></li>
        {/* <li><NavLink to='/create'>New Project</NavLink></li> */}
        <li><NavLink to='/history'>History</NavLink></li>
        <li><a onClick={props.signOut}>Log Out</a></li>
      </ul>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)