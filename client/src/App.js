import React, { Component } from 'react';
import store from './store'
import {Provider} from 'react-redux'
import { Route } from 'react-router-dom'
import EventsListContainer from './components/events/EventsListContainer'
import TicketsListContainer from './components/tickets/TicketsListContainer'
import TicketContainer from './components/tickets/TicketContainer';
import HomePage from './components/homepage/HomePage';
import SignupContainer from './components/homepage/SignupContainer';
import LoginContainer from './components/homepage/LoginContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route path="/" exact component={HomePage} />
          {/* <Route path="/users" exact component={SignupContainer} /> */}
          <Route path="/logins" exact component={LoginContainer} />
          <Route path="/events" exact component={EventsListContainer} />
          <Route path="/events/:id/tickets" exact component={TicketsListContainer} />
          <Route path="/events/:event_id/tickets/:ticket_id" exact component={TicketContainer}/>
        </div>
      </Provider>
    );
  }
}

export default App;