import React, { ReactElement } from 'react'

import TitleCardData from './title-card-data'
import styles from './title-card.module.scss'

type Props = {
  posterUrl: string
  headline: string
  isFocused: boolean
  isImageLoaded: boolean
  // onEnter: (item: TitleCardData, index: number) => void
  onMouseEnter?: (item: TitleCardData, index: number) => void
  onMouseLeave?: () => void
  onImageLoaded?: () => void
  onErrorLoadImage?: () => void
}

const TitleCard = ({
  posterUrl,
  headline,
  isFocused,
  isImageLoaded,
  // onEnter,
  onImageLoaded,
  onErrorLoadImage,
}: Props): ReactElement => {
  return (
    <button type="button">
        <img
          className={`${styles.posterUrl} ${isFocused ? styles.focused : ''}`}
          src={posterUrl}
          alt={headline}
          onLoad={onImageLoaded}
          onError={onErrorLoadImage}
        />
    </button>
  )
}

export default TitleCard
