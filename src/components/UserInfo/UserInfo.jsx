
import React from 'react'
import { Follow } from 'react-twitter-widgets'

export const UserInfo = props => {
  const { userTwitter } = props.config
  const { expanded } = props
  return (
    <Follow
      username={userTwitter}
      options={{ count: expanded ? true : 'none' }}
    />
  )
}
