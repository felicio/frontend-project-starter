import React from 'react'
import styled from 'styled-components'

const variables = {
  primaryColor: '#E43B40',
}

const ButtonElement = styled.a `
  height: 60px;
  width: 223px;
  padding: 0 15px;
  line-height: 60px;
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  display: inline-block;
  text-align: left;
  background: ${variables.primaryColor} url('../../images/icons/button-arrow.svg') no-repeat right
    15px center;
`

const Button = ({ href, children }) =>
  <ButtonElement href={href} className="btn">
    {children}
  </ButtonElement>

export default Button
