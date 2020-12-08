import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const BigPhone = () => (
  <BigPhoneWrapper>
    <a href="tel:00447517041955">
      <img src="https://img.icons8.com/fluent-systems-filled/24/ffffff/phone-bubble.png" />
      07517041955
    </a>
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
    transition: all 0.2s;
    border-radius: 15px;
    &:hover {
      opacity: 0.7;
      transform: translateY(3px);
      transform: translateX(2px);
    }
    img {
      display: inline-block;
      margin-right: 5px;
      top: 5px;
      position: relative;
    }
  }
`
