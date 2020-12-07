import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const IndexPage = () => (
  <Layout>
    <SEO title="Renzo Salvador | Front End Developer" />
    <HeroWrapper>
      <Image>
        <img src={require("../images/react-developer.png")} />
      </Image>
      <Content>
        <h1>Front-End Developer</h1>
        <p>
          Hi there, my name is Renzo Salvador, I am an experienced Full Stack
          Front End Developer based in West Sussex, England.
        </p>
      </Content>
    </HeroWrapper>
  </Layout>
)
const HeroWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: ". .";
  padding: 50px 0;
  max-width: 900px;
  margin: auto;
`

const Image = styled.div`
  img {
    max-width: 100%;
  }
`

const Content = styled.div`
  align-self: center;
  h1 {
    font-weight: 800;
    font-size: 42px;
  }
`

export default IndexPage
