import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Footer = () => (
  <FooterWrapper>
    <Link to="/"></Link>© {new Date().getFullYear()} | Created using ReactJS by
    <a href="https://www.renzosalvador.com"> Renzo Salvador</a>
  </FooterWrapper>
)

export default Footer

const FooterWrapper = styled.div`
  text-align: center;
  font-size: 15px;
  font-weight: 200;
  margin-top: 75px;
`
