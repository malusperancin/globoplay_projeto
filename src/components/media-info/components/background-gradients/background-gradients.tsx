import React from 'react'
import gradientVerticalSmallFHD from './assets/gradient-vertical-small-fhd.png'
import gradientHorizontalSmallFHD from './assets/gradient-horizontal-small-fhd.png'
import styles from './background-gradients.module.scss'

const BackgroundGradients: React.FC = () => {
  return (
        <>
          <img
            src={gradientHorizontalSmallFHD}
            alt="horizontal gradient"
            className={styles.horizontalGradient}
          />
          <img
            src={gradientVerticalSmallFHD}
            alt="vertical gradient"
            className={styles.verticalGradient}
          />
        </>

  )
}

export default BackgroundGradients
