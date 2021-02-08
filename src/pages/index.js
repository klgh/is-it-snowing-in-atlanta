import React from "react"
import Display from "../components/display"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h3>
      <Display />
    </h3>
  </Layout>
)

export default IndexPage
