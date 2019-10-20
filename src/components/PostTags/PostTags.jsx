import React, { Component } from 'react'
import { kebab } from 'case'
import { Link } from 'gatsby'

class PostTags extends Component {
  render () {
    const { tags } = this.props
    return (
      <div className='post-tag-container'>
        {tags &&
          tags.map(tag => (
            <Link
              key={tag}
              style={{ textDecoration: 'none' }}
              to={`/tags/${kebab(tag)}`}
            >
              <button type='button'>{tag}</button>
            </Link>
          ))}
      </div>
    )
  }
}

export default PostTags
