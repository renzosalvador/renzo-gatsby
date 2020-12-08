import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const Contact = () => (
  <Layout>
    <SEO title="Contact Renzo Salvador | Front End Developer" />
    <Title>Contact</Title>
    <TextContent>
      Please contact me using the form below. Speak soon!
    </TextContent>
    <FormContainer></FormContainer>
  </Layout>
)

const Title = styled.h1`
  text-align: center;
  display: block;
  margin: 25px 0;
`

const TextContent = styled.p`
  text-align: center;
  display: block;
  margin: 25px 0;
`

const FormContainer = styled.div`
  max-width: 600px;
  height: 350px;
  background-color: #eee;
`

export default Contact
