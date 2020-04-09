import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { css } from "@emotion/core"

export default ({ data }) => {
  return (
    <Layout>
      <div css={css`
      padding-right:10px`}>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`