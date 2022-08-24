import BroadcastCardData from '../../cards/title-card/title-card-data'

interface Navigation {
  __typename: string
  UI_typename: string
  identifier: string
}

interface BroadcastRailData {
  title: string
  contentType: 'BROADCAST'
  UI_customHeight: number
  offerId: string
  isVideo: boolean
  playlistEnabled: boolean
  cards: BroadcastCardData[]
  index: number
  navigation: Navigation
}

export default BroadcastRailData
