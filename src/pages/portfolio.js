import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
//import { Link } from "gatsby"

const src = "https://img.icons8.com/color/48/000000/"
const Portfolio = () => (
  <Layout>
    <SEO title="Portfolio | Front End Developer" />
    <Title>Portfolio</Title>
    <ProjectsWrapper>
      <Project>
        <PortfolioImage>
          <a href="https://addsfinder.com" target="blank">
            <img
              src="https://cdn-almnh.nitrocdn.com/uqTEfAvxMivXUDCcPRlVTYTQnLgmRpbR/assets/static/optimized/rev-1ef56e8/wp-content/uploads/2020/10/addsfiner.jpg"
              alt="Portfolio"
            />
          </a>
        </PortfolioImage>
        Video Ad Library
        <TagsWrapper>
          <img src={src + "html-5"} />
          <img src={src + "php"} />
          <img src={src + "css3"} />
          <img src={src + "wordpress"} />
        </TagsWrapper>
      </Project>

      <Project>
        <PortfolioImage>
          <a href="https://huertosanantonio.com" target="blank">
            <img
              src="https://cdn-almnh.nitrocdn.com/uqTEfAvxMivXUDCcPRlVTYTQnLgmRpbR/assets/static/optimized/rev-1ef56e8/wp-content/uploads/2020/07/port_huerto_sa-1.jpg"
              alt="Portfolio"
            />
          </a>
        </PortfolioImage>
        Huerto San Antonio
        <TagsWrapper>
          <img src={src + "php"} />
          <img src={src + "css3"} />
          <img src={src + "wordpress"} />
        </TagsWrapper>
      </Project>

      <Project>
        <PortfolioImage>
          <a href="https://tudecidesascenza.com/delegados/" target="blank">
            <img
              src="https://cdn-almnh.nitrocdn.com/uqTEfAvxMivXUDCcPRlVTYTQnLgmRpbR/assets/static/optimized/rev-1ef56e8/wp-content/uploads/2020/07/tudecidesascenza.jpg"
              alt="Portfolio"
            />
          </a>
        </PortfolioImage>
        Ascenza Delegados
        <TagsWrapper>
          <img src={src + "php"} />
          <img src={src + "css3"} />
          <img src={src + "wordpress"} />
        </TagsWrapper>
      </Project>

      <Project>
        <PortfolioImage>
          <a href="https://tienda.galeriasdeartebarcelona.com" target="blank">
            <img
              src="https://cdn-almnh.nitrocdn.com/uqTEfAvxMivXUDCcPRlVTYTQnLgmRpbR/assets/static/optimized/rev-1ef56e8/wp-content/uploads/2020/10/port_Garte.jpg"
              alt="Portfolio"
            />
          </a>
        </PortfolioImage>
        Galerias de Arte Barcelona
        <TagsWrapper>
          <img src={src + "shopify"} />
        </TagsWrapper>
      </Project>

      <Project>
        <PortfolioImage>
          <a href="https://www.thenannypoppins.com/" target="blank">
            <img
              src="https://cdn-almnh.nitrocdn.com/uqTEfAvxMivXUDCcPRlVTYTQnLgmRpbR/assets/static/optimized/rev-1ef56e8/wp-content/uploads/2020/05/the_nanny_poppins.jpg"
              alt="Portfolio"
            />
          </a>
        </PortfolioImage>
        The nanny Poppins
        <br /> House
        <TagsWrapper>
          <img src={src + "wordpress"} />
          <img src={src + "php"} />
          <img src={src + "adobe-photoshop"} />
        </TagsWrapper>
      </Project>

      <Project>
        <PortfolioImage>
          <a href="https://www.natursite.com/" target="blank">
            <img
              src="https://cdn-almnh.nitrocdn.com/uqTEfAvxMivXUDCcPRlVTYTQnLgmRpbR/assets/static/optimized/rev-1ef56e8/wp-content/uploads/2020/07/natursite.jpg"
              alt="Portfolio"
            />
          </a>
        </PortfolioImage>
        Natursite
        <br /> House
        <TagsWrapper>
          <img src={src + "wordpress"} />
          <img src={src + "php"} />
          <img src={src + "adobe-photoshop"} />
        </TagsWrapper>
      </Project>
    </ProjectsWrapper>
  </Layout>
)

export default Portfolio

const Title = styled.h1``

const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 40px;

  @media (max-width: 760px) {
    grid-template-columns: repeat(2, auto);
    grid-gap: 20px;
  }

  @media (max-width: 360px) {
    display: block;
  }
`

const Project = styled.div`
  text-align: center;
  font-weight: 800;
  font-size: 16px;
  transition: all 0.5s;
  &:hover {
    opacity: 0.8;
  }
`
const PortfolioImage = styled.div`
  img {
    max-width: 250px;
  }
`
const TagsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(8, auto);
  img {
    max-width: 20px;
  }
`
