import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const DeliveryDetails = (props) => {
  const { deliveryProject } = props;
  if (deliveryProject) {
    return(
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">History Name: - {deliveryProject.name}</span>
          <h5>Origin</h5>
          <p className="grey-text">Name: {deliveryProject.name}</p>
          <p className="grey-text">PhoneNumber: {deliveryProject.PhoneNumber}</p>
          <p className="grey-text">Other: {deliveryProject.other}</p>
          <br/>
          <h5>Destination</h5>
          <p className="grey-text">{deliveryProject.destinationName}</p>
          <p className="grey-text">{deliveryProject.destinationPhoneNumber}</p>
          <p className="grey-text">{deliveryProject.destinationOther}</p>
        </div>
        <div className="card-action ">
          <div>History of {deliveryProject.name} </div>
          Time: {deliveryProject.createdAt.toDate().toString()}
        </div>
      </div>
    </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading deliveryProject...</p>
      </div>
  )
  }

}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  const id = ownProps.match.params.id;
  const delivery = state.firestore.data.delivery;
  const deliveryProject = delivery ? delivery[id] : null
  return {
    deliveryProject: deliveryProject
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'delivery' }
  ])
)(DeliveryDetails)