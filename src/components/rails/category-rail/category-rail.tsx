import { CategoryRailData } from './category-rail-data'

type Props = {
    data: CategoryRailData
    isFocused: boolean
  }
  
  const TitleRail: React.FC<Props> = ({ data, isFocused }) => {
    return (
        <div>
            <p> {data.title} </p>
        </div>
    )
  
}

export default TitleRail
