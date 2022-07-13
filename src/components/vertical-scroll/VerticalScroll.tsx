import React from 'react'
import { RailData } from './Types'


type Props = {
  isFocused: boolean
  mediaInfoHeight: number
  onCardFocus: Function
  rails: []
}

const VerticalScroll: React.FC<Props> = ({
  isFocused,
  mediaInfoHeight,
  onCardFocus,
  rails,
}) => {

  const renderRails = () => {
    const allRails = rails as RailData[]
    allRails.map((i) => {
      switch (i.contentType) {
        case 'CATEGORY':
            return <CategoryRail />
          case 'BROADCAST_CHANNEL':
            return <ChannelRail />
          case 'OFFERHIGHLIGHT':
            return <OfHighlightRail />
          case 'TITLE':
            return <TitleRail />
      }
    return null
    })
}
 

  return (
    <div>
      {renderRails()}
    </div>
  )
}

export default VerticalScroll


