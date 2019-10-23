
import React from 'react'
import { Link } from 'gatsby'

import { format } from 'date-fns'

import './post-listing.scss'

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
    <div className='post-listing'>
      {/* Your post list here. */
        postList.map(post => (
          <div key={post.title} className='post-row'>
            <Link to={post.path}>
              <h1>{post.title}</h1>
            </Link>
            <div className='date'>{format(new Date(post.date), props.config.dateFormat)}</div>
          </div>
        ))
      }
    </div>
  )
}
