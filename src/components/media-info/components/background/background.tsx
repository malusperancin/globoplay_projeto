import React, { useEffect, useState } from 'react'
import styles from './style.module.scss'
import BackgroundGradients from '../background-gradients/background-gradients'

type Props = {
  url: string
}

const Background: React.FC<Props> = ({  url }) => {
  const [activeImageUrl, setActiveImageUrl] = useState('')
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
      setActiveImageUrl(url)
  }, [url])

  return (
    <>
      <img
        src={activeImageUrl}
        alt="background"
        className={`
        ${styles.background}
        ${animating ? styles.hidden : styles.visible}
        `}
        onLoad={() => setAnimating(false)}
      />
      <BackgroundGradients />
    </>
  )
}

export default Background
