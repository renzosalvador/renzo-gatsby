import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Navigation = () => (
  <>
    <NavigationGroup>
      <Link to="/about">About me</Link>
      <Link to="/">Skills</Link>
      <Link to="#">Projects</Link>
      <Link to="#">Contact</Link>
      {/* <Link to="#">
        <img width="30" src={require("../images/linkedin.png")} />
      </Link> */}
    </NavigationGroup>
  </>
)

export default Navigation

const NavigationGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  transition: 0.5s all;
  a {
    background-color: #fff;
    place-self: center;
    display: grid;
    padding: 15px 18px;
    border-radius: 5%;
    transition: 0.2s all;
    text-transform: uppercase;
    font-weight: 800;
    &:hover {
      color: #a5cd39;
    }
    img {
      align-self: center;
    }
  }
`
