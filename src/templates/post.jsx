
import React from 'react'
import Helmet from 'react-helmet'

import styled from '@emotion/styled'

import { graphql } from 'gatsby'

import { format } from 'date-fns'

import { MainLayout as Layout } from '../layout'
import { UserInfo } from '../components/UserInfo'
import { Disqus } from '../components/Disqus'
import { PostTags } from '../components/PostTags'
import { SocialLinks } from '../components/SocialLinks'
import { SEO } from '../components/SEO'
import config from '../../data/SiteConfig'

import { GlobalPostStyles } from './styles'

const PostHeader = styled.div`
  display: flex;
  align-items: center;
`

const PostHeaderDate = styled.div`
  margin-left: 10px;
  color: grey;
`

const PostMeta = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export default class PostTemplate extends React.Component {
  render () {
    const { data, pageContext } = this.props
    const { slug } = pageContext
    const postNode = data.markdownRemark
    const post = postNode.frontmatter
    if (!post.id) {
      post.id = slug
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID
    }

    return (
      <Layout>
        <GlobalPostStyles />
        <div>
          <Helmet>
            <title>{`${post.title} | ${config.siteTitle}`}</title>
          </Helmet>
          <SEO postPath={slug} postNode={postNode} postSEO /> {/* eslint-disable-line */}
          <div>
            <PostHeader>
              <h1>{post.title}</h1>
              <PostHeaderDate className='date'>{format(new Date(post.date), config.dateFormat)}</PostHeaderDate>
            </PostHeader>
            <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
            <PostMeta>
              <PostTags tags={post.tags} />
              <SocialLinks postPath={slug} postNode={postNode} />
            </PostMeta>
            {config.userTwitter && <UserInfo config={config} />}
            <Disqus postNode={postNode} />
          </div>
        </div>
      </Layout>
    )
  }
}

/* eslint no-undef: 'off' */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
        tags
      }
      fields {
        slug
        date
      }
    }
  }
`
