
import React from 'react'

import { kebab } from 'case'
import { Link } from 'gatsby'

export const PostTags = props => {
  const { tags } = props
  return (
    <div>
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
