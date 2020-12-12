import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const About = () => (
  <Layout>
    <SEO title="About Renzo Salvador | Front End Developer" />
    <TextContent>
      <h1>About me</h1>
      <img src={require("../images/renzo.jpg")} alt="renzo" />
      <p>
        I have been in the industry for more than 16 years. I started as a
        Graphic Designer and Web Developer (which I still am). In the last 10
        years, I have been integrating Digital Marketing and SEO techniques into
        any Web Development or WordPress Project entrusted to me. }
      </p>

      <p>
        Due to my experience as a Web Developer, I can debug any user
        experience, web performance, web speed, or server issues that could
        occur on a Website.
      </p>
      <TwoCol>
        <p>
          Over the years, I have worked for several Web Design, Marketing and
          E-Commerce agencies across Europe, which allowed me to get a grasp of
          priceless knowledge and experience that I am now very happy to offer
          to my clients. <br />
          <br />
          As a freelance Web Designer and Developer, I work with a wide range of
          clients in Europe, America and Asia, delivering Web Design projects
          for various markets of different kinds.
        </p>
        <p>
          I am a flexible freelancer and I can adapt my work to my client’s
          needs, offering a wide range of services that include: Graphic Design,
          Web Design, Front-End Development, Server Management, cPanel/WHM, DNS
          Management, SEO, WordPress Custom Themes, VPS Management, Bespoke Web
          Design and CMS Integration, and E-Commerce Websites.
        </p>
      </TwoCol>
    </TextContent>
  </Layout>
)

const TextContent = styled.div`
  max-width: 800px;
  h1 {
    text-align: center;
  }
  img {
    max-width: 150px;
    border-radius: 50%;
    filter: grayscale();
    margin: auto;
    display: block;
  }
`

const TwoCol = styled.div`
  display: grid;
  grid-template-columns: 2.2fr 1.6fr;
  grid-gap: 40px;
`

export default About
