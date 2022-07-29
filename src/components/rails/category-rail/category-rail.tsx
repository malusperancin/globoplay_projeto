import MediaInfoData from '../../media-info/media-info-data'
import { CategoryRailData } from './category-rail-data'

type Props = {
    data: CategoryRailData
    isFocused: boolean
    onCardFocus: (info: MediaInfoData) => void
  }
  
  const TitleRail: React.FC<Props> = ({ data, isFocused,onCardFocus}) => {
    return (
        <div>
            <p> {data.title} </p>
        </div>
    )
  
}

export default TitleRail
