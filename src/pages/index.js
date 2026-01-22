import React from "react"
import Display from "../components/display"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <Display />
  </Layout>
)

export default IndexPage

export const Head = () => (
  <>
    <title>Is It Snowing In Atlanta?</title>
    <meta name="description" content="The definitive source for real-time snow updates in Atlanta, Georgia." />
    <meta property="og:title" content="Is It Snowing In Atlanta?" />
    <meta property="og:type" content="website" />
  </>
)
