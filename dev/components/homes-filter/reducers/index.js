import { SET_BUTTON_ACTIVE, SET_BUTTON_INACTIVE } from '../action-const' 

const buttonDataInitState = {
  buttons: [
    {id: 'Pets', isButtonActive: false},
    {id: 'Parking',isButtonActive: false}
  ]
}

export default function buttonData(state = buttonDataInitState, action) {
  switch (action.type) {
    case SET_BUTTON_ACTIVE:
      return {
        ...state,
        buttons: {
          ...state.buttons,
          [action.index]: {
            ...state.buttons[action.index],
            isButtonActive: true
          }
        }
      }

    case SET_BUTTON_INACTIVE:
      return {
        ...state,
        buttons: {
          ...state.buttons,
          [action.index]: {
            ...state.buttons[action.index],
            isButtonActive: false
          }
        }
      }

    default:
      console.log(`Action, the reducer has defaulted.`)
      return state
  }
}
