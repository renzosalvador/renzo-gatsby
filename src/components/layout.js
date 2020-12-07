/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import WebHeader from "./webheader"
import "./layout.css"
import styled from "styled-components"

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <WebHeader />
      <div>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()},
          <a href="https://www.renzosalvador.com">Renzo Salvador</a>
        </footer>
      </div>
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled.div`
  max-width: 1200px;
  margin: auto;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
