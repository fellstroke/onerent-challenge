import {
  SET_BUTTON_ACTIVE,
  SET_BUTTON_INACTIVE,
  COLLECT_FILTER,
  REMOVE_FILTER,
  APPLY_FILTER
} from './action-const' 

import {
  RECEIVE_LIST_DATA
} from '../homes-list/action-const' 

export const setButtonActive = (index) => {
  return {
    type: SET_BUTTON_ACTIVE,
    index
  }
}

export const setButtonInactive = (index) => {
  return {
    type: SET_BUTTON_INACTIVE,
    index
  }
}

export const collectFilter = (index, name) => {
  return {
    type: COLLECT_FILTER,
    index,
    name
  }
}

export const removeFilter = (index, name) => {
  return {
    type: REMOVE_FILTER,
    index,
    name
  }
}
