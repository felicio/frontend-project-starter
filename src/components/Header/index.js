import React from 'react'
import styled from 'styled-components'

import Nav from '../Nav'
import Button from '../Button'

import { HeaderElement, MainTitle, SubTitle } from './styles'

const Header = () =>
  <HeaderElement>
    <Nav />
    <MainTitle>New STRV M6</MainTitle>
    <SubTitle>Simple Designy Car for Designers</SubTitle>

    <Button href="#comments">Leave a Comment</Button>
    <p className="claim">New STRV</p>
  </HeaderElement>

export default Header
