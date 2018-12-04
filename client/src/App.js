import React, { Component } from 'react';
import store from './store'
import {Provider} from 'react-redux'
import { Route } from 'react-router-dom'
import EventsListContainer from './components/EventsListContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route path="/events" exact component={EventsListContainer} />
          {/* <Route path="/events/:id" exact component={EventDetailsContainer} /> */}
        </div>
      </Provider>
    );
  }
}

export default App;