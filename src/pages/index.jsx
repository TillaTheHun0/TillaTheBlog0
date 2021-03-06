
import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import { MainLayout as Layout } from '../layout'
import { PostListing } from '../components/PostListing'
import { SEO } from '../components/SEO'
import config from '../../data/SiteConfig'

export const Index = props => {
  const postEdges = props.data.allMarkdownRemark.edges
  return (
    <Layout>
      <div className='index-container'>
        <Helmet title={config.siteTitle} />
        <SEO /> {/* eslint-disable-line */}
        <PostListing postEdges={postEdges} config={config} />
      </div>
    </Layout>
  )
}

export default Index

/* eslint no-undef: 'off' */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`
