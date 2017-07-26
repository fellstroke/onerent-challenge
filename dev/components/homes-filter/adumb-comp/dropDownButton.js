import React, { Component } from 'react'

import { HlLi, Sdiv, CheckButton, HfCard, HlDropDown } from '../../main-styles'

export default class DropDownButton extends Component {
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
      items,
      children
    } = this.props

    return (
      <CheckButton 
        active = { buttonActiveCheck ? true : false }
        onClick = {
          (dropDownActiveCheck)
            ? () => this.props.setDropDownInactive(index)
            : () => this.props.setDropDownActive(index)
        }
      >
        <h2>{name}</h2>
        <HlDropDown active = { dropDownActiveCheck ? true : false }>
          {
            items.map((item) => {
              return <HlLi key={item}>{item}</HlLi>
            })
          }
          {/* <HlLi>Hello</HlLi>
          <HlLi>Hello</HlLi>
          <HlLi>Hello</HlLi> */}
        </HlDropDown>
      </CheckButton>
    )
  }
}
