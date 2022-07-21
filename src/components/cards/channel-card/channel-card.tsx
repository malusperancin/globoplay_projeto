import React, { ReactElement } from 'react'
import ChannelCardData from './channel-card-data'
import style from './style.module.scss'

type Props = {
  data: ChannelCardData
  isFocus: boolean
  translate: number
}

const TitleCard = ({
data,
isFocus,
translate
}: Props): ReactElement => {
  const styles = { 
    transform: `translate(${translate}px)` 
};

  const image = !isFocus ? data.logo : data.logoSelected

  
  return (
    <button style={styles} className={ isFocus ? style.buttonFocus : style.button} type="button">
        <img className={style.image} src={ image } alt="oi"></img>
    </button>
  )
}

export default TitleCard
