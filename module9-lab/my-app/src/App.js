import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from './Home';
import { Services } from './Services';
import { Gallery } from './Gallery';
import { Bookings } from './Bookings';
import { Contact } from './Contact';
import { NotFound } from './NotFound';
import { ChezNous } from './ChezNous';

import { NavBar } from './NavBar';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/services" component={Services} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/bookings" component={Bookings} />
          <Route path="/contact" component={Contact} />
          <Route path="/chezNous" component={ChezNous} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div >
  );
}

export default App;
