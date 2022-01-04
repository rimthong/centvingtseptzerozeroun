import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Bonjour</h1>
    <p>Bienvenue à CentVingSeptZeroZeroUn, le home de la techno franco.</p>
    <p>Ou du moins, un projet quelconque à venir!</p>
  </Layout>
)

export default IndexPage
