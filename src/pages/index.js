import React from 'react'
import Layout from '../components/Layout'
import {StaticImage} from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>This my first gatsby tutorial</p>
      <StaticImage
        alt='Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera'
        src='../images/christopher-ayme-ocZ-_Y7-Ptg-unsplash.jpg'
      />
    </Layout>
     
  )
}

export default IndexPage
