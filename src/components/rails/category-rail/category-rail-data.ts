import CategoryCardData from '../../cards/category-card/category-card-data'

type Navigation = {
  __typename: string
  UI_typename: string
  url: string
  identifier?: string
  slug?: string
}

export type CategoryRailData = {
  title: string
  contentType: 'CATEGORY'
  uiDefinitions: {
    height: number
    isVerticalCentered?: boolean
    hasMediaCover?: boolean
  }
  offerId: string
  isVideo: boolean
  playlistEnabled: boolean
  cards: CategoryCardData[]
  index: number
  navigation: Navigation
}
