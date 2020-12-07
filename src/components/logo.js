import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Logo = () => (
  <LogoWrapper>
    <Link to="/">
      <img width="30" src={require("../images/renzo-logo.png")} />
    </Link>
  </LogoWrapper>
)

export default Logo

const LogoWrapper = styled.div`
  align-self: center;
  justify-self: center;
  img {
    align-self: center;
    justify-self: center;
  }
`
