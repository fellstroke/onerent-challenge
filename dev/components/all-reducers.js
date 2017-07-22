import { combineReducers } from 'redux'

import homesListData from './homes-list/reducer'
import buttonData from './homes-filter/reducers'

//This is the main reducer for the whole app
//This is where all the reducers of all the
//components are centralized
const allReducers = combineReducers({
  homesListData: homesListData,
  buttonData: buttonData
})

export default allReducers