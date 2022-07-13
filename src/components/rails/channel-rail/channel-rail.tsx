import ChannelRailData from './channel-rail-data'

type Props = {
    data: ChannelRailData
    isFocused: boolean
  }
  
  const ChannelRail: React.FC<Props> = ({ data, isFocused }) => {
    return (
        <div>
            <p> {data.title} </p>
            <p> channel </p>
        </div>
    )
  
}

export default ChannelRail
