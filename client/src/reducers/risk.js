import { FETCH_RISK } from '../actions/risk'

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_RISK:
    return action.risk

    default:
    return state
  }
}