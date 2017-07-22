import {
  SET_BUTTON_ACTIVE,
  SET_BUTTON_INACTIVE,
  COLLECT_FILTER
} from './action-const' 

export const setButtonActive = (id) => {
  return {
    type: SET_BUTTON_ACTIVE,
    id
  }
}

export const setButtonInactive = (id) => {
  return {
    type: SET_BUTTON_INACTIVE,
    id
  }
}

export const collectFilter = (filter) => {
  return {
    type: COLLECT_FILTER,
    filter
  }
}
