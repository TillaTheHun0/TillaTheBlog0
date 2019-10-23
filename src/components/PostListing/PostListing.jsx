
import React from 'react'
import { Link } from 'gatsby'

import { format } from 'date-fns'

import './post-listing.scss'

export class PostListing extends React.Component {
  getPostList () {
    const postList = []
    this.props.postEdges.forEach(postEdge => {
      console.log(postEdge)
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

  render () {
    const postList = this.getPostList()
    return (
      <div className='post-listing'>
        {/* Your post list here. */
          postList.map(post => (
            <div key={post.title} className='post-row'>
              <Link to={post.path}>
                <h1>{post.title}</h1>
              </Link>
              <div className='date'>{format(new Date(post.date), this.props.config.dateFormat)}</div>
            </div>
          ))
        }
      </div>
    )
  }
}
