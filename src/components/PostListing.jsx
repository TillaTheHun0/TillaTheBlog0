
import React from 'react'

import styled from '@emotion/styled'

import { Link } from 'gatsby'

import { format } from 'date-fns'

const PostListingRow = styled.div`
  display: flex;
  align-items: center;
`

const PostListingRowDate = styled.div`
  margin-left: 10px;
  color: grey;
`

export const PostListing = props => {
  const getPostList = () => {
    const postList = []
    props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      })
    })
    return postList
  }

  const postList = getPostList()

  return (
    <div>
      {/* Your post list here. */
        postList.map(post => (
          <PostListingRow key={post.title}>
            <Link to={post.path}>
              <h1>{post.title}</h1>
            </Link>
            <PostListingRowDate>{format(new Date(post.date), props.config.dateFormat)}</PostListingRowDate>
          </PostListingRow>
        ))
      }
    </div>
  )
}
