import React from 'react'
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => {
    return (
        <Layout>
            <SEO title="About Us" />
            <h1>About Us</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
            <Link to="/">Back to index</Link>
        </Layout>
    )
}

export default AboutPage