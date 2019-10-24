
import React, { useState } from 'react'
import ReactDisqusComments from 'react-disqus-comments'

import urljoin from 'url-join'

import config from '../../data/SiteConfig'

export const Disqus = props => {
  const [state, setState] = useState({
    toasts: []
  })

  function notifyAboutComment () {
    const toasts = state.toasts.slice()
    toasts.push({ text: 'New comment available!' })
    setState({ toasts })
  }

  const { postNode } = props
  if (!config.disqusShortname) {
    return null
  }
  const post = postNode.frontmatter
  const url = urljoin(
    config.siteUrl,
    config.pathPrefix,
    postNode.fields.slug
  )

  return (
    <ReactDisqusComments
      shortname={config.disqusShortname}
      identifier={post.title}
      title={post.title}
      url={url}
      category_id={post.category_id}
      onNewComment={() => notifyAboutComment()}
    />
  )
}
