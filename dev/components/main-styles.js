import styled, { css } from 'styled-components'
const s = styled

// ==>>> Base Spacing Values <<<===
const Spad = '12px'
const Mpad = '24px'
const Lpad = '36px'

// ==>>> Base Color Values <<<===
const OneRentPurple = '#acafe3'
const OneRentSkyBlue = '#7bcac7'

// ==>>> Break Points <<<===
const lg = '768px'
const md = '540px'
const sm = '480px'

// ===>>> Base Styled Components <<<===
export const Ssection = s.section`
	padding: ${Mpad};
	background-color: ${OneRentSkyBlue};
`

export const Sheader = s.header`
  background: ${OneRentSkyBlue};
`

export const Sdiv = s.div`
	text-align: center;
  padding: ${Spad};
`

export const Card = s.div`
	overflow: auto;
	padding: 0;
	margin: 0 auto;

	@media (max-width: ${md}) {
		width: auto;
	}

	li:nth-child(1) {
		border-top: white solid
	}
`

export const Sli = s.li`
	padding: ${Spad};
	list-style: none;
	border: white solid;
	border-width: 0 0 3px 0;
`

export const CheckButton = s.button`
	display: inline-block;
	background-color: ${OneRentSkyBlue};
	color: white;
	overflow: auto;
	border: 1px solid white;
	border-radius: 5px;
	padding: 15px;
	margin: 5px;
`

// ===>>> homes-list Styled Components <<<===
export const HlCard = Card.extend`
	background: ${OneRentPurple};
	border: white solid;
	border-width: 0 3px;
	border-radius: 0 0 5px 5px;
	height: ${md};
	width: ${sm};
`

export const Hlp = s.p.attrs({
	float: props => props.float || 'none'
})`
	display: inline-block;
	margin: 0;
	float: ${props => props.float};
`

// ===>>> homes-filter Styled Components <<<===
export const HfCard = Card.extend`
	background: ${OneRentPurple};
  border: white solid;
  border-width: 3px 3px 0 3px;
	border-radius: 5px 5px 0 0;
	width: ${sm};
`