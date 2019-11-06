import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'

import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import History from './components/express/history'

import Delivery from './components/express/delivery'
import DeliveryDetails from './components/express/DeliveryDetail'
import firstpage from './components/dashboard/Firstpage'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/'component={Delivery} />
            <Route path='/deliveryProject/:id' component={DeliveryDetails} />
            <Route path='/history' component={History} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/firstpage' component={firstpage} />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;