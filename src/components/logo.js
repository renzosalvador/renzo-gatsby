import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Logo = () => (
  <LogoWrapper>
    <img width="30" src={require("../images/renzo-mono.png")} />
  </LogoWrapper>
)

export default Logo

const LogoWrapper = styled.div`
  max-width: 80px;
  margin: auto;
  height: 80px;
  border-radius: 50%;
  text-align: center;
  display: grid;
  margin-bottom: 15px;
  img {
    align-self: center;
    justify-self: center;
  }
`
