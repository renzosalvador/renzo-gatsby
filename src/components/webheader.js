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
  display: grid;
  grid-template-columns: repeat(3, auto);
`
