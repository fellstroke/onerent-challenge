import {
  SET_BUTTON_ACTIVE,
  SET_BUTTON_INACTIVE,
  COLLECT_FILTER,
  REMOVE_FILTER
} from './action-const' 

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

export const collectFilter = (index, id) => {
  return {
    type: COLLECT_FILTER,
    index,
    id
  }
}

export const removeFilter = (index, id) => {
  return {
    type: REMOVE_FILTER,
    index,
    id
  }
}
