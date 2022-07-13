import { TitleRailData } from './title-rail-data'

type Props = {
    data: TitleRailData
    isFocused: boolean
  }
  
  const TitleRail: React.FC<Props> = ({ data, isFocused }) => {
    console.log(data)
    return (
        <div>
            <p> {data.resources[0].headline} sdsa</p>
            <p> Title </p>
        </div>
    )
  
}

export default TitleRail
