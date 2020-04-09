import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <h1>About {data.site.siteMetadata.title}</h1>
    <p>
      I Plan to write and post blogs on this website.
      Currently, i've posted few music articles (classic pop and rock). I will be writing more of the blogs and post it frequently.
      <br></br>
      Stay Tuned and Healthy!
      <br></br><br></br>Know more about me <a style={{ color: `white` }} href="https://hardikahalpara.ml" target="_blank">here!!!</a>
    </p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
