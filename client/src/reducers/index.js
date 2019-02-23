import {combineReducers} from 'redux';
import events from './events';
import event from './event';
import ticket from './ticket';
import users from './users';
import signup from './signup';
import currentUser from './currentUser';
import risk from './risk';


export default combineReducers({
  events,
  event,
  ticket,
  users,
  signup,
  currentUser,
  risk
})