import React, { Component } from 'react'

import Button from './button'
import DropDownButton from './dropDownButton'
import { HlLi, Sdiv, CheckButton, HfCard, HlDropDown } from '../../main-styles'

export default class HomesFilter extends Component {

  render() {
    const {
      setButtonActive,
      setButtonInactive,
      setDropDownActive,
      setDropDownInactive
    } = this.props

    const {
      isAppDDActive,
      isAppButtonActive,
      isInFeatDDActive,
      isInFeatButtonActive,
      isPetButtonActive,
    } = this.props

    return (
      <HfCard>
        <Sdiv>
          <Button
            setButtonActive={setButtonActive}
            setButtonInactive={setButtonInactive}
            index={0}
            name={'petsAllowed'}
            buttonActiveCheck={isPetButtonActive}
          ></Button>

          <DropDownButton
            setDropDownActive={setDropDownActive}
            setDropDownInactive={setDropDownInactive}
            index={1}
            name={'appliances'}
            dropDownActiveCheck={isAppDDActive}
            buttonActiveCheck={isAppButtonActive}
          >
          </DropDownButton>

          <DropDownButton
            setDropDownActive={setDropDownActive}
            setDropDownInactive={setDropDownInactive}
            index={2}
            name={'interiorFeatures'}
            dropDownActiveCheck={isInFeatDDActive}
            buttonActiveCheck={isInFeatButtonActive}
          >
          </DropDownButton>
        </Sdiv>
      </HfCard>
    )
  }
}

/*Active button must be a different color

Time to put the drop down animation. 
Requirements:
1.) When button is clicked, display dropdown
2.) When new button is clicked, minimize dropdown of previous button, the  dispaly new drop down
*/

// const makeButton = (index, name, buttonActiveCheck, innerMenu) => {
//   return (
//     <CheckButton 
//       active={ buttonActiveCheck ? true : false }
//       onClic ={
//         (buttonActiveCheck)
//           ? () => this.props.setButtonInactive(index, name)
//           : () => this.props.setButtonActive(index, name)
//       }
//     >
//       <h2>{name}</h2>
//       <HlDropDown active = { buttonActiveCheck ? true : false }>
//         <HlLi>Hello</HlLi>
//         <HlLi>Hello</HlLi>
//         <HlLi>Hello</HlLi>
//       </HlDropDown>
//     </CheckButton>
//   )
// }