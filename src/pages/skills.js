import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const Skills = () => (
  <Layout>
    <SEO title="Skills Renzo Salvador | Front End Developer" />
    <Title>Skills</Title>
    <SkillContainer>
      <Skill>
        <span>HTML5</span>
      </Skill>
      <Skill>
        <span>CSS3</span>
      </Skill>

      <Skill>
        <span>Javascript</span>
      </Skill>

      <Skill>
        <span>jQuery</span>
      </Skill>

      <Skill>
        <span>PHP</span>
      </Skill>

      <Skill>{/* <span>Wordpress</span> */}</Skill>

      <Skill>
        <span>Boostrap</span>
      </Skill>

      <Skill>
        <span>Shopify</span>
      </Skill>

      <Skill>
        <span>VueJS</span>
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
  transition: ease 0.5;
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
