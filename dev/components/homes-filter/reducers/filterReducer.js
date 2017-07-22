import {
  COLLECT_FILTER,
  USE_FILTER
} from '../action-const' 

const buttonDataInitState = {
  activeFilters: []
}

export default function filterData(state = buttonDataInitState, action) {
  switch (action.type) {
    case COLLECT_FILTER:
      return {
      }

    case USE_FILTER:
      return {
      }

    default:
      return state
  }
}
