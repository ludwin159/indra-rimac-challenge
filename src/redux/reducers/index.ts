import { combineReducers } from 'redux'

import User from './user.reducer'
import Amounts from './amounts.reducer'


export default combineReducers({
  User,
  Amounts
})