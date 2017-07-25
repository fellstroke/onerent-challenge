import {
  COLLECT_FILTER,
  REMOVE_FILTER,
} from '../action-const' 

const filterDataInitState = []

export default function filterData(state = filterDataInitState, action) {
  
  switch (action.type) {
    case COLLECT_FILTER:
      return [
        ...state.slice(0, action.index),
        action.name,
        ...state.slice(action.index)
      ]
    
    case REMOVE_FILTER:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ]

    default:
      return state
  }
}
