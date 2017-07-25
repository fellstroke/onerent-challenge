import { combineReducers } from 'redux'

import homesListData from './homes-list/reducers'
import buttonData from './homes-filter/reducers'
import filterData from './homes-filter/reducers/filterReducer'

//This is the main reducer for the whole app
//This is where all the reducers of all the
//components are centralized
const allReducers = combineReducers({
  homesListData: homesListData,
  buttonData: buttonData,
  filterData: filterData
})

export default allReducers