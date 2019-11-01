import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import History from './components/express/history'
import CreateProject from './components/projects/CreateProject'
import Delivery from './components/express/delivery'
import DeliveryDetails from './components/express/DeliveryDetail'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/'component={Dashboard} />
            <Route path='/deliveryProject/:id' component={DeliveryDetails} />
            <Route path='/history' component={History} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            {/* <Route path='/create' component={CreateProject} /> */}
            <Route path='/Placeorder' component={Delivery} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;