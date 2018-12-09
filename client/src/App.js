import React, { Component } from 'react';
import store from './store'
import {Provider} from 'react-redux'
import { Route } from 'react-router-dom'
import EventsListContainer from './components/EventsListContainer'
import TicketsListContainer from './components/TicketsListContainer'
import TicketContainer from './components/TicketContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route path="/events" exact component={EventsListContainer} />
          <Route path="/events/:id/tickets" exact component={TicketsListContainer} />
          <Route path="/events/:event_id/tickets/:ticket_id" exact component={TicketContainer}/>
        </div>
      </Provider>
    );
  }
}

export default App;