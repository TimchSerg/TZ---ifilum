import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Invoice from './components/Invoice';
import CreateInvoice from './components/CreateInvoice';
import NotFound from './components/NotFound';


class App extends Component {
  render() {
    return (
      <div className="container-fluid" style={{ padding: '15px, 15px' }}>
        <Switch>
          <Route exact path='/' component={Invoice}/>
          <Route path='/createInvoice' component={CreateInvoice}/>
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
