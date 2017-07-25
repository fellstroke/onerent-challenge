import styled, { css } from 'styled-components'
const s = styled

// display
// margin
// border
// padding
// width
// height
// text
// color

// ==>>> Base Color Values <<<===
const OneRentPurple = '#acafe3'
const OneRentSkyBlue = '#7bcac7'
const OneRentDarkBlue = '#376f6d'

// ==>>> Base Spacing Values <<<===
const SPad = '12px'
const MPad = '24px'
const LPad = '36px'

// ===>>> Base Border Values <<<===
const SBorder = '1px'
const MBorder = '3px'
const BorderRadius = '5px'

// ==>>> Break Points <<<===
const lg = '768px'
const md = '540px'
const sm = '480px'

// ===>>> Base Styled Components <<<===
export const Ssection = s.section`
	padding: ${MPad};
	background-color: ${OneRentSkyBlue};
`

export const Sheader = s.header`
  background: ${OneRentSkyBlue};
`

export const Sdiv = s.div`
	padding: ${SPad};
	text-align: center;
`

export const Card = s.div`
	overflow: auto;
	margin: 0 auto;
	padding: 0;

	@media (max-width: ${md}) {
		width: auto;
	}
`

export const Sli = s.li`
	overflow: hidden;
	list-style: none;
	border: white solid;
	border-width: 0 0 ${MBorder} 0;
	padding: ${SPad};
`

export const CheckButton = s.button`
	display: inline-block;
	overflow: auto;
	margin: 5px;
	border: ${SBorder} solid white;
	border-radius: ${BorderRadius};
	padding: ${SPad};
	text-align: left;
	background-color: ${props => props.active ? OneRentDarkBlue : OneRentSkyBlue };
	color: white;

	:focus {
		outline: none
	}
`

// ===>>> homes-list Styled Components <<<===
export const HlCard = Card.extend`
	border: white solid;
	border-width: 0 ${MBorder};
	border-radius: 0 0 ${BorderRadius} ${BorderRadius};
	width: ${sm};
	height: ${md};
	background: ${OneRentPurple};

	li:nth-child(1) {
		border-top: white solid
	}
`

export const Hlp = s.p.attrs({
	float: props => props.float || 'none'
})`
	display: inline-block;
	float: ${props => props.float};
	margin: 0;
`

// ===>>> homes-filter Styled Components <<<===
export const HfCard = Card.extend`
	border: white solid;
  border-width: ${MBorder} ${MBorder} 0 ${MBorder};
	border-radius: ${BorderRadius} ${BorderRadius} 0 0;
	width: ${sm};
	background: ${OneRentPurple};
`

export const HlDropDown = s.div`
	display: ${props => props.active ? 'inherit' : 'none' };
	position: absolute;
	overflow: auto;
	border: ${MBorder} solid ${OneRentDarkBlue};
	border-radius: ${BorderRadius};
	max-width: 200px;
	max-height: 200px;
	text-align: left;
	color: black;
	background: white;

	li:last-child {
		border-bottom: 0; 
	}
`

export const HlLi = Sli.extend`
	border: solid ${OneRentDarkBlue};
	border-width: 0 0 ${SBorder} 0;
	background-color: ${props => props.active ? OneRentSkyBlue : 'inherit' };
	color: ${props => props.active ? 'white' : 'inherit' };
`