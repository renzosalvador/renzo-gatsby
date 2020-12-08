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
          Hi there, my name is Renzo Salvador, I am an experienced{" "}
          <strong>Full Stack Front End Developer </strong> based in West Sussex.
        </p>
        <ListIcons>
          <img
            src="https://img.icons8.com/color/48/000000/html-5.png"
            alt="HTML5"
          />
          <img
            src="https://img.icons8.com/color/64/000000/css3.png"
            alt="CSS"
          />
          <img
            src="https://img.icons8.com/color/48/000000/javascript.png"
            alt="Javascript"
          />
          <img
            src="https://img.icons8.com/color/48/000000/sass.png"
            alt="SASS"
          />
          <img
            src="https://img.icons8.com/color/48/000000/wordpress.png"
            alt="WordPress"
          />
          <img
            src="https://img.icons8.com/plasticine/100/000000/react.png"
            alt="ReactJS"
          />
          <img
            src="https://img.icons8.com/color/48/000000/vue-js.png"
            alt="VueJS"
          />
          <img src="https://img.icons8.com/color/48/000000/npm.png" alt="" />
          <img
            src="https://img.icons8.com/color/48/000000/bootstrap.png"
            alt="Bootstrap"
          />
        </ListIcons>
        <Button>Let's Talk</Button>
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
  max-width: 960px;
  margin: auto;
`

const Image = styled.div`
  img {
    max-width: 100%;
    animation: fadeInFromLeft ease 0.5s;
    position: relative;
  }

  @keyframes fadeInFromLeft {
    0% {
      opacity: 0;
      left: -30px;
    }
    100% {
      opacity: 1;
      left: 0px;
    }
  }
`

const Content = styled.div`
  align-self: center;
  p {
    font-size: 20px;
  }
`
const ListIcons = styled.div`
  display: grid;
  grid-template-columns: repeat(10, auto);
  padding-top: 10px;
  img {
    max-width: 30px;
  }
`

const Button = styled.button`
  display: block;
  background-color: 
  color: #ffffff;
`

export default IndexPage
