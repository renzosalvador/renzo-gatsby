/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import WebHeader from "./webheader"
import Footer from "./footer"
import "./layout.css"
import styled from "styled-components"

const Layout = ({ children }) => (
  <LayoutWrapper>
    <WebHeader />
    <main className="main-content">{children}</main>
    <Footer />
  </LayoutWrapper>
)

export default Layout

const LayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0px 0px;

  animation: fadeIn ease 0.8s;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
