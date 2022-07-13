type HighlightCardData = {
  UI_number: number
  backgroundUrl: string
  posterUrl: string
  headline: string
  displayName?: string
  id: string
  navigation: {
    [key: string]: unknown
  }
}

type Navigation = {
  __typename: string
  UI_typename: string
  url: string
  identifier?: string
  slug?: string
}

export type HighlightRailData = {
  title: string
  contentType: 'OFFERHIGHLIGHT'
  uiDefinitions: {
    height: number
    isVerticalCentered?: boolean
    hasMediaCover?: boolean
  }
  offerId: string
  isVideo: boolean
  playlistEnabled: boolean
  cards: HighlightCardData[]
  index: number
  navigation: Navigation
}
