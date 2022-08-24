import React, { ReactElement } from 'react'

import styles from './media-info-broadcast.module.scss'

type Props = {
  isVisible: boolean
  info: {
    headline: string
    broadcast: {
      channel: {
        name: string
      }
    }
  }
}

function MediaInfoBroadcast({ isVisible, info: { headline, broadcast } }: Props): ReactElement {
  const channelName = broadcast?.channel?.name || ''

  return isVisible ? (
    <div className={styles.mediaInfoBroadcast}>
      <span className={styles.channelName}>{channelName}</span>
      <h1 className={styles.headline}>{headline}</h1>
    </div>
  ) : (
    <></>
  )
}

export default MediaInfoBroadcast
