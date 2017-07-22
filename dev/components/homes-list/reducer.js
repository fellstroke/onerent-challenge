import {
  ERR_LIST_DATA,
  REQUEST_LIST_DATA,
  RECEIVE_LIST_DATA,
} from './action-const'


const homesListDataInitState = {
  isFetching: false,
  isErr: false,
  errMsg: null,
  items: [] 
}

export default function homesListData(state = homesListDataInitState, action) {
  switch (action.type) {
    case REQUEST_LIST_DATA:
      return {
        ...state,
        isFetching: true,
        isErr: false
      }
      
    case ERR_LIST_DATA:
      return {
        ...state,
        isErr: true,
        errMsg: action.err
      }

    case RECEIVE_LIST_DATA:
      return {
        ...state,
        isFetching: false,
        isErr: false,
        items: action.listData
      }

    default:
      console.log(`Action, the reducer has defaulted.`)
      return state
  }
} 