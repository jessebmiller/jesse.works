import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../templates/Layout"

export default function IndexPage ({ data }) {
  console.log("data", data)
  return (
    <Layout>
      {data.teasers.nodes.map(teaser => {
        return (
          <>
            <h2>{ teaser.frontmatter.title }</h2>
            <time>{ teaser.frontmatter.date }</time>
            {
              teaser.frontmatter.type === "note"
                ? <div dangerouslySetInnerHTML={{ __html: teaser.html }} />
                : <p>{ teaser.excerpt }</p>
            }
          </>
        )
      })}
    </Layout>
  )
}

export const pageQuery = graphql`
query HomepageQuery {
  teasers: allMarkdownRemark(
    filter: {frontmatter: {type: {in: ["note", "article"]}}}
    limit: 10
    sort: {fields: frontmatter___date, order: DESC}
  ) {
    nodes {
      frontmatter {
        slug
        date(formatString: "MMMM DD, YYYY")
        title
        type
      }
      html
      excerpt
      id
    }
  }
}
`
