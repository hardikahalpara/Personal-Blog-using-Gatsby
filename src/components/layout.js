import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"
export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div>
      <header
        css={css`
      background-color:rgba(255, 255, 255, 0.35);
      border-radius:2px;
      margin: 0 auto;
      padding: ${rhythm(0.5)};
      `}>
        <Link to={`/`}>
          <h2
            css={css`
            margin-bottom: ${rhythm(0.3)};
            @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@800&display=swap');
            display: inline-block;
            font-family: 'Nunito', sans-serif;
            color:white;

          `}
          >
            {data.site.siteMetadata.title}
          </h2>
        </Link>
        <Link
          to={`/about/`}
          css={css`
          font-family: 'Nunito', sans-serif;
          float: right;
          color:white;
          text-decoration:none;
          font-size:20px
        `}
        >
          About
      </Link>
      </header>
      <div
        css={css`
      max-width:700px;
      margin:3rem auto;
      padding-left:1rem;`}>
        {children}
      </div>
    </div>
  )
}