import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const src = "https://img.icons8.com/color/48/000000/"

const Skills = () => (
  <Layout>
    <SEO title="Skills Renzo Salvador | Front End Developer" />
    <Title>Skills</Title>
    <SkillContainer>
      <Skill>
        <span>
          <img src={src + "html-5.png"} />
          HTML5
        </span>
      </Skill>
      <Skill>
        <span>
          <img src={src + "css3.png"} />
          CSS3
        </span>
      </Skill>

      <Skill>
        <span>
          <img src={src + "javascript.png"} />
          Javascript
        </span>
      </Skill>

      <Skill>
        <span>
          <img src={src + "npm.png"} />
          NPM
        </span>
      </Skill>

      <Skill>
        <span>
          <img src={src + "php.png"} />
          PHP
        </span>
      </Skill>

      <Skill>
        <span>
          <img src={src + "wordpress.png"} />
          Wordpress
        </span>
      </Skill>

      <Skill>
        <span>
          <img src={src + "bootstrap.png"} />
          Boostrap
        </span>
      </Skill>

      <Skill>
        <span>
          <img src={src + "shopify.png"} />
          Shopify
        </span>
      </Skill>

      <Skill>
        <span>
          <img src={src + "vue-js.png"} />
          VueJS
        </span>
      </Skill>
    </SkillContainer>
  </Layout>
)

const Title = styled.h1`
  text-align: center;
  display: block;
  margin: 25px 0;
`

const SkillContainer = styled.div`
  max-width: 800px;
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 40px;
  transition: ease 0.5;
  img {
    max-width: 25px;
    display: block;
    margin: auto;
  }
`

const Skill = styled.div`
  display: grid;
  width: 200px;
  height: 200px;
  background-color: #ffffff;
  border: 1.5px solid #a5cd39;
  border-radius: 50%;
  font-weight: 800;
  color: #a5cd39;

  animation: fadeInFromTop ease 0.5;
  position: relative;
  span {
    align-self: center;
    justify-self: center;
  }
  &:hover {
    background-color: #a5cd39;
    color: #fff;
  }

  @keyframes fadeInFromTop {
    0% {
      opacity: 0;
      top: -30px;
    }
    100% {
      opacity: 1;
      top: 0px;
    }
  }
`

export default Skills
