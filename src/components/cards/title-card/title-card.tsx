import { ReactElement, useEffect } from 'react'
import TitleCardData from './title-card-data'
import style from './style.module.scss'
import useNavigation from '../navigation/use-navigation'

type Props = {
  data: TitleCardData
  isFocus: boolean
  translate: number
}

const TitleCard = ({
data,
isFocus,
translate,

}: Props): ReactElement => {

  const key = useNavigation()

  useEffect(() =>{
    if(key === "ENTER" && isFocus){
      var selectedData : TitleCardData = data 
      console.log(selectedData)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[key])

  const styles = { 
    transform: `translate(${translate}px)` 
};

  return (
    <button style={styles} className={ isFocus ? style.buttonFocus : style.button} type="button">
        <img className={style.image} src={data.poster.tv} alt="oi"></img>
    </button>
  )
}

export default TitleCard
