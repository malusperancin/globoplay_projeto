import MediaInfoData from '../../media-info/media-info-data'
import { CategoryRailData } from './category-rail-data'

type Props = {
    data: CategoryRailData
    isFocused: boolean
    onCardFocus: (info: MediaInfoData) => void
    translateY: number
  }
  const TitleRail: React.FC<Props> = ({ data, isFocused,onCardFocus,translateY}) => {
      const styles1 = {
        transform: `translateY(${translateY}px)`,
      };
    return (
        <div style={styles1}>
            <p> {data.title} </p>
        </div>
    )
  
}

export default TitleRail
