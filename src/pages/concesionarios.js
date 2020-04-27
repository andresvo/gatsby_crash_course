import React from 'react'
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ConcesionariosPage = ({data}) => (
    <Layout>
        <SEO title="About Us" />
        <h1>Concesionarios</h1>
        {data.allWordpressWpConcesionario.nodes.map(post => (
            <div key={ post.id }>
                <h3>{post.title}</h3>
            </div>
        ))}
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/">Back to index</Link>
    </Layout>
)

export const pageQuery = graphql`
query ConcesionariosQuery {
    allWordpressWpConcesionario {
      nodes {
        title
        id
      }
    }
  }
  
`

export default ConcesionariosPage