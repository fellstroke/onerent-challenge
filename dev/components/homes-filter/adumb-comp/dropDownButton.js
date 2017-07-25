import React, { Component } from 'react'

import { HlLi, Sdiv, CheckButton, HfCard, HlDropDown } from '../../main-styles'

export default class dropDownButton extends Component {
  render() {
    const {
      setDropDownActive,
      setDropDownInactive,
    } = this.props

    const {
      index,
      name,
      dropDownActiveCheck,
      buttonActiveCheck,
      children
    } = this.props

    return (
      <CheckButton 
        active = { buttonActiveCheck ? true : false }
        onClick = {
          (dropDownActiveCheck)
            ? () => this.props.setDropDownActive(index)
            : () => this.props.setDropDownInactive(index)
        }
      >
        <h2>{name}</h2>
      </CheckButton>
    )
  }
}
