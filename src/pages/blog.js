import React from 'react'
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = ({data}) => (
    <Layout>
        <SEO title="About Us" />
        <h1>About Us</h1>
        {data.allMarkdownRemark.edges.map(post => (
            <div key={ post.node.id }>
                <h3>{post.node.frontmatter.title}</h3>
                <small> Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
                <br />
                <br />
                <Link to={post.node.frontmatter.path}>Read more</Link>
            </div>
        ))}
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/">Back to index</Link>
    </Layout>
)

export const pageQuery = graphql`
query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            path
            title
            date
            author
          }
          excerpt
        }
      }
    }
  }
`

export default BlogPage