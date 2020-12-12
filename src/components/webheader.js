import React from "react"
import styled from "styled-components"
import Logo from "./logo"
import Navigation from "./navigation"
import BigPhone from "./bigphone"

const Webheader = () => (
  <HeaderWrapper>
    <Logo />
    <Navigation />
    <BigPhone />
  </HeaderWrapper>
)

export default Webheader

const HeaderWrapper = styled.div`
  max-width: 1300px;
  margin: auto;
  display: grid;
  padding-top: 15px;
  grid-template-columns: repeat(3, auto);
  grid-gap: 25px;
  @media (max-width: 760px) {
    grid-template-columns: repeat(1, auto);
  }
`
