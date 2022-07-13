import ChannelCardData from '../../cards/channel-card/channel-card-data'

interface Navigation {
  __typename: string
  UI_typename: string
  url: string
}

interface ChannelRailData {
  title: string
  contentType: 'BROADCAST_CHANNEL'
  uiDefinitions: {
    height: number
    isVerticalCentered?: boolean
    hasMediaCover?: boolean
  }
  offerId: string
  isVideo: boolean
  playlistEnabled: boolean
  cards: ChannelCardData[]
  index: number
  navigation: Navigation
}

export default ChannelRailData
