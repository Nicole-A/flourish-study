import React, { Component } from 'react';
import {
  Switch, Route
}                           from 'react-router-dom';

import Home                 from './views/home';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />

        {
          /**
           * Add additional routes here
          */
        }

        <Route path="*" component={Home} />
      </Switch>
    );
  }
}

export default App;
