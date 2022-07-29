import React from 'react'
// import { sliceText } from 'legacy/manager/utils'
import styles from './media-info-channels.module.scss'

type Props = {
  isVisible: boolean
  info: {
    headline: string
    description: string
    logo: string
  }
}

function MediaInfoChannels({ isVisible, info }: Props): React.ReactElement | null {
  return isVisible ? (
    <div className={styles.channels}>
      <img className={styles.logo} src={info.logo} alt={info.headline} />
      <p className={styles.text}>{info.description}</p>
    </div>
  ) : null
}

export default MediaInfoChannels
