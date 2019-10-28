import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import Delivery from '../express/delivery'

class Dashboard extends Component {
  render() {
    
    // console.log(this.props);
    const { projects, auth } = this.props;
    if(!auth.uid) return <Redirect to='/signin'/>

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <Delivery />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(Dashboard)