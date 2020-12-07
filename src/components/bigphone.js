import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const BigPhone = () => (
  <BigPhoneWrapper>
    <a href="tel:00447517041955">+44 7517041955</a>
  </BigPhoneWrapper>
)
export default BigPhone

const BigPhoneWrapper = styled.div`
  display: grid;
  a {
    background-color: #a5cd39;
    color: white;
    font-weight: 800;
    padding: 12px 16px;
    align-self: center;
    justify-self: center;
  }
`
