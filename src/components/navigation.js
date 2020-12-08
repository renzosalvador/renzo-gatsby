import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Navigation = () => (
  <>
    <NavigationGroup>
      <Link to="/">Start</Link>
      <Link to="/about">About me</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/">Projects</Link>
      <Link to="/contact">Contact</Link>
      <Link to="https://www.linkedin.com/in/renzosalvador/">
        <img width="30" src={require("../images/linkedin.png")} />
      </Link>
    </NavigationGroup>
  </>
)

export default Navigation

const NavigationGroup = styled.div`
  padding: 15px 0;
  display: grid;
  grid-template-columns: repeat(6, auto);
  transition: 0.5s all;
  a {
    align-self: right;
    background-color: #fff;
    place-self: center;
    padding: 15px 18px;
    border-radius: 5%;
    transition: 0.2s all;
    text-transform: uppercase;
    font-weight: 800;
    transition: all 0.2s;
    &:hover {
      color: #a5cd39;
      opacity: 0.7;
      transform: translateY(3px);
    }
    img {
      max-width: 20px;
    }
  }
`
