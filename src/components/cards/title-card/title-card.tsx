import React, { ReactElement } from 'react'
import TitleCardData from './title-card-data'
import style from './style.module.scss'

type Props = {
  data: TitleCardData
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

  return (
    <button style={styles} className={ isFocus ? style.buttonFocus : style.button} type="button">
        <img src={data.poster.tv} alt="oi"></img>
    </button>
  )
}

export default TitleCard
